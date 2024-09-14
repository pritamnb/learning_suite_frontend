
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './config/routes';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div className="flex">
          <div className="flex-grow">
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </div>
        </div>
      </Layout>
    </Router>
  );
};

export default App;
