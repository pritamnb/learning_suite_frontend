import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './config/routes';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div className="">
          <div className="flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={<route.component />} />
                ))}
              </Routes>
            </Suspense>
          </div>
        </div>
      </Layout>
    </Router>
  );
};

export default App;
