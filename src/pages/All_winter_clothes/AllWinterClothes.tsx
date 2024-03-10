/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCart from "../../components/ProductCart";
import Container from "../../components/ui/Container";
import { useGetProductsQuery } from "../../redux/features/productSlice/productApi";

const AllWinterClothes = () => {
    const { data , isLoading} = useGetProductsQuery('')
    if(isLoading){
        return <p>Loading..</p>
    }
    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-10 px-4 lg:px-0 gap-5 ">
                {
                    data.map((product: any) => (
                        <ProductCart product={product} key={product._id}></ProductCart>
                    ))
                }

            </div>
        </Container>
    );
};

export default AllWinterClothes;