import React from 'react';

export default function HomeBanner() {
    return (
        <div  className="home-banner-wrapper">

            <section className="slider-section">
                <div className="background-image">
                    <div className="form-container">
                        <h2>India&aposs Largest <span>Wedding Services </span>Marketplace</h2>
                        <p>Hire best vendors such as photographers, makeup artists, Mandap, Caterers, and so on.</p>
                        <form>
                            <div className="form-row">
                                <select id="location" name="location" required>
                                    <option value="">Choose Location</option>
                                    <option value="patna">Patna</option>
                                    <option value="ranchi">Ranchi</option>
                                    <option value="gaya">Gaya</option>
                                    <option value="noida">Noida</option>
                                </select>

                                <select id="service" name="service" required>
                                    <option value="">Choose Service</option>
                                    <option value="wedding-photography">Wedding Photography</option>
                                    <option value="banquet-hall">Banquet Hall</option>
                                    <option value="decoration">Decoration</option>
                                    <option value="catering">Catering</option>
                                </select>

                                <button type="submit">Find Vendors</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}
