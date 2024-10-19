import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchData = (url) => {
    const {data:products = [],refetch,isLoading,isError } = useQuery({
        queryKey:['products'],
        queryFn: async () => {
            const res = await axios.get(url)
            return res.data
        }
    })
    return [products, refetch, isLoading,isError]
};

export default useFetchData;
