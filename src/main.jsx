import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css";
import "./styles/header.css";
import "./styles/hero-mobile.css";
import "./styles/hero.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/experience.css";
import "./styles/contact-mobile.css";
import "./styles/contact.css";
import "./styles/footer.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
