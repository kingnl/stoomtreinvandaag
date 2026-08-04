export const rubrieken = {
  daglicht: {
    naam: 'De Daglicht 4449',
    icoon: '/images/icon-daglicht.png',
    foto: '/images/daglicht-4449.jpg',
    fotoCredit: 'Foto: Sam Churchill, via Wikimedia Commons, CC BY 2.0',
    intro: [
      'De Southern Pacific 4449 is de laatste GS-4 die er nog is. Van de achtentwintig die gebouwd werden, is dit de enige die het gehaald heeft.',
      'De rood-oranje kleuren horen bij de Coast Daylight, de trein tussen Los Angeles en San Francisco. Die reed langs de kust en gold als de mooiste trein van Amerika.',
      'De 4449 staat in Portland, Oregon. Hij rijdt nog een paar keer per jaar, met echte reizigers erachter.',
    ],
    feiten: [
      ['Gebouwd', '1941, Lima Locomotive Works'],
      ['Asindeling', '4-8-4'],
      ['Brandstof', 'olie'],
      ['Te zien in', 'Portland, Oregon'],
    ],
    galerij: [
      { foto: '/images/daglicht-4449.jpg', bijschrift: 'De 4449 in Portland, in de kleuren van de Coast Daylight.' },
    ],
    uitgelicht: [
      { titel: 'Kleurplaat', tekst: 'De Daglicht om zelf in te kleuren.' },
    ],
  },

  bigboy: {
    naam: 'Big Boy 4014',
    icoon: '/images/icon-bigboy.png',
    foto: '/images/big-boy-4014.jpg',
    fotoCredit: 'Foto: Mark Loewe, via Wikimedia Commons, CC BY 2.0',
    intro: [
      'De Big Boy is de grootste stoomlocomotief die ooit gebouwd is en nog rijdt. Union Pacific liet er vijfentwintig maken, voor de zware treinen over de bergen in Wyoming.',
      'De 4014 stond decennialang stil in Californie. In 2019 reed hij weer, na een restauratie van jaren.',
      'Er zijn er nog acht over. Deze is de enige die onder stoom komt.',
    ],
    feiten: [
      ['Gebouwd', '1941, Alco Schenectady'],
      ['Asindeling', '4-8-8-4'],
      ['Brandstof', 'olie, sinds de restauratie'],
      ['Te zien in', 'Cheyenne, Wyoming'],
    ],
    model: '/models/bigboy-4014.glb',
    modelCredit: '3D-model: Steam Locomotive Union Pacific BigBoy door Footloose, via Sketchfab, CC BY 4.0',
    galerij: [
      { foto: '/images/big-boy-4014.jpg', bijschrift: 'De 4014 bij Friesland in Wisconsin, met volle rook.' },
      { foto: '/images/asindeling.jpg', bijschrift: 'Het drijfwerk van dichtbij. Links de cilinder, daarnaast de drijfstang.' },
    ],
    uitgelicht: [
      { titel: 'De hele reis van 2026', tekst: 'Alle stops van kust tot kust, één voor één.' },
    ],
  },

  vsm: {
    naam: 'VSM',
    icoon: '/images/icon-vsm.png',
    foto: '/images/vsm-23076.jpg',
    fotoCredit: 'Foto: Sven Scholten',
    intro: [
      'De Veluwsche Stoomtrein Maatschappij rijdt tussen Apeldoorn en Dieren, dwars over de Veluwe. Onderweg komt de trein langs Beekbergen, Loenen en Eerbeek.',
      'Alles wordt gedaan door vrijwilligers. De werkplaats staat in Beekbergen, en daar staan ook de locomotieven.',
      'Het grootste weekend van het jaar heet Terug naar Toen, in het eerste hele weekend van september.',
    ],
    feiten: [
      ['Opgericht', '1975'],
      ['Traject', 'Apeldoorn - Dieren'],
      ['Depot', 'Beekbergen'],
      ['Bijzonder', 'vooral Duitse locomotieven'],
    ],
    model: '/models/br52.glb',
    modelCredit: '3D-model: BR52 Steam Locomotive Animation door Ryan.Qin, via Sketchfab, CC BY 4.0',
    galerij: [
      { foto: '/images/vsm-23076.jpg', bijschrift: 'Een stoomtrein van de VSM op de Veluwe.' },
    ],
    uitgelicht: [],
  },

  zlsm: {
    naam: 'ZLSM',
    icoon: '/images/icon-zlsm.png',
    foto: '/images/zlsm-1040.jpg',
    fotoCredit: 'Foto: Joris, via Wikimedia Commons, CC BY-SA 4.0',
    intro: [
      'De Zuid-Limburgse Stoomtrein Maatschappij rijdt vanuit Simpelveld naar Kerkrade en naar Schin op Geul. De lijn wordt ook wel de Miljoenenlijn genoemd.',
      'Vroeger reden hier treinen voor de kolenmijnen. Toen de mijnen dichtgingen, verdween ook het spoor uit dienst.',
      'De stoomlocomotieven komen uit Zweden. Daar stond decennialang een voorraad klaar voor noodgevallen.',
    ],
    feiten: [
      ['Opgericht', '1988'],
      ['Traject', 'Simpelveld - Kerkrade en Schin op Geul'],
      ['Depot', 'Simpelveld'],
      ['Bijzonder', 'Zweedse stoomlocomotieven'],
    ],
    galerij: [
      { foto: '/images/zlsm-1040.jpg', bijschrift: 'De 1040 bij de overweg in Schin op Geul.' },
    ],
    uitgelicht: [
      { titel: 'De cabine', tekst: 'Zelf aan de knoppen van een stoomlocomotief.' },
    ],
  },

  techniek: {
    naam: 'Techniek',
    icoon: '/images/icon-techniek.png',
    foto: '/images/asindeling.jpg',
    fotoCredit: 'Foto: Fan Railer, via Wikimedia Commons, CC BY-SA 4.0 (uitsnede)',
    intro: [
      'Hier gaat het over hoe een stoomlocomotief in elkaar zit, en waarom hij is zoals hij is.',
      'Waarom de ene loc vier drijfwielen heeft en de andere zestien. Wat het verschil is tussen kolen en olie stoken. Hoe een scharnierend frame door een bocht komt.',
      'Het onderstel van het verhaal, zeg maar.',
    ],
    feiten: [],
    model: '/models/scotsman.glb',
    modelCredit: '3D-model: Train - Flying Scotsman Twin Tenders door timblewee, via Sketchfab, CC BY 4.0',
    galerij: [
      { foto: '/images/asindeling.jpg', bijschrift: 'Cilinder, drijfstang en koppelstangen van de Big Boy.' },
    ],
    uitgelicht: [],
  },
};

export function datumNL(d) {
  return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}
