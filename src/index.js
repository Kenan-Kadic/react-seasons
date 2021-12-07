import React from 'react'
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
  }

class App extends React.Component {
    constructor(props) {
        super(props); //makes sure that the constroctors inside of React.Component (the parent) get called

        // this is the only time we do direct assignment to the state property
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
            // called setState
            this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>                    
        }
}

ReactDOM.render (
    <App />,
    document.querySelector('#root')
);