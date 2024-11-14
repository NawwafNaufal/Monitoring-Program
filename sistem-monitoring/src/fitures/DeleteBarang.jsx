import {AxiosInstace} from '../../libs/Axios'
import { useMutation } from '@tanstack/react-query';

export const useDeleteData = ({onSuccess}) => {
    return useMutation({
        mutationFn:async (id) => {
            const deleteData = await AxiosInstace.delete(`/BarangKeluar/${id}`);
            return deleteData;
        },
        onSuccess,
    })
}