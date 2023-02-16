import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("error found", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          there was an error with this listing <Link to="/">Click here</Link> to
          go back
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
