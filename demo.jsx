import React, { useState } from "react";
import ReactDOM from "react-dom";
import SuggestKit from "./src";

const suggestions = [
    {
        key: "hello",
        title: "Hello World",
        description: "Demo",
    },
    {
        key: "sammy",
        title: "Sammy Shark!",
        description: "Sammy!",
    },
];

const Suggestion = ({title, description}) => {
    return <div>
        <hr />
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{description}</h2>
    </div>;
};

const suggestionsFormatted = suggestions.map(x => {
    return {
        key: x.key,
        info: <Suggestion title={x.title} description={x.description} />,
    };
});

const MainComponent = () => {
    let [text, setText] = useState(0);
    if (!text) text = "";
    return <div className="container" style={{paddingTop: "1%"}}>
        <p>The current value of text is: {text}</p>
        <SuggestKit suggestions={suggestionsFormatted} placeholder="Type here to get suggestions!" onUpdate={setText} />
    </div>;
};

ReactDOM.render(<MainComponent />, document.getElementById("app"));
