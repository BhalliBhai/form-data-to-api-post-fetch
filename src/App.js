import "./App.css";
import { useState } from "react";
import axios from "axios";
// import Users from "./components/Users";
import LoadingText from './components/LoadingText'
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
        // null input fields values after submission
        setName("");
        setEmail("");
        setMobileNumber("");
        // success message
        setMessage("User created successfully");
    // posting form data to API replace below link with your api link
    try {
      let res = axios.post("https://62a1c7b2cd2e8da9b0fa65f5.mockapi.io/users", {
        // its how data will store in API
        method: "POST",   // you can remove this code if you don't want
        body:({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      // let resJson = axios.res.json();
      // checking data sent or not
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h3>Send Form Data to API</h3>
      <form onSubmit={handleSubmit}>
        <input
        required
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <button type="submit">Create User</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      <hr/>
      <div>
        {/* <Users/> */}
        <LoadingText/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
