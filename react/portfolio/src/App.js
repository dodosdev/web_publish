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

  const sectionList = [
    {
      "id": "about",
      "title": "About me",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus, temporibus perspiciatis repudiandae nostrum modi doloremque expedita non eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto ipsa inventore adipisci.",
      "children": [
        { "component": "Majors" },
        { "component": "Jobs" }
      ]
    },
    {
      "id": "skill",
      "title": "My Skills",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?",
      "children": [
        {
          "component": "Skills",
          "children": [
            { "component": "Coding" },
            { "component": "Article", "props": { "type": "Tools" } },
            { "component": "Article", "props": { "type": "Etc" } }
          ]
        }
      ]
    },
    {
      "id": "work",
      "title": "My work",
      "description": "Projects",
      "children": [
        { "component": "Categories" },
        { "component": "Projects" }
      ]
    },
    {
      "id": "testimonial",
      "title": "Testimonial",
      "description": "See what they say about me",
      "children": [
        { "component": "Testimonials" } 
      ]
    }
  ];

  const componentMap = {
    Majors,  //"Majors" : Majors, 과동일
    Jobs,
    Skills,
    Coding,
    Article,
    Categories,
    Projects,
    Testimonials
    // "Testimonials" : "Testimonials" 
  };


  //자식 컴포넌트 렌더링  :: 재귀함수 (끝날때까지 자기를 실행)
  const renderComponent = (childObj) => {    //{ "component": "Testimonials" } 같은이름을찾음
    const Component = componentMap[childObj.component]; //컴퍼넌트를 찾음 Component<--여기에 주소가 들어옴
    if (!Component) return null; //null을 return해서 종료

    return (
      <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>  
        {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
      </Component>
    );
  };

// ||(or)계속 추가   //childObj.children &&  <--childObj에 자식이 있으면 map을 또 실행
//  {...(childObj.props || {})} <---...기존에 있던 props는유지하고 추가함
// renderComponent(childObj))} <---자식이 없어질때까지 계속 렌더링함





  return (
    <>
      <Header>
        <Logo 
          img="images/favicon.ico" 
          name="dododev" />
        <MenuList />
        <ToggleButton />
      </Header>
      <Content>
        <Home 
          img="images/favicon.ico"
          name="dododev" />

      {sectionList && sectionList.map((section) => (
          <SectionWrap
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            {section.children.map((child) => renderComponent(child))}

          </SectionWrap>
      ))} 

          {/* Arrow up */}
          <Arrow />
      </Content>
      <Footer>
        <Bottom />
      </Footer>
    </>
  );
}

export default App;




//  	{/*About me */}
//    <SectionWrap
//    id="about"
//    title="About me"
//    description="description!!"> 
//    <Majors />
//    <Jobs />
//  </ SectionWrap>
//  {/* My Skills */}
//  <SectionWrap
//    id="skill"
//    title="My Skills"
//    description="Skills & Attributes">
//    <Skills>
//      <Coding />
//      <Article type="Tools" />
//      <Article type="Etc" />
//    </Skills>
//  </ SectionWrap>
//  {/* My Work */}
//  <SectionWrap
//    id="work"
//    title="My work"
//    description="Projects">
//    <Categories />
//    <Projects />
//  </ SectionWrap>
//  {/* testimonial */}
//  <SectionWrap
//    id="testimonial"
//    title="Testimonial"
//    description="See what they say about me">
//    <Testimonials />
//  </ SectionWrap>






