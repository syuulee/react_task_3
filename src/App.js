import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './pages/Main';
import Sub01 from './subs/Sub01';
import Sub02 from './subs/Sub02';
import Sub03 from './subs/Sub03';
import Sub04 from './subs/Sub04';
import Sub05 from './subs/Sub05';
import Notice from './subs/Notice';
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
          <Route path='/Sub04' element={<Sub04 />} />
          <Route path='/Sub05' element={<Sub05 />} />
          <Route path='/Notice' element={<Notice />} />
        </Routes>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
