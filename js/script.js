const translations = {
  bn: {
    "office-title": "উপজেলা মাধ্যমিক শিক্ষা অফিস",
    "welcome-msg": "স্মার্ট শিক্ষা অফিসে আপনাকে স্বাগতম",
    "menu-home": "হোম",
    "menu-about": "আমাদের সম্পর্কে",
    "menu-notice": "নোটিশ বোর্ড",
  },
  en: {
    "office-title": "Upazila Secondary Education Office",
    "welcome-msg": "Welcome to Smart Education Office",
    "menu-home": "Home",
    "menu-about": "About Us",
    "menu-notice": "Notice Board",
  },
};

function changeLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang);

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.getElementById("lang-bn").classList.remove("active");
  document.getElementById("lang-en").classList.remove("active");
  document.getElementById(`lang-${lang}`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "bn"; //
  changeLanguage(savedLang);
});

console.log(age);
