import { Product } from "@/types/Product";
import useData from "./useData";

const useProduct = () => useData<Product>("/products");

export default useProduct;
