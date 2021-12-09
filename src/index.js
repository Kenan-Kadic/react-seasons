import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }
  
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />;
      }
  
      return <div><Spinner message="Waiting on location approval..."/></div>;
    }
  

  // React says we have to define render!!
  render() {
    return (
        <div className="border red" style={{ border: '10px solid lightblue'}} >
            {this.renderContent()}
        </div>
    );
}
}
ReactDOM.render(<App />, document.querySelector("#root"));