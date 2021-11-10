import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allLevelData from "./allLevelData";
// components
import Navbar from "./components/Navbar";
// pages
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Info from "./pages/Info";
// contexts
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [inGame, setInGame] = useState(false);
  const [inLeaderboard, setInLeaderboard] = useState(false);
  const [inHome, setInHome] = useState(false);
  const [inInfo, setInInfo] = useState(false);
  const [level, setLevel] = useState(0);
  const [levelData, setLevelData] = useState(allLevelData);
  const [characters, setCharacters] = useState([]);
  const [username, setUsername] = useState("");
  const handleUpdateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Router basename="/photo_tagging_app">
      <Navbar
        inGame={inGame}
        setInGame={setInGame}
        characters={characters}
        inLeaderboard={inLeaderboard}
        inHome={inHome}
        inInfo={inInfo}
      />
      <div className="container">
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={Home}>
              <Home
                setLevel={setLevel}
                levelData={levelData}
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            </Route>
            <Route exact path="/game" element={Game}>
              <Game
                level={level}
                username={username}
                updateUsername={handleUpdateUsername}
                levelData={levelData}
                characters={characters}
                setCharacters={setCharacters}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard
                setLevel={setLevel}
                level={level}
                levelData={levelData}
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            </Route>
            <Route path="/info">
              <Info
                setInGame={setInGame}
                setInLeaderboard={setInLeaderboard}
                setInHome={setInHome}
                setInInfo={setInInfo}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;