import './css/style.css';
import Header from './components/Header.jsx';
import Logo from './components/header/Logo.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';
import Home from './components/content/Home.jsx';
import SectionWrap from './components/content/SectionWrap.jsx';
import Majors from './components/content/Majors.jsx';
import Jobs from './components/content/Jobs.jsx';
import Skills from './components/content/Skills.jsx';
import Coding from './components/content/Coding.jsx';
import Article from './components/content/Article.jsx';
import Categories from './components/content/Categories.jsx';
import Projects from './components/content/Projects.jsx';
import Arrow from './components/content/Arrow.jsx';
import Testimonials from './components/content/Testimonials.jsx';
import Bottom from './components/footer/Bottom.jsx';

function App() {
  return (
    <>
      <Header>
        <Logo 
          img="images/favicon.ico" 
          name="Judy" />
        <MenuList />
        <ToggleButton />
      </Header>
      <Content>
        <Home 
          img="images/favicon.ico"
          name="Judy"
        />
        <SectionWrap
            id="about"
            title="About me"
            description="description!!"> 
            <Majors />
            <Jobs />
          </ SectionWrap>
          <SectionWrap
            id="skill"
            title="My Skills"
            description="Skills & Attributes">
            <Skills>
              <Coding />
              <Article type="Tools" />
              <Article type="Etc" />
            </Skills>
          </ SectionWrap>
          <SectionWrap
            id="work"
            title="My work"
            description="Projects">
            <Categories />
            <Projects />
          </ SectionWrap>
          <SectionWrap
            id="testimonial"
            title="Testimonial"
            description="See what they say about me">
            <Testimonials />
          </ SectionWrap>
          <Arrow />
      </Content>
      <Footer>
        <Bottom />
      </Footer>
    </>
  );
}

export default App;
