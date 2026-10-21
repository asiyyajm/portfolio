import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

function App() {
  return (
    <>
      <Loader />

      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;