import { createInstance } from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const i18n = createInstance({
		fallbackLng: "en",
		debug: true,
		interpolation: {
			escapeValue: false 
		},
		resources: {
			en: {
				translation: import('../../../../../public/locales/en/common.json')		
			},
			es: {
				Translation: import('../../../../../public/locales/es/common.json')
			}
		},
	});

i18n.use(LanguageDetector);
i18n.init();

export default i18n;
