import {useEffect} from "react";
import useProductApi from "../../service/products";
import useProductStore from "../../store/pruduct";

const About = () => {
    const {product, setProduct} = useProductStore();
   
    useEffect(() => {
        useProductApi.get().then((res: any) => {
            setProduct(res.data);
        });

        
    }, []);

    return (
        <section>
            <div className="container">
                <ul className="grid gap-4 grid-cols-4">
                    {product.map((el) => {
                        return (
                            <div key={el.id} className="p-4 border w-[300px] ">
                                <img className="w-[300px]" src={el.image} alt="" />
                                <li>{el.title}</li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default About;
