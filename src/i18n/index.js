import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  "de": {
    "messages": {
      "headline": "SIWECOS Schnell-Check",
      "description": "<p><b>Hinweis:</b> Nur registrierte Webseiten können auf zusätzliche kritische Schwachstellen hin geprüft werden.</p><p>Die Registrierung und Nutzung von <b>SIWECOS ist kostenlos!</b><br/>Bitte <a href='/app/#/register'>registrieren Sie Ihre Webseite</a> um weitere Funktionen wie den <b>täglichen Sicherheitscheck</b>, <b>automatische Benachrichtigungen</b> beim Fund einer kritischen Schwachstelle und den <b>ausführlichen Sicherheitsbericht</b> für Ihre Webseite nutzen zu können.</p>",
      "field_domain": "Domain",
      "field_domain_placeholder": "Domain, bspw. https://www.example.org",
      "field_submit": "Scan starten",
      "could_not_start": "Starten des Scans fehlgeschlagen, bitte versuchen Sie es später erneut",
      "invalid_domain": "Bitte geben Sie eine gültige Websiteadresse an",
      "pleasewait": "Der Scan Ihrer Domain läuft, bitte warten...",
      "domainnotfound": "Die Domain ist nicht über HTTPS erreichbar",
      "registernowhead": "Stets auf der sicheren Seite sein:",
      "lastScan": "Letzter Scan",
      "more_info": "Mehr Informationen",
      "background_info": "Hintergrundinformationen",
      "domain_timedout": "Die Domain antwortet nicht oder existiert nicht",
      "detailed_info": "Ausführliche Beschreibung >>>",
      "registernow": "Registrieren Sie sich jetzt für den kostenlosen Sicherheits-Check. SIWECOS scannt Ihre Webseite täglich und informiert Sie proaktiv, wenn Sicherheitslücken auftauchen. Nur durch eine Registrierung wird Ihre Seite dauerhaft und kostenlos überwacht und Sie können im Notfall schnell reagieren. SIWECOS bietet umfangreiche Hilfestellungen und Informationen, so schützen Sie sich und Ihre Kunden.",
      "scannername-port": "Port-Scanner",
      "scannername-version": "CMS-Versions-Scanner",
      "scannernotinfree": "Dieser Scanner ist nur für eingeloggte Benutzer verfügbar, bitte <a href='/de/app/#/'>melden Sie sich an</a>."
    }
  },
  "en": {
    "messages": {
      "headline": "SIWECOS Quick-Check",
      "description": "<p><b>Please note:</b> Only registered websites can additionally be tested on critical vulnerabilites.</p><p>Registration and usage of <b>SIWECOS is free!</b><br/>Please <a href='/en/app/#/register'>register your site</a> to be able to use additional features as <b>daily security checks</b>, <b>automated notifications</b> when issues are detected and <b>comprehensive security reports</b>.</p>",
      "field_domain": "Domain",
      "field_domain_placeholder": "Domain, i.e. https://www.example.org",
      "field_submit": "Start scan",
      "could_not_start": "Starting the scan failed, please try again later",
      "invalid_domain": "Please provide a valid domain",
      "pleasewait": "Your domain's scan is being processed, please wait...",
      "domainnotfound": "Your domain can't be reached using HTTPS",
      "registernowhead": "Stay on the safe side:",
      "lastScan": "Last Scan",
      "more_info": "More Information",
      "background_info": "Background Information",
      "domain_timedout": "The domain in question is not responding or does not exist",
      "detailed_info": "Detailed Description >>>",
      "registernow": "Signup now for the free Security-Check. SIWECOS performs daily website scans and informs your proactively, when security issues are found. Only registering your site will provide constant monitoring and let you react quickly in case of upcoming issues. SIWECOS provides comprehensive help and information and let's you protect yourself and your clients.",
      "scannername-port": "Port-Scanner",
      "scannername-version": "CMS-Version-Scanner",
    "scannernotinfree": "This scanner is only useable for registered users, please <a href='/en/app/#/'>login</a> to see your result."
    }
  }
}

let locale = "de";

if (document.documentElement && document.documentElement.getAttribute("lang"))
{
  const langAttribute = document.documentElement.getAttribute("lang");
  const langTag = langAttribute.substr(0,2);

  if (typeof messages[langTag] === "object")
  {
    locale = langTag;
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  "locale": locale, // set locale
  messages // set locale messages
})

export default i18n
