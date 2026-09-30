const greetings = [
  { text: "Hola", language: "Spanish", lang: "es" },
  { text: "Bonjour", language: "French", lang: "fr" },
  { text: "Ciao", language: "Italian", lang: "it" },
  { text: "こんにちは", language: "Japanese", lang: "ja" },
  { text: "Hallo", language: "German", lang: "de" },
  { text: "Olá", language: "Portuguese", lang: "pt" },
  { text: "Привет", language: "Russian", lang: "ru" },
  { text: "مرحبا", language: "Arabic", lang: "ar", dir: "rtl" },
  { text: "नमस्ते", language: "Hindi", lang: "hi" },
  { text: "你好", language: "Chinese", lang: "zh" },
  { text: "안녕하세요", language: "Korean", lang: "ko" },
  { text: "Γειά σου", language: "Greek", lang: "el" },
  { text: "שלום", language: "Hebrew", lang: "he", dir: "rtl" },
  { text: "สวัสดี", language: "Thai", lang: "th" },
  { text: "Merhaba", language: "Turkish", lang: "tr" },
  { text: "Cześć", language: "Polish", lang: "pl" },
  { text: "Hej", language: "Swedish", lang: "sv" },
  { text: "Jambo", language: "Swahili", lang: "sw" },
  { text: "নমস্কার", language: "Bengali", lang: "bn" },
  { text: "Xin chào", language: "Vietnamese", lang: "vi" },
];

const greetingEl = document.getElementById("greeting");
const languageEl = document.getElementById("language");
const button = document.getElementById("cycle");

let index = -1;

button.addEventListener("click", () => {
  index = (index + 1) % greetings.length;
  const { text, language, lang, dir = "ltr" } = greetings[index];

  greetingEl.textContent = text;
  greetingEl.lang = lang;
  greetingEl.dir = dir;
  languageEl.textContent = language;
  button.textContent = "Next greeting";

  for (const el of [greetingEl, languageEl]) {
    el.classList.remove("swap");
    void el.offsetWidth; // restart the animation
    el.classList.add("swap");
  }
});
