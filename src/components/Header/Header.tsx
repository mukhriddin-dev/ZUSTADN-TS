import {useEffect} from "react";
import useCategoryStore from "../../store/category";
import useCategoryApi from "../../service/category";

const Header = () => {
    const {setCategory, category} = useCategoryStore();
    useEffect(() => {
        useCategoryApi.get().then((res) => {
            console.log(res.data);
            setCategory(res.data);
        });

        setTimeout(() => {
            console.log(category);
        }, 2000);
    }, []);
    return (
        <header>
            <div className="container">
                <nav>
                    <ul className="flex gap-x-8">
                        {category.map((item) => {
                            return <li>{item}</li>;
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
