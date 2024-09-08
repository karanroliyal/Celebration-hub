import React from 'react';

export default function Query() {
    return (
        <div className='Query-form-wrapper'>
            <div className="form-container">
                <h2>Help us with your details</h2>
                <p>Our executives will call you to understand your requirements to find suitable vendors</p>
                <form className="details-form">
                    <input type="text" placeholder="Enter your name" required />
                    <input type="tel" placeholder="Enter mobile number" required />
                    <select required>
                        <option value="" disabled selected>Search For Vendors</option>
                        <option value="photographers">Photographers</option>
                        <option value="caterers">Caterers</option>
                        <option value="decorators">Decorators</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
}
