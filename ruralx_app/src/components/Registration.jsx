import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

export default function Registration() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        state: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.fullName && formData.phone.length > 5 && formData.state) {
            // In a real app, API call goes here.
            navigate('/dashboard');
        }
    };

    const isFormValid = formData.fullName && formData.phone.length > 5 && formData.state;

    return (
        <div className="register-container">
            <div className="glass-card register-card fade-in-up">
                <div className="register-header">
                    <div className="icon-circle">
                        <User className="header-icon" size={32} />
                    </div>
                    <h2>Create Account</h2> {/* Can be i18n later */}
                    <p className="subtitle">Join the RuralX community today</p>
                </div>

                <form onSubmit={handleSubmit} className="register-form">
                    <div className="input-field-group">
                        <User className="input-icon" size={20} />
                        <input
                            type="text"
                            name="fullName"
                            className="form-input"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-field-group">
                        <Phone className="input-icon" size={20} />
                        <input
                            type="tel"
                            name="phone"
                            className="form-input"
                            placeholder="+91 9876543210"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-field-group">
                        <MapPin className="input-icon" size={20} />
                        <select
                            name="state"
                            className="form-input"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select your State (for Crop Inference)</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className={`primary-btn w-full flex-center mt-6 ${!isFormValid ? 'disabled' : ''}`}
                        disabled={!isFormValid}
                    >
                        Register
                        <ArrowRight size={20} className="ml-2" />
                    </button>
                </form>

                <p className="auth-link">
                    Already have an account? <span onClick={() => navigate('/login')}>Login here</span>
                </p>
            </div>
        </div>
    );
}
