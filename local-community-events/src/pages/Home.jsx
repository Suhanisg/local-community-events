import { useState, useEffect } from "react";
import events from "../data/events";
import EventCard from "../components/EventCard";

function Home() {
    const [selectedType, setSelectedType] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const eventsPerPage = 6;

    // Unique filter values
    const types = [...new Set(events.map((event) => event.type))];
    const locations = [...new Set(events.map((event) => event.location))];

    // Filtering logic
    const filteredEvents = events.filter((event) => {
        return (
            (selectedType === "" || event.type === selectedType) &&
            (selectedLocation === "" || event.location === selectedLocation) &&
            (selectedDate === "" || event.date === selectedDate) &&
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
    const startIndex = (currentPage - 1) * eventsPerPage;
    const currentEvents = filteredEvents.slice(
        startIndex,
        startIndex + eventsPerPage
    );

    // Reset page when filters/search/date change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedType, selectedLocation, searchTerm, selectedDate]);

    return (
        <div className="main-container">
            <h2>Explore Events</h2>

            {/* Search Bar */}
            <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "260px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>

            {/* Filters */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
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

                {/* Date Filter */}
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{
                        marginLeft: "10px",
                        padding: "8px",
                        borderRadius: "5px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>

            {/* Event Grid */}
            <div className="events-grid">
                {currentEvents.length > 0 ? (
                    currentEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <p style={{ textAlign: "center" }}>No events found</p>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div style={{ textAlign: "center", marginTop: "25px" }}>
                    <button
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                        style={{ marginRight: "10px", padding: "8px 14px" }}
                    >
                        Previous
                    </button>

                    <span>
            Page {currentPage} of {totalPages}
          </span>

                    <button
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === totalPages}
                        style={{ marginLeft: "10px", padding: "8px 14px" }}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;