import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

if (module.hot) {
    module.hot.accept();
  }

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        
        (err) => this.setState({ errorMessage: err.message }) 
    );
}   
 
render() {
    // render just returns some JSX--that is it

    if (this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat){
        return <div> <SeasonDisplay lat={this.state.lat}/></div>
    }

    return <div>Loading!</div>                    
    }
}

ReactDOM.render (
    <App />,
    document.querySelector('#root')
);