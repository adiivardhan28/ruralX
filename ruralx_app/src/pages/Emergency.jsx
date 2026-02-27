import React from 'react';
import { AlertCircle, Phone, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Emergency() {
    const { t } = useTranslation();
    return (
        <div className="page-container fade-in-up">
            <div className="page-header error">
                <h1>{t('emergencyTitle')}</h1>
                <p className="subtitle text-error">{t('emergencySubtitle')}</p>
            </div>

            <div className="alert-card mt-6">
                <div className="alert-header">
                    <AlertCircle size={24} className="text-error" />
                    <h3>{t('noCyclones')}</h3>
                </div>
                <p>{t('weatherOptimal')}</p>
            </div>

            <div className="list-container mt-6">
                <h3>{t('contactHelplines')}</h3>

                <div className="helpline-card">
                    <div className="helpline-info">
                        <h4>{t('kisanCallCenter')}</h4>
                        <p>1800-180-1551</p>
                    </div>
                    <button className="icon-btn success"><Phone size={20} /></button>
                </div>

                <div className="helpline-card">
                    <div className="helpline-info">
                        <h4>{t('disasterMgmt')}</h4>
                        <p>108</p>
                    </div>
                    <button className="icon-btn error"><Phone size={20} /></button>
                </div>
            </div>
        </div>
    );
}
