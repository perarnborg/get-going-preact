import { h, render, Component } from 'preact';
import './styles/index.scss';
import StartContainer from './components/start/start.container';

class App extends Component {

    render() {
        return (
            <StartContainer/>
        );
    }
}

render(<App />, document.getElementById('app-get-going-preact-widget'));
