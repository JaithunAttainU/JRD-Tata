import React from 'react';
import ReactDOM from 'react-dom/client';
import LikeButton from './components/LikeButton';
import Message from './components/Message';

import ThumbsUp from './components/ThumbsUp';
import Title from './components/Title';
function App() {

  return (
    <div>
      {/* <LikeButton /> */}
      {/* <ThumbsUp /> */}
      <Title />
      <Message />
    </div>
  );
}

const rootEle = document.getElementById('root')
const root = ReactDOM.createRoot(rootEle);
root.render(<App />);