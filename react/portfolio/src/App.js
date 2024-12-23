import './css/style.css';
import Header from './components/Header.jsx';
import Logo from './components/header/Logo.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';


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
        <h1>Content</h1>
      </Content>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </>
  );
}

export default App;
