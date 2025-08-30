export interface GameResource {
  id: string;
  name: string;
  type: "config" | "assets" | "data" | "package";
  url: string;
  size: number;
  priority: "low" | "medium" | "high";
  required: boolean;
  description?: string;
  version?: string;
}

export interface DownloadProgress {
  resourceId: string;
  loaded: number;
  total: number;
  percentage: number;
  progress: number;
  status: "pending" | "downloading" | "completed" | "error";
  error?: string;
}

export interface DownloadManager {
  downloadResource(resource: GameResource): Promise<Blob>;
  downloadMultipleResources(resources: GameResource[]): Promise<void>;
  downloadProviderPackage(providerId: string): Promise<Blob>;
  getProgress(resourceId: string): DownloadProgress | null;
  getAllProgress(): DownloadProgress[];
  getProviderResources(providerId: string): GameResource[];
  onProgress(callback: (progress: DownloadProgress[]) => void): void;
  removeProgressCallback(
    callback: (progress: DownloadProgress[]) => void
  ): void;
  cancelDownload(resourceId: string): void;
  clearCompleted(): void;
  formatFileSize(bytes: number): string;
  getFileExtension(resource: GameResource): string;
  saveAsFile(blob: Blob, filename: string): void;
}

class GameResourceDownloader implements DownloadManager {
  private downloads: Map<string, DownloadProgress> = new Map();
  private abortControllers: Map<string, AbortController> = new Map();

  async downloadResource(resource: GameResource): Promise<Blob> {
    const progress: DownloadProgress = {
      resourceId: resource.id,
      loaded: 0,
      total: resource.size,
      percentage: 0,
      progress: 0,
      status: "pending",
    };

    this.downloads.set(resource.id, progress);

    const abortController = new AbortController();
    this.abortControllers.set(resource.id, abortController);

    try {
      progress.status = "downloading";

      const response = await fetch(resource.url, {
        signal: abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No response body");
      }

      const contentLength = response.headers.get("content-length");
      const total = contentLength ? parseInt(contentLength, 10) : resource.size;

      progress.total = total;

      const chunks: Uint8Array[] = [];
      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        chunks.push(value);
        progress.loaded += value.length;
        progress.percentage = Math.round(
          (progress.loaded / progress.total) * 100
        );
        progress.progress = progress.percentage;
      }

      progress.status = "completed";
      progress.percentage = 100;
      progress.progress = 100;

      return new Blob(chunks);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        progress.status = "pending";
      } else {
        progress.status = "error";
        progress.error =
          error instanceof Error ? error.message : "Unknown error";
      }
      throw error;
    } finally {
      this.abortControllers.delete(resource.id);
    }
  }

  async downloadMultipleResources(resources: GameResource[]): Promise<void> {
    const promises = resources.map((resource) =>
      this.downloadResource(resource)
    );
    await Promise.allSettled(promises);
  }

  getProgress(resourceId: string): DownloadProgress | null {
    return this.downloads.get(resourceId) || null;
  }

  getAllProgress(): DownloadProgress[] {
    return Array.from(this.downloads.values());
  }

  cancelDownload(resourceId: string): void {
    const abortController = this.abortControllers.get(resourceId);
    if (abortController) {
      abortController.abort();
    }
  }

  clearCompleted(): void {
    for (const [resourceId, progress] of this.downloads.entries()) {
      if (progress.status === "completed") {
        this.downloads.delete(resourceId);
      }
    }
  }

  async downloadProviderPackage(providerId: string): Promise<Blob> {
    const resources = this.getProviderResources(providerId);
    const packageData = {
      providerId,
      resources,
      timestamp: new Date().toISOString(),
    };
    return new Blob([JSON.stringify(packageData, null, 2)], {
      type: "application/json",
    });
  }

  getProviderResources(providerId: string): GameResource[] {
    // Mock data - in real implementation, this would fetch from API
    return [
      {
        id: `${providerId}-config`,
        name: "Cấu hình game",
        type: "config",
        url: `/api/resources/${providerId}/config`,
        size: 1024 * 50,
        priority: "high",
        required: true,
        description: "Cấu hình cơ bản cho game",
        version: "1.0.0",
      },
      {
        id: `${providerId}-assets`,
        name: "Tài nguyên đồ họa",
        type: "assets",
        url: `/api/resources/${providerId}/assets`,
        size: 1024 * 1024 * 10,
        priority: "medium",
        required: true,
        description: "Hình ảnh và âm thanh",
        version: "1.0.0",
      },
      {
        id: `${providerId}-data`,
        name: "Dữ liệu game",
        type: "data",
        url: `/api/resources/${providerId}/data`,
        size: 1024 * 1024 * 2,
        priority: "medium",
        required: false,
        description: "Dữ liệu bổ sung",
        version: "1.0.0",
      },
    ];
  }

  private progressCallbacks: Set<(progress: DownloadProgress[]) => void> =
    new Set();

  onProgress(callback: (progress: DownloadProgress[]) => void): void {
    this.progressCallbacks.add(callback);
  }

  removeProgressCallback(
    callback: (progress: DownloadProgress[]) => void
  ): void {
    this.progressCallbacks.delete(callback);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  getFileExtension(resource: GameResource): string {
    switch (resource.type) {
      case "config":
        return ".json";
      case "assets":
        return ".zip";
      case "data":
        return ".dat";
      case "package":
        return ".pkg";
      default:
        return ".bin";
    }
  }

  saveAsFile(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// Export singleton instance
export const gameResourceDownloader = new GameResourceDownloader();

// Export utility functions
export const createResource = (
  id: string,
  name: string,
  type: GameResource["type"],
  url: string,
  size: number,
  priority: GameResource["priority"] = "medium",
  required: boolean = false
): GameResource => ({
  id,
  name,
  type,
  url,
  size,
  priority,
  required,
});

export const estimateDownloadTime = (
  size: number,
  speed: number = 1024 * 1024
): number => {
  return Math.ceil(size / speed);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
