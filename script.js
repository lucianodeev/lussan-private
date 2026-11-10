'use strict';

(() => {
  const translations = {
    "pt": {
      "ageTitle": "Um espaço reservado a adultos.",
      "ageText": "Confirme que tem 18 anos ou mais para continuar.",
      "enter": "Tenho 18 anos ou mais",
      "leave": "Sou menor de 18 anos",
      "aboutNav": "Sobre",
      "experienceNav": "Experiências",
      "galleryNav": "Galeria",
      "bookingNav": "Disponibilidade",
      "location": "BRUXELAS · SCHAERBEEK",
      "heroRole": "Acompanhante masculino em Bruxelas",
      "hero": "Sou Lussan, brasileiro da Bahia. Recebo em privado para encontros individuais, boa companhia e massagens sensuais.",
      "cta": "Consultar disponibilidade",
      "seeGallery": "Ver fotografias",
      "heroNote": "Encontros 18+ · Por marcação · Discrição",
      "aboutTitle": "Prazer, sou Lussan.",
      "aboutText": "Gosto de encontros com conversa, bom humor e tempo para ficar à vontade. Recebo em Schaerbeek, num espaço privado, e converso contigo sobre preferências e limites antes de combinarmos.",
      "experienceTitle": "Como podemos passar o tempo.",
      "company": "Companhia privada",
      "companyText": "Boa conversa, presença e atenção personalizada.",
      "massage": "Massagem relaxante e sensual",
      "massageText": "Um momento tranquilo, pensado para o teu conforto.",
      "personal": "Encontros mais longos",
      "personalText": "Se preferes passar mais tempo comigo, podemos combinar a duração e os detalhes em privado.",
      "galleryTitle": "Um olhar mais próximo.",
      "availabilityDescription": "Recebo em Bruxelas · Schaerbeek. Para outras cidades, consulta a disponibilidade para deslocações.",
      "bookingLocation": "Local do encontro",
      "bookingTravel": "Outra cidade · mediante consulta",
      "bookingDate": "Data pretendida",
      "bookingButton": "Consultar pelo WhatsApp",
      "bookingNote": "O pedido abre uma conversa no WhatsApp. A reserva é confirmada por mensagem.",
      "contactTitle": "Vamos conversar?",
      "contactText": "Atendimento privado em Bruxelas. Disponibilidade e detalhes por mensagem.",
      "footer": "Discrição · Respeito · Bruxelas",
      "denied": "Conteúdo reservado a maiores de 18 anos."
    },
    "fr": {
      "ageTitle": "Un espace réservé aux adultes.",
      "ageText": "Confirmez que vous avez au moins 18 ans.",
      "enter": "J'ai 18 ans ou plus",
      "leave": "J'ai moins de 18 ans",
      "aboutNav": "À propos",
      "experienceNav": "Expériences",
      "galleryNav": "Galerie",
      "bookingNav": "Disponibilités",
      "location": "BRUXELLES · SCHAERBEEK",
      "heroRole": "Escort masculin à Bruxelles",
      "hero": "Je suis Lussan, originaire de Bahia au Brésil. Je te reçois en privé pour des rendez-vous en tête-à-tête, des moments de compagnie et des massages sensuels.",
      "cta": "Consulter mes disponibilités",
      "seeGallery": "Voir les photos",
      "heroNote": "Rendez-vous 18+ · Sur réservation · Discrétion",
      "aboutTitle": "Enchanté, je suis Lussan.",
      "aboutText": "J’aime les rencontres où l’on peut discuter, rire et prendre le temps de se mettre à l’aise. Je te reçois dans un espace privé à Schaerbeek. Avant le rendez-vous, nous pouvons parler de nos envies et de nos limites.",
      "experienceTitle": "Comment passer du temps ensemble",
      "company": "Compagnie privée",
      "companyText": "Conversation, présence et attention personnalisée.",
      "massage": "Massage relaxant et sensuel",
      "massageText": "Un moment de calme, pensé pour ton confort.",
      "personal": "Rendez-vous prolongés",
      "personalText": "Si tu souhaites passer plus de temps avec moi, nous pouvons convenir de la durée et des détails en privé.",
      "galleryTitle": "Un regard de plus près.",
      "availabilityDescription": "Je te reçois à Bruxelles · Schaerbeek. Pour une autre ville, contacte-moi au sujet des déplacements.",
      "bookingLocation": "Lieu du rendez-vous",
      "bookingTravel": "Autre ville · sur demande",
      "bookingDate": "Date souhaitée",
      "bookingButton": "Me contacter sur WhatsApp",
      "bookingNote": "Le formulaire ouvre une conversation WhatsApp. La réservation est confirmée par message.",
      "contactTitle": "On échange ?",
      "contactText": "Rendez-vous privés à Bruxelles. Disponibilités et détails par message.",
      "footer": "Discrétion · Respect · Bruxelles",
      "denied": "Contenu réservé aux personnes majeures."
    },
    "en": {
      "ageTitle": "A space for adults.",
      "ageText": "Please confirm you are at least 18.",
      "enter": "I am 18 or over",
      "leave": "I am under 18",
      "aboutNav": "About",
      "experienceNav": "Experiences",
      "galleryNav": "Gallery",
      "bookingNav": "Availability",
      "location": "BRUSSELS · SCHAERBEEK",
      "heroRole": "Male escort in Brussels",
      "hero": "I’m Lussan, a Brazilian from Bahia. I host one-on-one appointments for private companionship and sensual massage.",
      "cta": "Check availability",
      "seeGallery": "View photos",
      "heroNote": "18+ · By appointment · Discreet",
      "aboutTitle": "Hello, I'm Lussan.",
      "aboutText": "I enjoy good conversation, a sense of humour and taking the time to feel at ease. I host in a private space in Schaerbeek, and we can discuss preferences and boundaries before making plans.",
      "experienceTitle": "How we can spend time together",
      "company": "Private companionship",
      "companyText": "Good conversation, presence and personal attention.",
      "massage": "Relaxing and sensual massage",
      "massageText": "A peaceful moment designed around your comfort.",
      "personal": "Extended appointments",
      "personalText": "If you’d like to spend more time with me, we can agree on the duration and details in private.",
      "galleryTitle": "A closer look.",
      "availabilityDescription": "I host in Brussels · Schaerbeek. If you’re in another city, message me about travel availability.",
      "bookingLocation": "Appointment location",
      "bookingTravel": "Another city · on request",
      "bookingDate": "Preferred date",
      "bookingButton": "Ask on WhatsApp",
      "bookingNote": "This opens a WhatsApp conversation. Your booking is confirmed by message.",
      "contactTitle": "Let's talk?",
      "contactText": "Private appointments in Brussels. Ask about availability and details by message.",
      "footer": "Discretion · Respect · Brussels",
      "denied": "This content is reserved for adults."
    },
    "nl": {
      "ageTitle": "Een plek voor volwassenen.",
      "ageText": "Bevestig dat je minstens 18 jaar bent.",
      "enter": "Ik ben 18 jaar of ouder",
      "leave": "Ik ben jonger dan 18",
      "aboutNav": "Over mij",
      "experienceNav": "Ervaringen",
      "galleryNav": "Galerij",
      "bookingNav": "Beschikbaarheid",
      "location": "BRUSSEL · SCHAARBEEK",
      "heroRole": "Mannelijke escort in Brussel",
      "hero": "Ik ben Lussan, een Braziliaan uit Bahia. Ik ontvang je privé voor een ontmoeting onder vier ogen, gezelschap of een sensuele massage.",
      "cta": "Vraag naar mijn beschikbaarheid",
      "seeGallery": "Bekijk foto’s",
      "heroNote": "18+ · Op afspraak · Discreet",
      "aboutTitle": "Aangenaam, ik ben Lussan.",
      "aboutText": "Ik hou van een goed gesprek, humor en de tijd nemen om je op je gemak te voelen. Ik ontvang je op een privélocatie in Schaarbeek. We kunnen vooraf bespreken wat we prettig vinden en waar onze grenzen liggen.",
      "experienceTitle": "Hoe we samen tijd kunnen doorbrengen",
      "company": "Privégezelschap",
      "companyText": "Goed gesprek, aanwezigheid en persoonlijke aandacht.",
      "massage": "Ontspannende en sensuele massage",
      "massageText": "Een rustig moment, gericht op jouw comfort.",
      "personal": "Langere afspraken",
      "personalText": "Wil je wat langer bij me blijven? Dan kunnen we de duur en details onderling afspreken.",
      "galleryTitle": "Een kijkje van dichtbij.",
      "availabilityDescription": "Ik ontvang je in Brussel · Schaarbeek. Stuur me een bericht als je wilt afspreken in een andere stad.",
      "bookingLocation": "Locatie van de afspraak",
      "bookingTravel": "Andere stad · op aanvraag",
      "bookingDate": "Gewenste datum",
      "bookingButton": "Vraag het via WhatsApp",
      "bookingNote": "Hiermee open je een WhatsApp-gesprek. Ik bevestig je afspraak per bericht.",
      "contactTitle": "Zullen we praten?",
      "contactText": "Privéafspraken in Brussel. Vraag naar beschikbaarheid en details via een bericht.",
      "footer": "Discretie · Respect · Brussel",
      "denied": "Deze inhoud is alleen voor volwassenen."
    },
    "es": {
      "ageTitle": "Un espacio para adultos.",
      "ageText": "Confirma que tienes al menos 18 años.",
      "enter": "Tengo 18 años o más",
      "leave": "Soy menor de 18 años",
      "aboutNav": "Sobre mí",
      "experienceNav": "Experiencias",
      "galleryNav": "Galería",
      "bookingNav": "Disponibilidad",
      "location": "BRUSELAS · SCHAERBEEK",
      "heroRole": "Acompañante masculino en Bruselas",
      "hero": "Soy Lussan, brasileño de Bahía. Recibo en privado para encuentros individuales, buena compañía y masajes sensuales.",
      "cta": "Consultar disponibilidad",
      "seeGallery": "Ver fotos",
      "heroNote": "Encuentros 18+ · Con cita previa · Discreción",
      "aboutTitle": "Encantado, soy Lussan.",
      "aboutText": "Me gustan los encuentros con buena conversación, humor y tiempo para sentirnos a gusto. Te recibo en un espacio privado en Schaerbeek y podemos hablar de preferencias y límites antes de quedar.",
      "experienceTitle": "Cómo podemos pasar el tiempo juntos",
      "company": "Compañía privada",
      "companyText": "Buena conversación, presencia y atención personalizada.",
      "massage": "Masaje relajante y sensual",
      "massageText": "Un momento tranquilo pensado para tu comodidad.",
      "personal": "Encuentros más largos",
      "personalText": "Si prefieres pasar más tiempo conmigo, podemos acordar la duración y los detalles en privado.",
      "galleryTitle": "Una mirada más cercana.",
      "availabilityDescription": "Recibo en Bruselas · Schaerbeek. Para otras ciudades, consulta mi disponibilidad para desplazarme.",
      "bookingLocation": "Lugar del encuentro",
      "bookingTravel": "Otra ciudad · previa consulta",
      "bookingDate": "Fecha deseada",
      "bookingButton": "Consultar por WhatsApp",
      "bookingNote": "Esto abre una conversación en WhatsApp. La reserva se confirma por mensaje.",
      "contactTitle": "¿Hablamos?",
      "contactText": "Citas privadas en Bruselas. Consulta disponibilidad y detalles por mensaje.",
      "footer": "Discreción · Respeto · Bruselas",
      "denied": "Contenido reservado para adultos."
    }
  };
  const select = document.querySelector('#language');
  const labels = document.querySelectorAll('[data-i]');

  function translate(language) {
    const lang = Object.hasOwn(translations, language) ? language : 'pt';
    document.documentElement.lang = lang;
    select.value = lang;
    for (const label of labels) {
      label.textContent = translations[lang][label.dataset.i];
    }
    try { localStorage.setItem('lussanPrivateLanguage', lang); } catch {}
  }

  let saved = 'pt';
  try { saved = localStorage.getItem('lussanPrivateLanguage') || 'pt'; } catch {}
  translate(saved);
  select.addEventListener('change', () => translate(select.value));

  const gate = document.querySelector('#ageGate');
  const site = document.querySelector('#site');
  function unlock(moveFocus) {
    gate.hidden = true;
    site.inert = false;
    if (location.hash === '#availability') {
      document.querySelector('#availability-heading').focus({ preventScroll: true });
      document.querySelector('#availability').scrollIntoView({ behavior: 'instant' });
    } else if (moveFocus) {
      document.querySelector('h1').focus({ preventScroll: true });
    }
  }

  document.querySelector('#enter').addEventListener('click', () => {
    try { sessionStorage.setItem('lussanPrivateAdult', 'yes'); } catch {}
    unlock(true);
  });
  document.querySelector('#leave').addEventListener('click', () => {
    gate.hidden = true;
    site.hidden = true;
    const denied = document.querySelector('#denied');
    denied.hidden = false;
    const heading = denied.querySelector('h1');
    heading.tabIndex = -1;
    heading.focus();
  });
  try {
    if (sessionStorage.getItem('lussanPrivateAdult') === 'yes') unlock(false);
  } catch {}
})();
