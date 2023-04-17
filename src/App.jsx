//css and react imports
import './index.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
//Components
import Header from './components/Header/Header';
import Layout from './layout/Layout';
import About from './pages/About/About';
import Detail from './pages/Details/Detail';
import Expertise from './pages/Expertise/Expertise';
//Pages
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Work from './pages/Work/Work';

const App = () => {
  return (
    <Layout>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:name" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Layout>
  );
};

export default App;
