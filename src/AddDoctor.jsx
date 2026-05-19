import React, { useState } from 'react'
import axios from 'axios'

export default function AddDoctor() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [salary, setSalary] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    axios.post("https://doc-back.onrender.com/doctors", {
      name, age, gender, specialization, salary
    }).then((result) => {
      console.log(result.data)
      alert("Doctor Added Successfully!")
      setName("")
      setAge("")
      setGender("")
      setSpecialization("")
      setSalary("") 
    })
  }
  
  return (
    <div>
      <h2>Register Doctor</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter doctor name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />

        <input
          type="number"
          placeholder="Enter doctor age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        /><br /><br />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select><br /><br />

        <input
          type="text"
          placeholder="Enter doctor specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          required
        /><br /><br />

        <input
          type="number"
          placeholder="Enter doctor salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Add Doctor</button>

      </form>
    </div>
  )
}