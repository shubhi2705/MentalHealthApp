/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import ProfilePage from './components/ProfilePage';
import LanguagePage from './components/LanguagePage';
import GreetingPage from './components/GreetingPage';
import SelfAssessment from './components/SelfAssessment';
import Thankyou from './components/Thankyou';
import ExploreResources from './components/ExploreResources';
import Emergency from './components/Emergency';
import VirtualAssistant from './components/VirtualAssistant';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/greeting" element={<GreetingPage />} />
        <Route path="/selfAssessment" element={<SelfAssessment />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path='/explore' element={<ExploreResources />} />
        <Route path='/emergency' element={<Emergency />}/>
        <Route path='/liveChat' element={<VirtualAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;
