import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './pages/Main';
import Sub01 from './subs/Sub01';
import Sub02 from './subs/Sub02';
import Sub03 from './subs/Sub03';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Wrapper>
        <Header />
        {/* <MainVisual />
        <Section01 /> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Sub01' element={<Sub01 />} />
          <Route path='/Sub02' element={<Sub02 />} />
          <Route path='/Sub03' element={<Sub03 />} />
        </Routes>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
