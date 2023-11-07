import { useQuery } from "@tanstack/react-query"
import WishListCard from "../components/WishlistCard/WishListCard"
import useAxios from "../hooks/useAxios"
import useAuth from "../hooks/useAuth"
import Loading from "../components/Loading/Loading"

const Wishlist = () => {
  const axios = useAxios()
  const { user } = useAuth()

  const { isLoading, data } = useQuery({
    queryKey: ['wishlists'],
    queryFn: async () =>{
      const res = await axios.get(`/wishlists?user=${user.email}`)
      return res.data
  }})
  return (
    <>
    <div>
      {
        isLoading ? <Loading/> : (
          <div className="grid grid-cols-1 justify-items-center gap-6 mb-6 px-6">
        {
          data.map((wishlist) => (
            <WishListCard key={wishlist._id} wishlist={wishlist}></WishListCard>
          ))
        }
      </div>
        )
      }
    </div>
    </>
  )
}

export default Wishlist