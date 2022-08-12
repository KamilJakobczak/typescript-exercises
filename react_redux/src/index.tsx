import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <h1>hi there</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
