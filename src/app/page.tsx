"use client";

import { useState } from "react";
import { HomepageScreen } from "@/components/screens/homepage-screen";
import { LoginScreen } from "@/components/screens/login-screen";
import { RegisterScreen } from "@/components/screens/register-screen";
import GameSelectionScreen from "@/components/screens/game-selection-screen";
import { GameRoomScreen } from "@/components/screens/game-room-screen";
import { GamePlayScreen } from "@/components/screens/game-play-screen";

type Screen =
  | "homepage"
  | "login"
  | "register"
  | "gameSelection"
  | "gameRoom"
  | "gamePlay";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("homepage");
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");

  const handleLogin = () => {
    setCurrentScreen("login");
  };

  const handleRegister = () => {
    setCurrentScreen("register");
  };

  const handleProviderSelect = (providerId: string) => {
    setSelectedGame(providerId);
    setCurrentScreen("gameSelection");
  };

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
    setCurrentScreen("gameRoom");
  };

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId);
    setCurrentScreen("gamePlay");
  };

  const handleBack = () => {
    switch (currentScreen) {
      case "login":
      case "register":
        setCurrentScreen("homepage");
        break;
      case "gameSelection":
        setCurrentScreen("homepage");
        break;
      case "gameRoom":
        setCurrentScreen("gameSelection");
        break;
      case "gamePlay":
        setCurrentScreen("gameRoom");
        break;
      default:
        setCurrentScreen("homepage");
    }
  };

  const handleLoginSuccess = () => {
    setCurrentScreen("homepage");
  };

  const handleRegisterSuccess = () => {
    setCurrentScreen("homepage");
  };

  const handleSwitchToRegister = () => {
    setCurrentScreen("register");
  };

  const handleSwitchToLogin = () => {
    setCurrentScreen("login");
  };

  return (
    <div className="min-h-screen">
      {currentScreen === "homepage" && (
        <HomepageScreen
          onProviderSelect={handleProviderSelect}
          onLogin={handleLogin}
          onRegister={handleRegister}
        />
      )}

      {currentScreen === "login" && (
        <LoginScreen
          onRegister={handleSwitchToRegister}
          onBack={handleBack}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {currentScreen === "register" && (
        <RegisterScreen
          onLogin={handleSwitchToLogin}
          onBack={handleBack}
          onRegisterSuccess={handleRegisterSuccess}
        />
      )}

      {currentScreen === "gameSelection" && (
        <GameSelectionScreen
          onGameSelect={handleGameSelect}
          onBack={handleBack}
        />
      )}

      {currentScreen === "gameRoom" && (
        <GameRoomScreen
          providerId={`${selectedGame}`}
          onPredict={handleRoomSelect}
          onBack={handleBack}
        />
      )}

      {currentScreen === "gamePlay" && <GamePlayScreen onBack={handleBack} />}
    </div>
  );
}
