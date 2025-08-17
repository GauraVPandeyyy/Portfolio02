import React from 'react'
import PortfolioOne from './PortfolioOne'
import ErrorBoundary from './ErrorBoundary';
function App() {
  return (
    <ErrorBoundary>
      <PortfolioOne />
    </ErrorBoundary>
  )
}

export default App