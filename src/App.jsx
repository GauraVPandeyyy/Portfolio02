// src/App.jsx
import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import PortfolioOne from './PortfolioOne';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<PortfolioOne />} />
            <Route path="/portfolio/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default App;