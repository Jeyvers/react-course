// Importing dependencies
import React from 'react'; 
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX
// Every component must begin with a capital letter so react knows that the function is a component.
function Greeting ()
{
  return (
    <div> 
      < Person />
      < Message />
      <h1>

      </h1>
    </div>
  );
  // Not HTML but JSX? What is JSX?
}

const Person = () => {
  return <h2> John Doe </h2>
}
const Message = () => <h2> John Doe </h2> 


// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello edache')
// }

// Renders the component to the html file, in the root section so it can be displayed 
// The render method looks for two things (what to render, where to render);
// What to render must have self closing tag
ReactDom.render(<Greeting />, document.getElementById('root'));