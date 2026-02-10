import { useEffect, useState } from "react";
import { api } from "../Api/api";
import "./MeetingList.css";

export default function MeetingList() {
    const [meetings, setMeetings] = useState([]);

    const loadMeetings = async () => {
        const data = await api.getMeetings();
        setMeetings(data);
    };

    const deleteMeeting = async (id) => {
        await api.deleteMeeting(id);
        loadMeetings();
    };

    useEffect(() => {
        loadMeetings();
    }, []);

    return (
        <div className="card">
        <h2>Meetings</h2>

        {meetings.map(m => (
            <div key={m.id} className="meeting">
            <p><b>{m.title}</b></p>
            <p>{new Date(m.startTime).toLocaleString()} - {new Date(m.endTime).toLocaleString()}</p>
            <button onClick={() => deleteMeeting(m.id)}>Delete</button>
            </div>
        ))}
        </div>
    );
}
