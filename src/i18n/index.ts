import { createI18n, type I18n, type I18nOptions } from "vue-i18n";
import ptBR from "./locales/pt-BR.json";
import en from "./locales/en.json";

export type MessageSchema = typeof ptBR;

const options: I18nOptions = {
  legacy: false,
  locale: localStorage.getItem("locale") || "pt-BR",
  fallbackLocale: "pt-BR",
  messages: {
    "pt-BR": ptBR,
    en: en,
  },
};

const i18n = createI18n(options) as I18n;

export default i18n;

// Helper para alterar idioma
export function setLocale(locale: string) {
  localStorage.setItem("locale", locale);
  (i18n.global.locale as any).value = locale;
}

// Helper para obter idioma atual
export function getLocale() {
  return (i18n.global.locale as any).value as string;
}

// Idiomas disponíveis
export const locales = ["pt-BR", "en"];
export const localeNames: Record<string, string> = {
  "pt-BR": "🇧🇷 Português",
  en: "🇬🇧 English",
};
