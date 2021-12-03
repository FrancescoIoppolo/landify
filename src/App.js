import './style.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import LogosSection from './components/LogosSection/LogosSection';
import Feature from './components/Feature/Feature';



function App() {
  return (
    <div className="body">
      <Header></Header>
      <Content></Content>
      <LogosSection></LogosSection>
      <Feature></Feature>
    </div>
  );
}

export default App;
