import React from 'react';
import appStyle from './App.css';
import Upload from './upload/Upload'

function App() {
  return (
    <div className={ appStyle.App }>
      <div className={ appStyle.Card }>
        <Upload/>
      </div>
    </div>
  );
}

export default App;
