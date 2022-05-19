import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
