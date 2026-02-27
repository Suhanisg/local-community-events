import { useState } from "react";
import events from "../data/events";
import EventCard from "../components/EventCard";

function Home() {
    const [selectedType, setSelectedType] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    // Get unique types
    const types = [...new Set(events.map((event) => event.type))];

    // Get unique locations
    const locations = [...new Set(events.map((event) => event.location))];

    // Filter logic
    const filteredEvents = events.filter((event) => {
        return (
            (selectedType === "" || event.type === selectedType) &&
            (selectedLocation === "" || event.location === selectedLocation)
        );
    });

    return (
        <div style={{ padding: "20px" }}>
            <h2>Explore Events</h2>

            {/* Filters */}
            <div style={{ marginBottom: "20px" }}>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="">All Types</option>
                    {types.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>

                <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    style={{ marginLeft: "10px" }}
                >
                    <option value="">All Locations</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            {/* Event Cards */}
            {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))
            ) : (
                <p>No events found</p>
            )}
        </div>
    );
}

export default Home;