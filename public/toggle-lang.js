(function () {
  var lang = localStorage.getItem("lang") || "en";
  var html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  html.classList.add("dark");
})();

