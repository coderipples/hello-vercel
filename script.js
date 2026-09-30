const defaultName = "Linda";

// `name` is Linda written in the language's own script; omitted where it is spelled the same.
const greetings = [
  { text: "Hola", language: "Spanish", lang: "es" },
  { text: "Bonjour", language: "French", lang: "fr" },
  { text: "Ciao", language: "Italian", lang: "it" },
  { text: "こんにちは", name: "リンダ", language: "Japanese", lang: "ja" },
  { text: "Hallo", language: "German", lang: "de" },
  { text: "Olá", language: "Portuguese", lang: "pt" },
  { text: "Привет", name: "Линда", language: "Russian", lang: "ru" },
  { text: "مرحبا", name: "ليندا", language: "Arabic", lang: "ar", dir: "rtl" },
  { text: "नमस्ते", name: "लिंडा", language: "Hindi", lang: "hi" },
  { text: "你好", name: "琳达", language: "Chinese", lang: "zh" },
  { text: "안녕하세요", name: "린다", language: "Korean", lang: "ko" },
  { text: "Γειά σου", name: "Λίντα", language: "Greek", lang: "el" },
  { text: "שלום", name: "לינדה", language: "Hebrew", lang: "he", dir: "rtl" },
  { text: "สวัสดี", name: "ลินดา", language: "Thai", lang: "th" },
  { text: "Merhaba", language: "Turkish", lang: "tr" },
  { text: "Cześć", language: "Polish", lang: "pl" },
  { text: "Hej", language: "Swedish", lang: "sv" },
  { text: "Jambo", language: "Swahili", lang: "sw" },
  { text: "নমস্কার", name: "লিন্ডা", language: "Bengali", lang: "bn" },
  { text: "Xin chào", language: "Vietnamese", lang: "vi" },
];

const greetingEl = document.getElementById("greeting");
const languageEl = document.getElementById("language");
const button = document.getElementById("cycle");

let index = -1;

button.addEventListener("click", () => {
  index = (index + 1) % greetings.length;
  const { text, name = defaultName, language, lang, dir = "ltr" } = greetings[index];

  greetingEl.textContent = `${text} ${name}`;
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
