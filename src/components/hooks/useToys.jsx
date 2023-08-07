import { useQuery } from "@tanstack/react-query";



const useToys = () => {
    const { data: toys = [], refetch, isLoading } = useQuery({
        queryKey: ['toys'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/toys`)
            return res.json()
        }
    })
    return [toys, refetch, isLoading]
};

export default useToys;