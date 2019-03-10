import "./style.css";

import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return (
      <div className="app">
        <p>
          Perfection is achieved not when there is nothing more to add, but rather when 
          there is nothing more to take away.
        </p>
        <p>-- Antoine de Saint-Exupery</p>
      </div>
    );
  };
  
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}