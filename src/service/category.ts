import api from "./axios";



const useCategoryApi = {
    get: () => api.get<string []>("products/categories"),
    getItem: (id: number) => api.get(`/products/categories/${id}`),
};


export default useCategoryApi;
