import React from "react"
import {useQuery} from "react-query"
import {useNavigate, useParams} from "react-router-dom"
import {getPostDetail} from "../api/api"
import {Button, Card} from "flowbite-react"
const GetPostDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const postDetail = useQuery({
    queryKey:["detail", id],
    queryFn:() => getPostDetail(id)
  })
  const goBack = () => {
    navigate("/")
  }
  return (
    <div className="flex-col p-2 py-48">
      <Card className="max-w-sm m-auto">
        <h5 className="text-2xl font-bold tracking-tight text-blue-600 dark:text-white">
          {postDetail?.data?.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {postDetail?.data?.body}
        </p>
        <Button color="blue" onClick={goBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
          </svg>
        </Button>
      </Card>
    </div>
  )
}

export default GetPostDetail