import { useQuery } from "@tanstack/react-query"
import useAxios from "../hooks/useAxios"
import DataTable from "react-data-table-component"
import { Avatar } from "@material-tailwind/react";
import Loading from "../components/Loading/Loading";

const FeaturedBlogs = () => {
  const axios = useAxios()
  const { isLoading, data } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () =>{
      const res = await axios.get('/featured-blogs  ')
      return res.data
  }})
  console.log(data);
  const columns = [
    {
      name: 'Serial No',
      selector: (row, index) => <span>{index+1}</span>,
  },
  {
        name: 'Title',
        selector: row => row.title,
    },
    {
      name: 'Author',
      selector: row => row.author,
  },
  {
    name: 'Profile Image',
    selector: row => <Avatar
    src={row?.original?.image}
    alt={row?.original?.author}
    withBorder={true}
    className="p-0.5"
  />,
},
];


  return (
    <>
    <div className="my-6">
    {
      isLoading ? <Loading /> : (<DataTable
        title="Featured Blogs"
        columns={columns}
        data={data}
        highlightOnHover
     
        // fixedHeader
         
        // selectableRows
        // selectableRowsComponent={Checkbox} // Pass the function only
        
      />)
    }
    </div>
    </>
  )
}

export default FeaturedBlogs