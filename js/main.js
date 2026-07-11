(function(){
  const SUPPORTED = ["en","fr","ar"];
  const params = new URLSearchParams(window.location.search);
  let lang = params.get("lang");
  if(!SUPPORTED.includes(lang)) lang = "en";

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  function getPath(obj, path){
    return path.split(".").reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : null, obj);
  }

  function applyTranslations(){
    const dict = translations[lang];
    if(!dict) return;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const val = getPath(dict, key);
      if(val !== null && val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getPath(dict, key);
      if(val !== null && val !== undefined) el.setAttribute("placeholder", val);
    });
  }

  function rewriteLinks(){
    // Preserve the chosen language across internal navigation
    document.querySelectorAll("a[data-internal]").forEach(a=>{
      const url = new URL(a.getAttribute("href"), window.location.href);
      url.searchParams.set("lang", lang);
      a.setAttribute("href", url.pathname.split("/").pop() + url.search);
    });
    // Highlight active language switcher
    document.querySelectorAll(".lang-switch a").forEach(a=>{
      a.classList.toggle("active", a.getAttribute("data-lang") === lang);
      const url = new URL(a.getAttribute("href"), window.location.href);
      url.searchParams.set("lang", a.getAttribute("data-lang"));
      a.setAttribute("href", url.pathname.split("/").pop() + url.search);
    });
  }

  function markActiveNav(){
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a[data-internal]").forEach(a=>{
      const href = a.getAttribute("href").split("?")[0];
      if(href === current) a.classList.add("active");
    });
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    applyTranslations();
    rewriteLinks();
    markActiveNav();
  });
})();
