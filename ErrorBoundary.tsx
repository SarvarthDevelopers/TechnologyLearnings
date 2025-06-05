import React from 'react';

interface State {
  hasError: boolean;
  errorInfo?: string;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {  //class component, It receives children (components you wrap inside <ErrorBoundary>...</ErrorBoundary> )
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };  //Sets initial state.
  }

  static getDerivedStateFromError(_: Error) {  //This method runs when an error occurs in a child component.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {    //This logs the actual error for debugging.
    console.error("Error caught by Error Boundary:", error, errorInfo);
    this.setState({ errorInfo: error.message });
  }

  render() {
    if (this.state.hasError) {    //If an error occurred, it shows a fallback UI (Something went wrong...).
      return <h2>Something went wrong. Please refresh or try again later.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
