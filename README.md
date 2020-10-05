# suggestkit-react
An implementation of SuggestKit in React.

## How to use
To use this, you will firstly want to import the library from `suggestkit-react`:
```js
import SuggestKit from "suggestkit-react";
```

From here, we can structure our components for usage in SuggestKit. To do this, we will map each item in our array so that `key` is the key which we want to trigger suggestions and `info` is the component we want to render. In our example, we do it like this:
```js
const suggestionsFormatted = suggestions.map(x => {
    return {
        key: x.key,
        info: <Suggestion title={x.title} description={x.description} />,
    };
});
```

We may also want to call a function when the text updates. In the case of functional components, we will use React's `useState` function to get the state, and then pass through `setText` to `onChange` in this component since it returns a string:
```js
let [text, setText] = useState(0);
```

From here, we can very easily create the component:
```js
<SuggestKit suggestions={suggestionsFormatted} placeholder="Type here to get suggestions!" onUpdate={setText} />
```

## Demo
There is a demo included (see `demo.js`) which contains a simple typearea and the keys `hello` and `sammy`. To use the demo, sinply run `npm i` and then `npm run demo`. 
