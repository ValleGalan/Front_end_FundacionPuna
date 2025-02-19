import { useEffect } from "react";
import arFlag from "../assets/images/argentina.png";
import usFlag from "../assets/images/usa.png";

const LanguageSwitcher = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "es",
              includedLanguages: "es,en",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        };

        const script = document.createElement("script");
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    addGoogleTranslateScript();
  }, []);

  // 🔹 Función para cambiar el idioma usando Google Translate
  const changeLanguage = (language) => {
    const googleFrame = document.querySelector("iframe.goog-te-menu-frame");
    if (!googleFrame) {
      console.error("Google Translate no está cargado aún.");
      return;
    }

    const googleTranslateMenu = googleFrame.contentDocument || googleFrame.contentWindow.document;
    const items = googleTranslateMenu.querySelectorAll(".goog-te-menu2-item span.text");

    items.forEach((item) => {
      if (item.innerText.toLowerCase().includes(language)) {
        item.click();
      }
    });
  };

  return (
    <div className="flex gap-4 items-center">
      {/* Botón para cambiar a Español */}
      <button onClick={() => changeLanguage("español")}>
        <img src={arFlag} alt="Español" className="w-8 h-8 rounded cursor-pointer" />
      </button>

      {/* Botón para cambiar a Inglés */}
      <button onClick={() => changeLanguage("english")}>
        <img src={usFlag} alt="Inglés" className="w-8 h-8 rounded cursor-pointer" />
      </button>

      {/* Widget oculto de Google Translate */}
      <div id="google_translate_element" className="py-20 hidden"></div>
    </div>
  );
};

export default LanguageSwitcher;

/*

const LanguageSwitcher = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = () => {
          if (window.google?.translate?.TranslateElement) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "es",
                includedLanguages: "es,en",
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              },
              "google_translate_element"
            );
          }
        };

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.googleTranslateElementInit) {
            window.googleTranslateElementInit();
          }
        };

        document.body.appendChild(script);
      }
    };

    addGoogleTranslateScript();
  }, []);

  // Función para cambiar el idioma al hacer clic en una bandera
  const changeLanguage = (language) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = language;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <div className="flex gap-4 items-center">
       <button onClick={() => changeLanguage("es")}>
        <img src={arFlag} alt="Español" className="w-8 h-8 rounded cursor-pointer" />
      </button>
      <button onClick={() => changeLanguage("en")}>
        <img src={usFlag} alt="Inglés" className="w-8 h-8 rounded cursor-pointer" />
      </button>

       <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default LanguageSwitcher;

*/





/*import { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "es", includedLanguages: "es,en", layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div className="flex gap-2 items-center">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSwitcher;
*/
