import React from 'react';
import ReactDOM from 'react-dom/client';
import LikeButton from './components/LikeButton';

import ThumbsUp from './components/ThumbsUp';
function App() {

  return (
    <div>
      <LikeButton />
      <ThumbsUp />
    </div>
  );
}

const rootEle = document.getElementById('root')
const root = ReactDOM.createRoot(rootEle);
root.render(<App />);