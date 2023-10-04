import {create} from "zustand";

interface CATEGORY {
    category: any[];
    setCategory: (data: any) => void;
}

const useCategoryStore = create<CATEGORY>()((set) => ({
    category: [],
    setCategory: (data: any) => {
        return set(() => ({category: data}));
    },
}));

export default useCategoryStore;
