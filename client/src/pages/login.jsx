import React from "react"
import { useState } from "react"
export default function Login(){

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const loginUser = (e) =>{
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={loginUser()}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="email" value={data.email} onChange={(e) => setData({...data, email:e.target.value })}/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password" value={data.password} onChange={(e) => setData({...data, password:e.target.value })}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}