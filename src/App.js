import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Routes>
          <Route />
        </Routes>
        <MainVisual />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
