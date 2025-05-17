import React, { useState, useEffect } from 'react';

import PersonelService from '../services/PersonelService';
import { Link } from 'react-router-dom';

function PersonelListesi() {
  const [personeller, setPersoneller] = useState([]);

  useEffect(() => {
    PersonelService.getTumPersoneller()
      .then(response => setPersoneller(response.data))
      .catch(error => console.error("Veri çekme hatası", error));
  }, []);

  const handleSil = (id) => {
    PersonelService.silPersonel(id)
      .then(() => setPersoneller(personeller.filter(p => p.id !== id)));
  };

  return (
    <div>
      <h2>Personel Listesi</h2>
      <Link to="/ekle">Yeni Personel Ekle</Link>
      <ul>
        {personeller.map(p => (
          <li key={p.id}>
            {p.ad} {p.soyad}
            <Link to={`/duzenle/${p.id}`}> Düzenle </Link>
            <button onClick={() => handleSil(p.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonelListesi;
