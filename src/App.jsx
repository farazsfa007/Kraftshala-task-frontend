import "./App.css";
import MeetingForm from "./components/MeetingForm.jsx";
import MeetingList from "./components/MeetingList.jsx";
import UserDetails from "./components/userDetails.jsx";
import UserForm from "./components/userForm.jsx";

export default function App() {
  return (
    <div className="container">
      <h1>📅 Calendar Booking System</h1>

      <UserForm />
      <UserDetails />

      <MeetingForm />
      <MeetingList />
    </div>
  );
}
