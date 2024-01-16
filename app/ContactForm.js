// ContactForm.js
import React, { useState } from 'react';

export default function ContactForm({ darkMode }) {
    return (
        <form className="mt-4 max-w-sm mx-auto ">
            <div className="mb-2">
                <label className={`block ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs font-semibold mb-1`} htmlFor="name">
                    Name
                </label>
                <input
                    className={`w-full px-2 py-1 border border-gray-300 rounded-md text-xs ${darkMode ? 'text-gray-300' : 'text-black'}`}
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>
            <div className="mb-2">
                <label className={`block ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs font-semibold mb-1`} htmlFor="email">
                    Email
                </label>
                <input
                    className={`w-full px-2 py-1 border border-gray-300 rounded-md text-xs ${darkMode ? 'text-gray-300' : 'text-black'}`}
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="mb-4">
                <label className={`block ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs font-semibold mb-1`} htmlFor="message">
                    Message
                </label>
                <textarea
                    className={`w-full px-2 py-1 border border-gray-300 rounded-md text-xs ${darkMode ? 'text-gray-300' : 'text-black'}`}
                    id="message"
                    name="message"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button
                className={`bg-blue-500 text-white px-4 py-2 rounded-md text-xs hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
                type="submit"
            >
                Send Message
            </button>
        </form>
    );
}