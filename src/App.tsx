import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';

const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <div className='container'>
      <LeftSidebar />
      <div className='content'></div>
      <RightSidebar />
      {/* <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Suspense> */}
    </div>
  );
}

export default App;