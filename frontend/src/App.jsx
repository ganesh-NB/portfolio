
import './index.css';
import Home from './home.jsx';
import Navbar from './navbar.jsx' ;
import Skills from './skills.jsx';
import Projects from './projects.jsx'; 
import Resume from './resume.jsx';
import Blog  from './blog.jsx';
import Contact from './contact.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
