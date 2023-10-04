import api from './axios';

const useProductApi = {
    get: () => api.get('/products'),
    getItem: (id:number)=> api.get(`/products/${id}`)
};

export default useProductApi;
