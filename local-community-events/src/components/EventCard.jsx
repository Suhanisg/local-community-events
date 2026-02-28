import { Link } from "react-router-dom";

function EventCard({ event }) {
    return (
        <div className="card">
            <h3>{event.title}</h3>
            <p><strong>Type:</strong> {event.type}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>

            <Link to={`/event/${event.id}`} className="details-btn">
                View Details
            </Link>
        </div>
    );
}

export default EventCard;