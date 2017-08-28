import { h, Component } from 'preact';

export default class Start extends Component {
    render(props, state) {
        return (
            <div>
                { JSON.stringify(props.results) }
            </div>
        );
    }
}
