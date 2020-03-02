import { axiosInstance } from '../config';

export const login = async data => {
    const response = axiosInstance.post('auth/login', data);
    return response;
};
