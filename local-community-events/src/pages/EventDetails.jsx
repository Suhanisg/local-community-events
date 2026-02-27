import { useParams } from "react-router-dom";
import { useState } from "react";
import events from "../data/events";

function EventDetails() {
    const { id } = useParams();
    const [joined, setJoined] = useState(false);

    const event = events.find((e) => e.id === Number(id));

    if (!event) {
        return <h2>Event not found</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>{event.title}</h2>
            <p><strong>Type:</strong> {event.type}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Host:</strong> {event.host}</p>
            <p><strong>Description:</strong> {event.description}</p>

            {!joined ? (
                <button
                    onClick={() => setJoined(true)}
                    style={{
                        marginTop: "15px",
                        padding: "8px 15px",
                        cursor: "pointer"
                    }}
                >
                    Join Event
                </button>
            ) : (
                <p style={{ marginTop: "15px", color: "green" }}>
                    ✅ You have successfully joined this event!
                </p>
            )}
        </div>
    );
}

export default EventDetails;