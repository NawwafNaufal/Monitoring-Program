import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateProduct = () => {
  return useMutation(async (formData) => {
    const productId = parseInt(formData.get('id'), 10);
    
    const jsonData = {
      id: productId,
      nama_product: formData.get('nama_product'),
      kode_barang: formData.get('kode_barang')
    };

    const imageFile = formData.get('image');
    if (imageFile) {
      const imageFormData = new FormData();
      imageFormData.append('image', imageFile);
      
      if (imageFile instanceof File) {
        const imageResponse = await axios.patch(
          `http://localhost:3000/AddProduk/${productId}/image`,
          imageFormData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        jsonData.image_url = imageResponse.data.image_url;
      }
    }

    console.log('Sending update request with data:', jsonData);
    
    const response = await axios.patch(
      `http://localhost:3000/AddProduk/${productId}`,
      jsonData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Update response:', response.data);
    return response.data;
  });
};