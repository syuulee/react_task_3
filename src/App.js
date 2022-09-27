import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import Sub01 from './components/Sub01';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Section01 from './components/Section01';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <MainVisual />
        <Section01 />
        <Routes>
          <Route path='/sub01' element={<Sub01 />} />
        </Routes>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
