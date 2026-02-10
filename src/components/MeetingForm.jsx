import { useState } from "react";
import { api } from "../Api/api";
import "./MeetingForm.css";

export default function MeetingForm() {
    const [form, setForm] = useState({
        userId: "",
        title: "",
        startTime: "",
        endTime: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    ...form,
    startTime: new Date(form.startTime).toISOString(),
    endTime: new Date(form.endTime).toISOString()
  };

  const res = await api.createMeeting(payload);

  if (res.error) {
    alert(res.error);
  } else if (res.message) {
    alert(res.message);
  } else {
    alert("Meeting created successfully");
  }
};


    return (
        <div className="card">
        <h2>Create Meeting</h2>

        <form onSubmit={handleSubmit}>
            <input name="userId" placeholder="User ID" onChange={handleChange} />
            <input name="title" placeholder="Title" onChange={handleChange} />
            <input type="datetime-local" name="startTime" onChange={handleChange} />
            <input type="datetime-local" name="endTime" onChange={handleChange} />

            <button type="submit">Create Meeting</button>
        </form>
        </div>
    );
}
