"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { GamingCard, GamingCardWithCorners } from "@/components/ui/gaming-card";
import { GamingButton } from "@/components/ui/gaming-button";
import { ArrowLeft, TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

interface GamePlayScreenProps {
  roomName?: string;
  onBack?: () => void;
}

export function GamePlayScreen({
  roomName = "PHÒNG VIP 1",
  onBack,
}: GamePlayScreenProps) {
  const [timeLeft, setTimeLeft] = useState(941); // 15:41 in seconds
  const [prediction, setPrediction] = useState<"up" | "down" | null>(null);
  const [betAmount, setBetAmount] = useState(1000);
  const [balance, setBalance] = useState(1234567);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePrediction = (type: "up" | "down") => {
    setPrediction(type);
  };

  const handlePlaceBet = () => {
    if (prediction && betAmount <= balance) {
      setBalance((prev) => prev - betAmount);
      // Add betting logic here
      alert(
        `Đặt cược ${
          prediction === "up" ? "TĂNG" : "GIẢM"
        } với số tiền ${betAmount.toLocaleString()} VND`
      );
    }
  };

  // Mock chart data
  const chartData = Array.from({ length: 50 }, (_, i) => ({
    time: i,
    value: 50 + Math.sin(i * 0.3) * 20 + Math.random() * 10,
  }));

  return (
    <div className="min-h-screen bg-gaming-bg">
      {/* Header */}
      <header className="border-b-2 border-primary/30 bg-gaming-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <GamingButton variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </GamingButton>
              <div>
                <h1 className="text-lg font-bold text-primary">{roomName}</h1>
                <p className="text-sm text-muted-foreground">AI PREDICTION</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">Số dư</p>
              <p className="text-lg font-bold text-primary">
                {balance.toLocaleString()} VND
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-24 space-y-6">
        {/* Countdown Timer */}
        <GamingCardWithCorners variant="prediction" className="text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              THỜI GIAN DỰ ĐOÁN
            </h2>
            <div className="text-6xl font-bold text-primary font-mono">
              {formatTime(timeLeft)}
            </div>
            <p className="text-muted-foreground">
              Hãy đưa ra dự đoán của bạn trước khi hết thời gian
            </p>
          </div>
        </GamingCardWithCorners>

        {/* Chart Area */}
        <GamingCard variant="default" className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                BIỂU ĐỒ GIÁ TRỊ
              </h3>
              <div className="text-2xl font-bold text-primary">9.4/10</div>
            </div>

            {/* Simple Chart Visualization */}
            <div className="h-40 bg-gaming-dark rounded-lg p-4 relative overflow-hidden">
              <div className="flex items-end h-full gap-1">
                {chartData.slice(-30).map((point, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-primary/60 to-primary rounded-t"
                    style={{
                      height: `${(point.value / 100) * 100}%`,
                      minHeight: "2px",
                    }}
                  />
                ))}
              </div>

              {/* Current Value Indicator */}
              <div className="absolute top-4 right-4 bg-primary/20 rounded-lg p-2">
                <div className="text-primary font-bold">30%</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="text-muted-foreground">Độ chính xác</p>
                <p className="font-bold text-success">94%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Người chơi</p>
                <p className="font-bold text-foreground">23</p>
              </div>
              <div>
                <p className="text-muted-foreground">Tổng cược</p>
                <p className="font-bold text-primary">2.5M</p>
              </div>
            </div>
          </div>
        </GamingCard>

        {/* Prediction Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <GamingButton
            variant={prediction === "up" ? "success" : "outline"}
            size="xl"
            className="h-20 flex-col gap-2"
            onClick={() => handlePrediction("up")}
          >
            <TrendingUp className="w-8 h-8" />
            <span>TĂNG</span>
          </GamingButton>

          <GamingButton
            variant={prediction === "down" ? "destructive" : "outline"}
            size="xl"
            className="h-20 flex-col gap-2"
            onClick={() => handlePrediction("down")}
          >
            <TrendingDown className="w-8 h-8" />
            <span>GIẢM</span>
          </GamingButton>
        </div>

        {/* Bet Amount */}
        <GamingCard variant="default">
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">SỐ TIỀN CƯỢC</h3>

            <div className="grid grid-cols-4 gap-2">
              {[1000, 5000, 10000, 50000].map((amount) => (
                <GamingButton
                  key={amount}
                  variant={betAmount === amount ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setBetAmount(amount)}
                >
                  {amount.toLocaleString()}
                </GamingButton>
              ))}
            </div>

            <div className="text-center">
              <p className="text-primary font-bold text-xl">
                {betAmount.toLocaleString()} VND
              </p>
            </div>

            <GamingButton
              variant="gold"
              size="lg"
              className="w-full"
              disabled={!prediction || timeLeft === 0}
              onClick={handlePlaceBet}
            >
              ĐẶT CƯỢC{" "}
              {prediction && `- ${prediction === "up" ? "TĂNG" : "GIẢM"}`}
            </GamingButton>
          </div>
        </GamingCard>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gaming-card border-t-2 border-primary/30 p-4">
        <div className="container mx-auto flex justify-center gap-8">
          <GamingButton
            variant="ghost"
            size="sm"
            className="flex-col gap-1 h-auto py-2"
          >
            <div className="text-lg">📈</div>
            <span className="text-xs">DỰ ĐOÁN</span>
          </GamingButton>
          <GamingButton
            variant="ghost"
            size="sm"
            className="flex-col gap-1 h-auto py-2"
          >
            <div className="text-lg">📊</div>
            <span className="text-xs">KẾT QUẢ</span>
          </GamingButton>
          <GamingButton
            variant="ghost"
            size="sm"
            className="flex-col gap-1 h-auto py-2"
          >
            <div className="text-lg">👥</div>
            <span className="text-xs">NGƯỜI CHƠI</span>
          </GamingButton>
          <GamingButton
            variant="ghost"
            size="sm"
            className="flex-col gap-1 h-auto py-2"
          >
            <div className="text-lg">💰</div>
            <span className="text-xs">LỊCH SỬ</span>
          </GamingButton>
        </div>
      </div>
    </div>
  );
}
