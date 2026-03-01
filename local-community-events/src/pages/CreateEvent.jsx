import { useState } from "react";

function CreateEvent() {
    const [formData, setFormData] = useState({
        title: "",
        type: "",
        date: "",
        location: "",
        host: "",
        description: ""
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.title ||
            !formData.type ||
            !formData.date ||
            !formData.location ||
            !formData.host
        ) {
            alert("Please fill all required fields!");
            return;
        }

        console.log("New Event:", formData);
        setSuccess(true);

        // Reset form
        setFormData({
            title: "",
            type: "",
            date: "",
            location: "",
            host: "",
            description: ""
        });
    };

    return (
        <div className="form-container">
            <h2>Create New Event</h2>

            <form onSubmit={handleSubmit} className="event-form">
                <input
                    name="title"
                    placeholder="Event Title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <input
                    name="type"
                    placeholder="Event Type"
                    value={formData.type}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <input
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                />

                <input
                    name="host"
                    placeholder="Host Name"
                    value={formData.host}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <button type="submit">Create Event</button>
            </form>

            {success && (
                <p style={{ color: "green", marginTop: "15px" }}>
                    ✅ Event created successfully!
                </p>
            )}
        </div>
    );
}

export default CreateEvent;