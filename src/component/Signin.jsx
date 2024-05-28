import './Login.css'
import { useState, useEffect } from 'react'
const Signup = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [phno, setphno] = useState()
    const [confirmpassword, setconfirmpassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email + " " + password)
    }

    return (
        <>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <div className="innerbox">
                        <h1>Signup</h1>
                        <label>Email: </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required/>
                        <label>Phone Number: </label>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phno}
                            onChange={(e) => setphno(e.target.value)}
                            required/>
                        <label>Password: </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required/>
                        <label>Confirm Password: </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmpassword}
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            required/>
                        <button type="submit">Signup</button>
                        <a href="/">Already a user</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup