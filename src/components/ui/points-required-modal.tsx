import React from "react";
import { Button } from "@/components/ui/button";

interface PointsRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PointsRequiredModal({
  isOpen,
  onClose,
}: PointsRequiredModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white text-center mb-2">
          Cần nạp điểm
        </h2>

        {/* Message */}
        <p className="text-gray-300 text-center mb-6 leading-relaxed">
          Bạn cần phải nạp điểm để sử dụng dịch vụ này.
          <br />
          <span className="text-yellow-400 font-semibold">
            Xin hãy liên hệ admin để nạp điểm!
          </span>
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <Button
            onClick={onClose}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Đóng
          </Button>
          <Button
            onClick={() => {
              // Có thể thêm logic liên hệ admin ở đây
              onClose();
            }}
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
          >
            Hiểu rồi
          </Button>
        </div>
      </div>
    </div>
  );
}
