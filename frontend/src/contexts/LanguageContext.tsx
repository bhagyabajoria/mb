import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isHindi: boolean;
  isEnglish: boolean;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.dashboard": "Dashboard",
    "nav.healthRecords": "Health Records",
    "nav.services": "Services",
    "nav.documents": "Documents",
    "nav.verify": "Verify",
    "nav.help": "Help",
    "nav.signIn": "Sign In",
    "nav.register": "Register",
    "nav.logout": "Logout",

    // Home Page
    "home.title": "Welcome to MediBridge",
    "home.subtitle": "Bridging Healthcare Communication Across Languages",
    "home.description":
      "Secure, multilingual health record management for modern healthcare",
    "home.getStarted": "Get Started",
    "home.learnMore": "Learn More",
    "home.features.title": "Key Features",
    "home.features.multilingual": "Multilingual Support",
    "home.features.multilingualDesc": "Support for English and Hindi languages",
    "home.features.secure": "Secure Records",
    "home.features.secureDesc": "End-to-end encrypted health data",
    "home.features.easy": "Easy Access",
    "home.features.easyDesc": "Simple and intuitive interface",

    // Dashboard
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome Back",
    "dashboard.addRecord": "Add New Record",
    "dashboard.viewRecords": "View All Records",
    "dashboard.search": "Search Records",
    "dashboard.recentRecords": "Recent Records",
    "dashboard.statistics": "Health Statistics",
    "dashboard.totalRecords": "Total Records",
    "dashboard.thisMonth": "This Month",
    "dashboard.quickActions": "Quick Actions",
    "dashboard.verifiedRecords": "Verified Records",
    "dashboard.activeConditions": "Active Conditions",
    "dashboard.activeMedications": "Active Medications",
    "dashboard.healthScore": "Health Score",
    "dashboard.verificationRate": "verification rate",
    "dashboard.beingMonitored": "Being monitored",
    "dashboard.currentPrescriptions": "Current prescriptions",
    "dashboard.thisMonthPrefix": "+",
    "dashboard.thisMonthSuffix": "this month",
    "dashboard.tabs.overview": "Overview",
    "dashboard.tabs.records": "Records",
    "dashboard.tabs.analytics": "Analytics",
    "dashboard.tabs.verify": "Verify",
    "dashboard.recentHealthRecords": "Recent Health Records",
    "dashboard.latestEntries": "Your latest health record entries",
    "dashboard.viewAllRecordsAndAdd": "View All Records & Add New",
    "dashboard.viewAll": "View All",
    "dashboard.viewAllRecords": "View All Records",
    "dashboard.noRecordsToExport": "No records to export",
    "dashboard.export.doctorName": "Doctor Name",
    "dashboard.export.hospitalName": "Hospital Name",
    "dashboard.export.visitDate": "Visit Date",
    "dashboard.export.icdCode": "ICD-11 Code",
    "dashboard.export.icdTitle": "ICD-11 Title",
    "dashboard.export.hindiName": "Hindi Name",
    "dashboard.export.verificationStatus": "Verification Status",
    "dashboard.sample.quickSample": "Quick Sample",
    "dashboard.sample.description":
      "This is a sample health record for demonstration purposes.",
    "dashboard.sample.doctorName": "Dr. Sample Physician",
    "dashboard.sample.hospitalName": "Sample Medical Center",
    "dashboard.sample.successMessage":
      "Sample health record added successfully",
    "dashboard.sample.errorMessage": "Failed to create sample record",
    "dashboard.logout": "Logout",
    "dashboard.recordDeleted": "Health record deleted successfully",

    // Health Records
    "records.title": "Health Records",
    "records.addNew": "Add New Record",
    "records.search": "Search records...",
    "records.filter": "Filter",
    "records.export": "Export",
    "records.patientName": "Patient Name",
    "records.age": "Age",
    "records.gender": "Gender",
    "records.male": "Male",
    "records.female": "Female",
    "records.other": "Other",
    "records.diagnosis": "Diagnosis",
    "records.symptoms": "Symptoms",
    "records.treatment": "Treatment",
    "records.date": "Date",
    "records.doctor": "Doctor",
    "records.hospital": "Hospital",
    "records.notes": "Notes",
    "records.save": "Save Record",
    "records.cancel": "Cancel",
    "records.edit": "Edit",
    "records.delete": "Delete",
    "records.view": "View",
    "records.hindiName": "Hindi Name",
    "records.englishName": "English Name",
    "records.icdCode": "ICD Code",
    "records.condition": "Condition",

    // Health Records Form - Additional fields
    "records.editRecord": "Edit Health Record",
    "records.createNewRecord": "Create New Health Record",
    "records.dialogDescription":
      "Add a new health record to your medical history",
    "records.recordType": "Record Type",
    "records.selectRecordType": "Select record type",
    "records.severity": "Severity",
    "records.selectSeverity": "Select severity",
    "records.severityMild": "Mild",
    "records.severityModerate": "Moderate",
    "records.severitySevere": "Severe",
    "records.patientNamePlaceholder": "Enter patient's name",
    "records.diseaseSearchLabel": "Disease/Condition Search",
    "records.diseaseSearchPlaceholder":
      "Search diseases, conditions, symptoms, or Ayurvedic names...",
    "records.namasteName": "Namaste Name",
    "records.namasteNamePlaceholder":
      "Namaste name (e.g., chaechak, Madhumeha)",
    "records.icd11Code": "ICD-11 Code",
    "records.icd11CodePlaceholder": "e.g., BA00",
    "records.icd11Title": "ICD-11 Title",
    "records.icd11TitlePlaceholder": "ICD-11 condition title",
    "records.diagnosisPlaceholder": "Medical diagnosis",
    "records.symptomsPlaceholder": "Comma-separated symptoms",
    "records.doctorName": "Doctor Name",
    "records.doctorNamePlaceholder": "Dr. John Smith",
    "records.hospitalClinic": "Hospital/Clinic",
    "records.hospitalClinicPlaceholder": "General Hospital",
    "records.visitDate": "Visit Date",
    "records.updateRecord": "Update Record",
    "records.createRecord": "Create Record",

    // Disease Search
    "search.title": "Disease/Condition Search",
    "search.generalTab": "General Search",
    "search.symptomsTab": "Search by Symptoms",
    "search.placeholder": "Search diseases, conditions, or symptoms...",
    "search.symptomPlaceholder":
      "Enter a symptom (e.g., fever, headache, cough)...",
    "search.selectedSymptoms": "Selected Symptoms:",
    "search.noResults": "No diseases found for your search.",
    "search.hindi": "Hindi:",
    "search.english": "English:",

    // Custom Disease Search Component
    "customDiseaseSearch.label": "Disease/Condition Search",
    "customDiseaseSearch.generalSearch": "General Search",
    "customDiseaseSearch.searchBySymptoms": "Search by Symptoms",
    "customDiseaseSearch.placeholder":
      "Search diseases, conditions, or symptoms...",
    "customDiseaseSearch.symptomPlaceholder":
      "Enter a symptom (e.g., fever, headache, cough)...",
    "customDiseaseSearch.selectedSymptoms": "Selected Symptoms:",
    "customDiseaseSearch.namaste": "Namaste",
    "customDiseaseSearch.more": "more",
    "customDiseaseSearch.noResultsFound": 'No diseases found for "{query}"',
    "customDiseaseSearch.tryDifferentTerms":
      "Try searching with different terms or symptoms",
    "customDiseaseSearch.namasteName": "Namaste Name",
    "customDiseaseSearch.symptoms": "Symptoms",
    "customDiseaseSearch.helpText":
      "Search from our curated database of diseases with ICD-11 codes and Ayurvedic names.",

    // Login Page
    "login.title": "Sign In to MediBridge",
    "login.subtitle": "Access your secure health records",
    "login.email": "Email Address",
    "login.password": "Password",
    "login.forgotPassword": "Forgot Password?",
    "login.rememberMe": "Remember Me",
    "login.signInButton": "Sign In",
    "login.noAccount": "Don't have an account?",
    "login.createAccount": "Create Account",
    "login.orContinueWith": "Or continue with",
    "login.google": "Google",
    "login.facebook": "Facebook",
    "login.terms": "Terms of Service",
    "login.privacy": "Privacy Policy",
    "login.secureLogin": "Secure Login",
    "login.continueWithGoogle": "Continue with Google",
    "login.securityMessage": "Your data is protected with bank-level security",
    "login.agreement":
      "By signing in, you agree to our Terms of Service and Privacy Policy",
    "login.backToHome": "Back to Home",
    "login.helpCenter": "Help Center",

    // Features Component
    "features.title": "Key Features",
    "features.subtitle":
      "Everything you need for comprehensive health record management",
    "features.multilingual.title": "Multilingual Support",
    "features.multilingual.desc":
      "Support for English and Hindi languages with seamless switching",
    "features.secure.title": "Secure Records",
    "features.secure.desc":
      "End-to-end encrypted health data with government-grade security",
    "features.easy.title": "Easy Access",
    "features.easy.desc":
      "Simple and intuitive interface designed for all users",
    "features.integration.title": "AYUSH Integration",
    "features.integration.desc":
      "Seamless integration with AYUSH and modern medical systems",
    "features.verification.title": "Document Verification",
    "features.verification.desc":
      "Instant verification of medical documents and certificates",
    "features.mobile.title": "Mobile Friendly",
    "features.mobile.desc":
      "Access your records anytime, anywhere on any device",

    // Features Component - Services Section
    "features.powerfulFeatures": "Powerful Features",
    "features.ourServices": "Our Services",
    "features.servicesDescription":
      "A comprehensive digital platform for managing your health documents with government-grade security and international standards.",
    "features.organizeStore.title": "Organize & Store",
    "features.organizeStore.description":
      "Automatically organize documents by type, date, and medical category for easy retrieval.",
    "features.verifyAuthenticity.title": "Verify Authenticity",
    "features.verifyAuthenticity.description":
      "Advanced verification using NAMASTE and ICD-11 (TM2) technology ensures your documents are genuine and tamper-proof.",
    "features.quickSearch.title": "Quick Search",
    "features.quickSearch.description":
      "Find any document instantly using smart search with filters by date, type, or medical condition.",
    "features.quickAccess.title": "Quick Access",
    "features.quickAccess.description":
      "Access and download your verified documents 24/7 from anywhere with internet connectivity.",
    "features.secureSharing.title": "Secure Sharing",
    "features.secureSharing.description":
      "Share verified copies with doctors, hospitals, or insurance companies with just a few clicks.",
    "features.icd11Classification.title": "ICD-11 (TM2) Classification",
    "features.icd11Classification.description":
      "Documents are automatically classified using WHO's latest International Classification of Diseases.",
    "features.documentSupport": "Document Support",
    "features.supportedDocumentTypes": "Supported Document Types",
    "features.documentTypesDescription":
      "Store and manage all types of health-related documents with ease",
    "features.documentTypes.labReports": "Lab Reports & Test Results",
    "features.documentTypes.vaccination": "Vaccination Certificates",
    "features.documentTypes.prescriptions": "Prescriptions & Medicine Lists",
    "features.documentTypes.medicalImaging":
      "Medical Imaging (X-Ray, MRI, CT Scan)",
    "features.documentTypes.dischargeSummaries": "Discharge Summaries",
    "features.documentTypes.insurance": "Insurance Documents",
    "features.documentTypes.medicalCertificates": "Medical Certificates",
    "features.documentTypes.healthCheckups": "Health Check-up Reports",

    // Security Component
    "security.title": "Your Health Data is Safe & Secure",
    "security.subtitle":
      "Enterprise-grade security meets healthcare compliance",
    "security.description":
      "Enterprise-grade security meets healthcare compliance standards with advanced encryption and verification technologies.",
    "security.encryption.title": "End-to-End Encryption",
    "security.encryption.desc": "All data encrypted with AES-256 standards",
    "security.encryption.description":
      "All your health data is protected with AES-256 encryption, ensuring complete privacy and security.",
    "security.digitalSignatures.title": "Digital Signatures",
    "security.digitalSignatures.description":
      "Advanced digital signature technology ensures document authenticity and prevents tampering.",
    "security.accessControl.title": "Access Control",
    "security.accessControl.description":
      "Multi-factor authentication and role-based access control protect your sensitive information.",
    "security.infrastructure.title": "Secure Infrastructure",
    "security.infrastructure.description":
      "Government-grade cloud infrastructure with redundant security layers and 99.9% uptime.",
    "security.compliance.title": "HIPAA Compliant",
    "security.compliance.desc":
      "Fully compliant with healthcare privacy regulations",
    "security.compliance.description":
      "Fully compliant with HIPAA, GDPR, and other international healthcare privacy regulations.",
    "security.auditTrail.title": "Audit Trail",
    "security.auditTrail.description":
      "Complete audit logs track all document access and modifications for maximum accountability.",
    "security.backup.title": "Secure Backup",
    "security.backup.desc":
      "Multiple backup locations ensure data availability",
    "security.access.title": "Controlled Access",
    "security.access.desc": "Multi-factor authentication and role-based access",
    "security.verification.step1.title": "Document Upload",
    "security.verification.step1.description":
      "Upload your medical documents securely through our encrypted platform.",
    "security.verification.step2.title": "AI-Powered Analysis",
    "security.verification.step2.description":
      "Our AI system analyzes and classifies documents using ICD-11 standards.",
    "security.verification.step3.title": "Digital Verification",
    "security.verification.step3.description":
      "Documents receive digital signatures and blockchain-based verification.",
    "security.verification.step4.title": "Instant Access",
    "security.verification.step4.description":
      "Access your verified documents instantly from anywhere, anytime.",
    "security.whyVerificationMatters.title": "Why Verification Matters",
    "security.whyVerificationMatters.description":
      "Verified documents prevent fraud, ensure authenticity, and provide peace of mind for healthcare providers and patients alike.",
    "security.learnMore": "Learn More",

    // CTA Component
    "cta.title": "Ready to Get Started?",
    "cta.subtitle":
      "Join thousands of users managing their health records securely",
    "cta.button": "Create Your Account",
    "cta.free": "Free to Start",
    "cta.noCredit": "No Credit Card Required",
    "cta.trustedByMillions": "Trusted by Millions",
    "cta.stats.activeUsers": "Active Users",
    "cta.stats.documentsSecured": "Documents Secured",
    "cta.stats.uptimeGuarantee": "Uptime Guarantee",
    "cta.benefits.freePersonalUse": "Free Personal Use",
    "cta.benefits.unlimitedStorage": "Unlimited Storage",
    "cta.benefits.access24x7": "24/7 Access",
    "cta.buttons.getStartedFree": "Get Started Free",
    "cta.buttons.contactSupport": "Contact Support",
    "cta.governmentBadge.initiative": "Government Initiative",
    "cta.governmentBadge.features":
      "Digital India | Ayushman Bharat | Healthcare for All",

    // Footer Component
    "footer.description":
      "Bridging healthcare communication across languages with secure, multilingual health record management.",
    "footer.quickLinks": "Quick Links",
    "footer.about": "About",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.contact": "Contact",
    "footer.support": "Support",
    "footer.help": "Help Center",
    "footer.docs": "Documentation",
    "footer.community": "Community",
    "footer.legal": "Legal",
    "footer.termsOfService": "Terms of Service",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.cookiePolicy": "Cookie Policy",
    "footer.compliance": "Compliance",
    "footer.allRights": "All rights reserved.",
    "footer.govtApproved": "Government Approved",
    "footer.secureEncryption": "Secure Encryption",
    "footer.hipaCompliant": "HIPAA Compliant",
    "footer.tagline": "Secure Health Records for Everyone",
    "footer.services.title": "Services",
    "footer.services.documentUpload": "Document Upload & Storage",
    "footer.services.documentVerification": "Document Verification",
    "footer.services.secureSharing": "Secure Sharing",
    "footer.services.mobileAccess": "Mobile Access",
    "footer.services.apiIntegration": "API Integration",
    "footer.support.title": "Support",
    "footer.support.helpCenter": "Help Center",
    "footer.support.userGuide": "User Guide",
    "footer.support.videoTutorials": "Video Tutorials",
    "footer.support.contactUs": "Contact Us",
    "footer.government.title": "Government",
    "footer.government.digitalIndia": "Digital India Initiative",
    "footer.government.ministryOfHealth": "Ministry of Health & Family Welfare",
    "footer.government.privacyPolicy": "Privacy Policy",
    "footer.government.termsOfService": "Terms of Service",
    "footer.government.rti": "RTI Information",
    "footer.copyright": "© 2024 MediBridge. All rights reserved.",
    "footer.developedBy": "Developed with ❤️ for Digital India",
    "footer.browserSupport.label": "Browser Support:",
    "footer.browserSupport.browsers": "Chrome, Firefox, Safari, Edge",
    "footer.screenResolution.label": "Best Viewed:",
    "footer.screenResolution.value": "1024x768 or higher",

    // Error Pages
    "notFound.title": "404 - Page Not Found",
    "notFound.subtitle": "The page you are looking for does not exist.",
    "notFound.message":
      "The page you are looking for does not exist or may have been moved.",
    "notFound.goHome": "Go Home",
    "notFound.goBack": "Go Back",
    "notFound.requestedPath": "Requested path:",

    // Auth Callback
    "auth.processing": "Processing your login...",
    "auth.success": "Login successful! Redirecting...",
    "auth.error": "Authentication failed. Please try again.",
    "authCallback.errorPrefix": "Authentication Error",
    "authCallback.invalidState":
      "Invalid authentication state. Please try again.",
    "authCallback.exchangingCode": "Exchanging authorization code...",
    "authCallback.accountCreated":
      "Account created successfully! Welcome to MediBridge.",
    "authCallback.loginSuccess": "Login successful! Welcome back.",
    "authCallback.noCode": "No authorization code received. Please try again.",
    "authCallback.generalError":
      "Something went wrong during authentication. Please try again.",
    "authCallback.authenticating": "Authenticating...",
    "authCallback.success": "Success",
    "authCallback.error": "Error",
    "authCallback.redirecting": "Redirecting to dashboard...",
    "authCallback.tryAgain": "Try Again",
    "authCallback.backToHome": "Back to Home",

    // Form Validation
    "validation.required": "This field is required",
    "validation.email": "Please enter a valid email",
    "validation.password": "Password must be at least 8 characters",
    "validation.confirmPassword": "Passwords do not match",
    "validation.name": "Please enter a valid name",
    "validation.phone": "Please enter a valid phone number",

    // Toast Messages
    "toast.success": "Success!",
    "toast.error": "Error!",
    "toast.warning": "Warning!",
    "toast.info": "Information",
    "toast.recordSaved": "Health record saved successfully",
    "toast.recordUpdated": "Health record updated successfully",
    "toast.recordDeleted": "Health record deleted successfully",
    "toast.loginSuccess": "Login successful",
    "toast.logoutSuccess": "Logout successful",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.warning": "Warning",
    "common.info": "Information",
    "common.close": "Close",
    "common.confirm": "Confirm",
    "common.yes": "Yes",
    "common.no": "No",
    "common.submit": "Submit",
    "common.reset": "Reset",
    "common.clear": "Clear",
    "common.select": "Select",
    "common.choose": "Choose",
    "common.browse": "Browse",
    "common.upload": "Upload",
    "common.download": "Download",
    "common.language": "Language",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.finish": "Finish",
  },
  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.dashboard": "डैशबोर्ड",
    "nav.healthRecords": "स्वास्थ्य रिकॉर्ड",
    "nav.services": "सेवाएं",
    "nav.documents": "दस्तावेज़",
    "nav.verify": "सत्यापित करें",
    "nav.help": "सहायता",
    "nav.signIn": "साइन इन",
    "nav.register": "रजिस्टर करें",
    "nav.logout": "लॉग आउट",

    // Home Page
    "home.title": "मेडीब्रिज में आपका स्वागत है",
    "home.subtitle": "भाषाओं के पार स्वास्थ्य संचार को जोड़ना",
    "home.description":
      "आधुनिक स्वास्थ्य सेवा के लिए सुरक्षित, बहुभाषी स्वास्थ्य रिकॉर्ड प्रबंधन",
    "home.getStarted": "शुरू करें",
    "home.learnMore": "और जानें",
    "home.features.title": "मुख्य विशेषताएं",
    "home.features.multilingual": "बहुभाषी सहायता",
    "home.features.multilingualDesc": "अंग्रेजी और हिंदी भाषाओं का समर्थन",
    "home.features.secure": "सुरक्षित रिकॉर्ड",
    "home.features.secureDesc": "एंड-टू-एंड एन्क्रिप्टेड स्वास्थ्य डेटा",
    "home.features.easy": "आसान पहुंच",
    "home.features.easyDesc": "सरल और सहज इंटरफेस",

    // Dashboard
    "dashboard.title": "डैशबोर्ड",
    "dashboard.welcome": "वापसी पर स्वागत है",
    "dashboard.addRecord": "नया रिकॉर्ड जोड़ें",
    "dashboard.viewRecords": "सभी रिकॉर्ड देखें",
    "dashboard.search": "रिकॉर्ड खोजें",
    "dashboard.recentRecords": "हाल के रिकॉर्ड",
    "dashboard.statistics": "स्वास्थ्य आंकड़े",
    "dashboard.totalRecords": "कुल रिकॉर्ड",
    "dashboard.thisMonth": "इस महीने",
    "dashboard.quickActions": "त्वरित कार्य",
    "dashboard.verifiedRecords": "सत्यापित रिकॉर्ड",
    "dashboard.activeConditions": "सक्रिय स्थितियां",
    "dashboard.activeMedications": "सक्रिय दवाएं",
    "dashboard.healthScore": "स्वास्थ्य स्कोर",
    "dashboard.verificationRate": "सत्यापन दर",
    "dashboard.beingMonitored": "निगरानी में",
    "dashboard.currentPrescriptions": "वर्तमान पर्चे",
    "dashboard.thisMonthPrefix": "+",
    "dashboard.thisMonthSuffix": "इस महीने",
    "dashboard.tabs.overview": "अवलोकन",
    "dashboard.tabs.records": "रिकॉर्ड",
    "dashboard.tabs.analytics": "विश्लेषण",
    "dashboard.tabs.verify": "सत्यापित करें",
    "dashboard.recentHealthRecords": "हाल के स्वास्थ्य रिकॉर्ड",
    "dashboard.latestEntries": "आपकी नवीनतम स्वास्थ्य रिकॉर्ड प्रविष्टियां",
    "dashboard.viewAllRecordsAndAdd": "सभी रिकॉर्ड देखें और नया जोड़ें",
    "dashboard.viewAll": "सभी देखें",
    "dashboard.viewAllRecords": "सभी रिकॉर्ड देखें",
    "dashboard.noRecordsToExport": "निर्यात करने के लिए कोई रिकॉर्ड नहीं",
    "dashboard.export.doctorName": "डॉक्टर का नाम",
    "dashboard.export.hospitalName": "अस्पताल का नाम",
    "dashboard.export.visitDate": "मुलाकात की तारीख",
    "dashboard.export.icdCode": "ICD-11 कोड",
    "dashboard.export.icdTitle": "ICD-11 शीर्षक",
    "dashboard.export.hindiName": "हिंदी नाम",
    "dashboard.export.verificationStatus": "सत्यापन स्थिति",
    "dashboard.sample.quickSample": "त्वरित नमूना",
    "dashboard.sample.description":
      "यह प्रदर्शन उद्देश्यों के लिए एक नमूना स्वास्थ्य रिकॉर्ड है।",
    "dashboard.sample.doctorName": "डॉ. नमूना चिकित्सक",
    "dashboard.sample.hospitalName": "नमूना मेडिकल सेंटर",
    "dashboard.sample.successMessage":
      "नमूना स्वास्थ्य रिकॉर्ड सफलतापूर्वक जोड़ा गया",
    "dashboard.sample.errorMessage": "नमूना रिकॉर्ड बनाने में विफल",
    "dashboard.logout": "लॉग आउट",
    "dashboard.recordDeleted": "स्वास्थ्य रिकॉर्ड सफलतापूर्वक हटा दिया गया",

    // Health Records
    "records.title": "स्वास्थ्य रिकॉर्ड",
    "records.addNew": "नया रिकॉर्ड जोड़ें",
    "records.search": "रिकॉर्ड खोजें...",
    "records.filter": "फ़िल्टर",
    "records.export": "निर्यात",
    "records.patientName": "मरीज़ का नाम",
    "records.age": "उम्र",
    "records.gender": "लिंग",
    "records.male": "पुरुष",
    "records.female": "महिला",
    "records.other": "अन्य",
    "records.diagnosis": "निदान",
    "records.symptoms": "लक्षण",
    "records.treatment": "उपचार",
    "records.date": "दिनांक",
    "records.doctor": "डॉक्टर",
    "records.hospital": "अस्पताल",
    "records.notes": "नोट्स",
    "records.save": "रिकॉर्ड सेव करें",
    "records.cancel": "रद्द करें",
    "records.edit": "संपादित करें",
    "records.delete": "हटाएं",
    "records.view": "देखें",
    "records.hindiName": "हिंदी नाम",
    "records.englishName": "अंग्रेजी नाम",
    "records.icdCode": "आईसीडी कोड",
    "records.condition": "स्थिति",

    // Health Records Form - Additional fields
    "records.editRecord": "स्वास्थ्य रिकॉर्ड संपादित करें",
    "records.createNewRecord": "नया स्वास्थ्य रिकॉर्ड बनाएं",
    "records.dialogDescription":
      "अपने चिकित्सा इतिहास में एक नया स्वास्थ्य रिकॉर्ड जोड़ें",
    "records.recordType": "रिकॉर्ड प्रकार",
    "records.selectRecordType": "रिकॉर्ड प्रकार चुनें",
    "records.severity": "गंभीरता",
    "records.selectSeverity": "गंभीरता चुनें",
    "records.severityMild": "हल्का",
    "records.severityModerate": "मध्यम",
    "records.severitySevere": "गंभीर",
    "records.patientNamePlaceholder": "मरीज़ का नाम दर्ज करें",
    "records.diseaseSearchLabel": "रोग/स्थिति खोज",
    "records.diseaseSearchPlaceholder":
      "रोग, स्थिति, लक्षण या आयुर्वेदिक नाम खोजें...",
    "records.namasteName": "नमस्ते नाम",
    "records.namasteNamePlaceholder": "नमस्ते नाम (जैसे चेचक, मधुमेह)",
    "records.icd11Code": "ICD-11 कोड",
    "records.icd11CodePlaceholder": "जैसे BA00",
    "records.icd11Title": "ICD-11 शीर्षक",
    "records.icd11TitlePlaceholder": "ICD-11 स्थिति शीर्षक",
    "records.diagnosisPlaceholder": "चिकित्सा निदान",
    "records.symptomsPlaceholder": "कॉमा द्वारा अलग किए गए लक्षण",
    "records.doctorName": "डॉक्टर का नाम",
    "records.doctorNamePlaceholder": "डॉ. जॉन स्मिथ",
    "records.hospitalClinic": "अस्पताल/क्लिनिक",
    "records.hospitalClinicPlaceholder": "सामान्य अस्पताल",
    "records.visitDate": "भेंट की तारीख",
    "records.updateRecord": "रिकॉर्ड अपडेट करें",
    "records.createRecord": "रिकॉर्ड बनाएं",

    // Disease Search
    "search.title": "रोग/स्थिति खोज",
    "search.generalTab": "सामान्य खोज",
    "search.symptomsTab": "लक्षणों से खोजें",
    "search.placeholder": "रोग, स्थिति या लक्षण खोजें...",
    "search.symptomPlaceholder":
      "एक लक्षण दर्ज करें (जैसे बुखार, सिरदर्द, खांसी)...",
    "search.selectedSymptoms": "चयनित लक्षण:",
    "search.noResults": "आपकी खोज के लिए कोई रोग नहीं मिला।",
    "search.hindi": "हिंदी:",
    "search.english": "अंग्रेजी:",

    // Custom Disease Search Component
    "customDiseaseSearch.label": "रोग/स्थिति खोज",
    "customDiseaseSearch.generalSearch": "सामान्य खोज",
    "customDiseaseSearch.searchBySymptoms": "लक्षणों द्वारा खोजें",
    "customDiseaseSearch.placeholder": "रोग, स्थिति या लक्षण खोजें...",
    "customDiseaseSearch.symptomPlaceholder":
      "एक लक्षण दर्ज करें (जैसे बुखार, सिरदर्द, खांसी)...",
    "customDiseaseSearch.selectedSymptoms": "चयनित लक्षण:",
    "customDiseaseSearch.namaste": "नमस्ते",
    "customDiseaseSearch.more": "और",
    "customDiseaseSearch.noResultsFound": '"{query}" के लिए कोई रोग नहीं मिला',
    "customDiseaseSearch.tryDifferentTerms":
      "विभिन्न शब्दों या लक्षणों के साथ खोजने का प्रयास करें",
    "customDiseaseSearch.namasteName": "नमस्ते नाम",
    "customDiseaseSearch.symptoms": "लक्षण",
    "customDiseaseSearch.helpText":
      "ICD-11 कोड और आयुर्वेदिक नामों के साथ रोगों के हमारे क्यूरेटेड डेटाबेस से खोजें।",

    // Login Page
    "login.title": "मेडीब्रिज में साइन इन करें",
    "login.subtitle": "अपने सुरक्षित स्वास्थ्य रिकॉर्ड तक पहुंच प्राप्त करें",
    "login.email": "ईमेल पता",
    "login.password": "पासवर्ड",
    "login.forgotPassword": "पासवर्ड भूल गए?",
    "login.rememberMe": "मुझे याद रखें",
    "login.signInButton": "साइन इन करें",
    "login.noAccount": "खाता नहीं है?",
    "login.createAccount": "खाता बनाएं",
    "login.orContinueWith": "या इसके साथ जारी रखें",
    "login.google": "गूगल",
    "login.facebook": "फेसबुक",
    "login.terms": "सेवा की शर्तें",
    "login.privacy": "गोपनीयता नीति",
    "login.secureLogin": "सुरक्षित लॉगिन",
    "login.continueWithGoogle": "गूगल के साथ जारी रखें",
    "login.securityMessage": "आपका डेटा बैंक-स्तरीय सुरक्षा के साथ संरक्षित है",
    "login.agreement":
      "साइन इन करके, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं",
    "login.backToHome": "होम पर वापस जाएं",
    "login.helpCenter": "सहायता केंद्र",

    // Features Component
    "features.title": "मुख्य विशेषताएं",
    "features.subtitle":
      "व्यापक स्वास्थ्य रिकॉर्ड प्रबंधन के लिए आपको जो कुछ चाहिए",
    "features.multilingual.title": "बहुभाषी सहायता",
    "features.multilingual.desc":
      "सहज स्विचिंग के साथ अंग्रेजी और हिंदी भाषाओं का समर्थन",
    "features.secure.title": "सुरक्षित रिकॉर्ड",
    "features.secure.desc":
      "सरकारी-ग्रेड सुरक्षा के साथ एंड-टू-एंड एन्क्रिप्टेड स्वास्थ्य डेटा",
    "features.easy.title": "आसान पहुंच",
    "features.easy.desc":
      "सभी उपयोगकर्ताओं के लिए डिज़ाइन किया गया सरल और सहज इंटरफेस",
    "features.integration.title": "आयुष एकीकरण",
    "features.integration.desc":
      "आयुष और आधुनिक चिकित्सा प्रणालियों के साथ सहज एकीकरण",
    "features.verification.title": "दस्तावेज़ सत्यापन",
    "features.verification.desc":
      "चिकित्सा दस्तावेजों और प्रमाणपत्रों का तत्काल सत्यापन",
    "features.mobile.title": "मोबाइल फ्रेंडली",
    "features.mobile.desc":
      "किसी भी डिवाइस पर कभी भी, कहीं भी अपने रिकॉर्ड तक पहुंचें",

    // Features Component - Services Section
    "features.powerfulFeatures": "शक्तिशाली विशेषताएं",
    "features.ourServices": "हमारी सेवाएं",
    "features.servicesDescription":
      "सरकारी-ग्रेड सुरक्षा और अंतर्राष्ट्रीय मानकों के साथ आपके स्वास्थ्य दस्तावेजों के प्रबंधन के लिए एक व्यापक डिजिटल प्लेटफॉर्म।",
    "features.organizeStore.title": "व्यवस्थित करें और संग्रहीत करें",
    "features.organizeStore.description":
      "आसान पुनर्प्राप्ति के लिए प्रकार, तिथि और चिकित्सा श्रेणी के अनुसार दस्तावेजों को स्वचालित रूप से व्यवस्थित करें।",
    "features.verifyAuthenticity.title": "प्रामाणिकता सत्यापित करें",
    "features.verifyAuthenticity.description":
      "नमस्ते और ICD-11 (TM2) प्रौद्योगिकी का उपयोग करते हुए उन्नत सत्यापन यह सुनिश्चित करता है कि आपके दस्तावेज़ वास्तविक और छेड़छाड़-रहित हैं।",
    "features.quickSearch.title": "त्वरित खोज",
    "features.quickSearch.description":
      "तिथि, प्रकार या चिकित्सा स्थिति के अनुसार फिल्टर के साथ स्मार्ट खोज का उपयोग करके किसी भी दस्तावेज़ को तुरंत खोजें।",
    "features.quickAccess.title": "त्वरित पहुंच",
    "features.quickAccess.description":
      "इंटरनेट कनेक्टिविटी के साथ कहीं से भी 24/7 अपने सत्यापित दस्तावेजों तक पहुंचें और डाउनलोड करें।",
    "features.secureSharing.title": "सुरक्षित साझाकरण",
    "features.secureSharing.description":
      "केवल कुछ क्लिक के साथ डॉक्टरों, अस्पतालों या बीमा कंपनियों के साथ सत्यापित प्रतियां साझा करें।",
    "features.icd11Classification.title": "ICD-11 (TM2) वर्गीकरण",
    "features.icd11Classification.description":
      "डब्ल्यूएचओ के नवीनतम अंतर्राष्ट्रीय रोग वर्गीकरण का उपयोग करके दस्तावेजों का स्वचालित रूप से वर्गीकरण किया जाता है।",
    "features.documentSupport": "दस्तावेज़ समर्थन",
    "features.supportedDocumentTypes": "समर्थित दस्तावेज़ प्रकार",
    "features.documentTypesDescription":
      "आसानी से सभी प्रकार के स्वास्थ्य संबंधी दस्तावेजों को संग्रहीत और प्रबंधित करें",
    "features.documentTypes.labReports": "प्रयोगशाला रिपोर्ट और परीक्षण परिणाम",
    "features.documentTypes.vaccination": "टीकाकरण प्रमाणपत्र",
    "features.documentTypes.prescriptions": "नुस्खे और दवाओं की सूची",
    "features.documentTypes.medicalImaging":
      "चिकित्सा इमेजिंग (एक्स-रे, एमआरआई, सीटी स्कैन)",
    "features.documentTypes.dischargeSummaries": "छुट्टी सारांश",
    "features.documentTypes.insurance": "बीमा दस्तावेज़",
    "features.documentTypes.medicalCertificates": "चिकित्सा प्रमाणपत्र",
    "features.documentTypes.healthCheckups": "स्वास्थ्य जांच रिपोर्ट",

    // Security Component
    "security.title": "आपका स्वास्थ्य डेटा सुरक्षित है",
    "security.subtitle":
      "एंटरप्राइज-ग्रेड सुरक्षा स्वास्थ्य अनुपालन से मिलती है",
    "security.description":
      "एंटरप्राइज-ग्रेड सुरक्षा उन्नत एन्क्रिप्शन और सत्यापन तकनीकों के साथ स्वास्थ्य अनुपालन मानकों को पूरा करती है।",
    "security.encryption.title": "एंड-टू-एंड एन्क्रिप्शन",
    "security.encryption.desc": "AES-256 मानकों के साथ एन्क्रिप्टेड सभी डेटा",
    "security.encryption.description":
      "आपका सभी स्वास्थ्य डेटा AES-256 एन्क्रिप्शन से सुरक्षित है, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करता है।",
    "security.digitalSignatures.title": "डिजिटल हस्ताक्षर",
    "security.digitalSignatures.description":
      "उन्नत डिजिटल हस्ताक्षर तकनीक दस्तावेज़ की प्रामाणिकता सुनिश्चित करती है और छेड़छाड़ को रोकती है।",
    "security.accessControl.title": "पहुंच नियंत्रण",
    "security.accessControl.description":
      "मल्टी-फैक्टर प्रमाणीकरण और भूमिका-आधारित पहुंच नियंत्रण आपकी संवेदनशील जानकारी की रक्षा करता है।",
    "security.infrastructure.title": "सुरक्षित अवसंरचना",
    "security.infrastructure.description":
      "अतिरिक्त सुरक्षा परतों और 99.9% अपटाइम के साथ सरकारी-ग्रेड क्लाउड अवसंरचना।",
    "security.compliance.title": "HIPAA अनुपालित",
    "security.compliance.desc":
      "स्वास्थ्य गोपनीयता नियमों के साथ पूर्णतः अनुपालित",
    "security.compliance.description":
      "HIPAA, GDPR और अन्य अंतर्राष्ट्रीय स्वास्थ्य गोपनीयता नियमों के साथ पूर्णतः अनुपालित।",
    "security.auditTrail.title": "ऑडिट ट्रेल",
    "security.auditTrail.description":
      "पूर्ण ऑडिट लॉग सभी दस्तावेज़ पहुंच और संशोधनों को ट्रैक करता है अधिकतम जवाबदेही के लिए।",
    "security.backup.title": "सुरक्षित बैकअप",
    "security.backup.desc":
      "डेटा उपलब्धता सुनिश्चित करने के लिए कई बैकअप स्थान",
    "security.access.title": "नियंत्रित पहुंच",
    "security.access.desc": "मल्टी-फैक्टर प्रमाणीकरण और भूमिका-आधारित पहुंच",
    "security.verification.step1.title": "दस्तावेज़ अपलोड",
    "security.verification.step1.description":
      "हमारे एन्क्रिप्टेड प्लेटफॉर्म के माध्यम से अपने चिकित्सा दस्तावेजों को सुरक्षित रूप से अपलोड करें।",
    "security.verification.step2.title": "AI-संचालित विश्लेषण",
    "security.verification.step2.description":
      "हमारा AI सिस्टम ICD-11 मानकों का उपयोग करके दस्तावेजों का विश्लेषण और वर्गीकरण करता है।",
    "security.verification.step3.title": "डिजिटल सत्यापन",
    "security.verification.step3.description":
      "दस्तावेजों को डिजिटल हस्ताक्षर और ब्लॉकचेन-आधारित सत्यापन प्राप्त होता है।",
    "security.verification.step4.title": "तत्काल पहुंच",
    "security.verification.step4.description":
      "कहीं से भी, कभी भी अपने सत्यापित दस्तावेजों तक तुरंत पहुंच प्राप्त करें।",
    "security.whyVerificationMatters.title": "सत्यापन क्यों महत्वपूर्ण है",
    "security.whyVerificationMatters.description":
      "सत्यापित दस्तावेज़ धोखाधड़ी को रोकते हैं, प्रामाणिकता सुनिश्चित करते हैं, और स्वास्थ्य प्रदाताओं और मरीजों दोनों के लिए मानसिक शांति प्रदान करते हैं।",
    "security.learnMore": "और जानें",

    // CTA Component
    "cta.title": "शुरू करने के लिए तैयार हैं?",
    "cta.subtitle":
      "अपने स्वास्थ्य रिकॉर्ड को सुरक्षित रूप से प्रबंधित करने वाले हजारों उपयोगकर्ताओं में शामिल हों",
    "cta.button": "अपना खाता बनाएं",
    "cta.free": "शुरुआत मुफ्त",
    "cta.noCredit": "क्रेडिट कार्ड की आवश्यकता नहीं",
    "cta.trustedByMillions": "लाखों द्वारा भरोसा",
    "cta.stats.activeUsers": "सक्रिय उपयोगकर्ता",
    "cta.stats.documentsSecured": "सुरक्षित दस्तावेज़",
    "cta.stats.uptimeGuarantee": "अपटाइम गारंटी",
    "cta.benefits.freePersonalUse": "निःशुल्क व्यक्तिगत उपयोग",
    "cta.benefits.unlimitedStorage": "असीमित भंडारण",
    "cta.benefits.access24x7": "24/7 पहुंच",
    "cta.buttons.getStartedFree": "मुफ्त में शुरू करें",
    "cta.buttons.contactSupport": "सहायता संपर्क",
    "cta.governmentBadge.initiative": "सरकारी पहल",
    "cta.governmentBadge.features":
      "डिजिटल इंडिया | आयुष्मान भारत | सभी के लिए स्वास्थ्य",

    // Footer Component
    "footer.description":
      "सुरक्षित, बहुभाषी स्वास्थ्य रिकॉर्ड प्रबंधन के साथ भाषाओं के पार स्वास्थ्य संचार को जोड़ना।",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.about": "के बारे में",
    "footer.features": "विशेषताएं",
    "footer.pricing": "मूल्य निर्धारण",
    "footer.contact": "संपर्क करें",
    "footer.support": "सहायता",
    "footer.help": "सहायता केंद्र",
    "footer.docs": "दस्तावेज़ीकरण",
    "footer.community": "समुदाय",
    "footer.legal": "कानूनी",
    "footer.termsOfService": "सेवा की शर्तें",
    "footer.privacyPolicy": "गोपनीयता नीति",
    "footer.cookiePolicy": "कुकी नीति",
    "footer.compliance": "अनुपालन",
    "footer.allRights": "सभी अधिकार सुरक्षित।",
    "footer.govtApproved": "सरकार अनुमोदित",
    "footer.secureEncryption": "सुरक्षित एन्क्रिप्शन",
    "footer.hipaCompliant": "HIPAA अनुपालित",
    "footer.tagline": "सभी के लिए सुरक्षित स्वास्थ्य रिकॉर्ड",
    "footer.services.title": "सेवाएं",
    "footer.services.documentUpload": "दस्तावेज़ अपलोड और भंडारण",
    "footer.services.documentVerification": "दस्तावेज़ सत्यापन",
    "footer.services.secureSharing": "सुरक्षित साझाकरण",
    "footer.services.mobileAccess": "मोबाइल पहुंच",
    "footer.services.apiIntegration": "एपीआई एकीकरण",
    "footer.support.title": "सहायता",
    "footer.support.helpCenter": "सहायता केंद्र",
    "footer.support.userGuide": "उपयोगकर्ता गाइड",
    "footer.support.videoTutorials": "वीडियो ट्यूटोरियल",
    "footer.support.contactUs": "हमसे संपर्क करें",
    "footer.government.title": "सरकार",
    "footer.government.digitalIndia": "डिजिटल इंडिया पहल",
    "footer.government.ministryOfHealth": "स्वास्थ्य और परिवार कल्याण मंत्रालय",
    "footer.government.privacyPolicy": "गोपनीयता नीति",
    "footer.government.termsOfService": "सेवा की शर्तें",
    "footer.government.rti": "आरटीआई जानकारी",
    "footer.copyright": "© 2024 मेडीब्रिज। सभी अधिकार सुरक्षित।",
    "footer.developedBy": "डिजिटल इंडिया के लिए ❤️ के साथ विकसित",
    "footer.browserSupport.label": "ब्राउज़र समर्थन:",
    "footer.browserSupport.browsers": "क्रोम, फ़ायरफ़ॉक्स, सफारी, एज",
    "footer.screenResolution.label": "सर्वोत्तम देखा गया:",
    "footer.screenResolution.value": "1024x768 या उच्चतर",

    // Error Pages
    "notFound.title": "404 - पेज नहीं मिला",
    "notFound.subtitle": "आप जो पेज खोज रहे हैं वह मौजूद नहीं है।",
    "notFound.message":
      "आप जो पेज खोज रहे हैं वह मौजूद नहीं है या हो सकता है कि वह स्थानांतरित हो गया हो।",
    "notFound.goHome": "होम पर जाएं",
    "notFound.goBack": "वापस जाएं",
    "notFound.requestedPath": "अनुरोधित पथ:",

    // Auth Callback
    "auth.processing": "आपके लॉगिन को प्रोसेस कर रहे हैं...",
    "auth.success": "लॉगिन सफल! रीडायरेक्ट कर रहे हैं...",
    "auth.error": "प्रमाणीकरण विफल। कृपया पुनः प्रयास करें।",
    "authCallback.errorPrefix": "प्रमाणीकरण त्रुटि",
    "authCallback.invalidState":
      "अवैध प्रमाणीकरण स्थिति। कृपया पुनः प्रयास करें।",
    "authCallback.exchangingCode": "प्राधिकरण कोड का आदान-प्रदान कर रहे हैं...",
    "authCallback.accountCreated":
      "खाता सफलतापूर्वक बनाया गया! मेडीब्रिज में आपका स्वागत है।",
    "authCallback.loginSuccess": "लॉगिन सफल! वापसी पर स्वागत है।",
    "authCallback.noCode":
      "कोई प्राधिकरण कोड प्राप्त नहीं हुआ। कृपया पुनः प्रयास करें।",
    "authCallback.generalError":
      "प्रमाणीकरण के दौरान कुछ गलत हुआ। कृपया पुनः प्रयास करें।",
    "authCallback.authenticating": "प्रमाणित कर रहे हैं...",
    "authCallback.success": "सफलता",
    "authCallback.error": "त्रुटि",
    "authCallback.redirecting": "डैशबोर्ड पर रीडायरेक्ट कर रहे हैं...",
    "authCallback.tryAgain": "पुनः प्रयास करें",
    "authCallback.backToHome": "होम पर वापस जाएं",

    // Form Validation
    "validation.required": "यह फील्ड आवश्यक है",
    "validation.email": "कृपया एक वैध ईमेल दर्ज करें",
    "validation.password": "पासवर्ड कम से कम 8 अक्षरों का होना चाहिए",
    "validation.confirmPassword": "पासवर्ड मेल नहीं खाते",
    "validation.name": "कृपया एक वैध नाम दर्ज करें",
    "validation.phone": "कृपया एक वैध फ़ोन नंबर दर्ज करें",

    // Toast Messages
    "toast.success": "सफलता!",
    "toast.error": "त्रुटि!",
    "toast.warning": "चेतावनी!",
    "toast.info": "जानकारी",
    "toast.recordSaved": "स्वास्थ्य रिकॉर्ड सफलतापूर्वक सहेजा गया",
    "toast.recordUpdated": "स्वास्थ्य रिकॉर्ड सफलतापूर्वक अपडेट किया गया",
    "toast.recordDeleted": "स्वास्थ्य रिकॉर्ड सफलतापूर्वक हटाया गया",
    "toast.loginSuccess": "लॉगिन सफल",
    "toast.logoutSuccess": "लॉगआउट सफल",

    // Common
    "common.loading": "लोड हो रहा है...",
    "common.error": "त्रुटि",
    "common.success": "सफलता",
    "common.warning": "चेतावनी",
    "common.info": "जानकारी",
    "common.close": "बंद करें",
    "common.confirm": "पुष्टि करें",
    "common.yes": "हाँ",
    "common.no": "नहीं",
    "common.submit": "सबमिट करें",
    "common.reset": "रीसेट",
    "common.clear": "साफ़ करें",
    "common.select": "चुनें",
    "common.choose": "चुनें",
    "common.browse": "ब्राउज़ करें",
    "common.upload": "अपलोड करें",
    "common.download": "डाउनलोड करें",
    "common.language": "भाषा",
    "common.back": "वापस",
    "common.next": "अगला",
    "common.previous": "पिछला",
    "common.finish": "समाप्त",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem(
        "medibridge-language"
      ) as Language;
      return savedLanguage && (savedLanguage === "en" || savedLanguage === "hi")
        ? savedLanguage
        : "en";
    }
    return "en";
  });

  // Enhanced setLanguage function that also saves to localStorage
  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("medibridge-language", lang);
    }
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage: updateLanguage, // Use the enhanced function that saves to localStorage
    isHindi: language === "hi",
    isEnglish: language === "en",
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
