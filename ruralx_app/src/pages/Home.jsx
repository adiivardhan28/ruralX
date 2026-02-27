import React from 'react';
import { Camera, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="page-container fade-in-up">
            <div className="page-header">
                <h1>{t('homeWelcome')}</h1>
                <p className="subtitle">How can we help you today?</p>
            </div>

            <div className="action-grid mt-6">
                <div className="action-card">
                    <div className="action-icon-wrapper scan">
                        <Camera size={32} />
                    </div>
                    <h3>Crop Scan</h3>
                    <p>Take a photo to detect diseases instantly</p>
                </div>

                <div className="action-card">
                    <div className="action-icon-wrapper voice">
                        <Mic size={32} />
                    </div>
                    <h3>Voice Assistant</h3>
                    <p>Speak to diagnose and get advice</p>
                </div>
            </div>

            <div className="dashboard-section mt-6">
                <h3>Recent Activity</h3>
                <div className="empty-state">
                    <p>No recent activity detected.</p>
                </div>
            </div>
        </div>
    );
}
