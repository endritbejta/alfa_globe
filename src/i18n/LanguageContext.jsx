import { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";
import sqExtended from "./sqExtended";

const STORAGE_KEY = "alfa-trade-language";

const sq = {
  "Fuel distribution across Kosovo": "Shpërndarje e derivateve në gjithë Kosovën",
  "Fuel supply that keeps": "Furnizim me derivate që e mban",
  "business moving": "biznesin në lëvizje",
  "Certified diesel, petrol, lubricants and AdBlue—available through four stations, delivered in bulk to your site, or managed across your fleet with one clear account.":
    "Dizel, benzinë, lubrifikantë dhe AdBlue të certifikuar—në katër pikat tona, me dërgesë me shumicë ose përmes një llogarie të qartë për flotën.",
  "Get a fuel quote": "Kërko ofertë për derivate",
  "See how we supply": "Shiko mënyrat e furnizimit",
  "Diesel EN 590 & petrol EN 228": "Dizel EN 590 dhe benzinë EN 228",
  "Retail, bulk & fleet supply": "Furnizim në pika, me shumicë dhe për flota",
  "ADR-certified transport": "Transport i certifikuar ADR",
  "From terminal to tank": "Nga terminali në rezervuar",
  "One supplier for the fuel your operation depends on":
    "Një furnitor për derivatet nga të cilat varet veprimtaria juaj",
  "Alfa Trade has distributed petroleum products since 2014. We combine station access, scheduled tanker delivery and fleet controls so customers can buy fuel in the way that fits their operation—not ours.":
    "Alfa Trade shpërndan produkte të naftës që nga viti 2014. Bashkojmë furnizimin në pika, dërgesat e planifikuara me cisternë dhe kontrollin e flotës, sipas mënyrës si punon klienti.",
  "Years in fuel distribution": "Vite në shpërndarjen e derivateve",
  "Certified products sourced through established regional terminals":
    "Produkte të certifikuara nga terminale të njohura rajonale",
  "Four retail stations plus direct bulk delivery": "Katër pika dhe dërgesë direkte me shumicë",
  "Fleet cards, consolidated invoicing and usage reporting":
    "Kartela flote, faturim i përmbledhur dhe raportim i përdorimit",
  "Dedicated supply for transport, industry, construction and farms":
    "Furnizim për transport, industri, ndërtimtari dhe ferma",
  "How we work": "Si punojmë",
  "Ways to buy": "Mënyrat e furnizimit",
  "From a single fill to a managed fuel programme": "Nga një mbushje te një program i menaxhuar",
  "Refuel at our stations, schedule tanker deliveries, equip your drivers with fleet cards or build a contracted supply plan around your consumption.":
    "Furnizohuni në pikat tona, planifikoni dërgesa me cisternë, pajisni shoferët me kartela ose ndërtoni një plan kontraktual sipas konsumit.",
  "Calibrated, metered discharge on every drop": "Shkarkim i kalibruar dhe i matur në çdo dërgesë",
  "Deliveries scheduled around your operations": "Dërgesa të planifikuara sipas veprimtarisë suaj",
  "Sealed compartments with delivery notes": "Ndarje të vulosura me fletëdërgesë",
  "OEM-approved specifications": "Specifikime të aprovuara nga prodhuesit",
  "Application advice from trained staff": "Këshillim nga staf i trajnuar",
  "Pack sizes from 1 L to 1,000 L IBC": "Paketime nga 1 L deri në IBC 1,000 L",
  "The right petroleum product, in the right format": "Produkti i duhur i naftës, në formatin e duhur",
  "Who we supply": "Kë furnizojmë",
  "Fuel plans shaped around how each sector works":
    "Plane furnizimi të përshtatura me mënyrën si punon çdo sektor",
  "Founded in Prishtina": "Themeluar në Prishtinë",
  "Supply divisions": "Divizione furnizimi",
  "Days a week": "Ditë në javë",
  "Emergency dispatch": "Dispeçeri emergjente",
  "European fuel standards": "Standarde evropiane të derivateve",
  "A petroleum distributor built close to its customers":
    "Distributor i derivateve i ndërtuar pranë klientëve",
  "Independent by ownership. Accountable by choice.": "I pavarur në pronësi. I përgjegjshëm me zgjedhje.",
  "Growth built one delivery at a time": "Rritje e ndërtuar dërgesë pas dërgese",
  "Tell us how you buy fuel today": "Na tregoni si furnizoheni sot",
  "Fuel supply designed around where and how you use it":
    "Furnizim i përshtatur me vendin dhe mënyrën e përdorimit",
  "The details buyers ask before the first order": "Detajet që blerësit kërkojnë para porosisë së parë",
  "Need help matching product to equipment?": "Të duhet ndihmë për ta përshtatur produktin me pajisjen?",
  "Control fleet fuel without chasing cash and receipts":
    "Kontrollo furnizimin e flotës pa para të gatshme dhe fatura të shpërndara",
  "The controls that make fuel easier to manage": "Kontrollet që e bëjnë furnizimin më të lehtë",
  "Bring station and depot fuel into one plan": "Bashko furnizimin në pika dhe depo në një plan",
  "Farm inputs and fuel planned around the season": "Inpute bujqësore dhe derivate të planifikuara sipas sezonit",
  "Plan inputs and diesel before the busy weeks": "Planifiko inputet dhe dizelin para javëve intensive",
  "Build a career in a business that has to deliver": "Ndërto karrierë në një biznes që duhet të realizojë",
  "Clear standards, practical training and work that matters":
    "Standarde të qarta, trajnim praktik dhe punë me rëndësi",
  "Start with the fuel requirement": "Fillo me kërkesën për derivate",
  "Give us the details needed to quote": "Na jep detajet e nevojshme për ofertë",
  "Four convenient points for fuel, AdBlue and fleet cards":
    "Katër pika praktike për derivate, AdBlue dhe kartela flote",
  "Choose a station and plan the stop": "Zgjidh pikën dhe planifiko ndalesën",
  "What matters when fuel is part of your daily operation":
    "Çfarë ka rëndësi kur derivatet janë pjesë e punës së përditshme",
  "Correct product. Confirmed volume. Safe delivery. Clear paperwork. Those basics are where reliable supply begins.":
    "Produkt i saktë. Sasi e konfirmuar. Dërgesë e sigurt. Dokumentacion i qartë. Këtu fillon furnizimi i besueshëm.",
  "What good fuel supply changes for the customer":
    "Çfarë ndryshon furnizimi i mirë për klientin",
  "Less administration, fewer urgent calls and a clearer view of what was delivered, where and when.":
    "Më pak administrim, më pak thirrje urgjente dhe pasqyrë më e qartë e dërgesave.",
  Home: "Ballina",
  About: "Rreth nesh",
  Services: "Shërbimet",
  Products: "Produktet",
  Fleet: "Flota",
  Agriculture: "Bujqësia",
  Careers: "Karriera",
  Locations: "Lokacionet",
  Contact: "Kontakti",
  "Request a quote": "Kërko ofertë",
  "Explore our services": "Shiko shërbimet tona",
  "Our locations": "Lokacionet tona",
  "Four stations, one standard": "Katër pika, një standard",
  "Station network": "Rrjeti i pikave",
  "Find your nearest station": "Gjej pikën më të afërt",
  "Click a station to see it on the map, or get directions straight to the pump.":
    "Kliko një pikë për ta parë në hartë ose për të marrë udhëzime direkte.",
  "Need fuel delivered instead?": "Të duhet furnizim me derivate?",
  "Our bulk-delivery fleet brings certified fuel to your site, farm or depot — anywhere in Kosovo.":
    "Flota jonë sjell derivate të certifikuara në biznesin, fermën apo depon tuaj — kudo në Kosovë.",
  "Arrange a delivery": "Organizo dërgesën",
  "Bulk delivery service": "Shërbimi i furnizimit me shumicë",
  Flagship: "Kryesore",
  Market: "Market",
  "Market & café": "Market dhe kafene",
  "Fleet card": "Kartelë për flotë",
  "Lubricants shop": "Dyqan lubrifikantësh",
  "Agri fuel point": "Pikë karburanti për bujqësi",
  "AdBlue packs": "Paketime AdBlue",
  "AdBlue at pump": "AdBlue në pompë",
  "Loading map…": "Duke ngarkuar hartën…",
  "Show on map": "Shfaq në hartë",
  "Additional tanker capacity strengthens bulk delivery coverage":
    "Kapaciteti shtesë i cisternave forcon mbulimin e furnizimit me shumicë",
  "Expanded tanker capacity gives commercial customers more scheduling flexibility and stronger coverage during periods of peak fuel demand.":
    "Kapaciteti i zgjeruar i cisternave u jep klientëve komercialë më shumë fleksibilitet në planifikim dhe mbulim më të mirë gjatë periudhave me kërkesë të lartë.",
  "Today Alfa Trade operates across retail fuel, bulk petroleum distribution and commercial supply, using its own ADR-certified tanker operations to serve fleets, industrial sites, construction projects and seasonal customers. We remain independently owned and accountable to the customers and communities we serve.":
    "Sot Alfa Trade vepron në shitjen me pakicë të derivateve, shpërndarjen me shumicë dhe furnizimin komercial, duke përdorur cisternat e veta të certifikuara ADR për flota, objekte industriale, projekte ndërtimore dhe klientë sezonalë. Mbetemi kompani e pavarur dhe e përgjegjshme ndaj klientëve dhe komuniteteve që u shërbejmë.",
  "Bulk delivery capacity expands": "Zgjerohet kapaciteti i furnizimit me shumicë",
  "Additional tanker capacity extends scheduled fuel delivery to commercial sites, construction projects and seasonal customers across Kosovo.":
    "Kapaciteti shtesë i cisternave zgjeron furnizimin e planifikuar për objekte komerciale, projekte ndërtimore dhe klientë sezonalë në gjithë Kosovën.",
  "Petroleum distribution & fuel supply — Kosovo":
    "Shpërndarje e derivateve dhe furnizim — Kosovë",
  "Reliable fuel supply for businesses": "Furnizim i sigurt me derivate për bizneset",
  "that never stop": "që nuk ndalen",
  "We distribute certified diesel, petrol, lubricants and AdBlue across Kosovo — supplying fleets, farms, factories and drivers through four stations and a dependable bulk-delivery network.":
    "Shpërndajmë dizel, benzinë, lubrifikantë dhe AdBlue të certifikuar në gjithë Kosovën — për flota, ferma, fabrika dhe vozitës, përmes katër pikave dhe një rrjeti të besueshëm furnizimi.",
  "EN 590 / EN 228 certified fuels": "Derivate të certifikuara EN 590 / EN 228",
  "ADR-certified tanker fleet": "Flotë cisternash e certifikuar ADR",
  "Who we are": "Kush jemi",
  "Trusted partners": "Partnerë të besuar",
  "Trusted by businesses across Kosovo": "E besuar nga bizneset në gjithë Kosovën",
  "Fuel transport on the highway": "Transporti i derivateve në autostradë",
  "Refuelling at an Alfa Trade station": "Furnizim në një pikë Alfa Trade",
  "Years of trusted supply": "Vite furnizimi të besueshëm",
  "An independent petroleum distributor built on kept promises":
    "Distributor i pavarur i derivateve, i ndërtuar mbi premtimet e mbajtura",
  "Alfa Trade started in 2014 with one truck and a straightforward idea: in the fuel business, reliability is the whole product. Today we operate four retail stations, a bulk-delivery fleet and dedicated agriculture and construction supply divisions — still run by the same principle.":
    "Alfa Trade filloi në vitin 2014 me një kamion dhe një ide të qartë: në biznesin e derivateve, besueshmëria është produkti kryesor. Sot operojmë katër pika, një flotë furnizimi me shumicë dhe divizione të dedikuara për bujqësi e ndërtimtari — ende me të njëjtin parim.",
  "Founded in 2014, family-run and independently owned":
    "Themeluar më 2014, biznes familjar dhe i pavarur",
  "Four retail stations and a growing commercial network":
    "Katër pika dhe një rrjet komercial në rritje",
  "Petroleum, agriculture and construction supply divisions":
    "Divizione për derivate, bujqësi dhe ndërtimtari",
  "Local jobs, local suppliers, local community investment":
    "Punë, furnitorë dhe investime në komunitetin lokal",
  "Our story": "Historia jonë",
  "Why Alfa Trade": "Pse Alfa Trade",
  "Industries we serve": "Industritë që furnizojmë",
  "Our services": "Shërbimet tona",
  "Fuel distribution built around your operations":
    "Shpërndarje e derivateve e përshtatur me veprimtarinë tuaj",
  "From single-site deliveries to national fleet programmes, we design supply around how your business actually works — then we deliver on it, every time.":
    "Nga furnizimi i një lokacioni deri te programet kombëtare të flotave, ne e përshtatim furnizimin me mënyrën si funksionon biznesi juaj — dhe e realizojmë çdo herë.",
  "All services": "Të gjitha shërbimet",
  "Learn more": "Mëso më shumë",
  "Fuel Supply": "Furnizim me derivate",
  "Bulk Fuel Delivery": "Furnizim me shumicë",
  "Fleet Fuel Solutions": "Zgjidhje për furnizimin e flotave",
  "Industrial Fuel Supply": "Furnizim me derivate industriale",
  "Lubricants & Oils": "Lubrifikantë dhe vajra",
  "Logistics Services": "Shërbime logjistike",
  "Commercial Fuel Contracts": "Kontrata komerciale për derivate",
  "Emergency Fuel Supply": "Furnizim emergjent me derivate",
  "Consistent, quality-certified diesel and petrol supply for retail stations, commercial sites and public institutions, backed by long-standing relationships with regional refineries and terminals.":
    "Furnizim i qëndrueshëm me dizel dhe benzinë të certifikuar për pika, biznese dhe institucione publike.",
  "Direct-to-site tanker deliveries for construction sites, farms, generators and storage tanks — metered, sealed and documented from terminal to your tank.":
    "Dërgesa direkte me cisternë për kantiere, ferma, gjeneratorë dhe rezervuarë — të matura, vulosura dhe dokumentuara.",
  "A fuel programme for transport and logistics companies: fuel cards accepted across our network, consolidated invoicing and per-vehicle consumption reporting.":
    "Program furnizimi për kompani transporti dhe logjistike: kartela, faturim i përmbledhur dhe raportim i konsumit për secilin automjet.",
  "Heating oil, generator diesel and process fuels for manufacturing plants, hospitals, greenhouses and facilities that cannot afford downtime.":
    "Vaj ngrohjeje, dizel për gjeneratorë dhe derivate për fabrika, spitale, serra dhe objekte kritike.",
  "Engine oils, hydraulic fluids, transmission oils and greases for passenger, commercial and heavy plant applications, supplied in packs, drums or IBCs.":
    "Vajra motori, lëngje hidraulike, vajra transmisioni dhe graso për automjete e makineri të rënda.",
  "Our own ADR-certified tanker fleet and experienced drivers move fuel safely between terminals, stations and customer sites across Kosovo and the region.":
    "Flota jonë e certifikuar ADR dhe shoferët me përvojë transportojnë derivate në mënyrë të sigurt në Kosovë dhe rajon.",
  "EN 590 and EN 228 certified fuels": "Derivate të certifikuara EN 590 dhe EN 228",
  "Guaranteed volumes under contract": "Sasi të garantuara me kontratë",
  "Transparent, market-indexed pricing": "Çmime transparente sipas tregut",
  "One monthly invoice for the whole fleet": "Një faturë mujore për gjithë flotën",
  "Per-vehicle and per-driver reporting": "Raportim për automjet dhe shofer",
  "Discounted contract pricing": "Çmime kontraktuale me zbritje",
  "Priority scheduling for critical facilities": "Prioritet për objektet kritike",
  "Storage tank monitoring and refill planning": "Monitorim i rezervuarëve dhe planifikim i furnizimit",
  "Technical support on fuel handling": "Mbështetje teknike për trajtimin e derivateve",
  "ADR-certified vehicles and drivers": "Automjete dhe shoferë të certifikuar ADR",
  "GPS-tracked deliveries": "Dërgesa të përcjella me GPS",
  "Regional cross-border capability": "Kapacitet transporti rajonal",
  "Trusted across every sector that moves Kosovo": "E besuar në çdo sektor që e vë Kosovën në lëvizje",
  "Transportation & Logistics": "Transport dhe logjistikë",
  Construction: "Ndërtimtari",
  Manufacturing: "Prodhimtari",
  "Marine & Rail": "Transport detar dhe hekurudhor",
  "Government & Public Sector": "Qeveri dhe sektor publik",
  "Commercial Businesses": "Biznese komerciale",
  "Industrial Operations": "Operacione industriale",
  "Our products": "Produktet tona",
  "News & insights": "Lajme dhe informacione",
  "The latest from Alfa Trade": "Të rejat nga Alfa Trade",
  "What clients say": "Çfarë thonë klientët",
  Sustainability: "Qëndrueshmëria",
  "About Alfa Trade": "Rreth Alfa Trade",
  "Built on one promise: the fuel is there when you need it":
    "Ndërtuar mbi një premtim: karburanti është aty kur ju nevojitet",
  "Our values": "Vlerat tona",
  Milestones: "Etapat",
  Leadership: "Udhëheqja",
  "Certifications & safety": "Certifikimet dhe siguria",
  "Every way a business buys fuel, done properly":
    "Çdo mënyrë e furnizimit të biznesit, e realizuar si duhet",
  FAQ: "Pyetje të shpeshta",
  "Common questions, straight answers": "Pyetje të zakonshme, përgjigje të drejtpërdrejta",
  "Certified fuels and lubricants, tested at every step":
    "Derivate dhe lubrifikantë të certifikuar, të testuar në çdo hap",
  "Not sure which product fits your operation?": "Nuk je i sigurt cili produkt të përshtatet?",
  "Talk to a specialist": "Fol me një specialist",
  "See our services": "Shiko shërbimet tona",
  "Fleet solutions": "Zgjidhje për flota",
  "Take fuel administration off your desk": "Largo administrimin e karburantit nga tavolina",
  "The programme": "Programi",
  "Why it pays": "Pse ia vlen",
  "Fleet FAQ": "Pyetje për flotën",
  "Before you ask": "Para se të pyesni",
  "Put your fleet on one invoice": "E gjithë flota në një faturë",
  "Book a fleet review": "Rezervo analizën e flotës",
  "See fuel products": "Shiko produktet",
  "Agriculture division": "Divizioni i bujqësisë",
  "Why agriculture": "Pse bujqësia",
  Fertilizers: "Plehrat",
  "Responsible use": "Përdorim i përgjegjshëm",
  "Beyond fertilizer": "Përtej plehrave",
  "Get a season quote": "Kërko ofertë sezonale",
  "Contact us": "Na kontaktoni",
  "Talk to a person, not a queue": "Fol me një person, jo me një radhë pritjeje",
  "Get in touch": "Na kontaktoni",
  "Direct lines": "Kontaktet direkte",
  "Phone — orders & 24/7 dispatch": "Telefoni — porosi dhe dispeçeri 24/7",
  Headquarters: "Selia",
  "Office hours": "Orari i punës",
  "Send an inquiry": "Dërgo kërkesë",
  "Tell us what you need": "Na tregoni çfarë ju duhet",
  "Full name": "Emri dhe mbiemri",
  "Your name": "Emri juaj",
  Company: "Kompania",
  "Company name": "Emri i kompanisë",
  "(optional)": "(opsionale)",
  Phone: "Telefoni",
  Department: "Departamenti",
  Message: "Mesazhi",
  "Send inquiry": "Dërgo kërkesën",
  "Inquiry sent": "Kërkesa u dërgua",
  "Visit us": "Na vizitoni",
  "Or stop by any of our stations": "Ose vizitoni cilëndo nga pikat tona",
  "Do work people depend on": "Bëj punë nga e cila varen njerëzit",
  "Why work here": "Pse të punoni këtu",
  "How hiring works": "Si funksionon punësimi",
  "Open positions": "Pozitat e hapura",
  "We're hiring now": "Po punësojmë",
  Apply: "Apliko",
  "Send us your application": "Na dërgo aplikimin",
  "Application received": "Aplikimi u pranua",
  "Prefer to talk first?": "Preferon të flasim fillimisht?",
  "Find a station": "Gjej një pikë",
  "Page not found": "Faqja nuk u gjet",
  "Back to home": "Kthehu në ballinë",
  "Our stations": "Pikat tona",
  "About us": "Rreth nesh",
  "Fuel supply": "Furnizim me derivate",
  "Bulk delivery": "Furnizim me shumicë",
  "Agriculture supply": "Furnizim bujqësor",
  "Industrial fuel": "Derivate industriale",
  Logistics: "Logjistikë",
  "All rights reserved.": "Të gjitha të drejtat e rezervuara.",
  "Fuel stations open daily 06:00 – 24:00": "Pikat e karburantit hapur çdo ditë 06:00 – 24:00",
  "Monday – Friday": "E hënë – E premte",
  Saturday: "E shtunë",
  Sunday: "E diel",
  "Directions to": "Udhëzime për në",
  "Map of Alfa Trade stations": "Harta e pikave Alfa Trade",
  "Petroleum Distribution & Fuel Supply": "Shpërndarje dhe furnizim me derivate",
  "Distributing fuel responsibly, today and tomorrow":
    "Shpërndarje e përgjegjshme e derivateve, sot dhe nesër",
  "A petroleum distributor's environmental duty starts with safe storage, transport and handling. We invest in cleaner fuels, efficient logistics and spill-prevention systems — and we hold ourselves to targets we publish.":
    "Përgjegjësia mjedisore e një distributori të derivateve fillon me ruajtjen, transportin dhe trajtimin e sigurt. Investojmë në derivate më të pastra, logjistikë efikase dhe sisteme për parandalimin e derdhjeve.",
  "Product launches, station updates and what's changing in the regional petroleum market.":
    "Produkte të reja, përditësime nga pikat tona dhe zhvillimet në tregun rajonal të derivateve.",
  "Certified petroleum products, lubricants and bulk fuel distribution for businesses and industries — delivered safely and on time since 2014.":
    "Produkte të certifikuara të naftës, lubrifikantë dhe shpërndarje me shumicë për biznese e industri — të dorëzuara sigurt dhe në kohë që nga viti 2014.",
  ...sqExtended,
};

const translations = { sq };
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const translatedAttributes = ["placeholder", "aria-label", "title"];

const translate = (value, language) => {
  if (language === "en" || typeof value !== "string") return value;
  const trimmed = value.trim();
  const direct = translations[language]?.[trimmed];
  if (direct) return value.replace(trimmed, direct);

  const directionMatch = trimmed.match(/^Directions to (.+)$/);
  if (directionMatch) return value.replace(trimmed, `Udhëzime për në ${directionMatch[1]}`);
  return value;
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem(STORAGE_KEY) || "sq");

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
    const root = document.getElementById("root");
    if (!root) return undefined;

    let applying = false;
    const localizeText = (node) => {
      const current = node.nodeValue;
      let original = originalText.get(node);
      if (!original || (current !== original && current !== translate(original, "sq"))) {
        original = current;
        originalText.set(node, original);
      }
      const next = translate(original, language);
      if (current !== next) node.nodeValue = next;
    };
    const localizeElement = (element) => {
      const saved = originalAttributes.get(element) || {};
      translatedAttributes.forEach((attribute) => {
        if (!element.hasAttribute?.(attribute)) return;
        const current = element.getAttribute(attribute);
        if (!saved[attribute] || (current !== saved[attribute] && current !== translate(saved[attribute], "sq"))) {
          saved[attribute] = current;
        }
        const next = translate(saved[attribute], language);
        if (current !== next) element.setAttribute(attribute, next);
      });
      originalAttributes.set(element, saved);
    };
    const localizeTree = (target) => {
      applying = true;
      if (target.nodeType === Node.TEXT_NODE) localizeText(target);
      if (target.nodeType === Node.ELEMENT_NODE) {
        localizeElement(target);
        const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) localizeText(walker.currentNode);
        target.querySelectorAll?.("*").forEach(localizeElement);
      }
      applying = false;
    };

    localizeTree(root);
    const observer = new MutationObserver((mutations) => {
      if (applying) return;
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") localizeTree(mutation.target);
        mutation.addedNodes?.forEach(localizeTree);
        if (mutation.type === "attributes") localizeTree(mutation.target);
      });
    });
    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributes,
    });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: (text) => translate(text, language) }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
