import Home from "../pages/home";
import Events from "../pages/events";
import { Routes, Route } from "react-router-dom";
import EventDetails from "../pages/eventDetails";

export default function ReactRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:eventname" element={<EventDetails />} />
    </Routes>
  );
}
