import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";



const useMyToys = () => {
    const {user} = useContext(AuthContext)
    const { data: myToys = [], refetch, isLoading } = useQuery({
        queryKey: ['toys'],
        queryFn: async () => {
            const res = await fetch(`https://toys-marketplace-server-agmt-11.vercel.app/my-toys/${user.email}`)
            return res.json()
        }
    })
    return [myToys, refetch, isLoading]
};

export default useMyToys;