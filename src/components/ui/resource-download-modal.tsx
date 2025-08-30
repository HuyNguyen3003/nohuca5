"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Download,
  CheckCircle,
  AlertCircle,
  FileText,
  Package,
  Database,
  Image as ImageIcon,
} from "lucide-react";
import { GamingButton } from "@/components/ui/gaming-button";
import { GamingCard } from "@/components/ui/gaming-card";
import {
  gameResourceDownloader,
  type GameResource,
  type DownloadProgress,
} from "@/lib/game-resource-downloader";

interface ResourceDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  providerId: string;
  providerName: string;
}

const getResourceIcon = (type: GameResource["type"]) => {
  switch (type) {
    case "config":
      return <FileText className="w-4 h-4" />;
    case "assets":
      return <ImageIcon className="w-4 h-4" aria-hidden="true" />;
    case "data":
      return <Database className="w-4 h-4" />;
    case "package":
      return <Package className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

const getStatusIcon = (status: DownloadProgress["status"]) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-4 h-4 text-green-400" />;
    case "error":
      return <AlertCircle className="w-4 h-4 text-red-400" />;
    case "downloading":
      return <Download className="w-4 h-4 text-blue-400 animate-bounce" />;
    default:
      return <Download className="w-4 h-4 text-gray-400" />;
  }
};

export function ResourceDownloadModal({
  isOpen,
  onClose,
  providerId,
  providerName,
}: ResourceDownloadModalProps) {
  const [resources, setResources] = useState<GameResource[]>([]);
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress[]>(
    []
  );
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const providerResources =
        gameResourceDownloader.getProviderResources(providerId);
      setResources(providerResources);

      // Setup progress callback
      gameResourceDownloader.onProgress(setDownloadProgress);

      return () => {
        gameResourceDownloader.removeProgressCallback(setDownloadProgress);
      };
    }
  }, [isOpen, providerId]);

  const handleDownloadResource = async (resource: GameResource) => {
    try {
      setIsDownloading(true);
      const blob = await gameResourceDownloader.downloadResource(resource);
      const filename = `${resource.name.replace(
        /\s+/g,
        "_"
      )}${gameResourceDownloader.getFileExtension(resource)}`;
      gameResourceDownloader.saveAsFile(blob, filename);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadAll = async () => {
    if (resources.length === 0) return;

    try {
      setIsDownloading(true);
      const blob = await gameResourceDownloader.downloadProviderPackage(
        providerId
      );
      const filename = `${providerName}_Complete_Package.json`;
      gameResourceDownloader.saveAsFile(blob, filename);
    } catch (error) {
      console.error("Package download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const getResourceProgress = (
    resourceId: string
  ): DownloadProgress | undefined => {
    return downloadProgress.find((p) => p.resourceId === resourceId);
  };

  const totalSize = resources.reduce((sum, r) => sum + r.size, 0);
  const completedDownloads = downloadProgress.filter(
    (p) => p.status === "completed"
  ).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <GamingCard className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary/20">
            <div>
              <h2 className="text-2xl font-bold text-primary">
                Tải Tài Nguyên Game
              </h2>
              <p className="text-muted-foreground">
                {providerName} - {resources.length} tài nguyên có sẵn
              </p>
            </div>
            <GamingButton
              variant="ghost"
              size="icon"
              onClick={onClose}
              disabled={isDownloading}
            >
              <X className="w-4 h-4" />
            </GamingButton>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {resources.length === 0 ? (
              <div className="text-center py-12">
                <Package
                  className="w-16 h-16 text-muted-foreground mx-auto mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Không có tài nguyên
                </h3>
                <p className="text-muted-foreground">
                  Không tìm thấy tài nguyên cho nhà cung cấp này
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Download All Button */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Tổng dung lượng:{" "}
                      {gameResourceDownloader.formatFileSize(totalSize)}
                    </p>
                    {downloadProgress.length > 0 && (
                      <p className="text-sm text-primary">
                        Đã hoàn thành: {completedDownloads}/{resources.length}
                      </p>
                    )}
                  </div>
                  <GamingButton
                    variant="gold"
                    onClick={handleDownloadAll}
                    disabled={isDownloading}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Tải Tất Cả
                  </GamingButton>
                </div>

                {/* Resource List */}
                <div className="grid gap-4">
                  {resources.map((resource) => {
                    const progress = getResourceProgress(resource.id);

                    return (
                      <div
                        key={resource.id}
                        className="bg-gaming-card border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                              {getResourceIcon(resource.type)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">
                                {resource.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {resource.description}
                              </p>
                              <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                                <span>Phiên bản: {resource.version}</span>
                                <span>
                                  Dung lượng:{" "}
                                  {gameResourceDownloader.formatFileSize(
                                    resource.size
                                  )}
                                </span>
                                <span className="capitalize">
                                  Loại: {resource.type}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {progress && getStatusIcon(progress.status)}
                            <GamingButton
                              variant="outline"
                              size="sm"
                              onClick={() => handleDownloadResource(resource)}
                              disabled={
                                isDownloading ||
                                progress?.status === "downloading"
                              }
                              className="flex items-center gap-2"
                            >
                              {progress?.status === "completed" ? (
                                <>
                                  <CheckCircle className="w-3 h-3" />
                                  Hoàn thành
                                </>
                              ) : progress?.status === "downloading" ? (
                                <>
                                  <Download className="w-3 h-3 animate-bounce" />
                                  Đang tải...
                                </>
                              ) : (
                                <>
                                  <Download className="w-3 h-3" />
                                  Tải về
                                </>
                              )}
                            </GamingButton>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        {progress && progress.status === "downloading" && (
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">
                                Tiến độ
                              </span>
                              <span className="text-primary">
                                {progress.progress}%
                              </span>
                            </div>
                            <div className="w-full bg-gaming-dark rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-primary to-yellow-400 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress.progress}%` }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Error Message */}
                        {progress?.status === "error" && progress.error && (
                          <div className="mt-3 p-2 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-400">
                            Lỗi: {progress.error}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-primary/20 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                💡 Tài nguyên được tải về sẽ chứa cấu hình game, assets và dữ
                liệu cần thiết
              </p>
              <GamingButton
                variant="ghost"
                onClick={onClose}
                disabled={isDownloading}
              >
                Đóng
              </GamingButton>
            </div>
          </div>
        </div>
      </GamingCard>
    </div>
  );
}
