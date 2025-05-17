// src/components/PersonelDuzenle.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PersonelService from '../services/PersonelService';

function PersonelDuzenle() {
  const { id } = useParams();
  const [personel, setPersonel] = useState({ ad: '', soyad: '' });//test
  const navigate = useNavigate();

  useEffect(() => {
    PersonelService.getPersonelById(id)
      .then(res => setPersonel(res.data));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setPersonel(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    PersonelService.guncellePersonel(id, personel)
      .then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personel Güncelle</h2>
      <input type="text" name="ad" value={personel.ad} onChange={handleChange} required />
      <input type="text" name="soyad" value={personel.soyad} onChange={handleChange} required />
      <button type="submit">Güncelle</button>
    </form>
  );
}

export default PersonelDuzenle;
