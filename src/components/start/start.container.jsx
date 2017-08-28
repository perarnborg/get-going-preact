import { h, Component } from 'preact';
 import { listResults } from '../../api/results';
 import Start from './start';

export default class StartContainer extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        listResults()
            .then( results => {
                this.setState({
                    results: results || [],
                    isLoaded: true
                });
            });
    }

    render(props, state) {
        return (
            state.isLoaded ?
                <Start {...state} />
            : null
        );
    }
}
