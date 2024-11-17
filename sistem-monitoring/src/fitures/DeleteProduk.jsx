import {AxiosInstace} from '../../libs/Axios'
import { useMutation } from '@tanstack/react-query';

export const useDeleteData = ({onSuccess}) => {
    return useMutation({
        mutationFn:async (id) => {
            const deleteData = await AxiosInstace.delete(`/Produk/${id}`);
            return deleteData;
        },
        onSuccess,
    })
}