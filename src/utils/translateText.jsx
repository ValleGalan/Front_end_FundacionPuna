/*import axios from "axios";

const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post("https://libretranslate.com/translate", {
      q: text,
      source: "auto",
      target: targetLang,
      format: "text",
    });

    return response.data.translatedText;
  } catch (error) {
    console.error("Error en la traducción:", error);
    return text; // Devuelve el texto original si falla
  }
};

export default translateText;*/
const API_URL = "https://libretranslate.com/translate"; // Puedes cambiar a otro servicio si deseas

const translateText = async (text, targetLang) => {
  if (targetLang === "es") return text; // No traducimos si ya está en español

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: targetLang,
        format: "text",
      }),
    });

    const data = await response.json();
    return data.translatedText || text;
  } catch (error) {
    console.error("Error translating text:", error);
    return text;
  }
};

export default translateText;

