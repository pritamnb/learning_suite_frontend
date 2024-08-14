// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Courses from './pages/Courses';
// import SparkAdaBasics from './pages/SparkAdaBasics';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/spark-ada-basics" element={<SparkAdaBasics />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { routes } from './config/routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
