import React from 'react';

export default function Schemes() {
    return (
        <div className="page-container fade-in-up">
            <div className="page-header">
                <h1>Government Schemes</h1>
                <p className="subtitle">Find subsidies and financial aid matching your profile</p>
            </div>

            <div className="list-container mt-6">
                <div className="scheme-card">
                    <div className="scheme-badge urgent">Deadline Approaching</div>
                    <h3>PM-Kisan Samman Nidhi</h3>
                    <p>Financial benefit of ₹6,000 per year to eligible farmer families.</p>
                    <button className="secondary-btn mt-2">Apply Now</button>
                </div>

                <div className="scheme-card">
                    <div className="scheme-badge">Available</div>
                    <h3>Pradhan Mantri Fasal Bima Yojana</h3>
                    <p>Crop insurance scheme to provide financial support to farmers.</p>
                    <button className="secondary-btn mt-2">Apply Now</button>
                </div>
            </div>
        </div>
    );
}
