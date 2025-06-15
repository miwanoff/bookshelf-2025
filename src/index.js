import React from 'react';
import ReactDOM from 'react-dom/client';


function Hello() {
  return (
    <div>
      <h1>Hello, world!</h1>;
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Hello />);