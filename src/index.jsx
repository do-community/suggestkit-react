import React from "react";
import suggestKit from "suggestkit";

export default class SuggestionsSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.search = suggestKit(props.suggestions);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
        (this.props.onUpdate || (() => {}))(event.target.value);
    }

    render() {
        // Get the props/state.
        const { placeholder } = this.props;
        const { text } = this.state;

        // Return the div.
        return <div>
            <textarea className="textarea" placeholder={placeholder} onChange={this.handleChange.bind(this)}></textarea>
            {this.search(text).map((v, i) => <span key={i}>{v}</span>)}
        </div>;
    }
}
