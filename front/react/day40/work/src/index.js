import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDom.createRoot 리액트 앱의 DOM 구조 구현
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode는 어플 내 잠재적인 문제를 알아내기 위한 도구입니다.
  <App />
);