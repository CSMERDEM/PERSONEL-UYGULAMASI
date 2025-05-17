// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonelListesi from './components/PersonelListesi';
import PersonelForm from './components/PersonelForm';
import PersonelDuzenle from './components/PersonelDuzenle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonelListesi />} />
        <Route path="/ekle" element={<PersonelForm />} />
        <Route path="/duzenle/:id" element={<PersonelDuzenle />} />
      </Routes>
    </Router>
  );
}

export default App;
