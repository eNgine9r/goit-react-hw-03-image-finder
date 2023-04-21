import axios from 'axios';

axios.defaults.baseURl = 'https://pixabay.com/api/?q=cat&page=1&key=34447371-d1c04ab6613d972420d21a436&image_type=photo&orientation=horizontal&per_page=12';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
}