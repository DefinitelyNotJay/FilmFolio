import { AuthContext } from "../../../context/userContext";
import { useContext, useState } from "react";


export default function Home() {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>{user?.username || "Guest"}</h1>        
        </div>
    )
}