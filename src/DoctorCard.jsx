import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DoctorCard(props) {
  const navigate=useNavigate()
  return (
    <div className="child">
        <p><b>Name:</b> {props.name}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Age:</b> {props.age}</p>
        <p><b>Specialization:</b> {props.specialization}</p>
        <p><b>Salary:</b> ₹{props.salary}</p>   
        <button onClick={()=>navigate(`/doctors/${props.id}`)}>View Details</button>
        <button onClick={()=>{props.deleteDoctor(props.id)}}>Delete</button>
        <button onClick={()=>navigate(`/edit/${props.id}`)}>update</button>

      
    </div>
  )
}