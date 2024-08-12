import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "ar", // Set the default language to Arabic
    resources: {
      en: {
        translation: {
          applicationtype: "Application Type",
          applicationnumber: "Application Number",
          name: "Name",
          dateofbirth: "Date of Birth",
          nationality: "Nationality",
          gender: "Gender",
          "passportno.": "Passport No.",
          "civilno.": "Civil No.",
          sponsor: "Sponsor",
          category: "Category",
          validityofthemedical: "Validity of the Medical",
          to: "To",
          medicalcenter: "Medical Center",
          scanme: "Scan Me",
          fit: "FIT",
          medicalstatus: "Medical Status",
        },
      },
      ar: {
        translation: {
          applicationtype: "نوع التطبيق",
          applicationnumber: "رقم التطبيق",
          name: "اسم",
          dateofbirth: "تاريخ الميلاد",
          nationality: "الجنسية",
          gender: "الجنس",
          "passportno.": "رقم الجواز",
          "civilno.": "الرقم المدني",
          sponsor: "الكفيل",
          category: "الفئة",
          validityofthemedical: "صلاحية الفحص الطبي",
          to: "إلى",
          medicalcenter: "المركز الطبي",
          fit: "ملائم",
          scanme: "مسح لي",
          medicalstatus: "الحالة الطبية",
        },
      },
    },
  });

export default i18n;
