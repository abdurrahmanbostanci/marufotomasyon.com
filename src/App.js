import './App.css';
import Main from './layouts/Main';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import Footer from './layouts/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Main />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
