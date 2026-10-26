import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { siteData } from './data/siteData.js';
import './themes/shared.css';
import './themes/colorful.css';
import './themes/pastel.css';
import './themes/dark.css';
import './themes/digital.css';
import './themes/student.css';

// siteData.js에서 제목을 바꾸면 브라우저 탭의 제목도 함께 바뀝니다.
document.title = siteData.siteTitle;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
