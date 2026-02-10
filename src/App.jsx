import "./App.css";
import MeetingForm from "./components/MeetingForm";
import MeetingList from "./components/MeetingList";
import UserDetails from "./components/userDetails";
import UserForm from "./components/userForm";

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
