import {AxiosInstace} from '../../libs/Axios'
import { useQuery } from '@tanstack/react-query';

export const useFetchData = () => {
    return useQuery({
        queryKey: ['produks'],
        queryFn: async () => {
            const response = await AxiosInstace.get('/BarangMasuk');
            console.log('Data yang diambil:', response.data);
            return response.data.data;
        },
    });
};