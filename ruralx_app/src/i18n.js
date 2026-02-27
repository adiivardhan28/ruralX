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
      // Home translations
      "homeSubtitle": "Diagnose your crops instantly",
      "favorable": "Favorable:",
      "avoid": "Avoid:",
      "region": "Region",
      "detectingLocation": "Detecting Location...",
      "locationUnavailable": "Location Unavailable",
      "locationDisabled": "Location Disabled",
      "enableLocation": "Enable Location",
      "cropScan": "Crop Scan",
      "cropScanDesc": "Upload a photo to detect diseases",
      "analyzingCrop": "Analyzing Crop Data leveraging EfficientNet-B0...",
      "closeReport": "Close Report",
      // Schemes translations
      "schemesTitle": "Government Schemes",
      "schemesSubtitle": "Available Support & Subsidies",
      "applyNow": "Apply Now",
      "deadlineApproaching": "Deadline Approaching",
      "newScheme": "New Scheme",
      // Emergency translations
      "emergencyTitle": "Emergency Assistance",
      "emergencySubtitle": "Active Weather Alerts & Helplines",
      "noCyclones": "No Active Cyclones",
      "weatherOptimal": "Weather is optimal for farming in your registered location.",
      "contactHelplines": "Contact Helplines",
      "kisanCallCenter": "Kisan Call Center",
      "disasterMgmt": "Disaster Management",
      // Registration translations
      "createAccount": "Create Account",
      "joinSubtitle": "Join the RuralX community today",
      "fullName": "Full Name",
      "selectState": "Select your State (for Crop Inference)",
      "register": "Register",
      "alreadyHaveAccount": "Already have an account? Login here"
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
      // Home translations
      "homeSubtitle": "तुरंत अपनी फसलों का निदान करें",
      "favorable": "अनुकूल:",
      "avoid": "बचें:",
      "region": "क्षेत्र",
      "detectingLocation": "स्थान का पता लगाया जा रहा है...",
      "locationUnavailable": "स्थान अनुपलब्ध है",
      "locationDisabled": "स्थान अक्षम है",
      "enableLocation": "स्थान सक्षम करें",
      "cropScan": "फसल स्कैन",
      "cropScanDesc": "बीमारियों का पता लगाने के लिए एक तस्वीर अपलोड करें",
      "analyzingCrop": "फसल डेटा का विश्लेषण किया जा रहा है...",
      "closeReport": "रिपोर्ट बंद करें",
      // Schemes translations
      "schemesTitle": "सरकारी योजनाएं",
      "schemesSubtitle": "उपलब्ध सहायता और सब्सिडी",
      "applyNow": "अभी आवेदन करें",
      "deadlineApproaching": "अंतिम तिथि निकट है",
      "newScheme": "नई योजना",
      // Emergency translations
      "emergencyTitle": "आपातकालीन सहायता",
      "emergencySubtitle": "सक्रिय मौसम अलर्ट और हेल्पलाइन",
      "noCyclones": "कोई सक्रिय चक्रवात नहीं",
      "weatherOptimal": "आपके पंजीकृत स्थान में मौसम खेती के लिए इष्टतम है।",
      "contactHelplines": "हेल्पलाइन से संपर्क करें",
      "kisanCallCenter": "किसान कॉल सेंटर",
      "disasterMgmt": "आपदा प्रबंधन",
      // Registration translations
      "createAccount": "खाता बनाएं",
      "joinSubtitle": "आज ही रूरलएक्स समुदाय में शामिल हों",
      "fullName": "पूरा नाम",
      "selectState": "अपना राज्य चुनें",
      "register": "रजिस्टर करें",
      "alreadyHaveAccount": "क्या आपके पास पहले से खाता है? यहाँ लॉगिन करें"
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
      // Home translations
      "homeSubtitle": "తక్షణమే మీ పంటలను నిర్ధారించండి",
      "favorable": "అనుకూలమైనది:",
      "avoid": "నివారించండి:",
      "region": "ప్రాంతం",
      "detectingLocation": "స్థానాన్ని గుర్తించడం...",
      "locationUnavailable": "స్థానం అందుబాటులో లేదు",
      "locationDisabled": "స్థానం ఆపివేయబడింది",
      "enableLocation": "స్థానాన్ని ప్రారంభించండి",
      "cropScan": "పంట స్కాన్",
      "cropScanDesc": "వ్యాధులను గుర్తించడానికి ఫోటోను అప్‌లోడ్ చేయండి",
      "analyzingCrop": "పంట డేటాను విశ్లేషిస్తోంది...",
      "closeReport": "నివేదికను మూసివేయండి",
      // Schemes translations
      "schemesTitle": "ప్రభుత్వ పథకాలు",
      "schemesSubtitle": "అందుబాటులో ఉన్న మద్దతు & రాయితీలు",
      "applyNow": "ఇప్పుడు వర్తించు",
      "deadlineApproaching": "గడువు సమీపిస్తోంది",
      "newScheme": "కొత్త పథకం",
      // Emergency translations
      "emergencyTitle": "అత్యవసర సహాయం",
      "emergencySubtitle": "చురుకైన వాతావరణ హెచ్చరికలు & హెల్ప్‌లైన్‌లు",
      "noCyclones": "చురుకైన తుఫానులు లేవు",
      "weatherOptimal": "మీ నమోదిత ప్రదేశంలో వ్యవసాయానికి వాతావరణం అనుకూలంగా ఉంటుంది.",
      "contactHelplines": "హెల్ప్‌లైన్‌లను సంప్రదించండి",
      "kisanCallCenter": "కిసాన్ కాల్ సెంటర్",
      "disasterMgmt": "విపత్తు నిర్వహణ",
      // Registration translations
      "createAccount": "ఖాతా సృష్టించండి",
      "joinSubtitle": "ఈరోజే రూరల్ఎక్స్ సంఘంలో చేరండి",
      "fullName": "పూర్తి పేరు",
      "selectState": "మీ రాష్ట్రాన్ని ఎంచుకోండి",
      "register": "రిజిస్టర్",
      "alreadyHaveAccount": "ఇప్పటికే ఖాతా ఉందా? ఇక్కడ లాగిన్ అవ్వండి"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
