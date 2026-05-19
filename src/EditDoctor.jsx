import React, { use, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function EditDoctor() {
  const { id } = useParams()

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [salary, setSalary] = useState("")

  useEffect(() => {
    loadDoctor()
    UpdateDoctor()
  }, [])

  function loadDoctor() {
    axios.get(`https://doc-back.onrender.com/doctors/${id}`)
      .then((response) => {
        setName(response.data.name)
        setAge(response.data.age)
        setGender(response.data.gender)
        setSpecialization(response.data.specialization)
        setSalary(response.data.salary)
      })
      .catch((err) => {
        console.log(err)
      })
  }

    function UpdateDoctor(e) {
  e.preventDefault()

  axios.put(`https://doc-back.onrender.com/doctors/${id}`, {
    name,
    age,
    gender,
    specialization,
    salary
  })
    .then((result) => {
      console.log(result.data)
      alert("Doctor Updated Successfully!")
    })
    .catch((err) => {
      console.log(err)
    })
}



  return (
    <div>

      <h2>Update Doctor</h2>

      <form onSubmit={UpdateDoctor}>

        <input
          type="text"
          placeholder="Enter doctor name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Enter doctor age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br /><br />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <br /><br />

        <input
          type="text"
          placeholder="Enter doctor specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter doctor salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Update Doctor</button>

      </form>
    </div>
  )
}

