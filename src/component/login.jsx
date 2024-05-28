import './Login.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navi=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email + " " + password)
        navi('/dashboard')
    }

    return (
        <>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <div className="innerbox">
                        <h1>Signin</h1>
                        <label>Email: </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                        <label>Password: </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        <button type="submit">Signin</button>
                        <a href="/signup">Create new user</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
