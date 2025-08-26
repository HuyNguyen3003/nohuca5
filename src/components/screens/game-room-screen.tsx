"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { GamingCard } from "@/components/ui/gaming-card";
import { GamingButton } from "@/components/ui/gaming-button";
import { ArrowLeft, Users, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface RoomData {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
  betAmount: number;
  timeLeft: number;
  isActive: boolean;
}

const roomData: RoomData[] = [
  {
    id: "1",
    name: "PHÒNG VIP 1",
    players: 8,
    maxPlayers: 10,
    betAmount: 1000,
    timeLeft: 45,
    isActive: true,
  },
  {
    id: "2",
    name: "PHÒNG THƯỜNG 1",
    players: 15,
    maxPlayers: 20,
    betAmount: 500,
    timeLeft: 32,
    isActive: true,
  },
  {
    id: "3",
    name: "PHÒNG VIP 2",
    players: 5,
    maxPlayers: 10,
    betAmount: 2000,
    timeLeft: 67,
    isActive: true,
  },
  {
    id: "4",
    name: "PHÒNG THƯỜNG 2",
    players: 18,
    maxPlayers: 20,
    betAmount: 500,
    timeLeft: 12,
    isActive: true,
  },
  {
    id: "5",
    name: "PHÒNG VIP 3",
    players: 3,
    maxPlayers: 10,
    betAmount: 5000,
    timeLeft: 89,
    isActive: true,
  },
  {
    id: "6",
    name: "PHÒNG THƯỜNG 3",
    players: 12,
    maxPlayers: 20,
    betAmount: 500,
    timeLeft: 156,
    isActive: false,
  },
];

interface GameRoomScreenProps {
  gameName?: string;
  onRoomSelect?: (roomId: string) => void;
  onBack?: () => void;
}

export function GameRoomScreen({
  gameName = "SLOT ROOM AI",
  onRoomSelect,
  onBack,
}: GameRoomScreenProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(roomData);

  useEffect(() => {
    const filtered = roomData.filter((room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRooms(filtered);
  }, [searchTerm]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gaming-bg">
      {/* Header */}
      <header className="border-b-2 border-primary/30 bg-gaming-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <GamingButton variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </GamingButton>
              <div>
                <h1 className="text-xl font-bold text-primary">{gameName}</h1>
                <p className="text-sm text-muted-foreground">Chọn phòng chơi</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">Số dư</p>
              <p className="text-lg font-bold text-primary">1,234,567 VND</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Tìm kiếm phòng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input border-primary/30 focus:border-primary"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room) => (
            <GamingCard
              key={room.id}
              variant="room"
              className={`cursor-pointer transition-all ${
                room.isActive
                  ? "hover:scale-105 hover:shadow-gaming"
                  : "opacity-60 cursor-not-allowed"
              }`}
              onClick={() => room.isActive && onRoomSelect?.(room.id)}
            >
              <div className="space-y-4">
                {/* Room Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-primary text-lg">
                    {room.name}
                  </h3>
                  <div
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      room.isActive
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {room.isActive ? "ĐANG CHƠI" : "CHỜ"}
                  </div>
                </div>

                {/* Room Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Người chơi</p>
                    <div className="flex items-center gap-1 text-foreground font-semibold">
                      <Users className="w-4 h-4" />
                      {room.players}/{room.maxPlayers}
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Thời gian</p>
                    <div className="flex items-center gap-1 text-foreground font-semibold">
                      <Clock className="w-4 h-4" />
                      {formatTime(room.timeLeft)}
                    </div>
                  </div>
                </div>

                {/* Bet Amount */}
                <div className="border-t border-primary/20 pt-3">
                  <p className="text-muted-foreground text-sm">Mức cược</p>
                  <p className="text-primary font-bold text-lg">
                    {room.betAmount.toLocaleString()} VND
                  </p>
                </div>

                {/* Join Button */}
                <GamingButton
                  variant={room.isActive ? "gold" : "ghost"}
                  size="sm"
                  className="w-full"
                  disabled={!room.isActive}
                >
                  {room.isActive ? "VÀO PHÒNG" : "CHỜ PHÒNG MỞ"}
                </GamingButton>
              </div>
            </GamingCard>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Không tìm thấy phòng
            </h3>
            <p className="text-muted-foreground">
              Thử tìm kiếm với từ khóa khác
            </p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gaming-card border-t-2 border-primary/30 p-4">
        <div className="container mx-auto flex justify-center gap-8">
          <GamingButton
            variant="ghost"
            size="sm"
            className="flex-col gap-1 h-auto py-2"
          >
            <div className="text-lg">🎰</div>
            <span className="text-xs">PHÒNG</span>
          </GamingButton>
          <GamingButton
            variant="ghost"
            size="sm"
            className="flex-col gap-1 h-auto py-2"
          >
            <div className="text-lg">📊</div>
            <span className="text-xs">THỐNG KÊ</span>
          </GamingButton>
          <GamingButton
            variant="ghost"
            size="sm"
            className="flex-col gap-1 h-auto py-2"
          >
            <div className="text-lg">🏆</div>
            <span className="text-xs">XẾP HẠNG</span>
          </GamingButton>
          <GamingButton
            variant="ghost"
            size="sm"
            className="flex-col gap-1 h-auto py-2"
          >
            <div className="text-lg">⚙️</div>
            <span className="text-xs">CÀI ĐẶT</span>
          </GamingButton>
        </div>
      </div>
    </div>
  );
}
