import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';

const HomePage = lazy(() => import('./pages/HomePage'));
const GeneratePage = lazy(() => import('./pages/GeneratePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const InfoPage = lazy(() => import('./pages/InfoPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => {
  return (
    <div className='container'>
      <LeftSidebar />
      <div className='content'>
        <Suspense>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/login" element={<LoginPage />} />
            <Route path="/home/generate" element={<GeneratePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;