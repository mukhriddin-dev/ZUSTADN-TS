import {create} from "zustand";

interface PRODUCTS {
    product: any | [];
    setProduct: (data: any[]) => void;
}

const useProductStore = create<PRODUCTS>()((set) => ({
    product: [],
    setProduct: (data) => {
        set(() => ({product: data}));
    },
}));

export default useProductStore;
