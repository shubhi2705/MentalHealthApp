import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage";
import ProfilePage from "./components/ProfilePage";
import LanguagePage from "./components/LanguagePage";
import GreetingPage from "./components/GreetingPage";
import SelfAssessment from "./components/SelfAssessment";
import Thankyou from "./components/Thankyou";
import ExploreResources from "./components/ExploreResources";
import Emergency from "./components/Emergency";
import VirtualAssistant from "./components/VirtualAssistant";
import Workshop from "./components/Workshop";
import AdminSignIn from "./components/AdminSignIn";
import GuidedExercise from "./components/GuidedExercise";
import VideoCounseling from "./components/VideoCounseling";
import STT from "./components/STT";
import TTS from "./components/TTS";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import AuthGuard from "./AuthGuard";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-r from-light-blue-300 to-light-blue-50">
      <Router>
        {/* Wrap Routes inside a div with the background class */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthGuard>
                <ProfilePage />
              </AuthGuard>
            }
          />
          <Route
            path="/language"
            element={
              <AuthGuard>
                <LanguagePage />
              </AuthGuard>
            }
          />
          <Route
            path="/greeting"
            element={
              <AuthGuard>
                <GreetingPage />
              </AuthGuard>
            }
          />
          <Route
            path="/selfAssessment"
            element={
              <AuthGuard>
                <SelfAssessment />
              </AuthGuard>
            }
          />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route
            path="/resources"
            element={
              <AuthGuard>
                <ExploreResources />
              </AuthGuard>
            }
          />
          <Route path="/emergency" element={<Emergency />} />
          <Route
            path="/liveChat"
            element={
              <AuthGuard>
                <VirtualAssistant />
              </AuthGuard>
            }
          />
          <Route
            path="/admin-signin"
            element={<AdminSignIn setIsAdmin={setIsAdmin} />}
          />
          <Route path="/workshops" element={<Workshop isAdmin={isAdmin} />} />
          <Route
            path="/exercises"
            element={
              <AuthGuard>
                <GuidedExercise />
              </AuthGuard>
            }
          />
          <Route
            path="/counseling"
            element={
              <AuthGuard>
                <VideoCounseling />
              </AuthGuard>
            }
          />
        </Routes>

        {/* STT and TTS buttons in the top right corner */}
        <div
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            display: "flex",
            gap: "10px",
          }}
        >
          <STT />
          <TTS />
        </div>
      </Router>
    </div>
  );
}

export default App;
