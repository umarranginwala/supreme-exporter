(function () {
  var cfg = window.SUPREME_CONFIG || {};

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  /* ——— Apply contact config into the DOM ——— */
  function applyConfig() {
    $all("[data-config-email]").forEach(function (el) {
      if (!cfg.email) return;
      if (el.tagName === "A") {
        el.href = "mailto:" + cfg.email;
        if (!el.getAttribute("data-keep-label")) el.textContent = cfg.email;
      } else {
        el.textContent = cfg.email;
      }
    });

    $all("[data-config-phone]").forEach(function (el) {
      if (!cfg.phone) {
        el.hidden = true;
        return;
      }
      el.hidden = false;
      if (el.tagName === "A") {
        el.href = "tel:" + cfg.phone.replace(/\s/g, "");
        if (!el.getAttribute("data-keep-label")) {
          el.textContent = cfg.phoneDisplay || cfg.phone;
        }
      } else {
        el.textContent = cfg.phoneDisplay || cfg.phone;
      }
    });

    $all("[data-config-address]").forEach(function (el) {
      if (cfg.address) el.textContent = cfg.address;
    });

    $all("[data-config-iec]").forEach(function (el) {
      if (cfg.iec) el.textContent = cfg.iec;
    });

    $all("[data-config-legal]").forEach(function (el) {
      if (cfg.legalName) el.textContent = cfg.legalName;
    });

    var wa = cfg.whatsapp && String(cfg.whatsapp).replace(/\D/g, "");
    $all("[data-whatsapp-link]").forEach(function (el) {
      if (!wa) {
        el.hidden = true;
        return;
      }
      el.hidden = false;
      if (el.tagName === "A") {
        var msg = el.getAttribute("data-whatsapp-msg") ||
          "Hello Supreme Exporter, I want a quote for bulk export from Gujarat.";
        el.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent(msg);
      }
    });

    var float = $("#whatsapp-float");
    if (float) float.hidden = !wa;
  }

  /* ——— Nav ——— */
  var toggle = $(".nav-toggle");
  var links = $(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ——— Reveal on scroll ——— */
  var reveals = $all(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ——— Quote form → real lead capture ——— */
  var form = $("#quote-form");
  if (form) {
    var success = $("#form-success");
    var provider = cfg.formProvider || "formsubmit";

    if (provider === "formsubmit" && cfg.email) {
      form.setAttribute("action", "https://formsubmit.co/" + cfg.email);
      form.setAttribute("method", "POST");
      // Ensure FormSubmit fields exist
      function ensureHidden(name, value) {
        var input = form.querySelector('input[name="' + name + '"]');
        if (!input) {
          input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          form.appendChild(input);
        }
        input.value = value;
      }
      ensureHidden("_subject", "Supreme Exporter — New export enquiry");
      ensureHidden("_template", "table");
      ensureHidden("_captcha", "false");
      ensureHidden("_honey", "");
      // Stay on thank-you if hosted; relative path works on same origin
      ensureHidden("_next", "thank-you.html");
    }

    form.addEventListener("submit", function (e) {
      if (provider === "mailto") {
        e.preventDefault();
        var data = new FormData(form);
        var lines = ["New export enquiry from supremeexporter.com", ""];
        data.forEach(function (val, key) {
          if (String(key).charAt(0) === "_") return;
          lines.push(key + ": " + val);
        });
        var body = encodeURIComponent(lines.join("\n"));
        var subject = encodeURIComponent("Export enquiry — Supreme Exporter");
        window.location.href = "mailto:" + (cfg.email || "") + "?subject=" + subject + "&body=" + body;
        if (success) {
          success.hidden = false;
          success.textContent = "Your email app should open with the enquiry. If it does not, write to " + (cfg.email || "us") + ".";
          success.focus();
        }
        return;
      }
      // formsubmit: allow native POST; show interim message
      if (success) {
        success.hidden = false;
        success.textContent = "Sending your enquiry… If nothing happens, email " + (cfg.email || "us") + " directly.";
      }
    });
  }

  /* ——— Optional GA4 ——— */
  if (cfg.ga4 && /^G-[A-Z0-9]+$/i.test(cfg.ga4)) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + cfg.ga4;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", cfg.ga4);
  }

  applyConfig();
})();
