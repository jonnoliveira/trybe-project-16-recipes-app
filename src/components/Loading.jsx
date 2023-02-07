import React from 'react';
import '../css/loading.css';

function Loading() {
  return (
    <div className="container-loading">
      <div className="cup">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
      </div>
      <p className="loading">LOADING</p>
    </div>
  );
}

export default Loading;
