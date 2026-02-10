import { useState } from "react";
import { api } from "../Api/api";
import "./UserDetails.css";

export default function UserDetails() {
    const [userId, setUserId] = useState("");
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        const data = await api.getUser(userId);
        setUser(data);
    };

    return (
        <div className="card">
        <h2>Get User</h2>

        <input
            placeholder="User ID"
            value={userId}
            onChange={e => setUserId(e.target.value)}
        />

        <button onClick={fetchUser}>Fetch User</button>

        {user && (
            <div className="result">
            <p><b>ID:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            </div>
        )}
        </div>
    );
}
