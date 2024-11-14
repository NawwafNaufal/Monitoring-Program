import {AxiosInstace} from '../../libs/Axios'
import { useMutation } from '@tanstack/react-query';

export const useCreateData = ({onSuccess}) => {
    return useMutation({
        mutationFn: async (body) => {
            const employeeResponse = await AxiosInstace.post("/Lab",body)
            return employeeResponse;
        },
        onSuccess,
    });
};