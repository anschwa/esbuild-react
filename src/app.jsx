import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = ({ message }) => {
  const [count, setCount] = useState(42);
  const increment = () => setCount(count + 1);

  return (
    <>
      <h1>{message}</h1>
      <h2>
        Count:
        {count}
      </h2>
      <button type="button" style={{ margin: '0 4px' }} onClick={increment}>Increment</button>
      <button type="button" style={{ margin: '0 4px' }} onClick={() => setCount(0)}>Reset</button>
    </>
  );
};
App.propTypes = {
  message: PropTypes.string,
};
App.defaultProps = {
  message: 'Welcome',
};

ReactDOM.render(
  <React.StrictMode>
    <App message="Hello, world!" />
  </React.StrictMode>,

  document.getElementById('root'),
);
