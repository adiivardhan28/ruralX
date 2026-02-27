import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import './Login.css';

export default function Login({ onLoginComplete }) {
    const { t } = useTranslation();
    const [step, setStep] = useState(1); // 1 = Phone, 2 = OTP
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6 digit OTP mock

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if (phone.length > 5) {
            setStep(2);
            // Mock sending OTP
            console.log("OTP Sent");
        }
    };

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        if (otpValue.length === 6) {
            if (onLoginComplete) {
                onLoginComplete();
            }
        }
    };

    return (
        <div className="login-container">
            <div className="glass-card login-card fade-in-up">
                {step === 1 ? (
                    <>
                        <div className="login-header">
                            <div className="icon-circle">
                                <Phone className="header-icon" size={32} />
                            </div>
                            <h2>{t('enterPhone')}</h2>
                            <p className="subtitle">{t('subtitle')}</p>
                        </div>

                        <form onSubmit={handlePhoneSubmit} className="login-form">
                            <div className="input-group">
                                <span className="country-code">+91</span>
                                <input
                                    type="tel"
                                    className="phone-input"
                                    placeholder={t('phonePlaceholder')}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            <button
                                type="submit"
                                className={`primary-btn w-full flex-center ${phone.length < 5 ? 'disabled' : ''}`}
                                disabled={phone.length < 5}
                            >
                                {t('sendOtp')}
                                <ArrowRight size={20} className="ml-2" />
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <div className="login-header">
                            <div className="icon-circle success">
                                <ShieldCheck className="header-icon" size={32} />
                            </div>
                            <h2>{t('enterOtp')}</h2>
                            <p className="subtitle">{t('otpSentMessage')}: {phone}</p>
                        </div>

                        <form onSubmit={handleOtpSubmit} className="login-form">
                            <div className="otp-container">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        className="otp-input"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Backspace' && !otp[index] && index > 0) {
                                                const prevInput = document.getElementById(`otp-${index - 1}`);
                                                if (prevInput) prevInput.focus();
                                            }
                                        }}
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                className={`primary-btn w-full mt-6 ${otp.join('').length < 6 ? 'disabled' : ''}`}
                                disabled={otp.join('').length < 6}
                            >
                                {t('verifyOtp')}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
