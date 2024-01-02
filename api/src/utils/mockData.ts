import { CurrencyConversion } from '../models/currencyModel'

const currencyData: CurrencyConversion[] = [
  {
    currency: 'EU',
    exchange_rate: 0.27,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/eu.svg',
    fees: 5.0,
  },
  {
    currency: 'US',
    exchange_rate: 0.28,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/us.svg',
    fees: 5.1,
  },
  {
    currency: 'CA',
    exchange_rate: 0.29000000000000004,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/ca.svg',
    fees: 5.2,
  },
  {
    currency: 'AU',
    exchange_rate: 0.30000000000000004,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/au.svg',
    fees: 5.3,
  },
  {
    currency: 'NZ',
    exchange_rate: 0.31,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/nz.svg',
    fees: 5.4,
  },
  {
    currency: 'ZA',
    exchange_rate: 0.32,
    currency_symbol: 'R',
    flag_url: 'https://flagcdn.com/za.svg',
    fees: 5.5,
  },
  {
    currency: 'IN',
    exchange_rate: 0.33,
    currency_symbol: '\u20b9',
    flag_url: 'https://flagcdn.com/in.svg',
    fees: 5.6,
  },
  {
    currency: 'PK',
    exchange_rate: 0.34,
    currency_symbol: '\u20a8',
    flag_url: 'https://flagcdn.com/pk.svg',
    fees: 5.7,
  },
  {
    currency: 'BD',
    exchange_rate: 0.35000000000000003,
    currency_symbol: '\u09f3',
    flag_url: 'https://flagcdn.com/bd.svg',
    fees: 5.8,
  },
  {
    currency: 'NP',
    exchange_rate: 0.36,
    currency_symbol: '\u20a8',
    flag_url: 'https://flagcdn.com/np.svg',
    fees: 5.9,
  },
  {
    currency: 'LK',
    exchange_rate: 0.37,
    currency_symbol: '\u20a8',
    flag_url: 'https://flagcdn.com/lk.svg',
    fees: 6.0,
  },
  {
    currency: 'CN',
    exchange_rate: 0.38,
    currency_symbol: '\u00a5',
    flag_url: 'https://flagcdn.com/cn.svg',
    fees: 6.1,
  },
  {
    currency: 'JP',
    exchange_rate: 0.39,
    currency_symbol: '\u00a5',
    flag_url: 'https://flagcdn.com/jp.svg',
    fees: 6.2,
  },
  {
    currency: 'SG',
    exchange_rate: 0.4,
    currency_symbol: 'S$',
    flag_url: 'https://flagcdn.com/sg.svg',
    fees: 6.3,
  },
  {
    currency: 'MY',
    exchange_rate: 0.41000000000000003,
    currency_symbol: 'RM',
    flag_url: 'https://flagcdn.com/my.svg',
    fees: 6.4,
  },
  {
    currency: 'ID',
    exchange_rate: 0.42000000000000004,
    currency_symbol: 'Rp',
    flag_url: 'https://flagcdn.com/id.svg',
    fees: 6.5,
  },
  {
    currency: 'TH',
    exchange_rate: 0.43000000000000005,
    currency_symbol: '\u0e3f',
    flag_url: 'https://flagcdn.com/th.svg',
    fees: 6.6,
  },
  {
    currency: 'VN',
    exchange_rate: 0.44000000000000006,
    currency_symbol: '\u20ab',
    flag_url: 'https://flagcdn.com/vn.svg',
    fees: 6.7,
  },
  {
    currency: 'PH',
    exchange_rate: 0.45,
    currency_symbol: '\u20b1',
    flag_url: 'https://flagcdn.com/ph.svg',
    fees: 6.8,
  },
  {
    currency: 'MM',
    exchange_rate: 0.46,
    currency_symbol: 'K',
    flag_url: 'https://flagcdn.com/mm.svg',
    fees: 6.9,
  },
  {
    currency: 'KH',
    exchange_rate: 0.47000000000000003,
    currency_symbol: '\u17db',
    flag_url: 'https://flagcdn.com/kh.svg',
    fees: 7.0,
  },
  {
    currency: 'DE',
    exchange_rate: 0.48,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/de.svg',
    fees: 7.1,
  },
  {
    currency: 'FR',
    exchange_rate: 0.49,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/fr.svg',
    fees: 7.2,
  },
  {
    currency: 'IT',
    exchange_rate: 0.5,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/it.svg',
    fees: 7.300000000000001,
  },
  {
    currency: 'ES',
    exchange_rate: 0.51,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/es.svg',
    fees: 7.4,
  },
  {
    currency: 'PL',
    exchange_rate: 0.52,
    currency_symbol: 'z\u0142',
    flag_url: 'https://flagcdn.com/pl.svg',
    fees: 7.5,
  },
  {
    currency: 'NL',
    exchange_rate: 0.53,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/nl.svg',
    fees: 7.6,
  },
  {
    currency: 'BE',
    exchange_rate: 0.54,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/be.svg',
    fees: 7.7,
  },
  {
    currency: 'SE',
    exchange_rate: 0.55,
    currency_symbol: 'kr',
    flag_url: 'https://flagcdn.com/se.svg',
    fees: 7.800000000000001,
  },
  {
    currency: 'NO',
    exchange_rate: 0.56,
    currency_symbol: 'kr',
    flag_url: 'https://flagcdn.com/no.svg',
    fees: 7.9,
  },
  {
    currency: 'FI',
    exchange_rate: 0.5700000000000001,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/fi.svg',
    fees: 8.0,
  },
  {
    currency: 'BR',
    exchange_rate: 0.5800000000000001,
    currency_symbol: 'R$',
    flag_url: 'https://flagcdn.com/br.svg',
    fees: 8.1,
  },
  {
    currency: 'MX',
    exchange_rate: 0.5900000000000001,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/mx.svg',
    fees: 8.2,
  },
  {
    currency: 'AR',
    exchange_rate: 0.6000000000000001,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/ar.svg',
    fees: 8.3,
  },
  {
    currency: 'CL',
    exchange_rate: 0.6100000000000001,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/cl.svg',
    fees: 8.4,
  },
  {
    currency: 'CO',
    exchange_rate: 0.6200000000000001,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/co.svg',
    fees: 8.5,
  },
  {
    currency: 'GR',
    exchange_rate: 0.63,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/gr.svg',
    fees: 8.6,
  },
  {
    currency: 'DK',
    exchange_rate: 0.64,
    currency_symbol: 'kr',
    flag_url: 'https://flagcdn.com/dk.svg',
    fees: 8.7,
  },
  {
    currency: 'IS',
    exchange_rate: 0.65,
    currency_symbol: 'kr',
    flag_url: 'https://flagcdn.com/is.svg',
    fees: 8.8,
  },
  {
    currency: 'CZ',
    exchange_rate: 0.66,
    currency_symbol: 'K\u010d',
    flag_url: 'https://flagcdn.com/cz.svg',
    fees: 8.9,
  },
  {
    currency: 'HU',
    exchange_rate: 0.67,
    currency_symbol: 'Ft',
    flag_url: 'https://flagcdn.com/hu.svg',
    fees: 9.0,
  },
  {
    currency: 'RO',
    exchange_rate: 0.68,
    currency_symbol: 'lei',
    flag_url: 'https://flagcdn.com/ro.svg',
    fees: 9.100000000000001,
  },
  {
    currency: 'BG',
    exchange_rate: 0.69,
    currency_symbol: '\u043b\u0432',
    flag_url: 'https://flagcdn.com/bg.svg',
    fees: 9.2,
  },
  {
    currency: 'BA',
    exchange_rate: 0.7,
    currency_symbol: 'KM',
    flag_url: 'https://flagcdn.com/ba.svg',
    fees: 9.3,
  },
  {
    currency: 'HR',
    exchange_rate: 0.71,
    currency_symbol: 'kn',
    flag_url: 'https://flagcdn.com/hr.svg',
    fees: 9.4,
  },
  {
    currency: 'RS',
    exchange_rate: 0.72,
    currency_symbol: 'din',
    flag_url: 'https://flagcdn.com/rs.svg',
    fees: 9.5,
  },
  {
    currency: 'ME',
    exchange_rate: 0.73,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/me.svg',
    fees: 9.600000000000001,
  },
  {
    currency: 'MK',
    exchange_rate: 0.74,
    currency_symbol: 'den',
    flag_url: 'https://flagcdn.com/mk.svg',
    fees: 9.7,
  },
  {
    currency: 'AL',
    exchange_rate: 0.75,
    currency_symbol: 'L',
    flag_url: 'https://flagcdn.com/al.svg',
    fees: 9.8,
  },
  {
    currency: 'MT',
    exchange_rate: 0.76,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/mt.svg',
    fees: 9.9,
  },
  {
    currency: 'SI',
    exchange_rate: 0.77,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/si.svg',
    fees: 10.0,
  },
  {
    currency: 'SK',
    exchange_rate: 0.78,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/sk.svg',
    fees: 10.100000000000001,
  },
  {
    currency: 'BY',
    exchange_rate: 0.79,
    currency_symbol: 'Br',
    flag_url: 'https://flagcdn.com/by.svg',
    fees: 10.2,
  },
  {
    currency: 'LT',
    exchange_rate: 0.8,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/lt.svg',
    fees: 10.3,
  },
  {
    currency: 'LV',
    exchange_rate: 0.81,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/lv.svg',
    fees: 10.4,
  },
  {
    currency: 'EE',
    exchange_rate: 0.8200000000000001,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/ee.svg',
    fees: 10.5,
  },
  {
    currency: 'CY',
    exchange_rate: 0.8300000000000001,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/cy.svg',
    fees: 10.600000000000001,
  },
  {
    currency: 'LU',
    exchange_rate: 0.8400000000000001,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/lu.svg',
    fees: 10.7,
  },
  {
    currency: 'MC',
    exchange_rate: 0.85,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/mc.svg',
    fees: 10.8,
  },
  {
    currency: 'SM',
    exchange_rate: 0.86,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/sm.svg',
    fees: 10.9,
  },
  {
    currency: 'LI',
    exchange_rate: 0.87,
    currency_symbol: 'CHf',
    flag_url: 'https://flagcdn.com/li.svg',
    fees: 11.0,
  },
  {
    currency: 'TR',
    exchange_rate: 0.88,
    currency_symbol: '\u20ba',
    flag_url: 'https://flagcdn.com/tr.svg',
    fees: 11.100000000000001,
  },
  {
    currency: 'RU',
    exchange_rate: 0.89,
    currency_symbol: '\u20bd',
    flag_url: 'https://flagcdn.com/ru.svg',
    fees: 11.2,
  },
  {
    currency: 'AM',
    exchange_rate: 0.9,
    currency_symbol: '\u058f',
    flag_url: 'https://flagcdn.com/am.svg',
    fees: 11.3,
  },
  {
    currency: 'GE',
    exchange_rate: 0.91,
    currency_symbol: '\u20be',
    flag_url: 'https://flagcdn.com/ge.svg',
    fees: 11.4,
  },
  {
    currency: 'AZ',
    exchange_rate: 0.92,
    currency_symbol: '\u20bc',
    flag_url: 'https://flagcdn.com/az.svg',
    fees: 11.5,
  },
  {
    currency: 'TM',
    exchange_rate: 0.93,
    currency_symbol: 'm',
    flag_url: 'https://flagcdn.com/tm.svg',
    fees: 11.600000000000001,
  },
  {
    currency: 'UZ',
    exchange_rate: 0.9400000000000001,
    currency_symbol: '\u043b\u0432',
    flag_url: 'https://flagcdn.com/uz.svg',
    fees: 11.7,
  },
  {
    currency: 'TJ',
    exchange_rate: 0.9500000000000001,
    currency_symbol: 'SM',
    flag_url: 'https://flagcdn.com/tj.svg',
    fees: 11.8,
  },
  {
    currency: 'KG',
    exchange_rate: 0.9600000000000001,
    currency_symbol: '\u043b\u0432',
    flag_url: 'https://flagcdn.com/kg.svg',
    fees: 11.9,
  },
  {
    currency: 'KZ',
    exchange_rate: 0.9700000000000001,
    currency_symbol: '\u20b8',
    flag_url: 'https://flagcdn.com/kz.svg',
    fees: 12.0,
  },
  {
    currency: 'MN',
    exchange_rate: 0.98,
    currency_symbol: '\u20ae',
    flag_url: 'https://flagcdn.com/mn.svg',
    fees: 12.100000000000001,
  },
  {
    currency: 'KP',
    exchange_rate: 0.99,
    currency_symbol: '\u20a9',
    flag_url: 'https://flagcdn.com/kp.svg',
    fees: 12.2,
  },
  {
    currency: 'KR',
    exchange_rate: 1.0,
    currency_symbol: '\u20a9',
    flag_url: 'https://flagcdn.com/kr.svg',
    fees: 12.3,
  },
  {
    currency: 'TW',
    exchange_rate: 1.01,
    currency_symbol: 'NT$',
    flag_url: 'https://flagcdn.com/tw.svg',
    fees: 12.4,
  },
  {
    currency: 'HK',
    exchange_rate: 1.02,
    currency_symbol: 'HK$',
    flag_url: 'https://flagcdn.com/hk.svg',
    fees: 12.5,
  },
  {
    currency: 'MO',
    exchange_rate: 1.03,
    currency_symbol: 'MOP$',
    flag_url: 'https://flagcdn.com/mo.svg',
    fees: 12.600000000000001,
  },
  {
    currency: 'LA',
    exchange_rate: 1.04,
    currency_symbol: '\u20ad',
    flag_url: 'https://flagcdn.com/la.svg',
    fees: 12.7,
  },
  {
    currency: 'TL',
    exchange_rate: 1.05,
    currency_symbol: 'US$',
    flag_url: 'https://flagcdn.com/tl.svg',
    fees: 12.8,
  },
  {
    currency: 'BN',
    exchange_rate: 1.06,
    currency_symbol: 'B$',
    flag_url: 'https://flagcdn.com/bn.svg',
    fees: 12.9,
  },
  {
    currency: 'FJ',
    exchange_rate: 1.07,
    currency_symbol: 'FJ$',
    flag_url: 'https://flagcdn.com/fj.svg',
    fees: 13.0,
  },
  {
    currency: 'TV',
    exchange_rate: 1.08,
    currency_symbol: 'AU$',
    flag_url: 'https://flagcdn.com/tv.svg',
    fees: 13.1,
  },
  {
    currency: 'WS',
    exchange_rate: 1.09,
    currency_symbol: 'WS$',
    flag_url: 'https://flagcdn.com/ws.svg',
    fees: 13.200000000000001,
  },
  {
    currency: 'SB',
    exchange_rate: 1.1,
    currency_symbol: 'SI$',
    flag_url: 'https://flagcdn.com/sb.svg',
    fees: 13.3,
  },
  {
    currency: 'VU',
    exchange_rate: 1.1099999999999999,
    currency_symbol: 'VT',
    flag_url: 'https://flagcdn.com/vu.svg',
    fees: 13.4,
  },
  {
    currency: 'NR',
    exchange_rate: 1.12,
    currency_symbol: 'AU$',
    flag_url: 'https://flagcdn.com/nr.svg',
    fees: 13.5,
  },
  {
    currency: 'KI',
    exchange_rate: 1.13,
    currency_symbol: 'AU$',
    flag_url: 'https://flagcdn.com/ki.svg',
    fees: 13.6,
  },
  {
    currency: 'TO',
    exchange_rate: 1.1400000000000001,
    currency_symbol: 'T$',
    flag_url: 'https://flagcdn.com/to.svg',
    fees: 13.700000000000001,
  },
  {
    currency: 'PG',
    exchange_rate: 1.15,
    currency_symbol: 'K',
    flag_url: 'https://flagcdn.com/pg.svg',
    fees: 13.8,
  },
  {
    currency: 'GT',
    exchange_rate: 1.1600000000000001,
    currency_symbol: 'Q',
    flag_url: 'https://flagcdn.com/gt.svg',
    fees: 13.9,
  },
  {
    currency: 'BZ',
    exchange_rate: 1.17,
    currency_symbol: 'BZ$',
    flag_url: 'https://flagcdn.com/bz.svg',
    fees: 14.0,
  },
  {
    currency: 'SV',
    exchange_rate: 1.1800000000000002,
    currency_symbol: '\u20a1',
    flag_url: 'https://flagcdn.com/sv.svg',
    fees: 14.1,
  },
  {
    currency: 'HN',
    exchange_rate: 1.19,
    currency_symbol: 'L',
    flag_url: 'https://flagcdn.com/hn.svg',
    fees: 14.200000000000001,
  },
  {
    currency: 'NI',
    exchange_rate: 1.2000000000000002,
    currency_symbol: 'C$',
    flag_url: 'https://flagcdn.com/ni.svg',
    fees: 14.3,
  },
  {
    currency: 'CR',
    exchange_rate: 1.21,
    currency_symbol: '\u20a1',
    flag_url: 'https://flagcdn.com/cr.svg',
    fees: 14.4,
  },
  {
    currency: 'PA',
    exchange_rate: 1.2200000000000002,
    currency_symbol: 'B/.',
    flag_url: 'https://flagcdn.com/pa.svg',
    fees: 14.5,
  },
  {
    currency: 'CU',
    exchange_rate: 1.23,
    currency_symbol: '\u20b1',
    flag_url: 'https://flagcdn.com/cu.svg',
    fees: 14.600000000000001,
  },
  {
    currency: 'DO',
    exchange_rate: 1.24,
    currency_symbol: 'RD$',
    flag_url: 'https://flagcdn.com/do.svg',
    fees: 14.700000000000001,
  },
  {
    currency: 'HT',
    exchange_rate: 1.25,
    currency_symbol: 'G',
    flag_url: 'https://flagcdn.com/ht.svg',
    fees: 14.8,
  },
  {
    currency: 'JM',
    exchange_rate: 1.26,
    currency_symbol: 'J$',
    flag_url: 'https://flagcdn.com/jm.svg',
    fees: 14.9,
  },
  {
    currency: 'PR',
    exchange_rate: 1.27,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/pr.svg',
    fees: 15.0,
  },
  {
    currency: 'TT',
    exchange_rate: 1.28,
    currency_symbol: 'TT$',
    flag_url: 'https://flagcdn.com/tt.svg',
    fees: 15.100000000000001,
  },
  {
    currency: 'UY',
    exchange_rate: 1.29,
    currency_symbol: '$U',
    flag_url: 'https://flagcdn.com/uy.svg',
    fees: 15.200000000000001,
  },
  {
    currency: 'PY',
    exchange_rate: 1.3,
    currency_symbol: '\u20b2',
    flag_url: 'https://flagcdn.com/py.svg',
    fees: 15.3,
  },
  {
    currency: 'BO',
    exchange_rate: 1.31,
    currency_symbol: 'Bs.',
    flag_url: 'https://flagcdn.com/bo.svg',
    fees: 15.4,
  },
  {
    currency: 'PE',
    exchange_rate: 1.32,
    currency_symbol: 'S/.',
    flag_url: 'https://flagcdn.com/pe.svg',
    fees: 15.5,
  },
  {
    currency: 'GF',
    exchange_rate: 1.33,
    currency_symbol: '\u20ac',
    flag_url: 'https://flagcdn.com/gf.svg',
    fees: 15.600000000000001,
  },
  {
    currency: 'SR',
    exchange_rate: 1.34,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/sr.svg',
    fees: 15.700000000000001,
  },
  {
    currency: 'GY',
    exchange_rate: 1.35,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/gy.svg',
    fees: 15.8,
  },
  {
    currency: 'VE',
    exchange_rate: 1.36,
    currency_symbol: 'Bs',
    flag_url: 'https://flagcdn.com/ve.svg',
    fees: 15.9,
  },
  {
    currency: 'EC',
    exchange_rate: 1.37,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/ec.svg',
    fees: 16.0,
  },
  {
    currency: 'FK',
    exchange_rate: 1.3800000000000001,
    currency_symbol: '\u00a3',
    flag_url: 'https://flagcdn.com/fk.svg',
    fees: 16.1,
  },
  {
    currency: 'BW',
    exchange_rate: 1.3900000000000001,
    currency_symbol: 'P',
    flag_url: 'https://flagcdn.com/bw.svg',
    fees: 16.200000000000003,
  },
  {
    currency: 'LS',
    exchange_rate: 1.4000000000000001,
    currency_symbol: 'L',
    flag_url: 'https://flagcdn.com/ls.svg',
    fees: 16.3,
  },
  {
    currency: 'NA',
    exchange_rate: 1.4100000000000001,
    currency_symbol: '$',
    flag_url: 'https://flagcdn.com/na.svg',
    fees: 16.4,
  },
  {
    currency: 'SZ',
    exchange_rate: 1.4200000000000002,
    currency_symbol: 'L',
    flag_url: 'https://flagcdn.com/sz.svg',
    fees: 16.5,
  },
  {
    currency: 'MZ',
    exchange_rate: 1.43,
    currency_symbol: 'MT',
    flag_url: 'https://flagcdn.com/mz.svg',
    fees: 16.6,
  },
  {
    currency: 'MW',
    exchange_rate: 1.44,
    currency_symbol: 'MK',
    flag_url: 'https://flagcdn.com/mw.svg',
    fees: 16.700000000000003,
  },
  {
    currency: 'ZM',
    exchange_rate: 1.45,
    currency_symbol: 'ZK',
    flag_url: 'https://flagcdn.com/zm.svg',
    fees: 16.8,
  },
  {
    currency: 'AO',
    exchange_rate: 1.46,
    currency_symbol: 'Kz',
    flag_url: 'https://flagcdn.com/ao.svg',
    fees: 16.9,
  },
  {
    currency: 'CG',
    exchange_rate: 1.47,
    currency_symbol: 'FC',
    flag_url: 'https://flagcdn.com/cg.svg',
    fees: 17.0,
  },
  {
    currency: 'CD',
    exchange_rate: 1.48,
    currency_symbol: 'FC',
    flag_url: 'https://flagcdn.com/cd.svg',
    fees: 17.1,
  },
  {
    currency: 'UG',
    exchange_rate: 1.49,
    currency_symbol: 'USh',
    flag_url: 'https://flagcdn.com/ug.svg',
    fees: 17.200000000000003,
  },
  {
    currency: 'RW',
    exchange_rate: 1.5,
    currency_symbol: 'RF',
    flag_url: 'https://flagcdn.com/rw.svg',
    fees: 17.3,
  },
  {
    currency: 'BI',
    exchange_rate: 1.51,
    currency_symbol: 'FBu',
    flag_url: 'https://flagcdn.com/bi.svg',
    fees: 17.4,
  },
  {
    currency: 'ET',
    exchange_rate: 1.52,
    currency_symbol: 'Br',
    flag_url: 'https://flagcdn.com/et.svg',
    fees: 17.5,
  },
  {
    currency: 'SO',
    exchange_rate: 1.53,
    currency_symbol: 'S',
    flag_url: 'https://flagcdn.com/so.svg',
    fees: 17.6,
  },
  {
    currency: 'DJ',
    exchange_rate: 1.54,
    currency_symbol: 'Fdj',
    flag_url: 'https://flagcdn.com/dj.svg',
    fees: 17.700000000000003,
  },
  {
    currency: 'ER',
    exchange_rate: 1.55,
    currency_symbol: 'Nfk',
    flag_url: 'https://flagcdn.com/er.svg',
    fees: 17.8,
  },
  {
    currency: 'KE',
    exchange_rate: 1.56,
    currency_symbol: 'KSh',
    flag_url: 'https://flagcdn.com/ke.svg',
    fees: 17.9,
  },
  {
    currency: 'TZ',
    exchange_rate: 1.57,
    currency_symbol: 'TSh',
    flag_url: 'https://flagcdn.com/tz.svg',
    fees: 18.0,
  },
  {
    currency: 'MG',
    exchange_rate: 1.58,
    currency_symbol: 'Ar',
    flag_url: 'https://flagcdn.com/mg.svg',
    fees: 18.1,
  },
]

export const convertCurrency = (
  toCurrency: string,
): CurrencyConversion | null => {
  return (
    currencyData.find((c) => c.currency === toCurrency.toUpperCase()) || null
  )
}

export const listCurrency = (): CurrencyConversion[] => {
  return currencyData
}