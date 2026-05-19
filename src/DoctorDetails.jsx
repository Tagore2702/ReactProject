import React, { use } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function DoctorDetails() {

    const {id}=useParams()

    useEffect(()=>{
        getDoctor()
    },[])   

    function getDoctor(){
        axios.get(`https://doc-back.onrender.com/doctors/${id}`)
        .then((mani)=>{
            console.log(mani.data)

        }
    )
  return (
    <div>
      <p>this is the doctor details page</p>
      {id}
    </div>
  )
}
}
