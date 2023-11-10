import React,{useEffect,useState} from 'react'
import appwriteService from "../appwrite/config"
import { Container,PostCard } from '../components'
function AllPosts() {
const [posts,setPosts]=useState([])
useEffect(()=>{
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }else{
            console.log("error in getting posts")
        }
    })
},[])




  return (
    <div className='w-fu;; py-8'>
    <Container>
        <div className='flex flex-wrap'>
        {
            posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>

                </div>
            ))
        }

        </div>
    </Container>

    </div>
  )
}

export default AllPosts