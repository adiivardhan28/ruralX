import React, { useState } from 'react';
import { Camera, Mic, MapPin, AlertTriangle, ShieldCheck, ThermometerSun, Leaf, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();
    const [showReport, setShowReport] = useState(false);
    const [isScanning, setIsScanning] = useState(false);

    // Mock Data for Phase 3
    const locationData = {
        state: "Telangana",
        favorableCrops: ["Cotton", "Rice", "Maize"],
        unfavorableCrops: ["Wheat", "Apple"]
    };

    const diseaseReport = {
        disease: "Leaf Blight",
        confidence: "94%",
        severity: "High",
        reason: "High humidity combined with low soil nitrogen levels.",
        pesticides: ["Fungicide X by AgroTech", "Mancozeb 75% WP"],
        contacts: ["AgroTech Cure: +91 9876543211", "Kisan Care: 1800-123-4567"],
        precautions: ["Ensure proper plant spacing", "Avoid overhead irrigation", "Test soil nitrogen regularly"]
    };

    const simulateScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setShowReport(true);
        }, 2000);
    };

    const handleTTS = () => {
        // Basic browser TTS mockup
        if ('speechSynthesis' in window) {
            const text = `Disease detected: ${diseaseReport.disease}. Severity is ${diseaseReport.severity}. Reason: ${diseaseReport.reason}.`;
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            alert("Text-to-Speech not supported in this browser.");
        }
    };

    return (
        <div className="page-container fade-in-up">
            {/* Location Intelligence Banner */}
            <div className="location-banner glass-card mb-6">
                <div className="location-header">
                    <MapPin size={20} className="text-primary" />
                    <h3>{locationData.state} Region</h3>
                </div>
                <div className="crops-info mt-2">
                    <div className="crop-badge favorable">
                        <Leaf size={14} className="mr-1" />
                        <strong>Favorable:</strong> {locationData.favorableCrops.join(', ')}
                    </div>
                    <div className="crop-badge unfavorable mt-2">
                        <AlertTriangle size={14} className="mr-1" />
                        <strong>Avoid:</strong> {locationData.unfavorableCrops.join(', ')}
                    </div>
                </div>
            </div>

            <div className="page-header">
                <h1>{t('homeWelcome')}</h1>
                <p className="subtitle">Diagnose your crops instantly</p>
            </div>

            {/* Action Grid */}
            <div className="action-grid mt-6">
                <div className="action-card" onClick={simulateScan}>
                    <div className="action-icon-wrapper scan">
                        <Camera size={32} />
                    </div>
                    <h3>Crop Scan</h3>
                    <p>Upload a photo to detect diseases</p>
                </div>

                <div className="action-card" onClick={simulateScan}>
                    <div className="action-icon-wrapper voice">
                        <Mic size={32} />
                    </div>
                    <h3>Voice Assistant</h3>
                    <p>Speak to describe symptoms</p>
                </div>
            </div>

            {/* Scanning Simulation */}
            {isScanning && (
                <div className="scanning-overlay fade-in-up mt-6">
                    <div className="scanner-line"></div>
                    <p>Analyzing Crop Data leveraging EfficientNet-B0...</p>
                </div>
            )}

            {/* Disease Diagnosis Report */}
            {showReport && !isScanning && (
                <div className="report-card glass-card slide-in-top mt-6">
                    <div className="report-header">
                        <div className="report-title-row">
                            <ShieldCheck size={28} className="text-error mr-2" />
                            <h2>{diseaseReport.disease}</h2>
                            <button className="icon-btn-small tts-btn ml-auto" onClick={handleTTS} aria-label="Listen to report">
                                <Volume2 size={20} />
                            </button>
                        </div>
                        <div className="severity-badges mt-2">
                            <span className="badge confidence">AI Confidence: {diseaseReport.confidence}</span>
                            <span className="badge severity error">Severity: {diseaseReport.severity}</span>
                        </div>
                    </div>

                    <div className="report-body mt-4">
                        <div className="report-section">
                            <h4><AlertTriangle size={16} className="inline-icon" /> Reason & Soil Impact</h4>
                            <p>{diseaseReport.reason}</p>
                        </div>

                        <div className="report-section">
                            <h4><ThermometerSun size={16} className="inline-icon" /> Recommended Pesticides</h4>
                            <ul className="custom-list">
                                {diseaseReport.pesticides.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                            <div className="contacts-box mt-2">
                                <strong>Cleaning & Curing Contacts:</strong>
                                {diseaseReport.contacts.map((c, i) => <div key={i} className="contact-item">{c}</div>)}
                            </div>
                        </div>

                        <div className="report-section">
                            <h4><ShieldCheck size={16} className="inline-icon" /> Precautions for Next Cycle</h4>
                            <ul className="custom-list">
                                {diseaseReport.precautions.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>
                    </div>

                    <button className="primary-btn w-full mt-6" onClick={() => setShowReport(false)}>
                        Close Report
                    </button>
                </div>
            )}
        </div>
    );
}
