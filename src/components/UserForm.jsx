import { useState } from "react";
import { api } from "../Api/api";
import "./UserForm.css";

export default function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await api.createUser({ name, email });
        alert(`User created with ID: ${user.id}`);
        setName("");
        setEmail("");
    };

    return (
        <div className="card">
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            />

            <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />

            <button type="submit">Create User</button>
        </form>
        </div>
    );
}
