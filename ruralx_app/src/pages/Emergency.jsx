import React from 'react';
import { AlertCircle, Phone, Navigation } from 'lucide-react';

export default function Emergency() {
    return (
        <div className="page-container fade-in-up">
            <div className="page-header error">
                <h1>Emergency Assistance</h1>
                <p className="subtitle text-error">Active Weather Alerts & Helplines</p>
            </div>

            <div className="alert-card mt-6">
                <div className="alert-header">
                    <AlertCircle size={24} className="text-error" />
                    <h3>No Active Cyclones</h3>
                </div>
                <p>Weather is optimal for farming in your registered location.</p>
            </div>

            <div className="list-container mt-6">
                <h3>Contact Helplines</h3>

                <div className="helpline-card">
                    <div className="helpline-info">
                        <h4>Kisan Call Center</h4>
                        <p>1800-180-1551</p>
                    </div>
                    <button className="icon-btn success"><Phone size={20} /></button>
                </div>

                <div className="helpline-card">
                    <div className="helpline-info">
                        <h4>Disaster Management</h4>
                        <p>108</p>
                    </div>
                    <button className="icon-btn error"><Phone size={20} /></button>
                </div>
            </div>
        </div>
    );
}
