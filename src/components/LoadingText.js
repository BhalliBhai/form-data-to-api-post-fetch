import React, { useEffect, useState } from "react"

const LoadingText = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    fetch("https://62a1c7b2cd2e8da9b0fa65f5.mockapi.io/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setUsers(data)
        console.log(data);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="api-data">
      <h4>Refresh the page to see updated values</h4>
      <br/>
      {isLoading && <p>Loading...</p>}
      {users.length > 0 && (
        <ol>
          {users.map(users => (
            <li key={users.id}> <span>Name:</span> {users.body.name} - <span>Email:</span> {users.body.email} - <span>Contact:</span> {users.body.mobileNumber} </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default LoadingText;