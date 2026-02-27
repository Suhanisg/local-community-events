import { Link } from "react-router-dom";

function EventCard({ event }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px",
            borderRadius: "8px"
        }}>
            <h3>{event.title}</h3>
            <p>Type: {event.type}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>

            <Link to={`/event/${event.id}`}>
                View Details
            </Link>
        </div>
    );
}

export default EventCard;