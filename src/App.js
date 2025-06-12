import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './component/Header';
import Main from './component/Main';
import Intro from './sub/Intro';
import API from './sub/API';
import ContactUs from './sub/Contact';
import Footer from './component/Footer';
import NotFound from './sub/NotFound';
import MovieDetail from './sub/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/movie' element={<Main />}></Route>
        <Route path='/intro' element={<Intro />}></Route>
        <Route path='/api' element={<API />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path="/movie-detail" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
