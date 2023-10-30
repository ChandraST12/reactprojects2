// import  { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//    const [data,setData] = useState([]);

//     useEffect(()=>{
//         fetch('https://api.github.com/users/ChandraST12')
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data);
//             setData(data)
//         })
//     },[])
  return (
   <>
     <div>
        Name:{data.name}
     </div>
     <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        Github Followers :{data.followers}
    </div>
    <img src={data.avatar_url}/>
   </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ChandraSt12')
    return response.json()
}