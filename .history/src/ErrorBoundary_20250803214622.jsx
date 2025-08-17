// Create new file: ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CursorTrail Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null; // Hide cursor trail on error
    }
    return this.props.children;
  }
}

export default ErrorBoundary;