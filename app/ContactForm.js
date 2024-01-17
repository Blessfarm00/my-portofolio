import React from 'react';

export default function ContactForm({ darkMode }) {
    const handleButtonClick = () => {
        const emailSubject = encodeURIComponent("");
        const emailBody = encodeURIComponent("");

        // Ganti dengan alamat email tujuan
        const emailAddress = encodeURIComponent("ryanfebrialdo28@gmail.com");

        const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="mt-4 max-w-sm mx-auto">
            <button
                className={`bg-blue-500 text-white px-4 py-2 rounded-md text-xs hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
                onClick={handleButtonClick}
            >
                Send Message
            </button>
        </div>
    );
}
