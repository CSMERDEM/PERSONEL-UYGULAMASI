// src/services/PersonelService.js
import axios from 'axios';

const API_URL = "http://localhost:8080/api/personeller"; // Backend URL'ini kendi adresine göre güncelle

const getTumPersoneller = () => axios.get(API_URL);

const getPersonelById = (id) => axios.get(`${API_URL}/${id}`);

const kaydetPersonel = (personel) => axios.post(API_URL, personel);

const guncellePersonel = (id, personel) => axios.put(`${API_URL}/${id}`, personel);

const silPersonel = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getTumPersoneller,
  getPersonelById,
  kaydetPersonel,
  guncellePersonel,
  silPersonel
};
