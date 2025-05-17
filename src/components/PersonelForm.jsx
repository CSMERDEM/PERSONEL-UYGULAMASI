// src/components/PersonelForm.jsx
import React, { useState } from 'react';
import PersonelService from '../services/PersonelService';
import { useNavigate } from 'react-router-dom';

function PersonelForm() {
  const [personel, setPersonel] = useState({ ad: '', soyad: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setPersonel(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    PersonelService.kaydetPersonel(personel)
      .then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Personel</h2>
      <input type="text" name="ad" value={personel.ad} onChange={handleChange} placeholder="Ad" required />
      <input type="text" name="soyad" value={personel.soyad} onChange={handleChange} placeholder="Soyad" required />
      <button type="submit">Kaydet</button>
    </form>
  );
}

export default PersonelForm;
