import {AxiosInstace} from '../../libs/Axios'
import { useMutation } from '@tanstack/react-query';

export const useCreateDatas = ({onSuccess}) => {
    return useMutation({
        mutationFn: async (body) => {
            const employeeResponse = await AxiosInstace.post("/BarangKembali",body)
            return employeeResponse;
        },
        onSuccess,
    });
};