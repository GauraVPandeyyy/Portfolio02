import { StrictMode } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import PortfolioOne from './PortfolioOne';

function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <PortfolioOne />
      </ErrorBoundary>
    </StrictMode>
  );
}

export default App;