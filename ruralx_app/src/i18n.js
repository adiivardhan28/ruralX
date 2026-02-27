import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "greeting": "Welcome to RuralX",
      "subtitle": "Unified AI Rural Assistance Platform",
      "selectLanguage": "Select Your Language",
      "continue": "Continue",
      "enterPhone": "Enter your Phone Number",
      "phonePlaceholder": "+91 9876543210",
      "sendOtp": "Send OTP",
      "enterOtp": "Enter OTP",
      "otpSentMessage": "OTP sent to your number",
      "verifyOtp": "Verify and Login",
      "homeWelcome": "Dashboard",
      "navHome": "Home",
      "navSchemes": "Schemes",
      "navEmergency": "Emergency",
    }
  },
  hi: {
    translation: {
      "greeting": "रूरलएक्स में आपका स्वागत है",
      "subtitle": "एकीकृत एआई ग्रामीण सहायता मंच",
      "selectLanguage": "अपनी भाषा चुनें",
      "continue": "आगे बढ़ें",
      "enterPhone": "अपना फ़ोन नंबर दर्ज करें",
      "phonePlaceholder": "+91 9876543210",
      "sendOtp": "ओटीपी भेजें",
      "enterOtp": "ओटीपी दर्ज करें",
      "otpSentMessage": "आपके नंबर पर ओटीपी भेजा गया",
      "verifyOtp": "सत्यापित करें और लॉगिन करें",
      "homeWelcome": "डैशबोर्ड",
      "navHome": "होम",
      "navSchemes": "योजनाएं",
      "navEmergency": "आपातकालीन",
    }
  },
  te: {
    translation: {
      "greeting": "రూరల్ఎక్స్ కు స్వాగతం",
      "subtitle": "యూనిఫైడ్ AI రూరల్ అసిస్టెన్స్ ప్లాట్‌ఫారమ్",
      "selectLanguage": "మీ భాషను ఎంచుకోండి",
      "continue": "కొనసాగించండి",
      "enterPhone": "మీ ఫోన్ నంబర్‌ను నమోదు చేయండి",
      "phonePlaceholder": "+91 9876543210",
      "sendOtp": "OTP పంపండి",
      "enterOtp": "OTP నమోదు చేయండి",
      "otpSentMessage": "మీ నంబర్‌కు OTP పంపబడింది",
      "verifyOtp": "నిర్ధారించండి మరియు లాగిన్ చేయండి",
      "homeWelcome": "డాష్‌బోర్డ్",
      "navHome": "హోమ్",
      "navSchemes": "పథకాలు",
      "navEmergency": "అత్యవసర పరిస్థితి",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
