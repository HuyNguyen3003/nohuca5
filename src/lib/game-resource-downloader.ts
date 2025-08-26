/**
 * Game Resource Download Utilities
 * Handles downloading game assets, configurations, and resources
 */

export interface GameResource {
  id: string;
  name: string;
  type: "config" | "assets" | "data" | "package";
  size: number; // in bytes
  url?: string;
  description: string;
  version: string;
}

export interface DownloadProgress {
  resourceId: string;
  progress: number; // 0-100
  status: "pending" | "downloading" | "completed" | "error";
  error?: string;
}

// Mock game resources for each provider
const providerResources: Record<string, GameResource[]> = {
  f168: [
    {
      id: "f168-config",
      name: "F168 Game Configuration",
      type: "config",
      size: 2048,
      description: "Game configuration and settings",
      version: "1.0.0",
    },
    {
      id: "f168-assets",
      name: "F168 Game Assets",
      type: "assets",
      size: 15728640, // 15MB
      description: "Images, sounds, and visual assets",
      version: "1.0.0",
    },
    {
      id: "f168-data",
      name: "F168 Game Data",
      type: "data",
      size: 5242880, // 5MB
      description: "Game data and rules",
      version: "1.0.0",
    },
  ],
  qq88: [
    {
      id: "qq88-config",
      name: "QQ88 Game Configuration",
      type: "config",
      size: 1024,
      description: "Game configuration and settings",
      version: "2.1.0",
    },
    {
      id: "qq88-assets",
      name: "QQ88 Game Assets",
      type: "assets",
      size: 12582912, // 12MB
      description: "Images, sounds, and visual assets",
      version: "2.1.0",
    },
  ],
  jun88: [
    {
      id: "jun88-package",
      name: "Jun88 Complete Package",
      type: "package",
      size: 31457280, // 30MB
      description: "Complete game package with all resources",
      version: "3.0.0",
    },
  ],
  // Add more providers as needed
};

export class GameResourceDownloader {
  private downloadQueue: GameResource[] = [];
  private activeDownloads: Map<string, DownloadProgress> = new Map();
  private progressCallbacks: ((progress: DownloadProgress[]) => void)[] = [];

  /**
   * Get available resources for a game provider
   */
  getProviderResources(providerId: string): GameResource[] {
    return providerResources[providerId] || [];
  }

  /**
   * Add a progress callback
   */
  onProgress(callback: (progress: DownloadProgress[]) => void) {
    this.progressCallbacks.push(callback);
  }

  /**
   * Remove a progress callback
   */
  removeProgressCallback(callback: (progress: DownloadProgress[]) => void) {
    const index = this.progressCallbacks.indexOf(callback);
    if (index > -1) {
      this.progressCallbacks.splice(index, 1);
    }
  }

  /**
   * Notify all progress callbacks
   */
  private notifyProgress() {
    const progress = Array.from(this.activeDownloads.values());
    this.progressCallbacks.forEach((callback) => callback(progress));
  }

  /**
   * Download a single resource
   */
  async downloadResource(resource: GameResource): Promise<Blob> {
    const progress: DownloadProgress = {
      resourceId: resource.id,
      progress: 0,
      status: "downloading",
    };

    this.activeDownloads.set(resource.id, progress);
    this.notifyProgress();

    try {
      // Simulate download with progress
      await this.simulateDownload(resource, progress);

      // Create mock file content
      const content = this.generateResourceContent(resource);
      const blob = new Blob([content], {
        type: this.getContentType(resource.type),
      });

      progress.status = "completed";
      progress.progress = 100;
      this.notifyProgress();

      return blob;
    } catch (error) {
      progress.status = "error";
      progress.error =
        error instanceof Error ? error.message : "Download failed";
      this.notifyProgress();
      throw error;
    } finally {
      // Clean up after a delay
      setTimeout(() => {
        this.activeDownloads.delete(resource.id);
        this.notifyProgress();
      }, 2000);
    }
  }

  /**
   * Download multiple resources
   */
  async downloadProviderResources(providerId: string): Promise<Blob[]> {
    const resources = this.getProviderResources(providerId);
    if (resources.length === 0) {
      throw new Error(`No resources found for provider: ${providerId}`);
    }

    const downloads = resources.map((resource) =>
      this.downloadResource(resource)
    );
    return Promise.all(downloads);
  }

  /**
   * Download resources as a ZIP file (mock implementation)
   */
  async downloadProviderPackage(providerId: string): Promise<Blob> {
    const resources = this.getProviderResources(providerId);

    if (resources.length === 0) {
      throw new Error(`No resources found for provider: ${providerId}`);
    }

    // Create package info
    const packageInfo = {
      provider: providerId,
      timestamp: new Date().toISOString(),
      resources: resources.map((r) => ({
        id: r.id,
        name: r.name,
        type: r.type,
        size: r.size,
        version: r.version,
      })),
      totalSize: resources.reduce((sum, r) => sum + r.size, 0),
    };

    // Simulate package creation
    const progress: DownloadProgress = {
      resourceId: `${providerId}-package`,
      progress: 0,
      status: "downloading",
    };

    this.activeDownloads.set(`${providerId}-package`, progress);
    this.notifyProgress();

    try {
      // Simulate packaging process
      for (let i = 0; i <= 100; i += 10) {
        progress.progress = i;
        this.notifyProgress();
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      const content = JSON.stringify(packageInfo, null, 2);
      const blob = new Blob([content], { type: "application/json" });

      progress.status = "completed";
      progress.progress = 100;
      this.notifyProgress();

      return blob;
    } catch (error) {
      progress.status = "error";
      progress.error =
        error instanceof Error ? error.message : "Package creation failed";
      this.notifyProgress();
      throw error;
    }
  }

  /**
   * Save blob as file download
   */
  saveAsFile(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Simulate download progress
   */
  private async simulateDownload(
    resource: GameResource,
    progress: DownloadProgress
  ) {
    const chunkSize = Math.max(1, Math.floor(resource.size / 100));
    let downloaded = 0;

    while (downloaded < resource.size) {
      await new Promise((resolve) =>
        setTimeout(resolve, 50 + Math.random() * 100)
      );
      downloaded = Math.min(
        downloaded + chunkSize + Math.random() * chunkSize,
        resource.size
      );
      progress.progress = Math.floor((downloaded / resource.size) * 100);
      this.notifyProgress();
    }
  }

  /**
   * Generate mock resource content
   */
  private generateResourceContent(resource: GameResource): string {
    const timestamp = new Date().toISOString();

    switch (resource.type) {
      case "config":
        return JSON.stringify(
          {
            name: resource.name,
            version: resource.version,
            type: resource.type,
            timestamp,
            config: {
              gameSettings: {
                maxBet: 10000,
                minBet: 100,
                rtp: 95.5,
                volatility: "medium",
              },
              ui: {
                theme: "dark",
                language: "vi",
                currency: "VND",
              },
            },
          },
          null,
          2
        );

      case "assets":
        return `# Game Assets - ${resource.name}
Version: ${resource.version}
Generated: ${timestamp}

## Asset List:
- backgrounds/main-bg.jpg (2.5MB)
- sprites/symbols/*.png (5.2MB)
- sounds/spin.mp3 (1.1MB)
- sounds/win.mp3 (0.8MB)
- animations/bonus.json (0.3MB)
- fonts/game-font.ttf (0.9MB)

Total Assets: ${(resource.size / (1024 * 1024)).toFixed(1)}MB
`;

      case "data":
        return JSON.stringify(
          {
            name: resource.name,
            version: resource.version,
            timestamp,
            gameData: {
              paylines: Array.from({ length: 25 }, (_, i) => ({
                id: i + 1,
                pattern: Array.from({ length: 5 }, () =>
                  Math.floor(Math.random() * 3)
                ),
              })),
              symbols: [
                { id: "wild", name: "Wild", multiplier: 2 },
                { id: "scatter", name: "Scatter", bonus: true },
                {
                  id: "high1",
                  name: "High Symbol 1",
                  payout: [0, 0, 5, 25, 100],
                },
                {
                  id: "high2",
                  name: "High Symbol 2",
                  payout: [0, 0, 5, 20, 75],
                },
                { id: "mid1", name: "Mid Symbol 1", payout: [0, 0, 3, 15, 50] },
              ],
            },
          },
          null,
          2
        );

      case "package":
        return JSON.stringify(
          {
            name: resource.name,
            version: resource.version,
            timestamp,
            package: {
              description: resource.description,
              contents: [
                "config.json",
                "assets.zip",
                "gamedata.json",
                "readme.txt",
              ],
              installation: "Extract all files to game directory",
              requirements: "Minimum 50MB free space",
            },
          },
          null,
          2
        );

      default:
        return `Resource: ${resource.name}\nType: ${resource.type}\nVersion: ${resource.version}\nGenerated: ${timestamp}`;
    }
  }

  /**
   * Get content type for resource
   */
  private getContentType(type: GameResource["type"]): string {
    switch (type) {
      case "config":
      case "data":
      case "package":
        return "application/json";
      case "assets":
        return "application/zip";
      default:
        return "text/plain";
    }
  }

  /**
   * Get file extension for resource
   */
  getFileExtension(resource: GameResource): string {
    switch (resource.type) {
      case "config":
        return ".json";
      case "data":
        return ".json";
      case "assets":
        return ".zip";
      case "package":
        return ".zip";
      default:
        return ".txt";
    }
  }

  /**
   * Format file size
   */
  formatFileSize(bytes: number): string {
    const units = ["B", "KB", "MB", "GB"];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(1)} ${units[unitIndex]}`;
  }
}

// Export singleton instance
export const gameResourceDownloader = new GameResourceDownloader();
