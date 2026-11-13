'use strict';

(() => {
  const form = document.querySelector('#availability-form');
  if (!form) return;

  const city = form.querySelector('#availability-city');
  const date = form.querySelector('#availability-date');
  const duration = form.querySelector('#availability-duration');
  const time = form.querySelector('#availability-time');
  const messages = {
    pt: {
      brussels: 'Olá, Lussan! Tens disponibilidade em Bruxelas · Schaerbeek no dia',
      travel: 'Olá, Lussan! Gostaria de consultar disponibilidade para um encontro noutra cidade no dia',
    },
    fr: {
      brussels: 'Bonjour Lussan ! Es-tu disponible à Bruxelles · Schaerbeek le',
      travel: 'Bonjour Lussan ! Es-tu disponible pour un rendez-vous dans une autre ville le',
    },
    en: {
      brussels: 'Hi Lussan! Are you available in Brussels · Schaerbeek on',
      travel: 'Hi Lussan! Are you available for an appointment in another city on',
    },
    nl: {
      brussels: 'Hallo Lussan! Ben je beschikbaar in Brussel · Schaarbeek op',
      travel: 'Hallo Lussan! Ben je beschikbaar voor een afspraak in een andere stad op',
    },
    es: {
      brussels: '¡Hola, Lussan! ¿Tienes disponibilidad en Bruselas · Schaerbeek el',
      travel: '¡Hola, Lussan! ¿Tienes disponibilidad para una cita en otra ciudad el',
    },
  };

  function today() {
    const now = new Date();
    return [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0'),
    ].join('-');
  }

  date.min = today();
  date.addEventListener('focus', () => { date.min = today(); });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    date.min = today();
    if (!form.reportValidity()) return;

    const lang = document.documentElement.lang;
    const template = (messages[lang] || messages.pt)[city.value];
    const formattedDate = new Intl.DateTimeFormat(lang, {
      dateStyle: 'long',
      timeZone: 'UTC',
    }).format(new Date(date.value));
    const detailLabels = {pt:['Duração','Hora'],fr:['Durée','Heure'],en:['Duration','Time'],nl:['Duur','Tijd'],es:['Duración','Hora']};
    const labels = detailLabels[lang] || detailLabels.pt;
    const message = `${template} ${formattedDate}? ${labels[0]}: ${duration.value} min. ${labels[1]}: ${time.value}.`;
    window.open(`https://wa.me/351915365474?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
})();
