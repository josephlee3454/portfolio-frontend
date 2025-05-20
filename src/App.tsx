import { Routes, Route } from 'react-router-dom';
import { About, Footer, Header, Home } from './components';


const App = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;