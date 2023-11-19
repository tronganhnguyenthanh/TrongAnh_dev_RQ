import React from "react"
import {useIsFetching, useQuery} from "react-query"
import {getPost} from "../api/api"
import loading from "../image/loading.gif"
import {Link} from "react-router-dom"
import {Select} from "flowbite-react"
const GetPostList = () => {
  const isLoading = useIsFetching()
  const post = useQuery({queryKey:["post"], queryFn:getPost})
  return (
   <>
    {
      isLoading ? 
       <div className="flex justify-center py-56">
         <img src={loading} alt=""/>
       </div>
       : 
      <>
       <h1 className="text-2xl font-bold text-center text-blue-700">Get post list</h1>
       <div className="flex justify-center p-2">
         <Select 
           className="w-full cursor-pointer"
          >
           {post?.data?.map((i1, index1) => {
             return(
              <option key={index1} value={i1?.id}>{i1?.title}</option>
             )
            })
           } 
         </Select>
       </div>
       <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 p-2 cursor-pointer">
         {post?.data?.map((i, index) => {
           return (
            <Link to={`/post/${i?.id}`}  key={index}>
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div>
                  <h1>{i?.title}</h1>
                </div>
              </div>
            </Link>
           )
          })
         }
        </div>
      </>
     }
   </>
  )
}

export default GetPostList