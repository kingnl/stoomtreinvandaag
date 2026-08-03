export const rubrieken = {
  daglicht: { naam: 'De Daglicht 4449', icoon: '/images/icon-daglicht.png' },
  bigboy:   { naam: 'Big Boy 4014',     icoon: '/images/icon-bigboy.png' },
  vsm:      { naam: 'VSM',              icoon: '/images/icon-vsm.png' },
  zlsm:     { naam: 'ZLSM',             icoon: '/images/icon-zlsm.png' },
  techniek: { naam: 'Techniek',         icoon: '/images/icon-techniek.png' },
};

export function datumNL(d) {
  return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}
