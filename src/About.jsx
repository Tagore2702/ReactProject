import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Card1.css'
import DoctorCard from './DoctorCard'

export default function About() {

  const [doctors, setDoctors] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  function loadData() {
    axios.get("https://doc-back.onrender.com/doctors")
      .then((result) => {
        setDoctors(result.data)
      })
  }

  const filterDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  )

  // delete doctor
  function deleteDoctor(id){
    axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
    .then(()=>{
      alert("Doctor Deleted Successfully!")
      loadData()
    })
  }

  return (
    <div className="container">

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Doctor..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="card">
        {
          filterDoctors.map((i) => (
            <div key={i.id}>
              <DoctorCard
                name={i.name}
                gender={i.gender}
                age={i.age}
                specialization={i.specialization}
                salary={i.salary}
                id={i.id} 
                deleteDoctor={deleteDoctor}
              />
            </div>
          ))
        }
      </div>

    </div>
  )
}