import $e from "react";
/*!
 *  @preserve
 *
 * ++++++++++++++++++++++++++++++++++++++
 * Add to Calendar TimeZones iCal Library
 * ++++++++++++++++++++++++++++++++++++++
 *
 * Version: 1.8.2
 * Creator: Jens Kuerschner (https://jenskuerschner.de)
 * Project: https://github.com/add2cal/timezones-ical-library
 * License: Apache-2.0
 *
 */
const _ = {
  Zulu: ["Etc/UTC", 0],
  WET: ["", 1],
  "W-SU": ["Europe/Moscow", 2],
  Universal: ["Etc/UTC", 0],
  UTC: ["Etc/UTC", 0],
  UCT: ["Etc/UTC", 0],
  Turkey: ["Europe/Istanbul", 3],
  Singapore: ["Asia/Singapore", 4],
  ROK: ["Asia/Seoul", 5],
  ROC: ["Asia/Taipei", 6],
  Portugal: ["Europe/Lisbon", 7],
  Poland: ["Europe/Warsaw", 8],
  PST8PDT: ["", 9],
  PRC: ["Asia/Shanghai", 6],
  Navajo: ["America/Denver", 10],
  NZ: ["Pacific/Auckland", 11],
  "NZ-CHAT": ["Pacific/Chatham", 12],
  MST7MDT: ["", 10],
  MST: ["", 13],
  MET: ["", 14],
  Libya: ["Africa/Tripoli", 15],
  Kwajalein: ["Pacific/Kwajalein", 16],
  Japan: ["Asia/Tokyo", 17],
  Jamaica: ["America/Jamaica", 18],
  Israel: ["Asia/Jerusalem", 19],
  Iran: ["Asia/Tehran", 20],
  Iceland: ["Africa/Abidjan", 21],
  Hongkong: ["Asia/Hong_Kong", 22],
  HST: ["", 23],
  Greenwich: ["Etc/GMT", 24],
  GMT0: ["Etc/GMT", 24],
  GMT: ["Etc/GMT", 24],
  "GMT-0": ["Etc/GMT", 24],
  "GMT+0": ["Etc/GMT", 24],
  GB: ["Europe/London", 25],
  "GB-Eire": ["Europe/London", 25],
  Eire: ["Europe/Dublin", 26],
  Egypt: ["Africa/Cairo", 27],
  EST5EDT: ["", 28],
  EST: ["", 18],
  EET: ["", 29],
  Cuba: ["America/Havana", 30],
  CST6CDT: ["", 31],
  CET: ["", 8],
  US: {
    Samoa: ["Pacific/Pago_Pago", 32],
    Pacific: ["America/Los_Angeles", 9],
    Mountain: ["America/Denver", 10],
    Michigan: ["America/Detroit", 28],
    "Indiana-Starke": ["America/Indiana/Knox", 31],
    Hawaii: ["Pacific/Honolulu", 23],
    Eastern: ["America/New_York", 28],
    "East-Indiana": ["America/Indiana/Indianapolis", 28],
    Central: ["America/Chicago", 31],
    Arizona: ["America/Phoenix", 13],
    Aleutian: ["America/Adak", 33],
    Alaska: ["America/Anchorage", 34]
  },
  Pacific: {
    Yap: ["Pacific/Port_Moresby", 35],
    Wallis: ["Pacific/Tarawa", 16],
    Wake: ["Pacific/Tarawa", 16],
    Truk: ["Pacific/Port_Moresby", 35],
    Tongatapu: ["", 36],
    Tarawa: ["", 16],
    Tahiti: ["", 37],
    Samoa: ["Pacific/Pago_Pago", 32],
    Saipan: ["Pacific/Guam", 38],
    Rarotonga: ["", 37],
    Port_Moresby: ["", 35],
    Ponape: ["Pacific/Guadalcanal", 39],
    Pohnpei: ["Pacific/Guadalcanal", 39],
    Pitcairn: ["", 40],
    Palau: ["", 41],
    Pago_Pago: ["", 32],
    Noumea: ["", 39],
    Norfolk: ["", 42],
    Niue: ["", 43],
    Nauru: ["", 16],
    Midway: ["Pacific/Pago_Pago", 32],
    Marquesas: ["", 44],
    Majuro: ["Pacific/Tarawa", 16],
    Kwajalein: ["", 16],
    Kosrae: ["", 39],
    Kiritimati: ["", 45],
    Kanton: ["", 36],
    Johnston: ["Pacific/Honolulu", 23],
    Honolulu: ["", 23],
    Guam: ["", 38],
    Guadalcanal: ["", 39],
    Gambier: ["", 46],
    Galapagos: ["", 47],
    Funafuti: ["Pacific/Tarawa", 16],
    Fiji: ["", 16],
    Fakaofo: ["", 36],
    Enderbury: ["Pacific/Kanton", 36],
    Efate: ["", 39],
    Easter: ["", 48],
    Chuuk: ["Pacific/Port_Moresby", 35],
    Chatham: ["", 12],
    Bougainville: ["", 39],
    Auckland: ["", 11],
    Apia: ["", 36]
  },
  Mexico: {
    General: ["America/Mexico_City", 49],
    BajaSur: ["America/Mazatlan", 13],
    BajaNorte: ["America/Tijuana", 9]
  },
  Indian: {
    Reunion: ["Asia/Dubai", 50],
    Mayotte: ["Africa/Nairobi", 51],
    Mauritius: ["", 50],
    Maldives: ["", 52],
    Mahe: ["Asia/Dubai", 50],
    Kerguelen: ["Indian/Maldives", 52],
    Comoro: ["Africa/Nairobi", 51],
    Cocos: ["Asia/Yangon", 53],
    Christmas: ["Asia/Bangkok", 54],
    Chagos: ["", 55],
    Antananarivo: ["Africa/Nairobi", 51]
  },
  Europe: {
    Zurich: ["", 8],
    Zaporozhye: ["Europe/Kyiv", 56],
    Zagreb: ["Europe/Belgrade", 8],
    Warsaw: ["", 8],
    Volgograd: ["", 2],
    Vilnius: ["", 29],
    Vienna: ["", 8],
    Vatican: ["Europe/Rome", 8],
    Vaduz: ["Europe/Zurich", 8],
    Uzhgorod: ["Europe/Kyiv", 56],
    Ulyanovsk: ["", 50],
    Tiraspol: ["Europe/Chisinau", 57],
    Tirane: ["", 8],
    Tallinn: ["", 29],
    Stockholm: ["Europe/Berlin", 8],
    Sofia: ["", 29],
    Skopje: ["Europe/Belgrade", 8],
    Simferopol: ["", 2],
    Saratov: ["", 50],
    Sarajevo: ["Europe/Belgrade", 8],
    San_Marino: ["Europe/Rome", 8],
    Samara: ["", 50],
    Rome: ["", 8],
    Riga: ["", 29],
    Prague: ["", 8],
    Podgorica: ["Europe/Belgrade", 8],
    Paris: ["", 8],
    Oslo: ["Europe/Berlin", 8],
    Nicosia: ["Asia/Nicosia", 56],
    Moscow: ["", 2],
    Monaco: ["Europe/Paris", 8],
    Minsk: ["", 3],
    Mariehamn: ["Europe/Helsinki", 29],
    Malta: ["", 8],
    Madrid: ["", 8],
    Luxembourg: ["Europe/Brussels", 8],
    London: ["", 25],
    Ljubljana: ["Europe/Belgrade", 8],
    Lisbon: ["", 7],
    Kyiv: ["", 56],
    Kirov: ["", 2],
    Kiev: ["Europe/Kyiv", 56],
    Kaliningrad: ["", 15],
    Jersey: ["Europe/London", 25],
    Istanbul: ["", 3],
    Isle_of_Man: ["Europe/London", 25],
    Helsinki: ["", 29],
    Guernsey: ["Europe/London", 25],
    Gibraltar: ["", 8],
    Dublin: ["", 26],
    Copenhagen: ["Europe/Berlin", 8],
    Chisinau: ["", 57],
    Busingen: ["Europe/Zurich", 8],
    Budapest: ["", 8],
    Bucharest: ["", 29],
    Brussels: ["", 8],
    Bratislava: ["Europe/Prague", 8],
    Berlin: ["", 8],
    Belgrade: ["", 8],
    Belfast: ["Europe/London", 25],
    Athens: ["", 29],
    Astrakhan: ["", 50],
    Andorra: ["", 8],
    Amsterdam: ["Europe/Brussels", 8]
  },
  Etc: {
    Zulu: ["Etc/UTC", 0],
    Universal: ["Etc/UTC", 0],
    UTC: ["", 0],
    UCT: ["Etc/UTC", 0],
    Greenwich: ["Etc/GMT", 24],
    GMT0: ["Etc/GMT", 24],
    GMT: ["", 24],
    "GMT-9": ["", 58],
    "GMT-8": ["", 59],
    "GMT-7": ["", 60],
    "GMT-6": ["", 61],
    "GMT-5": ["", 62],
    "GMT-4": ["", 63],
    "GMT-3": ["", 64],
    "GMT-2": ["", 65],
    "GMT-14": ["", 66],
    "GMT-13": ["", 67],
    "GMT-12": ["", 68],
    "GMT-11": ["", 69],
    "GMT-10": ["", 70],
    "GMT-1": ["", 71],
    "GMT-0": ["Etc/GMT", 24],
    "GMT+9": ["", 72],
    "GMT+8": ["", 73],
    "GMT+7": ["", 74],
    "GMT+6": ["", 47],
    "GMT+5": ["", 75],
    "GMT+4": ["", 76],
    "GMT+3": ["", 77],
    "GMT+2": ["", 78],
    "GMT+12": ["", 79],
    "GMT+11": ["", 80],
    "GMT+10": ["", 81],
    "GMT+1": ["", 82],
    "GMT+0": ["Etc/GMT", 24]
  },
  Chile: { EasterIsland: ["Pacific/Easter", 48], Continental: ["America/Santiago", 83] },
  Canada: {
    Yukon: ["America/Whitehorse", 13],
    Saskatchewan: ["America/Regina", 49],
    Pacific: ["America/Vancouver", 9],
    Newfoundland: ["America/St_Johns", 84],
    Mountain: ["America/Edmonton", 10],
    Eastern: ["America/Toronto", 28],
    Central: ["America/Winnipeg", 31],
    Atlantic: ["America/Halifax", 85]
  },
  Brazil: {
    West: ["America/Manaus", 86],
    East: ["America/Sao_Paulo", 87],
    DeNoronha: ["America/Noronha", 88],
    Acre: ["America/Rio_Branco", 89]
  },
  Australia: {
    Yancowinna: ["Australia/Broken_Hill", 90],
    West: ["Australia/Perth", 91],
    Victoria: ["Australia/Melbourne", 92],
    Tasmania: ["Australia/Hobart", 93],
    Sydney: ["", 92],
    South: ["Australia/Adelaide", 90],
    Queensland: ["Australia/Brisbane", 94],
    Perth: ["", 91],
    North: ["Australia/Darwin", 95],
    NSW: ["Australia/Sydney", 92],
    Melbourne: ["", 92],
    Lord_Howe: ["", 96],
    Lindeman: ["", 94],
    LHI: ["Australia/Lord_Howe", 96],
    Hobart: ["", 93],
    Eucla: ["", 97],
    Darwin: ["", 95],
    Currie: ["Australia/Hobart", 93],
    Canberra: ["Australia/Sydney", 92],
    Broken_Hill: ["", 90],
    Brisbane: ["", 94],
    Adelaide: ["", 90],
    ACT: ["Australia/Sydney", 92]
  },
  Atlantic: {
    Stanley: ["", 77],
    St_Helena: ["Africa/Abidjan", 21],
    South_Georgia: ["", 78],
    Reykjavik: ["Africa/Abidjan", 21],
    Madeira: ["", 1],
    Jan_Mayen: ["Europe/Berlin", 8],
    Faroe: ["", 1],
    Faeroe: ["Atlantic/Faroe", 1],
    Cape_Verde: ["", 98],
    Canary: ["", 1],
    Bermuda: ["", 85],
    Azores: ["", 99]
  },
  Asia: {
    Yerevan: ["", 50],
    Yekaterinburg: ["", 52],
    Yangon: ["", 53],
    Yakutsk: ["", 41],
    Vladivostok: ["", 35],
    Vientiane: ["Asia/Bangkok", 54],
    "Ust-Nera": ["", 35],
    Urumqi: ["", 55],
    Ulan_Bator: ["Asia/Ulaanbaatar", 4],
    Ulaanbaatar: ["", 4],
    Ujung_Pandang: ["Asia/Makassar", 100],
    Tomsk: ["", 54],
    Tokyo: ["", 17],
    Thimphu: ["", 55],
    Thimbu: ["Asia/Thimphu", 55],
    Tel_Aviv: ["Asia/Jerusalem", 19],
    Tehran: ["", 20],
    Tbilisi: ["", 50],
    Tashkent: ["", 52],
    Taipei: ["", 6],
    Srednekolymsk: ["", 39],
    Singapore: ["", 4],
    Shanghai: ["", 6],
    Seoul: ["", 5],
    Samarkand: ["", 52],
    Sakhalin: ["", 39],
    Saigon: ["Asia/Ho_Chi_Minh", 54],
    Riyadh: ["", 3],
    Rangoon: ["Asia/Yangon", 53],
    Qyzylorda: ["", 52],
    Qostanay: ["", 52],
    Qatar: ["", 3],
    Pyongyang: ["", 5],
    Pontianak: ["", 101],
    Phnom_Penh: ["Asia/Bangkok", 54],
    Oral: ["", 52],
    Omsk: ["", 55],
    Novosibirsk: ["", 54],
    Novokuznetsk: ["", 54],
    Nicosia: ["", 56],
    Muscat: ["Asia/Dubai", 50],
    Manila: ["", 102],
    Makassar: ["", 100],
    Magadan: ["", 39],
    Macau: ["", 6],
    Macao: ["Asia/Macau", 6],
    Kuwait: ["Asia/Riyadh", 3],
    Kuching: ["", 4],
    Kuala_Lumpur: ["Asia/Singapore", 4],
    Krasnoyarsk: ["", 54],
    Kolkata: ["", 103],
    Khandyga: ["", 41],
    Katmandu: ["Asia/Kathmandu", 104],
    Kathmandu: ["", 104],
    Kashgar: ["Asia/Urumqi", 55],
    Karachi: ["", 105],
    Kamchatka: ["", 16],
    Kabul: ["", 106],
    Jerusalem: ["", 19],
    Jayapura: ["", 107],
    Jakarta: ["", 101],
    Istanbul: ["Europe/Istanbul", 3],
    Irkutsk: ["", 4],
    Hovd: ["", 54],
    Hong_Kong: ["", 22],
    Ho_Chi_Minh: ["", 54],
    Hebron: ["", 108],
    Harbin: ["Asia/Shanghai", 6],
    Gaza: ["", 108],
    Famagusta: ["", 29],
    Dushanbe: ["", 52],
    Dubai: ["", 50],
    Dili: ["", 41],
    Dhaka: ["", 55],
    Damascus: ["", 3],
    Dacca: ["Asia/Dhaka", 55],
    Colombo: ["", 109],
    Chungking: ["Asia/Shanghai", 6],
    Chongqing: ["Asia/Shanghai", 6],
    Choibalsan: ["", 4],
    Chita: ["", 41],
    Calcutta: ["Asia/Kolkata", 103],
    Brunei: ["Asia/Kuching", 4],
    Bishkek: ["", 55],
    Beirut: ["", 110],
    Barnaul: ["", 54],
    Bangkok: ["", 54],
    Baku: ["", 50],
    Bahrain: ["Asia/Qatar", 3],
    Baghdad: ["", 3],
    Atyrau: ["", 52],
    Ashkhabad: ["Asia/Ashgabat", 52],
    Ashgabat: ["", 52],
    Aqtobe: ["", 52],
    Aqtau: ["", 52],
    Anadyr: ["", 16],
    Amman: ["", 3],
    Almaty: ["", 52],
    Aden: ["Asia/Riyadh", 3]
  },
  Arctic: { Longyearbyen: ["Europe/Berlin", 8] },
  Antarctica: {
    Vostok: ["", 52],
    Troll: ["", 111],
    Syowa: ["Asia/Riyadh", 3],
    South_Pole: ["Pacific/Auckland", 11],
    Rothera: ["", 87],
    Palmer: ["", 77],
    McMurdo: ["Pacific/Auckland", 11],
    Mawson: ["", 52],
    Macquarie: ["", 92],
    DumontDUrville: ["Pacific/Port_Moresby", 35],
    Davis: ["", 54],
    Casey: ["", 4]
  },
  America: {
    Yellowknife: ["America/Edmonton", 10],
    Yakutat: ["", 34],
    Winnipeg: ["", 31],
    Whitehorse: ["", 13],
    Virgin: ["America/Puerto_Rico", 112],
    Vancouver: ["", 9],
    Tortola: ["America/Puerto_Rico", 112],
    Toronto: ["", 28],
    Tijuana: ["", 9],
    Thunder_Bay: ["America/Toronto", 28],
    Thule: ["", 85],
    Tegucigalpa: ["", 49],
    Swift_Current: ["", 49],
    St_Vincent: ["America/Puerto_Rico", 112],
    St_Thomas: ["America/Puerto_Rico", 112],
    St_Lucia: ["America/Puerto_Rico", 112],
    St_Kitts: ["America/Puerto_Rico", 112],
    St_Johns: ["", 84],
    St_Barthelemy: ["America/Puerto_Rico", 112],
    Sitka: ["", 34],
    Shiprock: ["America/Denver", 10],
    Scoresbysund: ["", 113],
    Sao_Paulo: ["", 87],
    Santo_Domingo: ["", 112],
    Santiago: ["", 83],
    Santarem: ["", 87],
    Santa_Isabel: ["America/Tijuana", 9],
    Rosario: ["America/Argentina/Cordoba", 87],
    Rio_Branco: ["", 89],
    Resolute: ["", 114],
    Regina: ["", 49],
    Recife: ["", 87],
    Rankin_Inlet: ["", 31],
    Rainy_River: ["America/Winnipeg", 31],
    Punta_Arenas: ["", 87],
    Puerto_Rico: ["", 112],
    Porto_Velho: ["", 86],
    Porto_Acre: ["America/Rio_Branco", 89],
    Port_of_Spain: ["America/Puerto_Rico", 112],
    "Port-au-Prince": ["", 28],
    Phoenix: ["", 13],
    Paramaribo: ["", 77],
    Pangnirtung: ["America/Iqaluit", 28],
    Panama: ["", 18],
    Ojinaga: ["", 31],
    Nuuk: ["", 115],
    Noronha: ["", 88],
    Nome: ["", 34],
    Nipigon: ["America/Toronto", 28],
    New_York: ["", 28],
    Nassau: ["America/Toronto", 28],
    Montserrat: ["America/Puerto_Rico", 112],
    Montreal: ["America/Toronto", 28],
    Montevideo: ["", 77],
    Monterrey: ["", 49],
    Moncton: ["", 85],
    Miquelon: ["", 116],
    Mexico_City: ["", 49],
    Metlakatla: ["", 34],
    Merida: ["", 49],
    Menominee: ["", 31],
    Mendoza: ["America/Argentina/Mendoza", 87],
    Mazatlan: ["", 13],
    Matamoros: ["", 31],
    Martinique: ["", 112],
    Marigot: ["America/Puerto_Rico", 112],
    Manaus: ["", 86],
    Managua: ["", 49],
    Maceio: ["", 87],
    Lower_Princes: ["America/Puerto_Rico", 112],
    Louisville: ["America/Kentucky/Louisville", 28],
    Los_Angeles: ["", 9],
    Lima: ["", 75],
    La_Paz: ["", 86],
    Kralendijk: ["America/Puerto_Rico", 112],
    Knox_IN: ["America/Indiana/Knox", 31],
    Juneau: ["", 34],
    Jujuy: ["America/Argentina/Jujuy", 87],
    Jamaica: ["", 18],
    Iqaluit: ["", 28],
    Inuvik: ["", 10],
    Indianapolis: ["America/Indiana/Indianapolis", 28],
    Hermosillo: ["", 13],
    Havana: ["", 30],
    Halifax: ["", 85],
    Guyana: ["", 76],
    Guayaquil: ["", 75],
    Guatemala: ["", 49],
    Guadeloupe: ["America/Puerto_Rico", 112],
    Grenada: ["America/Puerto_Rico", 112],
    Grand_Turk: ["", 117],
    Goose_Bay: ["", 118],
    Godthab: ["America/Nuuk", 115],
    Glace_Bay: ["", 85],
    Fortaleza: ["", 87],
    Fort_Wayne: ["America/Indiana/Indianapolis", 28],
    Fort_Nelson: ["", 13],
    Ensenada: ["America/Tijuana", 9],
    El_Salvador: ["", 49],
    Eirunepe: ["", 89],
    Edmonton: ["", 10],
    Dominica: ["America/Puerto_Rico", 112],
    Detroit: ["", 28],
    Denver: ["", 10],
    Dawson_Creek: ["", 13],
    Dawson: ["", 13],
    Danmarkshavn: ["", 21],
    Curacao: ["America/Puerto_Rico", 112],
    Cuiaba: ["", 86],
    Creston: ["America/Phoenix", 13],
    Costa_Rica: ["", 49],
    Cordoba: ["America/Argentina/Cordoba", 87],
    Coral_Harbour: ["America/Panama", 18],
    Ciudad_Juarez: ["", 10],
    Chihuahua: ["", 49],
    Chicago: ["", 31],
    Cayman: ["America/Panama", 18],
    Cayenne: ["", 77],
    Catamarca: ["America/Argentina/Catamarca", 87],
    Caracas: ["", 76],
    Cancun: ["", 18],
    Campo_Grande: ["", 86],
    Cambridge_Bay: ["", 10],
    Buenos_Aires: ["America/Argentina/Buenos_Aires", 87],
    Boise: ["", 10],
    Bogota: ["", 75],
    Boa_Vista: ["", 86],
    "Blanc-Sablon": ["America/Puerto_Rico", 112],
    Belize: ["", 49],
    Belem: ["", 87],
    Barbados: ["", 112],
    Bahia_Banderas: ["", 49],
    Bahia: ["", 87],
    Atka: ["America/Adak", 33],
    Atikokan: ["America/Panama", 18],
    Asuncion: ["", 119],
    Aruba: ["America/Puerto_Rico", 112],
    Araguaina: ["", 87],
    Antigua: ["America/Puerto_Rico", 112],
    Anguilla: ["America/Puerto_Rico", 112],
    Anchorage: ["", 34],
    Adak: ["", 33],
    North_Dakota: { New_Salem: ["", 31], Center: ["", 31], Beulah: ["", 31] },
    Kentucky: { Monticello: ["", 28], Louisville: ["", 28] },
    Indiana: {
      Winamac: ["", 117],
      Vincennes: ["", 28],
      Vevay: ["", 28],
      Tell_City: ["", 31],
      Petersburg: ["", 28],
      Marengo: ["", 28],
      Knox: ["", 31],
      Indianapolis: ["", 28]
    },
    Argentina: {
      Ushuaia: ["", 87],
      Tucuman: ["", 87],
      San_Luis: ["", 87],
      San_Juan: ["", 87],
      Salta: ["", 87],
      Rio_Gallegos: ["", 87],
      Mendoza: ["", 87],
      La_Rioja: ["", 87],
      Jujuy: ["", 87],
      Cordoba: ["", 87],
      ComodRivadavia: ["America/Argentina/Catamarca", 87],
      Catamarca: ["", 87],
      Buenos_Aires: ["", 87]
    }
  },
  Africa: {
    Windhoek: ["", 120],
    Tunis: ["", 121],
    Tripoli: ["", 15],
    Timbuktu: ["Africa/Abidjan", 21],
    Sao_Tome: ["", 21],
    "Porto-Novo": ["Africa/Lagos", 122],
    Ouagadougou: ["Africa/Abidjan", 21],
    Nouakchott: ["Africa/Abidjan", 21],
    Niamey: ["Africa/Lagos", 122],
    Ndjamena: ["", 122],
    Nairobi: ["", 51],
    Monrovia: ["", 21],
    Mogadishu: ["Africa/Nairobi", 51],
    Mbabane: ["Africa/Johannesburg", 123],
    Maseru: ["Africa/Johannesburg", 123],
    Maputo: ["", 120],
    Malabo: ["Africa/Lagos", 122],
    Lusaka: ["Africa/Maputo", 120],
    Lubumbashi: ["Africa/Maputo", 120],
    Luanda: ["Africa/Lagos", 122],
    Lome: ["Africa/Abidjan", 21],
    Libreville: ["Africa/Lagos", 122],
    Lagos: ["", 122],
    Kinshasa: ["Africa/Lagos", 122],
    Kigali: ["Africa/Maputo", 120],
    Khartoum: ["", 120],
    Kampala: ["Africa/Nairobi", 51],
    Juba: ["", 120],
    Johannesburg: ["", 123],
    Harare: ["Africa/Maputo", 120],
    Gaborone: ["Africa/Maputo", 120],
    Freetown: ["Africa/Abidjan", 21],
    El_Aaiun: ["", 124],
    Douala: ["Africa/Lagos", 122],
    Djibouti: ["Africa/Nairobi", 51],
    Dar_es_Salaam: ["Africa/Nairobi", 51],
    Dakar: ["Africa/Abidjan", 21],
    Conakry: ["Africa/Abidjan", 21],
    Ceuta: ["", 8],
    Casablanca: ["", 124],
    Cairo: ["", 27],
    Bujumbura: ["Africa/Maputo", 120],
    Brazzaville: ["Africa/Lagos", 122],
    Blantyre: ["Africa/Maputo", 120],
    Bissau: ["", 21],
    Banjul: ["Africa/Abidjan", 21],
    Bangui: ["Africa/Lagos", 122],
    Bamako: ["Africa/Abidjan", 21],
    Asmera: ["Africa/Nairobi", 51],
    Asmara: ["Africa/Nairobi", 51],
    Algiers: ["", 121],
    Addis_Ababa: ["Africa/Nairobi", 51],
    Accra: ["Africa/Abidjan", 21],
    Abidjan: ["", 21]
  }
}, ve = [
  "20240205T192835Z<n><bs><n><tz>UTC<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>MSK<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>KST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>CST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>WET<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>WEST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>",
  "20240205T192834Z<n><bd><n><tz>CEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>CET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>PDT<n><of>-0800<n><ot>-0700<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>PST<n><of>-0700<n><ot>-0800<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>MDT<n><of>-0700<n><ot>-0600<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>MST<n><of>-0600<n><ot>-0700<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>NZDT<n><of>+1200<n><ot>+1300<n><s>19700927T020000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>NZST<n><of>+1300<n><ot>+1200<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>+1345<n><of>+1245<n><ot>+1345<n><s>19700927T024500<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU<n><ed><n><bs><n><tz>+1245<n><of>+1345<n><ot>+1245<n><s>19700405T034500<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>MST<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>MEST<n><of>+0100<n><ot>+0200<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>MET<n><of>+0200<n><ot>+0100<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>EET<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>JST<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>EST<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>IDT<n><of>+0200<n><ot>+0300<n><s>19700327T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR<n><ed><n><bs><n><tz>IST<n><of>+0300<n><ot>+0200<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+0330<n><of>+0330<n><ot>+0330<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>HKT<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>HST<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>GMT<n><of>+0000<n><ot>+0000<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>BST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>IST<n><of>+0000<n><ot>+0100<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><es><n><bd><n><tz>GMT<n><of>+0100<n><ot>+0000<n><s>19701025T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><ed><n>",
  "20240205T192834Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700424T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=-1FR<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701030T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>CST<n><of>-0400<n><ot>-0500<n><s>19701101T010000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0500<n><ot>-0400<n><s>19700308T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
  "20240205T192834Z<n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>SST<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>HDT<n><of>-1000<n><ot>-0900<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>HST<n><of>-0900<n><ot>-1000<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>AKDT<n><of>-0900<n><ot>-0800<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AKST<n><of>-0800<n><ot>-0900<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>ChST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>+12<n><of>+1100<n><ot>+1200<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>+11<n><of>+1200<n><ot>+1100<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-0930<n><of>-0930<n><ot>-0930<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-06<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-06<n><of>-0500<n><ot>-0600<n><s>19700404T220000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SA<n><es><n><bd><n><tz>-05<n><of>-0600<n><ot>-0500<n><s>19700905T220000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SA<n><ed><n>",
  "20240205T192834Z<n><bs><n><tz>CST<n><of>-0600<n><ot>-0600<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>EAT<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+0630<n><of>+0630<n><ot>+0630<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T040000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T030000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n>",
  "20240205T192834Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+09<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+08<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+07<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+06<n><of>+0600<n><ot>+0600<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+05<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+04<n><of>+0400<n><ot>+0400<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+03<n><of>+0300<n><ot>+0300<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+02<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+14<n><of>+1400<n><ot>+1400<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+13<n><of>+1300<n><ot>+1300<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+12<n><of>+1200<n><ot>+1200<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+11<n><of>+1100<n><ot>+1100<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+10<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-09<n><of>-0900<n><ot>-0900<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-08<n><of>-0800<n><ot>-0800<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-07<n><of>-0700<n><ot>-0700<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-05<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-04<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-02<n><of>-0200<n><ot>-0200<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-12<n><of>-1200<n><ot>-1200<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-11<n><of>-1100<n><ot>-1100<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-10<n><of>-1000<n><ot>-1000<n><s>19700101T000000<n><es><n>",
  "20240205T192835Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700405T000000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19700906T000000<n><r>FREQ=YEARLY;BYMONTH=9;BYDAY=1SU<n><ed><n>",
  "20240205T192834Z<n><bs><n><tz>NST<n><of>-0230<n><ot>-0330<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>NDT<n><of>-0330<n><ot>-0230<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
  "20240205T192834Z<n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-04<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-03<n><of>-0300<n><ot>-0300<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-02<n><of>-0200<n><ot>-0200<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-05<n><of>-0500<n><ot>-0500<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>ACST<n><of>+1030<n><ot>+0930<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>ACDT<n><of>+0930<n><ot>+1030<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
  "20240205T192834Z<n><bs><n><tz>AWST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
  "20240205T192834Z<n><bd><n><tz>AEDT<n><of>+1000<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>AEST<n><of>+1100<n><ot>+1000<n><s>19700405T030000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>AEST<n><of>+1000<n><ot>+1000<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>ACST<n><of>+0930<n><ot>+0930<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+1030<n><of>+1100<n><ot>+1030<n><s>19700405T020000<n><r>FREQ=YEARLY;BYMONTH=4;BYDAY=1SU<n><es><n><bd><n><tz>+11<n><of>+1030<n><ot>+1100<n><s>19701004T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n>",
  "20240205T192834Z<n><bs><n><tz>+0845<n><of>+0845<n><ot>+0845<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-01<n><of>-0100<n><ot>-0100<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>+00<n><of>-0100<n><ot>+0000<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>-01<n><of>+0000<n><ot>-0100<n><s>19701025T010000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>WITA<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>WIB<n><of>+0700<n><ot>+0700<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>PST<n><of>+0800<n><ot>+0800<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>IST<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+0545<n><of>+0545<n><ot>+0545<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>PKT<n><of>+0500<n><ot>+0500<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+0430<n><of>+0430<n><ot>+0430<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>WIT<n><of>+0900<n><ot>+0900<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700328T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701024T020000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SA<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+0530<n><of>+0530<n><ot>+0530<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>EEST<n><of>+0200<n><ot>+0300<n><s>19700329T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>EET<n><of>+0300<n><ot>+0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>+02<n><of>+0000<n><ot>+0200<n><s>19700329T010000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU<n><ed><n><bs><n><tz>+00<n><of>+0200<n><ot>+0000<n><s>19701025T030000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>AST<n><of>-0400<n><ot>-0400<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>-02<n><of>-0100<n><ot>-0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n><bd><n><tz>-01<n><of>-0200<n><ot>-0100<n><s>19700328T230000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n>",
  "20240205T192834Z<n><bs><n><tz>CST<n><of>-0500<n><ot>-0600<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>CDT<n><of>-0600<n><ot>-0500<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
  "20240205T192834Z<n><bd><n><tz>-01<n><of>-0200<n><ot>-0100<n><s>19700328T230000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=-1SA<n><ed><n><bs><n><tz>-02<n><of>-0100<n><ot>-0200<n><s>19701025T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU<n><es><n>",
  "20240205T192834Z<n><bd><n><tz>-02<n><of>-0300<n><ot>-0200<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n><bs><n><tz>-03<n><of>-0200<n><ot>-0300<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>EST<n><of>-0400<n><ot>-0500<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>EDT<n><of>-0500<n><ot>-0400<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
  "20240205T192834Z<n><bs><n><tz>AST<n><of>-0300<n><ot>-0400<n><s>19701101T020000<n><r>FREQ=YEARLY;BYMONTH=11;BYDAY=1SU<n><es><n><bd><n><tz>ADT<n><of>-0400<n><ot>-0300<n><s>19700308T020000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=2SU<n><ed><n>",
  "20240205T192835Z<n><bd><n><tz>-03<n><of>-0400<n><ot>-0300<n><s>19701004T000000<n><r>FREQ=YEARLY;BYMONTH=10;BYDAY=1SU<n><ed><n><bs><n><tz>-04<n><of>-0300<n><ot>-0400<n><s>19700322T000000<n><r>FREQ=YEARLY;BYMONTH=3;BYDAY=4SU<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>CAT<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>CET<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>WAT<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>SAST<n><of>+0200<n><ot>+0200<n><s>19700101T000000<n><es><n>",
  "20240205T192834Z<n><bs><n><tz>+01<n><of>+0100<n><ot>+0100<n><s>19700101T000000<n><es><n>"
];
function Xe(e) {
  const t = e.split("/");
  return t.length === 3 && (!_[`${t[0]}`] || !_[`${t[0]}`][`${t[1]}`] || !_[`${t[0]}`][`${t[1]}`][`${t[2]}`]) || t.length === 2 && (!_[`${t[0]}`] || !_[`${t[0]}`][`${t[1]}`]) || t.length === 1 && !_[`${t[0]}`] ? (console.error("Given timezone not valid."), "") : t.length === 3 ? [
    _[`${t[0]}`][`${t[1]}`][`${t[2]}`][0],
    xe(
      ve[_[`${t[0]}`][`${t[1]}`][`${t[2]}`][1]]
    )
  ] : t.length === 2 ? [
    _[`${t[0]}`][`${t[1]}`][0],
    xe(ve[_[`${t[0]}`][`${t[1]}`][1]])
  ] : [
    _[`${t[0]}`][0],
    xe(ve[_[`${t[0]}`][1]])
  ];
}
function xe(e) {
  const t = {
    "<br>": "<n>",
    "TZNAME:": "<tz>",
    "TZOFFSETFROM:": "<of>",
    "TZOFFSETTO:": "<ot>",
    "DTSTART:": "<s>",
    "RRULE:": "<r>",
    "BEGIN:DAYLIGHT": "<bd>",
    "END:DAYLIGHT": "<ed>",
    "BEGIN:STANDARD": "<bs>",
    "END:STANDARD": "<es>"
  };
  for (const [a, o] of Object.entries(t))
    e = e.replaceAll(o, a);
  return e;
}
function kt(e, t = !1) {
  const a = Xe(e);
  if (a[1] == null || a[1] == "")
    return "";
  const o = function() {
    return a[0] == "" ? e : a[0];
  }(), n = "TZID=" + o, l = [
    `BEGIN:VTIMEZONE\r
TZID:` + o + `\r
X-LIC-LOCATION:` + o + `\r
LAST-MODIFIED:` + a[1].replace(/[^\w_\-:,;=+/<br>]/g, "").replace(/<br>/g, `\r
`) + "END:VTIMEZONE",
    n
  ];
  return t ? JSON.stringify(l) : l;
}
function de(e, t, a) {
  const o = Xe(e);
  if (o[1] == null || o[1] == "")
    return "";
  if (!t.match(/^\d{4}-\d{2}-\d{2}$/))
    return console.error("offset calculation failed: date misspelled [-> YYYY-MM-DD]"), "";
  if (!a.match(/^\d{2}:\d{2}$/))
    return console.error("offset calculation failed: time misspelled [-> hh:mm]"), "";
  if (!o[1].match(/BEGIN:DAYLIGHT/i))
    return o[1].match(/TZOFFSETTO:([+|-]\d{4})/i)[1];
  const n = t + "T" + a + ":00", l = new Date(n), c = l.getFullYear(), r = l.getMonth() + 1, i = l.getDate(), s = l.getHours(), b = o[1].replace(/[^\w_\-:,;=+/<br>]/g, "").split("<br>"), p = { 1: {}, 2: {} };
  let m = 0;
  for (let f = 0; f < b.length; f++)
    if (b[`${f}`].startsWith("TZOFFSETTO") && (m++, p[`${m}`].offset = b[`${f}`].split(":")[1]), b[`${f}`].startsWith("DTSTART") && (p[`${m}`].hour = parseInt(b[`${f}`].substr(17, 2))), b[`${f}`].startsWith("RRULE")) {
      let v = b[`${f}`].split(";"), x = parseInt(v[1].split("=")[1]);
      p[`${m}`].month = parseInt(x), p[`${m}`].day = v[2].split("=")[1];
    }
  if (p[1].month > p[2].month && ([p[1], p[2]] = [p[2], p[1]]), r != p[1].month && r != p[2].month)
    return r < p[1].month || r > p[2].month ? p[2].offset : p[1].offset;
  const d = function() {
    return Object.keys(p).find((f) => p[`${f}`].month == r);
  }(), w = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"], g = new Date(c, r, 0).getDate();
  let k = new Date(c, r - 1, 1).getDay();
  const E = { SU: {}, MO: {}, TU: {}, WE: {}, TH: {}, FR: {}, SA: {} };
  for (let f = 1; f <= g; f++) {
    const v = Object.keys(E[w[`${k}`]]).length + 1;
    E[w[`${k}`]][`${v}`] = f, k++, k == 7 && (k = 0);
  }
  const h = function() {
    if (p[`${d}`].day[0] == "-") {
      const f = p[`${d}`].day.substr(2, 2), v = Object.keys(E[`${f}`]).length + 1 - parseInt(p[`${d}`].day[1]);
      return E[`${f}`][`${v}`];
    } else {
      const f = p[`${d}`].day.substr(1, 2);
      return E[`${f}`][p[`${d}`].day[0]];
    }
  }();
  if (i > h || i == h && s >= p[`${d}`].hour)
    return p[`${d}`].offset;
  const T = function() {
    return d == 1 ? 2 : 1;
  }();
  return p[`${T}`].offset;
}
let le = [];
function Tt(e = !1) {
  return le.length == 0 && (le = function() {
    let t = [];
    for (const [a, o] of Object.entries(_))
      if (typeof o == "object" && !Array.isArray(o))
        for (const [n, l] of Object.entries(o))
          if (typeof l == "object" && !Array.isArray(l))
            for (const [c] of Object.entries(l))
              t.push(a + "/" + n + "/" + c);
          else
            t.push(a + "/" + n);
      else
        t.push(a);
    return t;
  }()), e ? JSON.stringify(le) : le;
}
/*!
 *  @preserve
 *
 *  ++++++++++++++++++++++
 *  Add to Calendar Button
 *  ++++++++++++++++++++++
 *
 *  Version: 2.6.9
 *  Creator: Jens Kuerschner (https://jekuer.com)
 *  Project: https://github.com/add2cal/add-to-calendar-button
 *  License: Elastic License 2.0 (ELv2) (https://github.com/add2cal/add-to-calendar-button/blob/main/LICENSE.txt)
 *  Note:    DO NOT REMOVE THE COPYRIGHT NOTICE ABOVE!
 *
 */
const et = "2.6.9", Ie = {
  default: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--accent-color:#1e90ff;--wrapper-padding:1px;--buttonslist-gap:5px;--btn-background:#f5f5f5;--btn-hover-background:#fff;--btn-border:#d2d2d2;--btn-border-radius:6px;--btn-padding-x:1em;--btn-padding-y:.65em;--btn-font-weight:600;--btn-text:#333;--btn-hover-text:#000;--btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 2px -1px;--btn-hover-shadow:rgba(0 0 0 / 25%) 0 5px 12px -2px,rgba(0 0 0 / 25%) 0 3px 5px -2px;--btn-active-shadow:rgba(0 0 0 / 30%) 0 6px 13px -2px,rgba(0 0 0 / 25%) 0 4px 5px -2px;--list-background:#f5f5f5;--list-hover-background:#fff;--list-text:#333;--list-font-weight:400;--list-hover-text:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-border-radius:6px;--list-padding:.8em;--list-shadow:rgba(0 0 0 / 20%) 0 4px 13px -2px,rgba(0 0 0 / 23%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 50%) 0 4px 30px -3px,rgba(0 0 0 / 30%) 0 2px 8px -2px;--input-border-radius:6px;--input-background:#fff;--status-active-text:#fff;--form-error:#c5372c;--form-success:#338a36;--modal-text:#000;--modal-text-align:left;--modal-text-align-rtl:right;--modal-background:#f5f5f5;--modal-border-radius:6px;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 65%));--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-hover-background:#fff;--modal-btn-border:#d2d2d2;--modal-btn-font-weight:600;--modal-btn-text:#2e2e2e;--modal-btn-hover-text:#161616;--modal-btn-secondary-text:#666567;--modal-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 10%) 0 2px 3px -1px;--modal-btn-hover-shadow:rgba(0 0 0 / 25%) 0 5px 13px -2px,rgba(0 0 0 / 20%) 0 3px 5px -2px;--modal-headline-text-align:center;--modal-headline-text-transform:none;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-hover-background:#fff;--date-btn-headline-line-clamp:1;--date-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 3px -1px;--date-btn-hover-shadow:rgba(0 0 0 / 20%) 0 5px 12px -2px,rgba(0 0 0 / 20%) 0 3px 4px -2px;--checkmark-background:drop-shadow(0 0 3px #fff);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-hover-background:#373737;--btn-border:#3d3d3d;--btn-text:#dedede;--btn-hover-text:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -3px -3px 30px -1px,rgba(0 0 0 / 40%) 2px 3px 10px -2px,rgba(0 0 0 / 40%) 1px 2px 3px -1px;--btn-hover-shadow:rgba(0 0 0 / 90%) 2px 5px 20px -4px,rgba(0 0 0 / 50%) 1px 2px 6px -2px;--btn-active-shadow:rgba(0 0 0 / 90%) 2px 5px 20px -4px,rgba(0 0 0 / 50%) 1px 2px 6px -2px;--list-background:#2e2e2e;--list-hover-background:#373737;--list-text:#dedede;--list-hover-text:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(0 0 0 / 60%) 0 4px 20px -2px,rgba(0 0 0 / 40%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 40%) -1px 3px 30px 2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 90%));--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-hover-background:#434246;--modal-btn-border:#434246;--modal-btn-text:#dbdbdb;--modal-btn-hover-text:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-btn-shadow:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 40%) 3px 3px 10px -2px,rgba(0 0 0 / 40%) 1px 2px 5px -1px;--input-background:#434246;--status-active-text:#000;--form-error:#db8680;--form-success:#99de9c;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-hover-background:#474747;--date-btn-shadow:rgba(0 0 0 / 60%) 0 0 20px -2px,rgba(0 0 0 / 30%) 1px 2px 3px -1px;--checkmark-background:drop-shadow(0 0 3px #0a0a0a);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-initialized.atcb-buttons-list{gap:var(--buttonslist-gap)}.atcb-button-wrapper{display:block;padding:var(--wrapper-padding);position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:var(--btn-border-radius);box-shadow:var(--btn-shadow);box-sizing:content-box;color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:var(--btn-font-weight);justify-content:center;line-height:1.5em;margin:.13em;max-width:300px;padding:var(--btn-padding-y) var(--btn-padding-x);position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button:not(.atcb-no-text,.atcb-modal-style,.atcb-dropoverlay,.atcb-single){min-width:calc(11.6em - 2 * var(--btn-padding-x))}.atcb-button.atcb-no-text{display:flex;place-content:center center;align-items:center;height:3em;width:3em;padding:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--accent-color)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-hover-shadow);color:var(--btn-hover-text);margin:0;padding:calc(var(--btn-padding-y) + .13em) calc(var(--btn-padding-x) + .13em)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-active-shadow);color:var(--btn-hover-text);margin:0;padding:calc(var(--btn-padding-y) + .13em) calc(var(--btn-padding-x) + .13em)}.atcb-button.atcb-no-text.atcb-active,.atcb-button.atcb-no-text:focus,.atcb-button.atcb-no-text:hover{height:3.26em;width:3.26em;padding:0!important}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{flex-grow:0;flex-shrink:0;height:1em;line-height:1em;margin-right:.8em;width:1em}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:4px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;font-weight:var(--list-font-weight);padding:0 4px;position:absolute;z-index:14000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000;max-width:max-content}.atcb-list{background-color:var(--list-background);border-radius:0 0 var(--list-border-radius) var(--list-border-radius);box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:var(--list-padding);text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-hover-background);color:var(--list-hover-text)}.atcb-list-item:focus-visible{background-color:var(--list-hover-background);color:var(--accent-color);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 var(--list-border-radius) var(--list-border-radius)}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:calc(var(--list-padding) + .45em)}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:var(--list-border-radius) var(--list-border-radius) 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:var(--list-border-radius)}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:calc(var(--list-padding) + .45em)}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:var(--list-padding)}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:var(--list-border-radius)}.atcb-list.atcb-modal{box-shadow:var(--list-modal-shadow)}.atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item .atcb-icon+.atcb-text{margin-left:.7em;width:100%}.atcb-rtl .atcb-list-item .atcb-icon+.atcb-text{margin-left:0;margin-right:.7em}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;width:auto;min-width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:var(--modal-text-align);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;-webkit-tap-highlight-color:transparent}@media (width > 575px){.atcb-modal-box{width:32em}}.atcb-modal-box.atcb-rtl{text-align:var(--modal-text-align-rtl);direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 1.5em 1.3em;text-transform:var(--modal-headline-text-transform);text-align:var(--modal-headline-text-align)}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2em 2.2em}.atcb-modal-content-subevents{margin:auto;width:fit-content}.atcb-modal-icon+.atcb-modal-content{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 var(--modal-border-radius) var(--modal-border-radius);box-sizing:border-box;padding:.6em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:var(--btn-border-radius);box-shadow:var(--modal-btn-shadow);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:var(--modal-btn-font-weight);line-height:1em;margin:.625em;padding:1em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}a.atcb-modal-btn.btn-small,button.atcb-modal-btn.btn-small{padding:.6em .8em}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn.atcb-modal-btn-border,button.atcb-modal-btn.atcb-modal-btn-border{border:1px solid var(--modal-btn-border)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-hover-background);outline:2px solid var(--accent-color)}a.atcb-modal-btn:disabled,button.atcb-button:disabled,button.atcb-modal-btn:disabled,button.atcb-subevent-btn:disabled{cursor:not-allowed;opacity:.75;filter:brightness(95%);border-style:dashed;box-shadow:none}a.atcb-modal-btn:not([disabled]):hover,button.atcb-modal-btn:not([disabled]):hover{background-color:var(--modal-btn-hover-background);box-shadow:var(--modal-btn-hover-shadow);color:var(--modal-btn-hover-text);text-decoration:none}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:7px 4px 4px 7px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:100%}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-hover-background);box-shadow:var(--date-btn-hover-shadow)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--accent-color)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-hover-background);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column;flex-shrink:0}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:400;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:13.5em;overflow-wrap:anywhere}.atcb-subevent-btn .atcb-date-btn-right{width:100%}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.4em .7em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:var(--date-btn-headline-line-clamp);-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content.atcb-date-btn-cancelled{color:var(--form-error);font-weight:700}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;margin-right:.4em;margin-left:0;width:.9em;flex-shrink:0}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.4em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:100%}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.5em;padding:.5em;border-radius:100%;height:1.2em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button.atcb-single:focus .atcb-checkmark,.atcb-button.atcb-single:hover .atcb-checkmark{top:-.77em;right:-.37em}.atcb-checkmark svg{height:100%;filter:var(--checkmark-background);width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon-outlookcom,.atcb-icon.atcb-icon-ms365{padding-bottom:.05em}.atcb-icon.atcb-icon-apple,.atcb-icon.atcb-icon-ical{padding-bottom:.15em}.atcb-icon.atcb-icon-trigger{padding-bottom:.15em}.atcb-icon.atcb-icon-rsvp{height:1.5em;width:1.5em}.atcb-icon.atcb-icon-apple svg{fill:currentcolor}.atcb-icon.atcb-icon-ical svg{fill:currentcolor}.atcb-icon.atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon.atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon.atcb-icon-google svg,.atcb-icon.atcb-icon-msteams svg,.atcb-icon.atcb-icon-outlookcom svg{filter:var(--icon-filter)}.rsvp-inline-wrapper{filter:none;min-width:100%;margin-bottom:0}.atcb-modal-content.no-headline{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;padding-top:1.8em}.rsvp-inline-wrapper .atcb-modal-content,.rsvp-inline-wrapper .atcb-modal-headline,.rsvp-inline-wrapper.atcb-modal-box{background-color:transparent;border-radius:0;box-sizing:border-box;padding:0;width:100%}.rsvp-inline-wrapper .atcb-modal-headline{padding-bottom:1.5em}.pro{text-align:center}.pro ol,.pro ul{margin:auto;text-align:left;width:fit-content}.pro a:not(.atcb-modal-btn),.pro a:not(.atcb-modal-btn):active,.pro a:not(.atcb-modal-btn):visited{color:var(--modal-btn-text);text-decoration:underline;text-decoration-thickness:2px;text-decoration-color:var(--accent-color)}.pro a:not(.atcb-modal-btn):hover{color:var(--accent-color);text-decoration:none}.pro .pro-share-buttons{display:flex;flex-wrap:wrap;justify-content:center}.pro #rsvp-atcb{display:flex;flex-wrap:wrap;gap:.4em}.pro-form{text-align:left}.pro-form:not(.no-intro){border-top:1px solid var(--modal-btn-border);margin-top:1.5em;padding-top:1.5em}.pro-form.no-intro:not(.no-headline){padding-top:.5em}.pro-field+.pro-field{padding-top:1.3em}.pro-field-type-label+.pro-field-type-radio{padding-top:0}.pro-field-type-checkbox,.pro-field-type-radio div{align-items:center;display:flex}.pro-field-type-checkbox input,.pro-field-type-radio input{cursor:pointer}.pro-field label{display:block;font-size:.9em;opacity:.7}.pro-field-type-checkbox label,.pro-field-type-radio label{cursor:pointer;opacity:.8;padding-left:.3em}.pro-field input[type=email],.pro-field input[type=number],.pro-field input[type=text]{background-color:var(--input-background);border:1px solid var(--modal-btn-border);border-radius:var(--input-border-radius);box-sizing:border-box;caret-color:var(--accent-color);color:var(--modal-text);font-size:.9em;opacity:.8;padding:.7em;transition:all .1s ease-in-out;width:100%}.pro-field input[type=checkbox],.pro-field input[type=radio]{accent-color:var(--accent-color);height:1.2rem;opacity:.8;transition:all .1s ease-in-out;width:1.2em}.pro-field input:disabled,.pro-field input:disabled+label{cursor:not-allowed;opacity:.75;filter:brightness(95%)}.pro-field input:not([disabled]):hover{opacity:1}.pro-field input[type=email]:focus,.pro-field input[type=number]:focus,.pro-field input[type=text]:focus{border-color:var(--accent-color);outline:1px solid var(--accent-color)}.pro-field input[type=checkbox]:focus,.pro-field input[type=radio]:focus{outline-color:var(--accent-color);outline-width:2px}#submit-error{color:var(--form-error);display:none;font-weight:700;padding-top:1.5em;text-align:center}.pro-form.form-error #submit-error{display:block}.pro-field input.error{accent-color:var(--form-error);border:2px solid var(--form-error)}.pro-field input.error+label,.pro-field:has(input.error) label{color:var(--form-error);opacity:1}#rsvp-status-group{border-bottom:1px solid var(--modal-btn-border);font-weight:700;margin-bottom:1.5em;padding-bottom:2em;text-align:center}#rsvp-status-group .pro-field{align-items:center;display:flex;flex-wrap:wrap;gap:1.2em;justify-content:center;margin-top:1em}@media (width <= 575px){#rsvp-status-group .pro-field{flex-direction:column}#rsvp-status-group .pro-field div{width:80%}}#rsvp-status-group .pro-field div{min-width:28%;position:relative}#rsvp-status-group input{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;margin:0;cursor:pointer}#rsvp-status-group label{align-items:center;border:1px solid var(--modal-btn-text);border-radius:var(--input-border-radius);box-shadow:var(--btn-shadow);color:var(--modal-btn-text);display:flex;flex-direction:column;font-weight:700;text-transform:uppercase;justify-content:center;opacity:.6;padding:.8em;transition:all .1s ease-in-out;width:100%}#rsvp-status-group label.status-confirmed{border-color:var(--form-success);color:var(--form-success)}#rsvp-status-group label.status-declined{border-color:var(--form-error);color:var(--form-error)}#rsvp-status-group input:checked+label{background-color:var(--modal-text);box-shadow:var(--btn-hover-shadow);color:var(--status-active-text);opacity:1;transform:scale(1.08)}#rsvp-status-group input:focus-visible+label{outline:2px solid var(--accent-color);outline-offset:2px}#rsvp-status-group input:not([disabled])+label:hover,#rsvp-status-group input:not([disabled]):hover+label{box-shadow:var(--btn-hover-shadow);opacity:1;transform:scale(1.08)}#rsvp-status-group input:checked+label.status-confirmed{background-color:var(--form-success)}#rsvp-status-group input:checked+label.status-declined{background-color:var(--form-error)}#rsvp-success-msg,#rsvp-success-msg-demo,#rsvp-success-msg-doi,#rsvp-success-msg-email,#ty-success-msg{display:none;font-weight:700;line-height:1.6em;padding-top:.5em;text-align:center}#rsvp-success-msg,#rsvp-success-msg-demo,#ty-success-msg{padding:1.5em 0}#rsvp-success-msg-demo,#rsvp-success-msg-email{color:var(--form-success)}#rsvp-success-msg-doi{color:var(--form-error);padding-top:1em;font-size:.8em}#pro-form-submit{display:block;margin:auto;min-width:150px}.pro-waiting{background-color:var(--modal-btn-background);border:1px solid var(--modal-btn-border);border-radius:var(--btn-border-radius);box-sizing:border-box;color:var(--modal-btn-text);cursor:wait;display:none;line-height:.5em;margin:auto;min-width:150px;padding:.5em 1.25em 1.2em;text-align:center;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:fit-content}@media (width > 575px){#pro-form-submit,.pro-waiting{min-width:200px}}.pro-waiting span:not(.atcb-icon-ical){animation-name:blink;animation-duration:1s;animation-iteration-count:infinite;animation-fill-mode:both;font-size:2.5em}.pro-field label span:not(.atcb-icon-ical){color:var(--form-error);font-weight:700;padding-left:2px}.pro-waiting span:not(.atcb-icon-ical):nth-child(2){animation-delay:.15s}.pro-waiting span:not(.atcb-icon-ical):nth-child(3){animation-delay:.3s}@keyframes blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}.pro #rsvp-sent-content{align-items:center;display:flex;flex-direction:column;gap:1.5em}#rsvp-status-group span{color:inherit}.atcb-modal-content .pro p{margin:0}.atcb-modal-content .pro p.pro-pt{margin-top:1.5em}.atcb-modal-content .pro .pro-field p{font-size:.9em}.pro .btn-flex{align-items:center;display:flex}.pro .atcb-modal-btn svg{fill:none;height:1.5em;margin-right:.5em;stroke:currentcolor;width:auto}#atcb-reference{box-sizing:border-box;filter:drop-shadow(0 0 3px rgba(255 255 255 / 80%));height:auto;padding:8px 0;transform:translate3d(0,0,0);width:100%;z-index:15000000}#atcb-reference.fixed-ref{position:fixed;bottom:10px;right:40px;width:auto}#atcb-reference.atcb-dropup{position:absolute}:host(.atcb-dark) #atcb-reference{filter:drop-shadow(0 0 5px #000)}#atcb-reference a,#atcb-reference a:active,#atcb-reference a:visited{opacity:.4;width:150px;max-width:100%;margin:auto;display:block;text-decoration:none}#atcb-reference.fixed-ref a{opacity:.6}#atcb-reference a:hover{opacity:.9;text-decoration:none}#atcb-reference svg{fill:var(--list-text)}`,
  "3d": `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--accent-color:#1e90ff;--wrapper-padding:0px;--buttonslist-gap:5px;--btn-background:#f5f5f5;--btn-hover-background:#fff;--btn-border:#d2d2d2;--btn-border-radius:6px;--btn-padding-x:1em;--btn-padding-y:.65em;--btn-font-weight:600;--btn-text:#333;--btn-hover-text:#000;--btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 2px -1px;--btn-hover-shadow:rgba(0 0 0 / 25%) 0 5px 12px -2px,rgba(0 0 0 / 25%) 0 3px 5px -2px;--btn-active-shadow:rgba(0 0 0 / 40%) 0 8px 13px -2px,rgba(0 0 0 / 30%) 0 5px 5px -3px;--btn-active-shadow-up:rgba(0 0 0 / 30%) 0 6px 13px -2px,rgba(0 0 0 / 15%) 0 2px 2px -1px,rgba(0 0 0 / 25%) 0 -3px 10px -1px;--list-background:#f5f5f5;--list-hover-background:#fff;--list-text:#333;--list-hover-text:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-border-radius:6px;--list-padding:.8em;--list-shadow:rgba(0 0 0 / 20%) 0 4px 13px -2px,rgba(0 0 0 / 23%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 50%) 0 4px 30px -3px,rgba(0 0 0 / 30%) 0 2px 8px -2px;--modal-text:#000;--modal-text-align:left;--modal-text-align-rtl:right;--modal-background:#f5f5f5;--modal-border-radius:6px;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 65%));--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-hover-background:#fff;--modal-btn-border:#d2d2d2;--modal-btn-font-weight:600;--modal-btn-text:#2e2e2e;--modal-btn-hover-text:#161616;--modal-btn-secondary-text:#666567;--modal-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 10%) 0 2px 3px -1px;--modal-btn-hover-shadow:rgba(0 0 0 / 25%) 0 5px 13px -2px,rgba(0 0 0 / 20%) 0 3px 5px -2px;--modal-headline-text-align:center;--modal-headline-text-transform:none;--input-border-radius:6px;--input-background:#fff;--status-active-text:#fff;--form-error:#c5372c;--form-success:#338a36;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-hover-background:#fff;--date-btn-headline-line-clamp:1;--date-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 3px -1px;--date-btn-hover-shadow:rgba(0 0 0 / 20%) 0 5px 12px -2px,rgba(0 0 0 / 20%) 0 3px 4px -2px;--checkmark-background:drop-shadow(0 0 3px #fff);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-hover-background:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-hover-text:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -3px -3px 30px -1px,rgba(0 0 0 / 40%) 2px 3px 10px -2px,rgba(0 0 0 / 40%) 1px 2px 3px -1px;--btn-hover-shadow:rgba(0 0 0 / 90%) 2px 5px 20px -4px,rgba(0 0 0 / 50%) 1px 2px 6px -2px;--btn-active-shadow:rgba(0 0 0 / 90%) 2px 5px 20px -4px,rgba(0 0 0 / 50%) 1px 2px 6px -2px;--btn-active-shadow-up:rgba(0 0 0 / 80%) 2px 4px 20px -4px,rgba(0 0 0 / 30%) 1px 1px 3px -1px,rgba(0 0 0 / 45%) 0 -3px 10px -1px;--list-background:#2e2e2e;--list-hover-background:#373737;--list-text:#dedede;--list-hover-text:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(0 0 0 / 60%) 0 4px 20px -2px,rgba(0 0 0 / 40%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 40%) -1px 3px 30px 2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 90%));--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-hover-background:#434246;--modal-btn-border:#434246;--modal-btn-text:#dbdbdb;--modal-btn-hover-text:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-btn-shadow:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 40%) 3px 3px 10px -2px,rgba(0 0 0 / 40%) 1px 2px 5px -1px;--modal-btn-hover-shadow:none;--input-background:#434246;--status-active-text:#000;--form-error:#db8680;--form-success:#99de9c;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-hover-background:#474747;--date-btn-shadow:rgba(0 0 0 / 60%) 0 0 20px -2px,rgba(0 0 0 / 30%) 1px 2px 3px -1px;--date-btn-hover-shadow:none;--checkmark-background:drop-shadow(0 0 3px #0a0a0a);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-initialized.atcb-buttons-list{gap:var(--buttonslist-gap)}.atcb-button-wrapper{display:block;padding:var(--wrapper-padding);position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:var(--btn-border-radius);box-shadow:var(--btn-shadow);box-sizing:content-box;color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:var(--btn-font-weight);justify-content:center;line-height:1.5em;margin:0;max-width:300px;padding:var(--btn-padding-y) var(--btn-padding-x);position:relative;text-align:center;touch-action:manipulation;transform:translate3d(0,0,-12px);user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button:not(.atcb-no-text,.atcb-modal-style,.atcb-dropoverlay,.atcb-single){min-width:calc(11.6em - 2 * var(--btn-padding-x))}.atcb-button.atcb-no-text{display:flex;place-content:center center;align-items:center;height:3em;width:3em;padding:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--accent-color)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-hover-shadow);color:var(--btn-hover-text)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){background-color:var(--btn-hover-background);z-index:15000000}.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-active-shadow);color:var(--btn-hover-text)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropup,.atcb-dropoverlay){box-shadow:var(--btn-active-shadow);transform:perspective(100px) rotateX(12deg) translate3d(0,0,2px);transition:transform .1s linear}.atcb-button.atcb-active.atcb-dropup:not(.atcb-modal-style,.atcb-dropoverlay){box-shadow:var(--btn-active-shadow-up);transform:perspective(100px) rotateX(348deg) translate3d(0,0,2px);transition:transform .1s linear}.atcb-button.atcb-active.atcb-dropoverlay{transform:translate3d(0,0,0);z-index:14000090}.atcb-icon{flex-grow:0;flex-shrink:0;height:1em;line-height:1em;margin-right:.8em;width:1em}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:6px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;padding:0 4px;position:absolute;transform:translate3d(0,0,0);z-index:14000090}.atcb-list{background-color:var(--list-background);border-radius:0 0 var(--list-border-radius) var(--list-border-radius);box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-wrapper.atcb-dropdown:not(.atcb-dropup,.atcb-dropoverlay){animation:atcb-list-slide-down .4s ease 50ms 1 normal both;opacity:0}.atcb-list-wrapper.atcb-dropup:not(.atcb-dropoverlay){animation:atcb-list-slide-up .4s ease 50ms 1 normal both;opacity:0}.atcb-list-wrapper.atcb-dropoverlay{transform:translate3d(0,0,2px);z-index:15000000;animation:atcb-list-slide-center .3s ease 0s 1 normal both;opacity:0}@keyframes atcb-list-slide-down{0%{opacity:0;transform:rotateX(70deg);transform-origin:top}100%{opacity:1;transform:rotateX(0);transform-origin:top}}@keyframes atcb-list-slide-up{0%{opacity:0;transform:rotateX(70deg);transform-origin:bottom}100%{opacity:1;transform:rotateX(0);transform-origin:bottom}}@keyframes atcb-list-slide-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:var(--list-padding);text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-hover-background);color:var(--list-hover-text)}.atcb-list-item:focus-visible{background-color:var(--list-hover-background);color:var(--accent-color);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 var(--list-border-radius) var(--list-border-radius)}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:calc(var(--list-padding) + .7em)}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:var(--list-border-radius) var(--list-border-radius) 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:var(--list-border-radius)}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:calc(var(--list-padding) + .7em)}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:var(--list-padding)}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:var(--list-border-radius)}.atcb-list.atcb-modal{box-shadow:var(--list-modal-shadow)}.atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item .atcb-icon+.atcb-text{margin-left:.7em;width:100%}.atcb-rtl .atcb-list-item .atcb-icon+.atcb-text{margin-left:0;margin-right:.7em}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;width:auto;min-width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:var(--modal-text-align);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;-webkit-tap-highlight-color:transparent}@media (width > 575px){.atcb-modal-box{width:32em}}.atcb-modal-box.atcb-rtl{text-align:var(--modal-text-align-rtl);direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 1.5em 1.3em;text-transform:var(--modal-headline-text-transform);text-align:var(--modal-headline-text-align)}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2em 2.2em}.atcb-modal-content-subevents{margin:auto;width:fit-content}.atcb-modal-icon+.atcb-modal-content{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 var(--modal-border-radius) var(--modal-border-radius);box-sizing:border-box;padding:.6em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:var(--btn-border-radius);box-shadow:var(--modal-btn-shadow);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:var(--modal-btn-font-weight);line-height:1em;margin:.625em;padding:1em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}a.atcb-modal-btn.btn-small,button.atcb-modal-btn.btn-small{padding:.6em .8em}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn.atcb-modal-btn-border,button.atcb-modal-btn.atcb-modal-btn-border{border:1px solid var(--modal-btn-border)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-hover-background);outline:2px solid var(--accent-color)}a.atcb-modal-btn:disabled,button.atcb-button:disabled,button.atcb-modal-btn:disabled,button.atcb-subevent-btn:disabled{cursor:not-allowed;opacity:.75;filter:brightness(95%);border-style:dashed;box-shadow:none}a.atcb-modal-btn:not([disabled]):hover,button.atcb-modal-btn:not([disabled]):hover{background-color:var(--modal-btn-hover-background);box-shadow:var(--modal-btn-hover-shadow);color:var(--modal-btn-hover-text);text-decoration:none}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:7px 4px 4px 7px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:100%}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-hover-background);box-shadow:var(--date-btn-hover-shadow)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--accent-color)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-hover-background);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column;flex-shrink:0}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:400;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:13.5em;overflow-wrap:anywhere}.atcb-subevent-btn .atcb-date-btn-right{width:100%}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.4em .7em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:var(--date-btn-headline-line-clamp);-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content.atcb-date-btn-cancelled{color:var(--form-error);font-weight:700}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;margin-right:.4em;margin-left:0;width:.9em;flex-shrink:0}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.4em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:100%}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.5em;padding:.5em;border-radius:100%;height:1.2em}.atcb-checkmark svg{height:100%;filter:var(--checkmark-background);width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon-outlookcom,.atcb-icon.atcb-icon-ms365{padding-bottom:.05em}.atcb-icon.atcb-icon-apple,.atcb-icon.atcb-icon-ical{padding-bottom:.15em}.atcb-icon.atcb-icon-trigger{padding-bottom:.15em}.atcb-icon.atcb-icon-rsvp{height:1.5em;width:1.5em}.atcb-icon.atcb-icon-apple svg{fill:currentcolor}.atcb-icon.atcb-icon-ical svg{fill:currentcolor}.atcb-icon.atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon.atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon.atcb-icon-google svg,.atcb-icon.atcb-icon-msteams svg,.atcb-icon.atcb-icon-outlookcom svg{filter:var(--icon-filter)}.rsvp-inline-wrapper{filter:none;min-width:100%;margin-bottom:0}.atcb-modal-content.no-headline{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;padding-top:1.8em}.rsvp-inline-wrapper .atcb-modal-content,.rsvp-inline-wrapper .atcb-modal-headline,.rsvp-inline-wrapper.atcb-modal-box{background-color:transparent;border-radius:0;box-sizing:border-box;padding:0;width:100%}.rsvp-inline-wrapper .atcb-modal-headline{padding-bottom:1.5em}.pro{text-align:center}.pro ol,.pro ul{margin:auto;text-align:left;width:fit-content}.pro a:not(.atcb-modal-btn),.pro a:not(.atcb-modal-btn):active,.pro a:not(.atcb-modal-btn):visited{color:var(--modal-btn-text);text-decoration:underline;text-decoration-thickness:2px;text-decoration-color:var(--accent-color)}.pro a:not(.atcb-modal-btn):hover{color:var(--accent-color);text-decoration:none}.pro .pro-share-buttons{display:flex;flex-wrap:wrap;justify-content:center}.pro #rsvp-atcb{display:flex;flex-wrap:wrap;gap:.4em}.pro-form{text-align:left}.pro-form:not(.no-intro){border-top:1px solid var(--modal-btn-border);margin-top:1.5em;padding-top:1.5em}.pro-form.no-intro:not(.no-headline){padding-top:.5em}.pro-field+.pro-field{padding-top:1.3em}.pro-field-type-label+.pro-field-type-radio{padding-top:0}.pro-field-type-checkbox,.pro-field-type-radio div{align-items:center;display:flex}.pro-field-type-checkbox input,.pro-field-type-radio input{cursor:pointer}.pro-field label{display:block;font-size:.9em;opacity:.7}.pro-field-type-checkbox label,.pro-field-type-radio label{cursor:pointer;opacity:.8;padding-left:.3em}.pro-field input[type=email],.pro-field input[type=number],.pro-field input[type=text]{background-color:var(--input-background);border:1px solid var(--modal-btn-border);border-radius:var(--input-border-radius);box-sizing:border-box;caret-color:var(--accent-color);color:var(--modal-text);font-size:.9em;opacity:.8;padding:.7em;transition:all .1s ease-in-out;width:100%}.pro-field input[type=checkbox],.pro-field input[type=radio]{accent-color:var(--accent-color);height:1.2rem;opacity:.8;transition:all .1s ease-in-out;width:1.2em}.pro-field input:disabled,.pro-field input:disabled+label{cursor:not-allowed;opacity:.75;filter:brightness(95%)}.pro-field input:not([disabled]):hover{opacity:1}.pro-field input[type=email]:focus,.pro-field input[type=number]:focus,.pro-field input[type=text]:focus{border-color:var(--accent-color);outline:1px solid var(--accent-color)}.pro-field input[type=checkbox]:focus,.pro-field input[type=radio]:focus{outline-color:var(--accent-color);outline-width:2px}#submit-error{color:var(--form-error);display:none;font-weight:700;padding-top:1.5em;text-align:center}.pro-form.form-error #submit-error{display:block}.pro-field input.error{accent-color:var(--form-error);border:2px solid var(--form-error)}.pro-field input.error+label,.pro-field:has(input.error) label{color:var(--form-error);opacity:1}#rsvp-status-group{border-bottom:1px solid var(--modal-btn-border);font-weight:700;margin-bottom:1.5em;padding-bottom:2em;text-align:center}#rsvp-status-group .pro-field{align-items:center;display:flex;flex-wrap:wrap;gap:1.2em;justify-content:center;margin-top:1em}@media (width <= 575px){#rsvp-status-group .pro-field{flex-direction:column}#rsvp-status-group .pro-field div{width:80%}}#rsvp-status-group .pro-field div{min-width:28%;position:relative}#rsvp-status-group input{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;margin:0;cursor:pointer}#rsvp-status-group label{align-items:center;border:1px solid var(--modal-btn-text);border-radius:var(--input-border-radius);box-shadow:var(--btn-shadow);color:var(--modal-btn-text);display:flex;flex-direction:column;font-weight:700;text-transform:uppercase;justify-content:center;opacity:.6;padding:.8em;transition:all .1s ease-in-out;width:100%}#rsvp-status-group label.status-confirmed{border-color:var(--form-success);color:var(--form-success)}#rsvp-status-group label.status-declined{border-color:var(--form-error);color:var(--form-error)}#rsvp-status-group input:checked+label{background-color:var(--modal-text);box-shadow:var(--btn-hover-shadow);color:var(--status-active-text);opacity:1;transform:scale(1.08)}#rsvp-status-group input:focus-visible+label{outline:2px solid var(--accent-color);outline-offset:2px}#rsvp-status-group input:not([disabled])+label:hover,#rsvp-status-group input:not([disabled]):hover+label{box-shadow:var(--btn-hover-shadow);opacity:1;transform:scale(1.08)}#rsvp-status-group input:checked+label.status-confirmed{background-color:var(--form-success)}#rsvp-status-group input:checked+label.status-declined{background-color:var(--form-error)}#rsvp-success-msg,#rsvp-success-msg-demo,#rsvp-success-msg-doi,#rsvp-success-msg-email,#ty-success-msg{display:none;font-weight:700;line-height:1.6em;padding-top:.5em;text-align:center}#rsvp-success-msg,#rsvp-success-msg-demo,#ty-success-msg{padding:1.5em 0}#rsvp-success-msg-demo,#rsvp-success-msg-email{color:var(--form-success)}#rsvp-success-msg-doi{color:var(--form-error);padding-top:1em;font-size:.8em}#pro-form-submit{display:block;margin:auto;min-width:150px}.pro-waiting{background-color:var(--modal-btn-background);border:1px solid var(--modal-btn-border);border-radius:var(--btn-border-radius);box-sizing:border-box;color:var(--modal-btn-text);cursor:wait;display:none;line-height:.5em;margin:auto;min-width:150px;padding:.5em 1.25em 1.2em;text-align:center;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:fit-content}@media (width > 575px){#pro-form-submit,.pro-waiting{min-width:200px}}.pro-waiting span:not(.atcb-icon-ical){animation-name:blink;animation-duration:1s;animation-iteration-count:infinite;animation-fill-mode:both;font-size:2.5em}.pro-field label span:not(.atcb-icon-ical){color:var(--form-error);font-weight:700;padding-left:2px}.pro-waiting span:not(.atcb-icon-ical):nth-child(2){animation-delay:.15s}.pro-waiting span:not(.atcb-icon-ical):nth-child(3){animation-delay:.3s}@keyframes blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}.pro #rsvp-sent-content{align-items:center;display:flex;flex-direction:column;gap:1.5em}#rsvp-status-group span{color:inherit}.atcb-modal-content .pro p{margin:0}.atcb-modal-content .pro p.pro-pt{margin-top:1.5em}.atcb-modal-content .pro .pro-field p{font-size:.9em}.pro .btn-flex{align-items:center;display:flex}.pro .atcb-modal-btn svg{fill:none;height:1.5em;margin-right:.5em;stroke:currentcolor;width:auto}#atcb-reference{box-sizing:border-box;filter:drop-shadow(0 0 3px rgba(255 255 255 / 80%));height:auto;padding:8px 0;transform:translate3d(0,0,0);width:100%;z-index:15000000}#atcb-reference.fixed-ref{position:fixed;bottom:10px;right:40px;width:auto}#atcb-reference.atcb-dropup{position:absolute}:host(.atcb-dark) #atcb-reference{filter:drop-shadow(0 0 5px #000)}#atcb-reference a,#atcb-reference a:active,#atcb-reference a:visited{opacity:.4;width:150px;max-width:100%;margin:auto;display:block;text-decoration:none}#atcb-reference.fixed-ref a{opacity:.6}#atcb-reference a:hover{opacity:.9;text-decoration:none}#atcb-reference svg{fill:var(--list-text)}`,
  flat: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--accent-color:#1e90ff;--wrapper-padding:0px;--buttonslist-gap:8px;--btn-background:#f5f5f5;--btn-hover-background:#fff;--btn-border:#545454;--btn-padding-x:1.2em;--btn-padding-y:.8em;--btn-shadow:#333;--btn-font-weight:600;--btn-text:#333;--btn-hover-text:#000;--list-background:#f5f5f5;--list-hover-background:#fff;--list-border:#545454;--list-text:#333;--list-font-weight:400;--list-hover-text:#000;--list-close-background:#545454;--list-close-text:#b0b0b0;--list-close-text-hover:#777;--list-padding:.8em;--modal-text:#000;--modal-text-align:left;--modal-text-align-rtl:right;--modal-background:#f5f5f5;--modal-btn-bar:#bababa;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-hover-background:#fff;--modal-btn-border:#545454;--modal-btn-font-weight:600;--modal-btn-text:#2e2e2e;--modal-btn-hover-text:#161616;--modal-btn-secondary-text:#676767;--modal-headline-text-align:center;--modal-headline-text-transform:uppercase;--input-background:#fff;--status-active-text:#fff;--form-error:#c5372c;--form-success:#338a36;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#414141;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-hover-background:#fff;--date-btn-headline-line-clamp:1;--overlay-background:rgba(20 20 20 / 40%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#222;--btn-hover-background:#373737;--btn-border:#515151;--btn-shadow:#000;--btn-text:#dedede;--btn-hover-text:#f1f1f1;--list-background:#222;--list-hover-background:#373737;--list-border:#515151;--list-text:#dedede;--list-hover-text:#f1f1f1;--list-close-background:#111;--list-close-text:#777;--list-close-text-hover:#f1f1f1;--modal-text:#f1f1f1;--modal-background:#242424;--modal-btn-bar:#313131;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-hover-background:#434246;--modal-btn-border:#434246;--modal-btn-text:#dbdbdb;--modal-btn-hover-text:#fff;--modal-btn-secondary-text:#b8b8b8;--input-background:#434246;--status-active-text:#000;--form-error:#db8680;--form-success:#99de9c;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#414141;--date-btn-cal-background:#c7c7cd;--date-btn-background:#2d2d2d;--date-btn-hover-background:#474747;--overlay-background:rgba(20 20 20 / 75%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-initialized.atcb-buttons-list{gap:var(--buttonslist-gap)}.atcb-button-wrapper{display:block;padding:var(--wrapper-padding);position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:.2em solid var(--btn-border);box-sizing:content-box;color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:var(--btn-font-weight);justify-content:center;line-height:1.5em;margin:0;max-width:300px;padding:var(--btn-padding-y) var(--btn-padding-x);top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow);position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button:not(.atcb-no-text,.atcb-modal-style,.atcb-dropoverlay,.atcb-single){min-width:calc(11.6em - 2 * var(--btn-padding-x))}.atcb-button.atcb-no-text{display:flex;place-content:center center;align-items:center;height:3em;width:3em;padding:0}.atcb-button.atcb-click:not([disabled]){top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--accent-color)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-hover-background);top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow);color:var(--btn-hover-text)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-hover-background);top:-5px;left:-5px;box-shadow:5px 5px 0 0 var(--btn-shadow);color:var(--btn-hover-text)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{flex-grow:0;flex-shrink:0;height:.9em;line-height:1em;margin-right:.8em;width:.9em}.atcb-rtl .atcb-icon{margin-right:0;margin-left:1em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-icon-trigger svg{display:none}.atcb-button .atcb-icon-trigger::after{content:"+";font-size:1.5em}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:0;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;font-weight:var(--list-font-weight);padding:0 2px 0 6px;position:absolute;z-index:16000090}.atcb-list-wrapper.atcb-no-text.atcb-dropdown{padding:0}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(150px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-150px)}100%{opacity:1;transform:translateY(0)}}.atcb-list{background:var(--list-background);box-sizing:border-box;border:.15em solid var(--list-border);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:var(--list-padding);text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-hover-background);color:var(--list-hover-text)}.atcb-list-item:focus-visible{background-color:var(--list-hover-background);color:var(--accent-color);font-weight:600;outline:0}.atcb-dropup .atcb-list-item:last-child{border-bottom-width:0}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{border-top-width:0}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{border-top-width:.15em}.atcb-list-item .atcb-icon{margin:0 auto;height:1em;width:1em}.atcb-list-item .atcb-icon+.atcb-text{margin-left:.7em;width:100%}.atcb-rtl .atcb-list-item .atcb-icon+.atcb-text{margin-left:0;margin-right:.7em}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item.atcb-list-item-close:hover{color:var(--list-close-text-hover)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;width:auto;min-width:auto;position:relative;z-index:14000090}.atcb-modal-box{border:.15em solid var(--btn-border);background-color:var(--modal-background);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:var(--modal-text-align);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;-webkit-tap-highlight-color:transparent}@media (width > 575px){.atcb-modal-box{width:32em}}.atcb-modal-box.atcb-rtl{text-align:var(--modal-text-align-rtl);direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;padding:1.75em;margin:auto}.atcb-modal-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-modal-headline{font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 1.5em 1.3em;text-transform:var(--modal-headline-text-transform);text-align:var(--modal-headline-text-align)}.atcb-modal-icon+.atcb-modal-headline{padding-top:0}.atcb-modal-content{font-size:1em;padding:.3em 2em 2.2em}.atcb-modal-content-subevents{margin:auto;width:fit-content}.atcb-modal-icon+.atcb-modal-content{padding-top:0}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);box-sizing:border-box;padding:.6em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{border:.2em solid var(--btn-border);background-color:var(--modal-btn-secondary-background);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:var(--modal-btn-font-weight);line-height:1em;margin:.625em;padding:1em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow)}a.atcb-modal-btn.btn-small,button.atcb-modal-btn.btn-small{padding:.6em .8em}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-hover-background);outline:2px solid var(--accent-color)}a.atcb-modal-btn:disabled,button.atcb-button:disabled,button.atcb-modal-btn:disabled,button.atcb-subevent-btn:disabled{cursor:not-allowed;opacity:.75;filter:brightness(95%);border-style:dashed;box-shadow:none}a.atcb-modal-btn:not([disabled]):hover,button.atcb-modal-btn:not([disabled]):hover{background-color:var(--modal-btn-hover-background);color:var(--modal-btn-hover-text);text-decoration:none;top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-subevent-btn{border:.15em solid var(--btn-border);display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;background-color:var(--date-btn-background);padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;top:0;left:0;box-shadow:0 0 0 0 var(--btn-shadow);width:100%}.atcb-subevent-btn:hover{align-items:center;top:-3px;left:-3px;box-shadow:3px 3px 0 0 var(--btn-shadow)}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-hover-background)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--accent-color)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-hover-background);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column;flex-shrink:0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:400;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:13.5em;overflow-wrap:anywhere}.atcb-subevent-btn .atcb-date-btn-right{width:100%}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.4em .7em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:var(--date-btn-headline-line-clamp);-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content.atcb-date-btn-cancelled{color:var(--form-error);font-weight:700}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;margin-right:.4em;margin-left:0;width:.9em;flex-shrink:0}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.4em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:100%}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-2.1em;right:-2em;padding:.5em;border-radius:100%;height:1.5em}.atcb-checkmark svg{height:100%;width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon-outlookcom,.atcb-icon.atcb-icon-ms365{padding-bottom:.05em}.atcb-icon.atcb-icon-apple,.atcb-icon.atcb-icon-ical{padding-bottom:.15em}.atcb-icon.atcb-icon-rsvp{height:1.5em;width:1.5em}.atcb-icon.atcb-icon-apple svg{fill:currentcolor}.atcb-icon.atcb-icon-ical svg{fill:currentcolor}.atcb-icon.atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon.atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon.atcb-icon-google svg,.atcb-icon.atcb-icon-msteams svg,.atcb-icon.atcb-icon-outlookcom svg{filter:var(--icon-filter)}.rsvp-inline-wrapper{background-color:transparent;border:0;filter:none;min-width:100%;margin-bottom:0}.atcb-modal-content.no-headline{padding-top:1.8em}.rsvp-inline-wrapper .atcb-modal-content,.rsvp-inline-wrapper .atcb-modal-headline,.rsvp-inline-wrapper.atcb-modal-box{background-color:transparent;border-radius:0;box-sizing:border-box;padding:0;width:100%}.rsvp-inline-wrapper .atcb-modal-headline{padding-bottom:1.5em}.pro{text-align:center}.pro ol,.pro ul{margin:auto;text-align:left;width:fit-content}.pro a:not(.atcb-modal-btn),.pro a:not(.atcb-modal-btn):active,.pro a:not(.atcb-modal-btn):visited{color:var(--modal-btn-text);text-decoration:underline;text-decoration-thickness:2px;text-decoration-color:var(--accent-color)}.pro a:not(.atcb-modal-btn):hover{color:var(--accent-color);text-decoration:none}.pro .pro-share-buttons{display:flex;flex-wrap:wrap;justify-content:center}.pro #rsvp-atcb{display:flex;flex-wrap:wrap;gap:.4em}.pro-form{text-align:left}.pro-form:not(.no-intro){border-top:2px solid var(--modal-btn-border);margin-top:1.5em;padding-top:1.5em}.pro-form.no-intro:not(.no-headline){padding-top:.5em}.pro-field+.pro-field{padding-top:1.3em}.pro-field-type-label+.pro-field-type-radio{padding-top:0}.pro-field-type-checkbox,.pro-field-type-radio div{align-items:center;display:flex}.pro-field-type-checkbox input,.pro-field-type-radio input{cursor:pointer}.pro-field label{display:block;font-size:.9em;opacity:.7}.pro-field-type-checkbox label,.pro-field-type-radio label{cursor:pointer;opacity:.8;padding-left:.3em}.pro-field input[type=email],.pro-field input[type=number],.pro-field input[type=text]{background-color:var(--input-background);border:2px solid var(--modal-btn-border);border-radius:var(--input-border-radius);box-sizing:border-box;caret-color:var(--accent-color);color:var(--modal-text);font-size:.9em;opacity:.8;padding:.7em;transition:all .1s ease-in-out;width:100%}.pro-field input[type=checkbox],.pro-field input[type=radio]{accent-color:var(--accent-color);height:1.2rem;opacity:.8;transition:all .1s ease-in-out;width:1.2em}.pro-field input:disabled,.pro-field input:disabled+label{cursor:not-allowed;opacity:.75;filter:brightness(95%)}.pro-field input:not([disabled]):hover{opacity:1}.pro-field input[type=email]:focus,.pro-field input[type=number]:focus,.pro-field input[type=text]:focus{border-color:var(--accent-color);outline:1px solid var(--accent-color)}.pro-field input[type=checkbox]:focus,.pro-field input[type=radio]:focus{outline-color:var(--accent-color);outline-width:2px}#submit-error{color:var(--form-error);display:none;font-weight:700;padding-top:1.5em;text-align:center}.pro-form.form-error #submit-error{display:block}.pro-field input.error{accent-color:var(--form-error);border:2px solid var(--form-error)}.pro-field input.error+label,.pro-field:has(input.error) label{color:var(--form-error);opacity:1}#rsvp-status-group{border-bottom:2px solid var(--modal-btn-border);font-weight:700;margin-bottom:1.5em;padding-bottom:2em;text-align:center}#rsvp-status-group .pro-field{align-items:center;display:flex;flex-wrap:wrap;gap:1.2em;justify-content:center;margin-top:1em}@media (width <= 575px){#rsvp-status-group .pro-field{flex-direction:column}#rsvp-status-group .pro-field div{width:80%}}#rsvp-status-group .pro-field div{min-width:28%;position:relative}#rsvp-status-group input{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;margin:0;cursor:pointer}#rsvp-status-group label{align-items:center;border:2px solid var(--modal-btn-text);border-radius:var(--input-border-radius);color:var(--modal-btn-text);display:flex;flex-direction:column;font-weight:700;text-transform:uppercase;justify-content:center;opacity:.6;padding:.8em;transition:all .1s ease-in-out;width:100%}#rsvp-status-group label.status-confirmed{border-color:var(--form-success);color:var(--form-success)}#rsvp-status-group label.status-declined{border-color:var(--form-error);color:var(--form-error)}#rsvp-status-group input:checked+label{background-color:var(--modal-text);color:var(--status-active-text);opacity:1;transform:scale(1.1)}#rsvp-status-group input:focus-visible+label{outline:2px solid var(--accent-color);outline-offset:2px}#rsvp-status-group input:not([disabled])+label:hover,#rsvp-status-group input:not([disabled]):hover+label{opacity:1;transform:scale(1.08)}#rsvp-status-group input:checked+label.status-confirmed{background-color:var(--form-success)}#rsvp-status-group input:checked+label.status-declined{background-color:var(--form-error)}#rsvp-success-msg,#rsvp-success-msg-demo,#rsvp-success-msg-doi,#rsvp-success-msg-email,#ty-success-msg{display:none;font-weight:700;line-height:1.6em;padding-top:.5em;text-align:center}#rsvp-success-msg,#rsvp-success-msg-demo,#ty-success-msg{padding:1.5em 0}#rsvp-success-msg-demo,#rsvp-success-msg-email{color:var(--form-success)}#rsvp-success-msg-doi{color:var(--form-error);padding-top:1em;font-size:.8em}#pro-form-submit{display:block;margin:auto;min-width:150px}.pro-waiting{background-color:var(--modal-btn-background);border:.2em solid var(--modal-btn-border);border-radius:var(--btn-border-radius);box-sizing:border-box;color:var(--modal-btn-text);cursor:wait;display:none;line-height:.5em;margin:auto;min-width:150px;padding:.5em 1.25em 1.2em;text-align:center;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:fit-content}@media (width > 575px){#pro-form-submit,.pro-waiting{min-width:200px}}.pro-waiting span:not(.atcb-icon-ical){animation-name:blink;animation-duration:1s;animation-iteration-count:infinite;animation-fill-mode:both;font-size:2.5em}.pro-field label span:not(.atcb-icon-ical){color:var(--form-error);font-weight:700;padding-left:2px}.pro-waiting span:not(.atcb-icon-ical):nth-child(2){animation-delay:.15s}.pro-waiting span:not(.atcb-icon-ical):nth-child(3){animation-delay:.3s}@keyframes blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}.pro #rsvp-sent-content{align-items:center;display:flex;flex-direction:column;gap:1.5em}#rsvp-status-group span{color:inherit}.atcb-modal-content .pro p{margin:0}.atcb-modal-content .pro p.pro-pt{margin-top:1.5em}.atcb-modal-content .pro .pro-field p{font-size:.9em}.pro .btn-flex{align-items:center;display:flex}.pro .atcb-modal-btn svg{fill:none;height:1.5em;margin-right:.5em;stroke:currentcolor;width:auto}#atcb-reference{box-sizing:border-box;filter:drop-shadow(0 0 3px rgba(255 255 255 / 80%));height:auto;padding:8px 0;transform:translate3d(0,0,0);width:100%;z-index:15000000}#atcb-reference.fixed-ref{position:fixed;bottom:10px;right:40px;width:auto}#atcb-reference.atcb-dropup{position:absolute}:host(.atcb-dark) #atcb-reference{filter:drop-shadow(0 0 5px #000)}#atcb-reference a,#atcb-reference a:active,#atcb-reference a:visited{opacity:.4;width:150px;max-width:100%;margin:auto;display:block;text-decoration:none}#atcb-reference.fixed-ref a{opacity:.6}#atcb-reference a:hover{opacity:.9;text-decoration:none}#atcb-reference svg{fill:var(--list-text)}`,
  round: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--accent-color:#1e90ff;--wrapper-padding:1px;--buttonslist-gap:5px;--btn-background:#f5f5f5;--btn-hover-background:#fff;--btn-border:#d2d2d2;--btn-border-radius:500px;--btn-padding-x:1.3em;--btn-padding-y:.65em;--btn-font-weight:600;--btn-text:#333;--btn-hover-text:#000;--btn-shadow:rgba(0 0 0 / 15%) 0 4px 10px -2px,rgba(0 0 0 / 20%) 0 2px 3px -1px;--btn-hover-shadow:rgba(0 0 0 / 30%) 0 5px 15px -3px,rgba(0 0 0 / 25%) 0 3px 5px -2px;--btn-active-shadow:rgba(0 0 0 / 35%) 0 6px 15px -3px,rgba(0 0 0 / 25%) 0 4px 6px -2px;--list-background:#f5f5f5;--list-hover-background:#fff;--list-text:#333;--list-font-weight:400;--list-hover-text:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-border-radius:11px;--list-padding:.8em 1.2em;--list-min-width:100%;--list-shadow:rgba(0 0 0 / 20%) 0 4px 13px -2px,rgba(0 0 0 / 23%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 50%) 0 4px 30px -3px,rgba(0 0 0 / 30%) 0 2px 8px -2px;--modal-text:#000;--modal-text-align:left;--modal-text-align-rtl:right;--modal-background:#f5f5f5;--modal-border-radius:9px;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 65%));--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-hover-background:#fff;--modal-btn-border:#d2d2d2;--modal-btn-font-weight:600;--modal-btn-text:#2e2e2e;--modal-btn-hover-text:#161616;--modal-btn-secondary-text:#666567;--modal-btn-shadow:rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;--modal-btn-hover-shadow:rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;--modal-headline-text-align:center;--modal-headline-text-transform:none;--input-border-radius:6px;--input-background:#fff;--status-active-text:#fff;--form-error:#c5372c;--form-success:#338a36;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-hover-background:#fff;--date-btn-headline-line-clamp:1;--date-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 3px -1px;--date-btn-hover-shadow:rgba(0 0 0 / 20%) 0 5px 12px -2px,rgba(0 0 0 / 20%) 0 3px 4px -2px;--checkmark-background:drop-shadow(0 0 3px #fff);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-hover-background:#373737;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-hover-text:#f1f1f1;--btn-shadow:rgba(255 255 255 / 5%) -3px -3px 30px -1px,rgba(0 0 0 / 40%) 2px 3px 10px -2px,rgba(0 0 0 / 40%) 1px 2px 3px -1px;--btn-hover-shadow:rgba(0 0 0 / 90%) 2px 5px 20px -4px,rgba(0 0 0 / 50%) 1px 2px 6px -2px;--btn-active-shadow:rgba(0 0 0 / 90%) 2px 5px 20px -4px,rgba(0 0 0 / 50%) 1px 2px 6px -2px;--list-background:#2e2e2e;--list-hover-background:#373737;--list-text:#dedede;--list-hover-text:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(0 0 0 / 60%) 0 4px 20px -2px,rgba(0 0 0 / 40%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 40%) -1px 3px 30px 2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 90%));--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-hover-background:#434246;--modal-btn-border:#434246;--modal-btn-text:#dbdbdb;--modal-btn-hover-text:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-btn-shadow:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 40%) 3px 3px 10px -2px,rgba(0 0 0 / 40%) 1px 2px 5px -1px;--input-background:#434246;--status-active-text:#000;--form-error:#db8680;--form-success:#99de9c;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-hover-background:#474747;--date-btn-shadow:rgba(0 0 0 / 60%) 0 0 20px -2px,rgba(0 0 0 / 30%) 1px 2px 3px -1px;--checkmark-background:drop-shadow(0 0 3px #0a0a0a);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-initialized.atcb-buttons-list{gap:var(--buttonslist-gap)}.atcb-button-wrapper{display:block;padding:var(--wrapper-padding);position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:1px solid var(--btn-border);border-radius:var(--btn-border-radius);box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:var(--btn-font-weight);justify-content:center;line-height:1.5em;margin:.13em;max-width:350px;padding:var(--btn-padding-y) var(--btn-padding-x);position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0;border-radius:100%;display:flex;place-content:center center;align-items:center;height:3em;width:3em;padding:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--accent-color)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-hover-shadow);color:var(--btn-hover-text);margin:0;padding:calc(var(--btn-padding-y) + .13em) calc(var(--btn-padding-x) + .13em)}.atcb-button.atcb-no-text.atcb-active,.atcb-button.atcb-no-text:focus,.atcb-button.atcb-no-text:hover{height:3.26em;width:3.26em;padding:0}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-no-text),.atcb-button.atcb-single:not(.atcb-no-text,[disabled]):focus,.atcb-button.atcb-single:not(.atcb-no-text,[disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-active-shadow);color:var(--btn-hover-text);margin:0;padding:calc(var(--btn-padding-y) + .13em) calc(var(--btn-padding-x) + .13em)}.atcb-button.atcb-active.atcb-no-text:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single.atcb-no-text:not([disabled]):focus,.atcb-button.atcb-single.atcb-no-text:not([disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-active-shadow);color:var(--btn-hover-text);margin:0;padding:calc(var(--btn-padding-y) + .28em) calc(var(--btn-padding-x) + .13em)}.atcb-button.atcb-dropup::after,.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{content:"";width:0;height:0;position:absolute;left:0;right:0;margin:0 auto}.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{top:100%;border:0 solid transparent;border-bottom:none;border-top-color:var(--btn-border)}.atcb-button.atcb-dropup::after{bottom:100%;border:0 solid transparent;border-top:none;border-bottom-color:var(--btn-border)}.atcb-button.atcb-active.atcb-dropup::after,.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{border-width:.35em;transition:border-width .1s linear .1s}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{flex-grow:0;flex-shrink:0;height:1em;line-height:1em;margin-right:.8em;width:1em}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;font-weight:var(--list-font-weight);position:absolute;z-index:14000090;width:auto}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{animation:list-entrance-center .2s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list{background-color:var(--list-background);border-radius:var(--list-border-radius);box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:var(--list-min-width);position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:var(--list-padding);text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-hover-background);color:var(--list-hover-text)}.atcb-list-item:focus-visible{background-color:var(--list-hover-background);color:var(--accent-color);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 var(--list-border-radius) var(--list-border-radius)}.atcb-list-item:first-child{border-radius:var(--list-border-radius) var(--list-border-radius) 0 0}.atcb-list-item:only-child{border-radius:var(--list-border-radius)}.atcb-list.atcb-modal{box-shadow:var(--list-modal-shadow)}.atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item .atcb-icon+.atcb-text{margin-left:.7em;width:100%}.atcb-rtl .atcb-list-item .atcb-icon+.atcb-text{margin-left:0;margin-right:.7em}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;width:auto;min-width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:var(--modal-text-align);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;-webkit-tap-highlight-color:transparent}@media (width > 575px){.atcb-modal-box{width:32em}}.atcb-modal-box.atcb-rtl{text-align:var(--modal-text-align-rtl);direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 1.5em 1.3em;text-transform:var(--modal-headline-text-transform);text-align:var(--modal-headline-text-align)}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2em 2.2em}.atcb-modal-icon+.atcb-modal-content{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content-subevents{margin:auto;width:fit-content}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 var(--modal-border-radius) var(--modal-border-radius);box-sizing:border-box;padding:.6em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:var(--btn-border-radius);box-shadow:var(--modal-btn-shadow);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:var(--modal-btn-font-weight);line-height:1em;margin:.625em;padding:1em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}a.atcb-modal-btn.btn-small,button.atcb-modal-btn.btn-small{padding:.6em .8em}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn.atcb-modal-btn-border,button.atcb-modal-btn.atcb-modal-btn-border{border:1px solid var(--modal-btn-border)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-hover-background);outline:2px solid var(--accent-color)}a.atcb-modal-btn:disabled,button.atcb-button:disabled,button.atcb-modal-btn:disabled,button.atcb-subevent-btn:disabled{cursor:not-allowed;opacity:.75;filter:brightness(95%);border-style:dashed;box-shadow:none}a.atcb-modal-btn:not([disabled]):hover,button.atcb-modal-btn:not([disabled]):hover{background-color:var(--modal-btn-hover-background);box-shadow:var(--modal-btn-hover-shadow);color:var(--modal-btn-hover-text);text-decoration:none}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:7px 4px 4px 7px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:100%}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-hover-background);box-shadow:var(--date-btn-hover-shadow)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--accent-color)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-hover-background);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column;flex-shrink:0}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:400;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:13.5em;overflow-wrap:anywhere}.atcb-subevent-btn .atcb-date-btn-right{width:100%}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.4em .7em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:var(--date-btn-headline-line-clamp);-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content.atcb-date-btn-cancelled{color:var(--form-error);font-weight:700}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;margin-right:.4em;margin-left:0;width:.9em;flex-shrink:0}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.4em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:100%}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.5em;padding:.5em;border-radius:100%;height:1.2em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button:focus .atcb-checkmark,.atcb-button:hover .atcb-checkmark{top:-.77em;right:-.37em}.atcb-checkmark svg{height:100%;filter:var(--checkmark-background);width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon-outlookcom,.atcb-icon.atcb-icon-ms365{padding-bottom:.05em}.atcb-icon.atcb-icon-apple,.atcb-icon.atcb-icon-ical{padding-bottom:.15em}.atcb-icon.atcb-icon-trigger{padding-bottom:.15em}.atcb-icon.atcb-icon-rsvp{height:1.5em;width:1.5em}.atcb-icon.atcb-icon-apple svg{fill:currentcolor}.atcb-icon.atcb-icon-ical svg{fill:currentcolor}.atcb-icon.atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon.atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon.atcb-icon-google svg,.atcb-icon.atcb-icon-msteams svg,.atcb-icon.atcb-icon-outlookcom svg{filter:var(--icon-filter)}.rsvp-inline-wrapper{filter:none;min-width:100%;margin-bottom:0}.atcb-modal-content.no-headline{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;padding-top:1.8em}.rsvp-inline-wrapper .atcb-modal-content,.rsvp-inline-wrapper .atcb-modal-headline,.rsvp-inline-wrapper.atcb-modal-box{background-color:transparent;border-radius:0;box-sizing:border-box;padding:0;width:100%}.rsvp-inline-wrapper .atcb-modal-headline{padding-bottom:1.5em}.pro{text-align:center}.pro ol,.pro ul{margin:auto;text-align:left;width:fit-content}.pro a:not(.atcb-modal-btn),.pro a:not(.atcb-modal-btn):active,.pro a:not(.atcb-modal-btn):visited{color:var(--modal-btn-text);text-decoration:underline;text-decoration-thickness:2px;text-decoration-color:var(--accent-color)}.pro a:not(.atcb-modal-btn):hover{color:var(--accent-color);text-decoration:none}.pro .pro-share-buttons{display:flex;flex-wrap:wrap;justify-content:center}.pro #rsvp-atcb{display:flex;flex-wrap:wrap;gap:.4em}.pro-form{text-align:left}.pro-form:not(.no-intro){border-top:1px solid var(--modal-btn-border);margin-top:1.5em;padding-top:1.5em}.pro-form.no-intro:not(.no-headline){padding-top:.5em}.pro-field+.pro-field{padding-top:1.3em}.pro-field-type-label+.pro-field-type-radio{padding-top:0}.pro-field-type-checkbox,.pro-field-type-radio div{align-items:center;display:flex}.pro-field-type-checkbox input,.pro-field-type-radio input{cursor:pointer}.pro-field label{display:block;font-size:.9em;opacity:.7}.pro-field-type-checkbox label,.pro-field-type-radio label{cursor:pointer;opacity:.8;padding-left:.3em}.pro-field input[type=email],.pro-field input[type=number],.pro-field input[type=text]{background-color:var(--input-background);border:1px solid var(--modal-btn-border);border-radius:var(--input-border-radius);box-sizing:border-box;caret-color:var(--accent-color);color:var(--modal-text);font-size:.9em;opacity:.8;padding:.7em;transition:all .1s ease-in-out;width:100%}.pro-field input[type=checkbox],.pro-field input[type=radio]{accent-color:var(--accent-color);height:1.2rem;opacity:.8;transition:all .1s ease-in-out;width:1.2em}.pro-field input:disabled,.pro-field input:disabled+label{cursor:not-allowed;opacity:.75;filter:brightness(95%)}.pro-field input:not([disabled]):hover{opacity:1}.pro-field input[type=email]:focus,.pro-field input[type=number]:focus,.pro-field input[type=text]:focus{border-color:var(--accent-color);outline:1px solid var(--accent-color)}.pro-field input[type=checkbox]:focus,.pro-field input[type=radio]:focus{outline-color:var(--accent-color);outline-width:2px}#submit-error{color:var(--form-error);display:none;font-weight:700;padding-top:1.5em;text-align:center}.pro-form.form-error #submit-error{display:block}.pro-field input.error{accent-color:var(--form-error);border:2px solid var(--form-error)}.pro-field input.error+label,.pro-field:has(input.error) label{color:var(--form-error);opacity:1}#rsvp-status-group{border-bottom:1px solid var(--modal-btn-border);font-weight:700;margin-bottom:1.5em;padding-bottom:2em;text-align:center}#rsvp-status-group .pro-field{align-items:center;display:flex;flex-wrap:wrap;gap:1.2em;justify-content:center;margin-top:1em}@media (width <= 575px){#rsvp-status-group .pro-field{flex-direction:column}#rsvp-status-group .pro-field div{width:80%}}#rsvp-status-group .pro-field div{min-width:28%;position:relative}#rsvp-status-group input{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;margin:0;cursor:pointer}#rsvp-status-group label{align-items:center;border:1px solid var(--modal-btn-text);border-radius:var(--input-border-radius);box-shadow:var(--btn-shadow);color:var(--modal-btn-text);display:flex;flex-direction:column;font-weight:700;text-transform:uppercase;justify-content:center;opacity:.6;padding:.8em;transition:all .1s ease-in-out;width:100%}#rsvp-status-group label.status-confirmed{border-color:var(--form-success);color:var(--form-success)}#rsvp-status-group label.status-declined{border-color:var(--form-error);color:var(--form-error)}#rsvp-status-group input:checked+label{background-color:var(--modal-text);box-shadow:var(--btn-hover-shadow);color:var(--status-active-text);opacity:1;transform:scale(1.08)}#rsvp-status-group input:focus-visible+label{outline:2px solid var(--accent-color);outline-offset:2px}#rsvp-status-group input:not([disabled])+label:hover,#rsvp-status-group input:not([disabled]):hover+label{box-shadow:var(--btn-hover-shadow);opacity:1;transform:scale(1.08)}#rsvp-status-group input:checked+label.status-confirmed{background-color:var(--form-success)}#rsvp-status-group input:checked+label.status-declined{background-color:var(--form-error)}#rsvp-success-msg,#rsvp-success-msg-demo,#rsvp-success-msg-doi,#rsvp-success-msg-email,#ty-success-msg{display:none;font-weight:700;line-height:1.6em;padding-top:.5em;text-align:center}#rsvp-success-msg,#rsvp-success-msg-demo,#ty-success-msg{padding:1.5em 0}#rsvp-success-msg-demo,#rsvp-success-msg-email{color:var(--form-success)}#rsvp-success-msg-doi{color:var(--form-error);padding-top:1em;font-size:.8em}#pro-form-submit{display:block;margin:auto;min-width:150px}.pro-waiting{background-color:var(--modal-btn-background);border:1px solid var(--modal-btn-border);border-radius:var(--btn-border-radius);box-sizing:border-box;color:var(--modal-btn-text);cursor:wait;display:none;line-height:.5em;margin:auto;min-width:150px;padding:.5em 1.25em 1.2em;text-align:center;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:fit-content}@media (width > 575px){#pro-form-submit,.pro-waiting{min-width:200px}}.pro-waiting span:not(.atcb-icon-ical){animation-name:blink;animation-duration:1s;animation-iteration-count:infinite;animation-fill-mode:both;font-size:2.5em}.pro-field label span:not(.atcb-icon-ical){color:var(--form-error);font-weight:700;padding-left:2px}.pro-waiting span:not(.atcb-icon-ical):nth-child(2){animation-delay:.15s}.pro-waiting span:not(.atcb-icon-ical):nth-child(3){animation-delay:.3s}@keyframes blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}.pro #rsvp-sent-content{align-items:center;display:flex;flex-direction:column;gap:1.5em}#rsvp-status-group span{color:inherit}.atcb-modal-content .pro p{margin:0}.atcb-modal-content .pro p.pro-pt{margin-top:1.5em}.atcb-modal-content .pro .pro-field p{font-size:.9em}.pro .btn-flex{align-items:center;display:flex}.pro .atcb-modal-btn svg{fill:none;height:1.5em;margin-right:.5em;stroke:currentcolor;width:auto}#atcb-reference{box-sizing:border-box;filter:drop-shadow(0 0 3px rgba(255 255 255 / 80%));height:auto;padding:8px 0;transform:translate3d(0,0,0);width:100%;z-index:15000000}#atcb-reference.fixed-ref{position:fixed;bottom:10px;right:40px;width:auto}#atcb-reference.atcb-dropup{position:absolute}:host(.atcb-dark) #atcb-reference{filter:drop-shadow(0 0 5px #000)}#atcb-reference a,#atcb-reference a:active,#atcb-reference a:visited{opacity:.4;width:150px;max-width:100%;margin:auto;display:block;text-decoration:none}#atcb-reference.fixed-ref a{opacity:.6}#atcb-reference a:hover{opacity:.9;text-decoration:none}#atcb-reference svg{fill:var(--list-text)}`,
  neumorphism: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--accent-color:#1e90ff;--wrapper-padding:0px;--buttonslist-gap:5px;--btn-background:#f5f5f5;--btn-hover-background:#fff;--btn-font-weight:600;--btn-text:#444;--btn-hover-text:#111;--btn-border-radius:15px;--btn-padding-x:1.2em;--btn-padding-y:1em;--btn-shadow:rgba(40 40 40 / 30%) 0.3em 0.3em 0.6em,rgba(255 255 255 / 70%) -0.1em -0.1em 0.3em;--btn-hover-shadow:rgba(40 40 40 / 50%) 0.4em 0.4em 0.8em,rgba(255 255 255 / 90%) -0.2em -0.2em 0.5em;--btn-active-shadow:inset rgba(40 40 40 / 40%) 0.15em 0.15em 0.3em,inset rgba(255 255 255 / 90%) -0.2em -0.2em 0.5em;--list-background:#f5f5f5;--list-hover-background:#fff;--list-text:#444;--list-font-weight:400;--list-hover-text:#111;--list-close-background:#e5e5e5;--list-close-text:#777;--list-border-radius:11px;--list-padding:1em;--list-min-width:100%;--list-shadow:rgba(40 40 40 / 30%) 0.4em 0.4em 0.8em,rgba(255 255 255 / 80%) -0.2em -0.2em 0.5em;--modal-text:#111;--modal-text-align:left;--modal-text-align-rtl:right;--modal-background:#f5f5f5;--modal-border-radius:9px;--modal-shadow:drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-hover-background:#fff;--modal-btn-font-weight:600;--modal-btn-text:#2e2e2e;--modal-btn-hover-text:#222;--modal-btn-secondary-text:#666567;--modal-btn-shadow:rgba(40 40 40 / 15%) 0.2em 0.2em 0.4em,rgba(255 255 255 / 30%) -0.1em -0.1em 0.3em;--modal-btn-hover-shadow:rgba(40 40 40 / 40%) 0.4em 0.4em 0.7em,rgba(255 255 255 / 70%) -0.2em -0.2em 0.5em;--modal-headline-text-align:center;--modal-headline-text-transform:none;--input-border-radius:6px;--input-background:#fff;--status-active-text:#fff;--form-error:#c5372c;--form-success:#338a36;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#e3e5ea;--date-btn-hover-background:#fff;--date-btn-headline-line-clamp:1;--date-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 3px -1px;--date-btn-hover-shadow:rgba(0 0 0 / 20%) 0 5px 12px -2px,rgba(0 0 0 / 20%) 0 3px 4px -2px;--checkmark-background:drop-shadow(0 0 3px #fff);--overlay-background:#dcdcdc;--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-hover-background:#373737;--btn-text:#dedede;--btn-hover-text:#f1f1f1;--btn-shadow:rgba(0 0 0 / 70%) 0.3em 0.3em 0.6em,rgba(230 230 230 / 20%) -0.05em -0.05em 0.4em;--btn-hover-shadow:rgba(0 0 0 / 90%) 0.4em 0.4em 0.9em,rgba(230 230 230 / 25%) -0.08em -0.08em 0.6em -0.1em;--btn-active-shadow:inset rgba(0 0 0 / 80%) 0.15em 0.15em 0.25em,inset rgba(230 230 230 / 10%) -0.2em -0.2em 0.7em -0.1em;--list-background:#2e2e2e;--list-hover-background:#373737;--list-text:#dedede;--list-hover-text:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(0 0 0) 0.3em 0.3em 1em,rgba(230 230 230 / 40%) -0.08em -0.08em 0.6em;--modal-text:#f1f1f1;--modal-background:#242424;--modal-shadow:drop-shadow(5px 8px 35px rgba(0 0 0 / 90%));--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-hover-background:#434246;--modal-btn-text:#dbdbdb;--modal-btn-hover-text:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-btn-shadow:rgba(0 0 0 / 60%) 0.2em 0.2em 0.6em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.4em;--modal-btn-hover-shadow:rgba(0 0 0 / 80%) 0.3em 0.3em 0.8em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.6em;--input-background:#434246;--status-active-text:#000;--form-error:#db8680;--form-success:#99de9c;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-hover-background:#474747;--date-btn-shadow:rgba(0 0 0 / 70%) 0.2em 0.2em 0.8em,rgba(230 230 230 / 15%) -0.1em -0.1em 0.5em;--date-btn-hover-shadow:rgba(0 0 0) 0.3em 0.4em 1em,rgba(230 230 230 / 15%) -0.2em -0.2em 0.8em;--checkmark-background:drop-shadow(0 0 3px #0a0a0a);--overlay-background:#141414;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-initialized.atcb-buttons-list{gap:var(--buttonslist-gap)}.atcb-button-wrapper{display:block;padding:var(--wrapper-padding);position:relative}.atcb-button{align-items:center;background-color:var(--btn-background);border:0;border-radius:var(--btn-border-radius);box-shadow:var(--btn-shadow);color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:var(--btn-font-weight);justify-content:center;line-height:1.5em;margin:0;max-width:350px;padding:var(--btn-padding-y) var(--btn-padding-x);position:relative;text-align:center;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;transition:box-shadow .1s ease-in-out,background-color .1s ease-in-out;z-index:1}.atcb-button.atcb-no-text{min-width:0;border-radius:100%;display:flex;place-content:center center;align-items:center;height:3em;width:3em;padding:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--accent-color)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-hover-shadow);color:var(--btn-hover-text)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay),.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-active-shadow);color:var(--btn-hover-text)}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{flex-grow:0;flex-shrink:0;height:1em;line-height:1em;margin-right:.8em;width:1em}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;font-weight:var(--list-font-weight);position:absolute;width:auto;animation:list-entrance .6s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance{0%{opacity:0}100%{opacity:1}}.atcb-list{background-color:var(--list-background);border-radius:var(--list-border-radius);box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:var(--list-min-width);position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{box-shadow:none;align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:var(--list-padding);text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:box-shadow .15s ease-in-out,padding .15s ease-in-out,margin .15s ease-in-out}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{box-shadow:var(--btn-shadow);background-color:var(--list-hover-background);color:var(--list-hover-text);padding:calc(var(--list-padding) + .2em);margin:-.2em;position:relative;z-index:15000010}.atcb-list-item:focus-visible{box-shadow:var(--btn-shadow);background-color:var(--list-hover-background);color:var(--accent-color);padding:calc(var(--list-padding) + .2em);margin:-.2em;position:relative;z-index:15000010;font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 var(--list-border-radius) var(--list-border-radius)}.atcb-list-item:first-child{border-radius:var(--list-border-radius) var(--list-border-radius) 0 0}.atcb-list-item:only-child{border-radius:var(--list-border-radius)}.atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item .atcb-icon+.atcb-text{margin-left:.7em;width:100%}.atcb-rtl .atcb-list-item .atcb-icon+.atcb-text{margin-left:0;margin-right:.7em}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;width:auto;min-width:auto;position:relative;z-index:14000090}.atcb-modal-box{animation:list-entrance .6s ease 0s 1 normal forwards;filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:var(--modal-text-align);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;-webkit-tap-highlight-color:transparent}@media (width > 575px){.atcb-modal-box{width:32em}}.atcb-modal-box.atcb-rtl{text-align:var(--modal-text-align-rtl);direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 1.5em 1.3em;text-transform:var(--modal-headline-text-transform);text-align:var(--modal-headline-text-align)}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2em 2.2em}.atcb-modal-content-subevents{margin:auto;width:fit-content}.atcb-modal-icon+.atcb-modal-content{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 var(--modal-border-radius) var(--modal-border-radius);box-sizing:border-box;padding:.6em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:var(--btn-border-radius);box-shadow:var(--modal-btn-shadow);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:var(--modal-btn-font-weight);line-height:1em;margin:.625em;padding:1em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}a.atcb-modal-btn.btn-small,button.atcb-modal-btn.btn-small{padding:.6em .8em}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-hover-background);outline:2px solid var(--accent-color)}a.atcb-modal-btn:disabled,button.atcb-button:disabled,button.atcb-modal-btn:disabled,button.atcb-subevent-btn:disabled{cursor:not-allowed;opacity:.75;filter:brightness(95%);border-style:dashed;box-shadow:none}a.atcb-modal-btn:not([disabled]):hover,button.atcb-modal-btn:not([disabled]):hover{background-color:var(--modal-btn-hover-background);box-shadow:var(--modal-btn-hover-shadow);color:var(--modal-btn-hover-text);text-decoration:none}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:7px 4px 4px 7px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:100%}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-hover-background);box-shadow:var(--date-btn-hover-shadow)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--accent-color)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-hover-background);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column;flex-shrink:0}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:400;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:13.5em;overflow-wrap:anywhere}.atcb-subevent-btn .atcb-date-btn-right{width:100%}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.4em .7em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:var(--date-btn-headline-line-clamp);-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content.atcb-date-btn-cancelled{color:var(--form-error);font-weight:700}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;margin-right:.4em;margin-left:0;width:.9em;flex-shrink:0}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.4em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:100%}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.5em;padding:.5em;border-radius:100%;height:1.2em}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay) .atcb-checkmark,.atcb-button.atcb-single:focus .atcb-checkmark,.atcb-button.atcb-single:hover .atcb-checkmark{top:-.77em;right:-.37em}.atcb-checkmark svg{height:100%;filter:var(--checkmark-background);width:auto}#atcb-bgoverlay{background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .1s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon-outlookcom,.atcb-icon.atcb-icon-ms365{padding-bottom:.05em}.atcb-icon.atcb-icon-apple,.atcb-icon.atcb-icon-ical{padding-bottom:.15em}.atcb-icon.atcb-icon-trigger{padding-bottom:.15em}.atcb-icon.atcb-icon-rsvp{height:1.5em;width:1.5em}.atcb-icon.atcb-icon-apple svg{fill:currentcolor}.atcb-icon.atcb-icon-ical svg{fill:currentcolor}.atcb-icon.atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon.atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon.atcb-icon-google svg,.atcb-icon.atcb-icon-msteams svg,.atcb-icon.atcb-icon-outlookcom svg{filter:var(--icon-filter)}.rsvp-inline-wrapper{filter:none;min-width:100%;margin-bottom:0}.atcb-modal-content.no-headline{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;padding-top:1.8em}.rsvp-inline-wrapper .atcb-modal-content,.rsvp-inline-wrapper .atcb-modal-headline,.rsvp-inline-wrapper.atcb-modal-box{background-color:transparent;border-radius:0;box-sizing:border-box;padding:0;width:100%}.rsvp-inline-wrapper .atcb-modal-headline{padding-bottom:1.5em}.pro{text-align:center}.pro ol,.pro ul{margin:auto;text-align:left;width:fit-content}.pro a:not(.atcb-modal-btn),.pro a:not(.atcb-modal-btn):active,.pro a:not(.atcb-modal-btn):visited{color:var(--modal-btn-text);text-decoration:underline;text-decoration-thickness:2px;text-decoration-color:var(--accent-color)}.pro a:not(.atcb-modal-btn):hover{color:var(--accent-color);text-decoration:none}.pro .pro-share-buttons{display:flex;flex-wrap:wrap;justify-content:center}.pro #rsvp-atcb{display:flex;flex-wrap:wrap;gap:.4em}.pro-form{text-align:left}.pro-form:not(.no-intro){border-top:1px solid var(--modal-btn-border);margin-top:1.5em;padding-top:1.5em}.pro-form.no-intro:not(.no-headline){padding-top:.5em}.pro-field+.pro-field{padding-top:1.3em}.pro-field-type-label+.pro-field-type-radio{padding-top:0}.pro-field-type-checkbox,.pro-field-type-radio div{align-items:center;display:flex}.pro-field-type-checkbox input,.pro-field-type-radio input{cursor:pointer}.pro-field label{display:block;font-size:.9em;opacity:.7}.pro-field-type-checkbox label,.pro-field-type-radio label{cursor:pointer;opacity:.8;padding-left:.3em}.pro-field input[type=email],.pro-field input[type=number],.pro-field input[type=text]{background-color:var(--input-background);border:1px solid var(--modal-btn-border);border-radius:var(--input-border-radius);box-sizing:border-box;box-shadow:var(--btn-shadow);caret-color:var(--accent-color);color:var(--modal-text);font-size:.9em;opacity:.8;padding:.7em;transition:all .1s ease-in-out;width:100%}.pro-field input[type=checkbox],.pro-field input[type=radio]{accent-color:var(--accent-color);height:1.2rem;opacity:.8;transition:all .1s ease-in-out;width:1.2em}.pro-field input:disabled,.pro-field input:disabled+label{cursor:not-allowed;opacity:.75;filter:brightness(95%)}.pro-field input:not([disabled]):hover{opacity:1}.pro-field input:not([disabled],[type=checkbox],[type=radio]):hover{box-shadow:var(--btn-active-shadow)}.pro-field input[type=email]:focus,.pro-field input[type=number]:focus,.pro-field input[type=text]:focus{box-shadow:var(--btn-active-shadow)}.pro-field input[type=email]:focus-visible,.pro-field input[type=number]:focus-visible,.pro-field input[type=text]:focus-visible{border-color:var(--accent-color);outline:1px solid var(--accent-color)}.pro-field input[type=checkbox]:focus,.pro-field input[type=radio]:focus{outline-color:var(--accent-color);outline-width:2px}#submit-error{color:var(--form-error);display:none;font-weight:700;padding-top:1.5em;text-align:center}.pro-form.form-error #submit-error{display:block}.pro-field input.error{accent-color:var(--form-error);border:2px solid var(--form-error)}.pro-field input.error+label,.pro-field:has(input.error) label{color:var(--form-error);opacity:1}#rsvp-status-group{border-bottom:1px solid var(--modal-btn-border);font-weight:700;margin-bottom:1.5em;padding-bottom:2em;text-align:center}#rsvp-status-group .pro-field{align-items:center;display:flex;flex-wrap:wrap;gap:1.2em;justify-content:center;margin-top:1em}@media (width <= 575px){#rsvp-status-group .pro-field{flex-direction:column}#rsvp-status-group .pro-field div{width:80%}}#rsvp-status-group .pro-field div{min-width:28%;position:relative}#rsvp-status-group input{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;margin:0;cursor:pointer}#rsvp-status-group label{align-items:center;background-color:var(--input-background);border-radius:var(--input-border-radius);box-shadow:var(--btn-shadow);color:var(--modal-btn-text);display:flex;flex-direction:column;font-weight:700;text-transform:uppercase;justify-content:center;opacity:.6;padding:.8em;transition:all .1s ease-in-out;width:100%}#rsvp-status-group label.status-confirmed{color:var(--form-success)}#rsvp-status-group label.status-declined{color:var(--form-error)}#rsvp-status-group input:checked+label{background-color:var(--modal-text);box-shadow:var(--btn-hover-shadow);color:var(--status-active-text);opacity:1;transform:scale(1.08)}#rsvp-status-group input:focus-visible+label{outline:2px solid var(--accent-color);outline-offset:2px}#rsvp-status-group input:not([disabled])+label:hover,#rsvp-status-group input:not([disabled]):hover+label{box-shadow:var(--btn-hover-shadow);opacity:1;transform:scale(1.08)}#rsvp-status-group input:checked+label.status-confirmed{background-color:var(--form-success)}#rsvp-status-group input:checked+label.status-declined{background-color:var(--form-error)}#rsvp-success-msg,#rsvp-success-msg-demo,#rsvp-success-msg-doi,#rsvp-success-msg-email,#ty-success-msg{display:none;font-weight:700;line-height:1.6em;padding-top:.5em;text-align:center}#rsvp-success-msg,#rsvp-success-msg-demo,#ty-success-msg{padding:1.5em 0}#rsvp-success-msg-demo,#rsvp-success-msg-email{color:var(--form-success)}#rsvp-success-msg-doi{color:var(--form-error);padding-top:1em;font-size:.8em}#pro-form-submit{background-color:var(--btn-hover-background);display:block;margin:auto;min-width:150px}.pro-waiting{background-color:var(--modal-btn-background);border:1px solid var(--modal-btn-border);border-radius:var(--btn-border-radius);box-sizing:border-box;color:var(--modal-btn-text);cursor:wait;display:none;line-height:.5em;margin:auto;min-width:150px;padding:.5em 1.25em 1.2em;text-align:center;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:fit-content}@media (width > 575px){#pro-form-submit,.pro-waiting{min-width:200px}}.pro-waiting span:not(.atcb-icon-ical){animation-name:blink;animation-duration:1s;animation-iteration-count:infinite;animation-fill-mode:both;font-size:2.5em}.pro-field label span:not(.atcb-icon-ical){color:var(--form-error);font-weight:700;padding-left:2px}.pro-waiting span:not(.atcb-icon-ical):nth-child(2){animation-delay:.15s}.pro-waiting span:not(.atcb-icon-ical):nth-child(3){animation-delay:.3s}@keyframes blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}.pro #rsvp-sent-content{align-items:center;display:flex;flex-direction:column;gap:1.5em}#rsvp-status-group span{color:inherit}.atcb-modal-content .pro p{margin:0}.atcb-modal-content .pro p.pro-pt{margin-top:1.5em}.atcb-modal-content .pro .pro-field p{font-size:.9em}.pro .btn-flex{align-items:center;display:flex}.pro .atcb-modal-btn svg{fill:none;height:1.5em;margin-right:.5em;stroke:currentcolor;width:auto}#atcb-reference{box-sizing:border-box;filter:drop-shadow(0 0 3px rgba(255 255 255 / 80%));height:auto;padding:8px 0;transform:translate3d(0,0,0);width:100%;z-index:15000000}#atcb-reference.fixed-ref{position:fixed;bottom:10px;right:40px;width:auto}#atcb-reference.atcb-dropup{position:absolute}:host(.atcb-dark) #atcb-reference{filter:drop-shadow(0 0 5px #000)}#atcb-reference a,#atcb-reference a:active,#atcb-reference a:visited{opacity:.4;width:150px;max-width:100%;margin:auto;display:block;text-decoration:none}#atcb-reference.fixed-ref a{opacity:.6}#atcb-reference a:hover{opacity:.9;text-decoration:none}#atcb-reference svg{fill:var(--list-text)}`,
  text: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--accent-color:#1e90ff;--wrapper-padding:0px;--buttonslist-gap:5px;--btn-underline:#a9ceff;--btn-border:#a8a8a8;--btn-padding-x:.75em;--btn-padding-y:.75em;--btn-background:#f5f5f5;--btn-hover-background:#fff;--btn-font-weight:600;--btn-text:#333;--btn-hover-text:#000;--btn-hover-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 2px -1px;--btn-text-shadow:#fff;--list-background:#f5f5f5;--list-hover-background:#fff;--list-text:#333;--list-font-weight:400;--list-hover-text:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-border-radius:11px;--list-padding:.8em 1.2em;--list-min-width:100%;--list-shadow:rgba(0 0 0 / 20%) 0 4px 13px -2px,rgba(0 0 0 / 23%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 50%) 0 4px 30px -3px,rgba(0 0 0 / 30%) 0 2px 8px -2px;--modal-text:#000;--modal-text-align:left;--modal-text-align-rtl:right;--modal-background:#f5f5f5;--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-border-radius:9px;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 65%));--modal-btn-secondary-background:#e2e1e6;--modal-btn-hover-background:#fff;--modal-btn-border:#d2d2d2;--modal-btn-font-weight:600;--modal-btn-text:#2e2e2e;--modal-btn-hover-text:#161616;--modal-btn-secondary-text:#666567;--modal-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 3px -1px;--modal-btn-hover-shadow:rgba(0 0 0 / 25%) 0 5px 13px -2px,rgba(0 0 0 / 25%) 0 3px 5px -2px;--modal-headline-text-align:center;--modal-headline-text-transform:none;--input-border-radius:6px;--input-background:#fff;--status-active-text:#fff;--form-error:#c5372c;--form-success:#338a36;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-hover-background:#fff;--date-btn-headline-line-clamp:1;--date-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 3px -1px;--date-btn-hover-shadow:rgba(0 0 0 / 20%) 0 5px 12px -2px,rgba(0 0 0 / 20%) 0 3px 4px -2px;--checkmark-background:drop-shadow(0 0 3px #fff);--overlay-background:rgba(200 200 200 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-underline:#336db9;--btn-border:#888;--btn-background:#2e2e2e;--btn-hover-background:#373737;--btn-text:#dedede;--btn-hover-text:#fff;--btn-text-shadow:#000;--list-background:#2e2e2e;--list-hover-background:#373737;--list-text:#dedede;--list-hover-text:#fff;--list-close-background:#282828;--list-shadow:rgba(255 255 255 / 5%) -12px -5px 20px -8px,rgba(255 255 255 / 6%) -7px -5px 15px -3px,rgba(0 0 0 / 50%) 2px 5px 18px -1px,rgba(0 0 0 / 40%) 3px 3px 20px -3px;--list-modal-shadow:rgba(255 255 255 / 8%) -12px -5px 30px -8px,rgba(255 255 255 / 8%) -7px -5px 15px -3px,rgba(0 0 0 / 60%) 4px 6px 50px -4px,rgba(0 0 0 / 90%) 8px 12px 40px -2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 90%));--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-hover-background:#434246;--modal-btn-border:#434246;--modal-btn-text:#dbdbdb;--modal-btn-hover-text:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-btn-shadow:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 40%) 3px 3px 10px -2px,rgba(0 0 0 / 40%) 1px 2px 5px -1px;--input-background:#434246;--status-active-text:#000;--form-error:#db8680;--form-success:#99de9c;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-hover-background:#474747;--date-btn-shadow:rgba(0 0 0 / 60%) 0 0 20px -2px,rgba(0 0 0 / 30%) 1px 2px 3px -1px;--checkmark-background:drop-shadow(0 0 3px #0a0a0a);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(0.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-initialized.atcb-buttons-list{gap:var(--buttonslist-gap)}.atcb-button-wrapper{display:block;padding:var(--wrapper-padding);position:relative}.atcb-button{background-image:linear-gradient(120deg,var(--btn-underline) 0,var(--btn-underline) 100%);background-repeat:no-repeat;background-size:100% 8%;background-position:0 100%;background-color:transparent;border:0;border-radius:0;transition:background-size .1s ease-in,border-radius .2s ease-in,box-shadow .1s ease-in;align-items:center;color:var(--btn-text);cursor:pointer;display:flex;font-family:var(--font);font-size:1em;font-weight:var(--btn-font-weight);justify-content:center;line-height:1.2em;margin:0 .2em;padding:var(--btn-padding-y) var(--btn-padding-x);position:relative;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:auto;z-index:1}.atcb-button.atcb-no-text{min-width:0;display:flex;place-content:center center;align-items:center;height:3em;width:3em;padding:0}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus-visible{outline:2px solid var(--accent-color)}.atcb-button:not([disabled]):focus,.atcb-button:not([disabled]):hover{background-size:100% 100%;box-shadow:var(--btn-hover-shadow);color:var(--btn-hover-text);text-shadow:0 0 .7em var(--btn-text-shadow);border-radius:21px}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){background-size:100% 10%;border-radius:3px 3px 11px 11px;background-position:0 0;background-color:var(--btn-background);color:var(--btn-text);text-shadow:none;z-index:15000000}.atcb-button.atcb-single:not([disabled]):focus,.atcb-button.atcb-single:not([disabled]):hover{background-size:100% 10%;background-position:0 100%;border-radius:11px 11px 3px 3px;background-color:var(--btn-background);color:var(--btn-text);text-shadow:none}.atcb-button.atcb-active.atcb-dropup{background-position:0 100%;border-radius:11px 11px 3px 3px}.atcb-button.atcb-dropup::after,.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{content:"";width:0;height:0;position:absolute;left:0;right:0;margin:0 auto}.atcb-button:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{top:100%;border:0 solid transparent;border-bottom:none;border-top-color:var(--btn-background)}.atcb-button.atcb-dropup::after{bottom:100%;border:0 solid transparent;border-top:none;border-bottom-color:var(--btn-background)}.atcb-button.atcb-active.atcb-dropup::after,.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay,.atcb-dropup)::before{border-width:.35em;transition:border-width .1s linear .1s}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-icon{flex-grow:0;flex-shrink:0;height:1em;line-height:1em;margin-right:.8em;width:.9em}.atcb-rtl .atcb-icon{margin-right:0;margin-left:1em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-icon-trigger svg{display:none}.atcb-button .atcb-icon-trigger::after{content:"+";font-size:1.5em}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:-15px;height:0;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;font-weight:var(--list-font-weight);position:absolute;z-index:14000090;width:auto}.atcb-list-wrapper:not(.atcb-dropup,.atcb-dropoverlay){animation:list-entrance-bottom .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropup{animation:list-entrance-top .2s ease 0s 1 normal forwards}.atcb-list-wrapper.atcb-dropoverlay{animation:list-entrance-center .2s ease 0s 1 normal forwards;z-index:15000000}@keyframes list-entrance-bottom{0%{opacity:0;transform:translateY(250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-top{0%{opacity:0;transform:translateY(-250px)}100%{opacity:1;transform:translateY(0)}}@keyframes list-entrance-center{0%{opacity:0;transform:scaleY(1)}1%{opacity:1;transform:scaleY(0)}100%{opacity:1;transform:scaleY(1)}}.atcb-list{background-color:var(--list-background);border-radius:var(--list-border-radius);box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:var(--list-min-width);position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:var(--list-padding);text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-hover-background);color:var(--list-hover-text)}.atcb-list-item:focus-visible{background-color:var(--list-hover-background);color:var(--accent-color);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 var(--list-border-radius) var(--list-border-radius)}.atcb-list-item:first-child{border-radius:var(--list-border-radius) var(--list-border-radius) 0 0}.atcb-list-item:only-child{border-radius:var(--list-border-radius)}.atcb-list.atcb-modal{box-shadow:var(--list-modal-shadow)}.atcb-list-item .atcb-icon{margin:0 auto;height:1em;width:1em}.atcb-list-item .atcb-icon+.atcb-text{margin-left:.7em;width:100%}.atcb-rtl .atcb-list-item .atcb-icon+.atcb-text{margin-left:0;margin-right:.7em}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;width:auto;min-width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:var(--modal-text-align);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;-webkit-tap-highlight-color:transparent}@media (width > 575px){.atcb-modal-box{width:32em}}.atcb-modal-box.atcb-rtl{text-align:var(--modal-text-align-rtl);direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 1.5em 1.3em;text-transform:var(--modal-headline-text-transform);text-align:var(--modal-headline-text-align)}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2em 2.2em}.atcb-modal-content-subevents{margin:auto;width:fit-content}.atcb-modal-icon+.atcb-modal-content{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 var(--modal-border-radius) var(--modal-border-radius);box-sizing:border-box;padding:.6em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:21px;box-shadow:var(--modal-btn-shadow);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:var(--modal-btn-font-weight);line-height:1em;margin:.625em;padding:1em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}a.atcb-modal-btn.btn-small,button.atcb-modal-btn.btn-small{padding:.6em .8em}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn.atcb-modal-btn-border,button.atcb-modal-btn.atcb-modal-btn-border{border:1px solid var(--modal-btn-border)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-hover-background);outline:2px solid var(--accent-color)}a.atcb-modal-btn:disabled,button.atcb-button:disabled,button.atcb-modal-btn:disabled,button.atcb-subevent-btn:disabled{cursor:not-allowed;opacity:.75;filter:brightness(95%);border-style:dashed;box-shadow:none}a.atcb-modal-btn:not([disabled]):hover,button.atcb-modal-btn:not([disabled]):hover{background-color:var(--modal-btn-hover-background);box-shadow:var(--modal-btn-hover-shadow);color:var(--modal-btn-hover-text);text-decoration:none}.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:7px 4px 4px 7px;padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:100%}.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-hover-background);box-shadow:var(--date-btn-hover-shadow)}.atcb-subevent-btn:focus-visible{outline:2px solid var(--accent-color)}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:4px 0 0 4px;align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-hover-background);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column;flex-shrink:0}.atcb-rtl .atcb-date-btn-left{border-radius:0 4px 4px 0}.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:400;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:13.5em;overflow-wrap:anywhere}.atcb-subevent-btn .atcb-date-btn-right{width:100%}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.4em .7em;box-sizing:border-box}.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:var(--date-btn-headline-line-clamp);-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content.atcb-date-btn-cancelled{color:var(--form-error);font-weight:700}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;margin-right:.4em;margin-left:0;width:.9em;flex-shrink:0}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.4em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:100%}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.5em;padding:.5em;border-radius:100%;height:1.2em}.atcb-checkmark svg{height:100%;filter:var(--checkmark-background);width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon-outlookcom,.atcb-icon.atcb-icon-ms365{padding-bottom:.05em}.atcb-icon.atcb-icon-apple,.atcb-icon.atcb-icon-ical{padding-bottom:.15em}.atcb-icon.atcb-icon-rsvp{height:1.5em;width:1.5em}.atcb-icon.atcb-icon-apple svg{fill:currentcolor}.atcb-icon.atcb-icon-ical svg{fill:currentcolor}.atcb-icon.atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon.atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon.atcb-icon-google svg,.atcb-icon.atcb-icon-msteams svg,.atcb-icon.atcb-icon-outlookcom svg{filter:var(--icon-filter)}.rsvp-inline-wrapper{filter:none;min-width:100%;margin-bottom:0}.atcb-modal-content.no-headline{border-radius:var(--modal-border-radius) var(--modal-border-radius) 0 0;padding-top:1.8em}.rsvp-inline-wrapper .atcb-modal-content,.rsvp-inline-wrapper .atcb-modal-headline,.rsvp-inline-wrapper.atcb-modal-box{background-color:transparent;border-radius:0;box-sizing:border-box;padding:0;width:100%}.rsvp-inline-wrapper .atcb-modal-headline{padding-bottom:1.5em}.pro{text-align:center}.pro ol,.pro ul{margin:auto;text-align:left;width:fit-content}.pro a:not(.atcb-modal-btn),.pro a:not(.atcb-modal-btn):active,.pro a:not(.atcb-modal-btn):visited{color:var(--modal-btn-text);text-decoration:underline;text-decoration-thickness:2px;text-decoration-color:var(--accent-color)}.pro a:not(.atcb-modal-btn):hover{color:var(--accent-color);text-decoration:none}.pro .pro-share-buttons{display:flex;flex-wrap:wrap;justify-content:center}.pro #rsvp-atcb{display:flex;flex-wrap:wrap;gap:.4em}.pro-form{text-align:left}.pro-form:not(.no-intro){border-top:1px solid var(--modal-btn-border);margin-top:1.5em;padding-top:1.5em}.pro-form.no-intro:not(.no-headline){padding-top:.5em}.pro-field+.pro-field{padding-top:1.3em}.pro-field-type-label+.pro-field-type-radio{padding-top:0}.pro-field-type-checkbox,.pro-field-type-radio div{align-items:center;display:flex}.pro-field-type-checkbox input,.pro-field-type-radio input{cursor:pointer}.pro-field label{display:block;font-size:.9em;opacity:.7}.pro-field-type-checkbox label,.pro-field-type-radio label{cursor:pointer;opacity:.8;padding-left:.3em}.pro-field input[type=email],.pro-field input[type=number],.pro-field input[type=text]{background-color:var(--input-background);border:1px solid var(--modal-btn-border);border-radius:var(--input-border-radius);box-sizing:border-box;caret-color:var(--accent-color);color:var(--modal-text);font-size:.9em;opacity:.8;padding:.7em;transition:all .1s ease-in-out;width:100%}.pro-field input[type=checkbox],.pro-field input[type=radio]{accent-color:var(--accent-color);height:1.2rem;opacity:.8;transition:all .1s ease-in-out;width:1.2em}.pro-field input:disabled,.pro-field input:disabled+label{cursor:not-allowed;opacity:.75;filter:brightness(95%)}.pro-field input:not([disabled]):hover{opacity:1}.pro-field input[type=email]:focus,.pro-field input[type=number]:focus,.pro-field input[type=text]:focus{border-color:var(--accent-color);outline:1px solid var(--accent-color)}.pro-field input[type=checkbox]:focus,.pro-field input[type=radio]:focus{outline-color:var(--accent-color);outline-width:2px}#submit-error{color:var(--form-error);display:none;font-weight:700;padding-top:1.5em;text-align:center}.pro-form.form-error #submit-error{display:block}.pro-field input.error{accent-color:var(--form-error);border:2px solid var(--form-error)}.pro-field input.error+label,.pro-field:has(input.error) label{color:var(--form-error);opacity:1}#rsvp-status-group{border-bottom:1px solid var(--modal-btn-border);font-weight:700;margin-bottom:1.5em;padding-bottom:2em;text-align:center}#rsvp-status-group .pro-field{align-items:center;display:flex;flex-wrap:wrap;gap:1.2em;justify-content:center;margin-top:1em}@media (width <= 575px){#rsvp-status-group .pro-field{flex-direction:column}#rsvp-status-group .pro-field div{width:80%}}#rsvp-status-group .pro-field div{min-width:28%;position:relative}#rsvp-status-group input{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;margin:0;cursor:pointer}#rsvp-status-group label{align-items:center;border:1px solid var(--modal-btn-text);border-radius:var(--input-border-radius);color:var(--modal-btn-text);display:flex;flex-direction:column;font-weight:700;text-transform:uppercase;justify-content:center;opacity:.6;padding:.8em;transition:all .1s ease-in-out;width:100%}#rsvp-status-group label.status-confirmed{border-color:var(--form-success);color:var(--form-success)}#rsvp-status-group label.status-declined{border-color:var(--form-error);color:var(--form-error)}#rsvp-status-group input:checked+label{background-color:var(--modal-text);box-shadow:var(--btn-hover-shadow);color:var(--status-active-text);opacity:1;transform:scale(1.08)}#rsvp-status-group input:focus-visible+label{outline:2px solid var(--accent-color);outline-offset:2px}#rsvp-status-group input:not([disabled])+label:hover,#rsvp-status-group input:not([disabled]):hover+label{box-shadow:var(--btn-hover-shadow);opacity:1;transform:scale(1.08)}#rsvp-status-group input:checked+label.status-confirmed{background-color:var(--form-success)}#rsvp-status-group input:checked+label.status-declined{background-color:var(--form-error)}#rsvp-success-msg,#rsvp-success-msg-demo,#rsvp-success-msg-doi,#rsvp-success-msg-email,#ty-success-msg{display:none;font-weight:700;line-height:1.6em;padding-top:.5em;text-align:center}#rsvp-success-msg,#rsvp-success-msg-demo,#ty-success-msg{padding:1.5em 0}#rsvp-success-msg-demo,#rsvp-success-msg-email{color:var(--form-success)}#rsvp-success-msg-doi{color:var(--form-error);padding-top:1em;font-size:.8em}#pro-form-submit{display:block;margin:auto;min-width:150px}.pro-waiting{background-color:var(--modal-btn-background);border:1px solid var(--modal-btn-border);border-radius:var(--btn-border-radius);box-sizing:border-box;color:var(--modal-btn-text);cursor:wait;display:none;line-height:.5em;margin:auto;min-width:150px;padding:.5em 1.25em 1.2em;text-align:center;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:fit-content}@media (width > 575px){#pro-form-submit,.pro-waiting{min-width:200px}}.pro-waiting span:not(.atcb-icon-ical){animation-name:blink;animation-duration:1s;animation-iteration-count:infinite;animation-fill-mode:both;font-size:2.5em}.pro-field label span:not(.atcb-icon-ical){color:var(--form-error);font-weight:700;padding-left:2px}.pro-waiting span:not(.atcb-icon-ical):nth-child(2){animation-delay:.15s}.pro-waiting span:not(.atcb-icon-ical):nth-child(3){animation-delay:.3s}@keyframes blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}.pro #rsvp-sent-content{align-items:center;display:flex;flex-direction:column;gap:1.5em}#rsvp-status-group span{color:inherit}.atcb-modal-content .pro p{margin:0}.atcb-modal-content .pro p.pro-pt{margin-top:1.5em}.atcb-modal-content .pro .pro-field p{font-size:.9em}.pro .btn-flex{align-items:center;display:flex}.pro .atcb-modal-btn svg{fill:none;height:1.5em;margin-right:.5em;stroke:currentcolor;width:auto}#atcb-reference{box-sizing:border-box;filter:drop-shadow(0 0 3px rgba(255 255 255 / 80%));height:auto;padding:8px 0;transform:translate3d(0,0,0);width:100%;z-index:15000000}#atcb-reference.fixed-ref{position:fixed;bottom:10px;right:40px;width:auto}#atcb-reference.atcb-dropup{position:absolute}:host(.atcb-dark) #atcb-reference{filter:drop-shadow(0 0 5px #000)}#atcb-reference a,#atcb-reference a:active,#atcb-reference a:visited{opacity:.4;width:150px;max-width:100%;margin:auto;display:block;text-decoration:none}#atcb-reference.fixed-ref a{opacity:.6}#atcb-reference a:hover{opacity:.9;text-decoration:none}#atcb-reference svg{fill:var(--list-text)}`,
  date: `:host{width:fit-content;--base-font-size-l:16px;--base-font-size-m:16px;--base-font-size-s:16px;--font:arial,helvetica,sans-serif;--accent-color:#1e90ff;--wrapper-padding:0px;--buttonslist-gap:5px;--btn-background:#f5f5f5;--btn-hover-background:#fff;--btn-border:#d2d2d2;--btn-border-radius:4px;--btn-text:#333;--btn-hover-text:#000;--btn-shadow:rgba(0 0 0 / 13%) 0 4px 10px -2px,rgba(0 0 0 / 18%) 0 2px 3px -1px;--btn-hover-shadow:rgba(0 0 0 / 25%) 0 5px 12px -2px,rgba(0 0 0 / 25%) 0 3px 5px -2px;--list-background:#f5f5f5;--list-hover-background:#fff;--list-text:#333;--list-font-weight:400;--list-hover-text:#000;--list-close-background:#e5e5e5;--list-close-text:#777;--list-shadow:rgba(0 0 0 / 20%) 0 4px 13px -2px,rgba(0 0 0 / 23%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 50%) 0 4px 30px -3px,rgba(0 0 0 / 30%) 0 2px 8px -2px;--modal-text:#000;--modal-text-align:left;--modal-text-align-rtl:right;--modal-background:#f5f5f5;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 65%));--modal-btn-bar:#c6c8cd;--modal-btn-background:#f5f5f5;--modal-btn-secondary-background:#e2e1e6;--modal-btn-hover-background:#fff;--modal-btn-border:#d2d2d2;--modal-btn-font-weight:600;--modal-btn-text:#2e2e2e;--modal-btn-hover-text:#161616;--modal-btn-secondary-text:#666567;--modal-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 10%) 0 2px 3px -1px;--modal-btn-hover-shadow:rgba(0 0 0 / 25%) 0 5px 13px -2px,rgba(0 0 0 / 20%) 0 3px 5px -2px;--modal-headline-text-align:center;--modal-headline-text-transform:none;--input-border-radius:3px;--input-background:#fff;--status-active-text:#fff;--form-error:#c5372c;--form-success:#338a36;--date-btn-text:#1d1d1e;--date-btn-text-secondary:#3a3a3f;--date-btn-cal-day-text:#fff;--date-btn-cal-month-text:#d3d2d7;--date-btn-cal-background:#313132;--date-btn-background:#eae9ed;--date-btn-hover-background:#fff;--date-btn-headline-line-clamp:1;--date-btn-shadow:rgba(0 0 0 / 10%) 0 4px 10px -2px,rgba(0 0 0 / 15%) 0 2px 3px -1px;--date-btn-hover-shadow:rgba(0 0 0 / 20%) 0 5px 12px -2px,rgba(0 0 0 / 20%) 0 3px 4px -2px;--checkmark-background:drop-shadow(0 0 3px #fff);--overlay-background:rgba(20 20 20 / 25%);--overlay-cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16,crosshair;--icon-ms365-color:#ea3e23;--icon-yahoo-color:#5f01d1;--icon-filter:none}:host(.atcb-dark){--btn-background:#2e2e2e;--btn-hover-background:#474747;--btn-border:#4d4d4d;--btn-text:#dedede;--btn-hover-text:#f1f1f1;--btn-shadow:rgba(0 0 0 / 70%) 0 0 25px -2px,rgba(0 0 0 / 40%) 1px 2px 4px -1px;--btn-hover-shadow:rgba(0 0 0 / 90%) 2px 3px 25px -3px,rgba(0 0 0 / 50%) 1px 4px 6px -2px;--list-background:#2e2e2e;--list-hover-background:#474747;--list-text:#dedede;--list-hover-text:#f1f1f1;--list-close-background:#282828;--list-shadow:rgba(0 0 0 / 60%) 0 4px 20px -2px,rgba(0 0 0 / 40%) 0 2px 4px -1px;--list-modal-shadow:rgba(0 0 0 / 40%) -1px 3px 30px 2px;--modal-text:#f1f1f1;--modal-background:#242424;--modal-shadow:drop-shadow(3px 6px 25px rgba(0 0 0 / 90%));--modal-btn-bar:#38383a;--modal-btn-background:#181819;--modal-btn-secondary-background:#2e2d30;--modal-btn-hover-background:#434246;--modal-btn-border:#434246;--modal-btn-text:#dbdbdb;--modal-btn-hover-text:#fff;--modal-btn-secondary-text:#b8b8b8;--modal-btn-shadow:rgba(255 255 255 / 5%) -2px -2px 10px,rgba(0 0 0 / 40%) 3px 3px 10px -2px,rgba(0 0 0 / 40%) 1px 2px 5px -1px;--input-background:#434246;--status-active-text:#000;--form-error:#db8680;--form-success:#99de9c;--date-btn-text:#ebebf0;--date-btn-text-secondary:#b5b5bd;--date-btn-cal-day-text:#101010;--date-btn-cal-month-text:#3e3e3f;--date-btn-cal-background:#c7c7cd;--date-btn-background:#363636;--date-btn-hover-background:#474747;--date-btn-shadow:rgba(0 0 0 / 60%) 0 0 20px -2px,rgba(0 0 0 / 30%) 1px 2px 3px -1px;--checkmark-background:drop-shadow(0 0 3px #0a0a0a);--overlay-background:rgba(20 20 20 / 60%);--icon-ms365-color:#ea3e23;--icon-yahoo-color:#bebebe;--icon-filter:grayscale(.2)}.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-l)}@media (width <= 991px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-m)}}@media (width <= 575px){.atcb-button-wrapper,.atcb-list,.atcb-modal-box{font-size:var(--base-font-size-s)}}.atcb-button-wrapper{display:block;padding:var(--wrapper-padding);position:relative}.atcb-button,.atcb-subevent-btn{display:flex;align-items:flex-start;cursor:pointer;font-family:var(--font);font-size:1em;box-shadow:var(--date-btn-shadow);background-color:var(--date-btn-background);border:0;border-radius:calc(var(--btn-border-radius) + 3px) var(--btn-border-radius) var(--btn-border-radius) calc(var(--btn-border-radius) + 3px);padding:0;margin:0;touch-action:manipulation;position:relative;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.atcb-subevent-btn{width:100%}.atcb-button{box-shadow:var(--btn-shadow);min-width:16em;max-width:18em;position:relative;z-index:1}.atcb-rtl .atcb-button{direction:rtl;text-align:right}.atcb-button:focus,.atcb-button:hover{background-color:var(--btn-hover-background);box-shadow:var(--btn-hover-shadow)}.atcb-button:focus-visible,.atcb-subevent-btn:focus-visible{outline:2px solid var(--accent-color)}.atcb-button:not(.atcb-active):hover,.atcb-subevent-btn:hover{align-items:center}.atcb-subevent-btn:focus,.atcb-subevent-btn:hover{background-color:var(--date-btn-hover-background);box-shadow:var(--date-btn-hover-shadow)}.atcb-button.atcb-active:not(.atcb-modal-style,.atcb-dropoverlay){z-index:15000000}.atcb-button.atcb-active.atcb-dropoverlay{z-index:14000090}.atcb-subevent-btn+.atcb-subevent-btn{margin-top:30px}.atcb-date-btn-left{border-radius:var(--btn-border-radius) 0 0 var(--btn-border-radius);align-self:stretch;background-color:var(--date-btn-cal-background);color:var(--date-btn-hover-background);padding:.7em .8em .8em;width:2.7em;align-items:center;display:flex;flex-direction:column;flex-shrink:0}.atcb-rtl .atcb-date-btn-left{border-radius:0 var(--btn-border-radius) var(--btn-border-radius) 0}.atcb-button:hover .atcb-date-btn-left,.atcb-subevent-btn:hover .atcb-date-btn-left{opacity:.8}.atcb-date-btn-day{color:var(--date-btn-cal-day-text);font-weight:400;font-size:2em;word-break:keep-all;padding-bottom:.1em}.atcb-initialized[lang=ja] .atcb-date-btn-day,.atcb-initialized[lang=ko] .atcb-date-btn-day,.atcb-initialized[lang=zh] .atcb-date-btn-day{font-size:1.3em}.atcb-date-btn-month{color:var(--date-btn-cal-month-text);font-weight:600;font-size:1em}.atcb-date-btn-right{position:relative;color:var(--date-btn-text);min-width:13.5em;overflow-wrap:anywhere}.atcb-subevent-btn .atcb-date-btn-right{width:100%}.atcb-date-btn-details{opacity:1;padding:.7em .8em;text-align:left}.atcb-rtl .atcb-date-btn-details{text-align:right}.atcb-date-btn-hover{position:absolute;top:0;left:0;width:100%;opacity:0;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1em;padding:.4em .7em;box-sizing:border-box}.atcb-button:not(.atcb-active):hover .atcb-date-btn-hover,.atcb-subevent-btn:hover .atcb-date-btn-hover{opacity:1}.atcb-button:not(.atcb-active):hover .atcb-date-btn-details,.atcb-subevent-btn:hover .atcb-date-btn-details{opacity:0}.atcb-date-btn-headline{font-weight:600;font-size:.9em;margin-bottom:.5em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:var(--date-btn-headline-line-clamp);-webkit-box-orient:vertical}.atcb-date-btn-content{display:flex;align-items:flex-start;font-size:.8em;color:var(--date-btn-text-secondary)}.atcb-date-btn-content.atcb-date-btn-cancelled{color:var(--form-error);font-weight:700}.atcb-date-btn-content-location{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all}.atcb-date-btn-content-icon{display:inline-block;height:.8em;margin-right:.4em;margin-left:0;width:.9em;flex-shrink:0}.atcb-rtl .atcb-date-btn-content-icon{margin-right:0;margin-left:.4em}.atcb-initialized[lang=ja] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=ko] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon,.atcb-initialized[lang=zh] .atcb-date-btn-content:not(.atcb-date-btn-content-location) .atcb-date-btn-content-icon{margin-top:.15em}.atcb-date-btn-content-icon svg{height:100%;fill:currentcolor;width:100%}.atcb-date-btn-content+.atcb-date-btn-content{margin-top:.3em}.atcb-date-btn-content-text span:not(.atcb-icon-ical){padding-right:.3em;display:inline-block}.atcb-icon{flex-grow:0;flex-shrink:0;height:1em;line-height:1em;margin-right:.8em;width:1em}.atcb-rtl .atcb-icon{margin-right:0;margin-left:.8em}.atcb-no-text .atcb-icon{margin-right:0;margin-left:0}.atcb-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-text{overflow-wrap:anywhere}.atcb-dropdown-anchor{bottom:4px;height:1px;width:100%;opacity:0;position:absolute}.atcb-list-wrapper{box-sizing:border-box;font-weight:var(--list-font-weight);padding:0 4px;position:absolute;z-index:14000090}.atcb-list-wrapper.atcb-dropoverlay{z-index:15000000}.atcb-list{border-radius:0 0 var(--btn-border-radius) var(--btn-border-radius);box-sizing:border-box;box-shadow:var(--list-shadow);color:var(--list-text);display:block;font-family:var(--font);min-width:100%;position:relative;user-select:none;-webkit-user-select:none;width:fit-content}.atcb-list-item{align-items:center;background-color:var(--list-background);box-sizing:border-box;cursor:pointer;display:flex;font-size:1em;line-height:1.75em;padding:.8em;text-align:left;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.atcb-rtl .atcb-list-item{direction:rtl;text-align:right}.atcb-list-item:hover{background-color:var(--list-hover-background);color:var(--list-hover-text)}.atcb-list-item:focus-visible{background-color:var(--list-hover-background);color:var(--accent-color);font-weight:600;outline:0}.atcb-list-item:last-child{border-radius:0 0 var(--btn-border-radius) var(--btn-border-radius)}.atcb-dropup .atcb-list-item:last-child{border-radius:0;padding-bottom:1.25em}.atcb-dropoverlay .atcb-list .atcb-list-item:first-child,.atcb-dropup .atcb-list-item:first-child,.atcb-list.atcb-modal .atcb-list-item:first-child{border-radius:var(--btn-border-radius) var(--btn-border-radius) 0 0}.atcb-dropoverlay .atcb-list .atcb-list-item:only-child,.atcb-list.atcb-modal .atcb-list-item:only-child{border-radius:var(--btn-border-radius)}.atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:1.25em}.atcb-dropoverlay .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child,.atcb-dropup .atcb-list.atcb-generated-button:not(.atcb-modal) .atcb-list-item:first-child{padding-top:.8em}.atcb-dropoverlay .atcb-list,.atcb-list.atcb-modal{border-radius:var(--btn-border-radius)}.atcb-list.atcb-modal{box-shadow:var(--list-modal-shadow)}.atcb-list-item .atcb-icon{margin:0 auto}.atcb-list-item .atcb-icon+.atcb-text{margin-left:.7em;width:100%}.atcb-rtl .atcb-list-item .atcb-icon+.atcb-text{margin-left:0;margin-right:.7em}.atcb-list-item-close{background-color:var(--list-close-background)}.atcb-list-item.atcb-list-item-close:not(:focus-visible){color:var(--list-close-text)}.atcb-list-item-close svg{fill:currentcolor}.atcb-modal{display:block;margin:auto;width:auto;min-width:auto;position:relative;z-index:14000090}.atcb-modal-box{filter:var(--modal-shadow);color:var(--modal-text);cursor:default;box-sizing:border-box;font-family:var(--font);line-height:1.5em;text-align:var(--modal-text-align);user-select:none;-webkit-user-select:none;touch-action:manipulation;width:100%;margin-bottom:20px;-webkit-tap-highlight-color:transparent}@media (width > 575px){.atcb-modal-box{width:32em}}.atcb-modal-box.atcb-rtl{text-align:var(--modal-text-align-rtl);direction:rtl;padding:1.25em 1em 1.25em 2em}.atcb-modal-icon{height:2.5em;width:2.5em;border-radius:100%;background-color:var(--modal-background);padding:1.75em;margin:auto}.atcb-modal-icon svg{fill:currentcolor;height:100%;width:100%}.atcb-modal-headline{background-color:var(--modal-background);border-radius:var(--btn-border-radius) var(--btn-border-radius) 0 0;font-size:1.3em;font-weight:600;line-height:1.5em;padding:1.8em 1.5em 1.3em;text-transform:var(--modal-headline-text-transform);text-align:var(--modal-headline-text-align)}.atcb-modal-icon+.atcb-modal-headline{margin-top:-2.6em;padding-top:2.6em}.atcb-modal-content{background-color:var(--modal-background);font-size:1em;padding:.3em 2em 2.2em}.atcb-modal-content-subevents{margin:auto;width:fit-content}.atcb-modal-icon+.atcb-modal-content{border-radius:var(--btn-border-radius) var(--btn-border-radius) 0 0;margin-top:-2.6em;padding-top:2.6em}@media (width <= 575px){.atcb-modal-headline{padding:1.8em 1em 1em}.atcb-modal-content{padding:.3em 1.5em 1.5em}.atcb-modal-icon+.atcb-modal-content{padding-top:1.8em}}.atcb-modal-buttons{background-color:var(--modal-btn-bar);border-radius:0 0 var(--btn-border-radius) var(--btn-border-radius);box-sizing:border-box;padding:.6em;text-align:center;width:100%;display:flex;justify-content:center;flex-flow:row-reverse wrap;align-items:center}a.atcb-modal-btn,button.atcb-modal-btn{background-color:var(--modal-btn-secondary-background);border:0;border-radius:var(--btn-border-radius);box-shadow:var(--modal-btn-shadow);color:var(--modal-btn-secondary-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:.9em;font-weight:var(--modal-btn-font-weight);line-height:1em;margin:.625em;padding:1em 1.25em;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}a.atcb-modal-btn.btn-small,button.atcb-modal-btn.btn-small{padding:.6em .8em}a.atcb-modal-btn.atcb-modal-btn-primary,button.atcb-modal-btn.atcb-modal-btn-primary{background-color:var(--modal-btn-background);color:var(--modal-btn-text)}a.atcb-modal-btn.atcb-modal-btn-border,button.atcb-modal-btn.atcb-modal-btn-border{border:1px solid var(--modal-btn-border)}a.atcb-modal-btn:focus-visible,button.atcb-modal-btn:focus-visible{background-color:var(--modal-btn-hover-background);outline:2px solid var(--accent-color)}a.atcb-modal-btn:disabled,button.atcb-button:disabled,button.atcb-modal-btn:disabled,button.atcb-subevent-btn:disabled{cursor:not-allowed;opacity:.75;filter:brightness(95%);border-style:dashed;box-shadow:none}a.atcb-modal-btn:not([disabled]):hover,button.atcb-modal-btn:not([disabled]):hover{background-color:var(--modal-btn-hover-background);box-shadow:var(--modal-btn-hover-shadow);color:var(--modal-btn-hover-text);text-decoration:none}.atcb-checkmark{display:none}.atcb-saved .atcb-checkmark{box-sizing:content-box;color:var(--btn-text);display:block;position:absolute;top:-.9em;right:-.5em;padding:.5em;border-radius:100%;height:1.2em}.atcb-checkmark svg{height:100%;filter:var(--checkmark-background);width:auto}#atcb-bgoverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background-color:var(--overlay-background);border:0;box-sizing:border-box;display:flex;height:calc(100vh + 100px);inset-inline:0;left:0;right:0;top:0;min-height:100%;min-width:100%;overflow-y:auto;padding:20px 20px 130px;position:fixed;width:100vw;z-index:14000000}#atcb-bgoverlay:not(dialog){animation:atcb-bgoverlay-animate .2s ease 0s 1 normal forwards;opacity:0}#atcb-bgoverlay.atcb-no-bg{animation:none;backdrop-filter:none;-webkit-backdrop-filter:none;opacity:1;background-color:transparent}@keyframes atcb-bgoverlay-animate{0%{opacity:0}100%{opacity:1}}#atcb-bgoverlay.atcb-click:hover{cursor:var(--overlay-cursor)}.atcb-icon-outlookcom,.atcb-icon.atcb-icon-ms365{padding-bottom:.05em}.atcb-icon.atcb-icon-apple,.atcb-icon.atcb-icon-ical{padding-bottom:.15em}.atcb-icon.atcb-icon-apple svg{fill:currentcolor}.atcb-icon.atcb-icon-ical svg{fill:currentcolor}.atcb-icon.atcb-icon-ms365 svg{fill:var(--icon-ms365-color)}.atcb-icon.atcb-icon-yahoo svg{fill:var(--icon-yahoo-color)}.atcb-icon.atcb-icon-google svg,.atcb-icon.atcb-icon-msteams svg,.atcb-icon.atcb-icon-outlookcom svg{filter:var(--icon-filter)}.pro{text-align:center}.pro ol,.pro ul{margin:auto;text-align:left;width:fit-content}.pro a:not(.atcb-modal-btn),.pro a:not(.atcb-modal-btn):active,.pro a:not(.atcb-modal-btn):visited{color:var(--modal-btn-text);text-decoration:underline;text-decoration-thickness:2px;text-decoration-color:var(--accent-color)}.pro a:not(.atcb-modal-btn):hover{color:var(--accent-color);text-decoration:none}.pro .pro-share-buttons{display:flex;flex-wrap:wrap;justify-content:center}.pro-form{border-top:1px solid var(--modal-btn-border);margin-top:1.5em;padding-top:1.5em;text-align:left}.pro-field+.pro-field{padding-top:1.3em}.pro-field-type-label+.pro-field-type-radio{padding-top:0}.pro-field-type-checkbox,.pro-field-type-radio div{align-items:center;display:flex}.pro-field-type-checkbox input,.pro-field-type-radio input{cursor:pointer}.pro-field label{display:block;font-size:.9em;opacity:.7}.pro-field-type-checkbox label,.pro-field-type-radio label{cursor:pointer;opacity:.8;padding-left:.3em}.pro-field input[type=email],.pro-field input[type=number],.pro-field input[type=text]{background-color:var(--input-background);border:1px solid var(--modal-btn-border);border-radius:var(--input-border-radius);box-sizing:border-box;caret-color:var(--accent-color);color:var(--modal-text);font-size:.9em;opacity:.8;padding:.7em;transition:all .1s ease-in-out;width:100%}.pro-field input[type=checkbox],.pro-field input[type=radio]{accent-color:var(--accent-color);height:1.2rem;opacity:.8;transition:all .1s ease-in-out;width:1.2em}.pro-field input:disabled,.pro-field input:disabled+label{cursor:not-allowed;opacity:.75;filter:brightness(95%)}.pro-field input:not([disabled]):hover{opacity:1}.pro-field input[type=email]:focus,.pro-field input[type=number]:focus,.pro-field input[type=text]:focus{border-color:var(--accent-color);outline:1px solid var(--accent-color)}.pro-field input[type=checkbox]:focus,.pro-field input[type=radio]:focus{outline-color:var(--accent-color);outline-width:2px}#submit-error{color:var(--form-error);display:none;font-weight:700;padding-top:1.5em;text-align:center}.pro-form.form-error #submit-error{display:block}.pro-field input.error{accent-color:var(--form-error);border:2px solid var(--form-error)}.pro-field input.error+label,.pro-field:has(input.error) label{color:var(--form-error);opacity:1}#ty-success-msg{display:none;font-weight:700;line-height:1.6em;padding:1.5em 0;text-align:center}#pro-form-submit{display:block;margin:auto;min-width:150px}.pro-waiting{background-color:var(--modal-btn-background);border:1px solid var(--modal-btn-border);border-radius:var(--btn-border-radius);box-sizing:border-box;color:var(--modal-btn-text);cursor:wait;display:none;line-height:.5em;margin:auto;min-width:150px;padding:.5em 1.25em 1.2em;text-align:center;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;width:fit-content}@media (width > 575px){#pro-form-submit,.pro-waiting{min-width:200px}}.pro-waiting span:not(.atcb-icon-ical){animation-name:blink;animation-duration:1s;animation-iteration-count:infinite;animation-fill-mode:both;font-size:2.5em}.pro-field label span:not(.atcb-icon-ical){color:var(--form-error);font-weight:700;padding-left:2px}.pro-waiting span:not(.atcb-icon-ical):nth-child(2){animation-delay:.15s}.pro-waiting span:not(.atcb-icon-ical):nth-child(3){animation-delay:.3s}@keyframes blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}.atcb-modal-content .pro p{margin:0}.atcb-modal-content .pro p.pro-pt{margin-top:1.5em}.atcb-modal-content .pro .pro-field p{font-size:.9em}.pro .btn-flex{align-items:center;display:flex}.pro .atcb-modal-btn svg{fill:none;height:1.5em;margin-right:.5em;stroke:currentcolor;width:auto}#atcb-reference{box-sizing:border-box;filter:drop-shadow(0 0 3px rgba(255 255 255 / 80%));height:auto;padding:8px 0;transform:translate3d(0,0,0);width:100%;z-index:15000000}#atcb-reference.fixed-ref{position:fixed;bottom:10px;right:40px;width:auto}#atcb-reference.atcb-dropup{position:absolute}:host(.atcb-dark) #atcb-reference{filter:drop-shadow(0 0 5px #000)}#atcb-reference a,#atcb-reference a:active,#atcb-reference a:visited{opacity:.4;width:150px;max-width:100%;margin:auto;display:block;text-decoration:none}#atcb-reference.fixed-ref a{opacity:.6}#atcb-reference a:hover{opacity:.9;text-decoration:none}#atcb-reference svg{fill:var(--list-text)}`
}, B = () => !(typeof window > "u"), D = B() ? () => !!(/iPad|iPhone|iPod/i.test(navigator.userAgent || window.opera) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) : () => !1, fe = B() ? () => !!(/android/i.test(navigator.userAgent || window.opera) && !window.MSStream) : () => !1, tt = B() ? () => !!/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent) : () => !1, ee = () => !!(fe() || D()), Te = B() ? () => !!/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent) : () => !1, zt = B() ? () => !!/(Instagram)/i.test(navigator.userAgent || window.opera) : () => !1, _e = Te() ? "_system" : "_blank", At = ["apple", "google", "ical", "ms365", "outlookcom", "msteams", "yahoo"], Et = ["apple", "google", "ical"], St = ["msteams"], Lt = ["ical"], z = [], at = [
  "debug",
  "cspnonce",
  "identifier",
  "name",
  "dates",
  "description",
  "startDate",
  "startTime",
  "endDate",
  "endTime",
  "timeZone",
  "useUserTZ",
  "location",
  "status",
  "uid",
  "organizer",
  "attendee",
  "icsFile",
  "images",
  "recurrence",
  "recurrence_until",
  "recurrence_byDay",
  "recurrence_byMonth",
  "recurrence_byMonthDay",
  "recurrence_weekstart",
  "sequence",
  "recurrence_interval",
  "recurrence_count",
  "availability",
  "created",
  "updated",
  "subscribe",
  "options",
  "optionsMobile",
  "optionsIOS",
  "iCalFileName",
  "listStyle",
  "buttonStyle",
  "trigger",
  "hideIconButton",
  "hideIconList",
  "hideIconModal",
  "hideTextLabelButton",
  "hideTextLabelList",
  "buttonsList",
  "hideBackground",
  "hideCheckmark",
  "hideBranding",
  "size",
  "label",
  "inline",
  "inlineRsvp",
  "customLabels",
  "customCss",
  "lightMode",
  "language",
  "hideRichData",
  "bypassWebViewCheck",
  "blockInteraction",
  "styleLight",
  "styleDark",
  "disabled",
  "hidden",
  "hideButton",
  "pastDateHandling",
  "proxy",
  "fakeMobile",
  "fakeIOS",
  "fakeAndroid",
  "forceOverlay",
  "rsvp",
  "ty",
  "customVar",
  "dev"
], ze = [
  "debug",
  "cspnonce",
  "attendee",
  "images",
  "size",
  "inline",
  "inlineRsvp",
  "customLabels",
  "customCss",
  "lightMode",
  "language",
  "bypassWebViewCheck",
  "blockInteraction",
  "styleLight",
  "styleDark",
  "disabled",
  "hidden",
  "fakeMobile",
  "fakeIOS",
  "fakeAndroid",
  "forceOverlay",
  "customVar",
  "proxy",
  "dev"
], Ae = [
  "debug",
  "useUserTZ",
  "hideIconButton",
  "hideIconList",
  "hideIconModal",
  "hideTextLabelButton",
  "hideTextLabelList",
  "subscribe",
  "hideBackground",
  "hideCheckmark",
  "hideBranding",
  "inlineRsvp",
  "hideRichData",
  "buttonsList",
  "inline",
  "bypassWebViewCheck",
  "blockInteraction",
  "disabled",
  "hidden",
  "hideButton",
  "proxy",
  "fakeMobile",
  "fakeIOS",
  "fakeAndroid",
  "forceOverlay",
  "dev"
], Yt = ["customLabels", "ty", "rsvp", "customVar"], _t = ["dates"], Mt = ["images", "options", "optionsMobile", "optionsIOS"], Dt = ["sequence", "recurrence_interval", "recurrence_count"], q = {
  trigger: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg>',
  apple: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M167.084 130.514c-.308-31.099 25.364-46.022 26.511-46.761-14.429-21.107-36.91-24.008-44.921-24.335-19.13-1.931-37.323 11.27-47.042 11.27-9.692 0-24.67-10.98-40.532-10.689-20.849.308-40.07 12.126-50.818 30.799-21.661 37.581-5.54 93.281 15.572 123.754 10.313 14.923 22.612 31.688 38.764 31.089 15.549-.612 21.433-10.073 40.242-10.073s24.086 10.073 40.546 9.751c16.737-.308 27.34-15.214 37.585-30.187 11.855-17.318 16.714-34.064 17.009-34.925-.372-.168-32.635-12.525-32.962-49.68l.045-.013zm-30.917-91.287C144.735 28.832 150.524 14.402 148.942 0c-12.344.503-27.313 8.228-36.176 18.609-7.956 9.216-14.906 23.904-13.047 38.011 13.786 1.075 27.862-7.004 36.434-17.376z"/></svg>',
  google: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M152.637 47.363H47.363v105.273h105.273z" fill="#fff"/><path d="M152.637 200L200 152.637h-47.363z" fill="#f72a25"/><path d="M200 47.363h-47.363v105.273H200z" fill="#fbbc04"/><path d="M152.637 152.637H47.363V200h105.273z" fill="#34a853"/><path d="M0 152.637v31.576A15.788 15.788 0 0 0 15.788 200h31.576v-47.363z" fill="#188038"/><path d="M200 47.363V15.788A15.79 15.79 0 0 0 184.212 0h-31.575v47.363z" fill="#1967d2"/><path d="M15.788 0A15.79 15.79 0 0 0 0 15.788v136.849h47.363V47.363h105.274V0z" fill="#4285f4"/><path d="M68.962 129.02c-3.939-2.653-6.657-6.543-8.138-11.67l9.131-3.76c.83 3.158 2.279 5.599 4.346 7.341 2.051 1.742 4.557 2.588 7.471 2.588 2.995 0 5.55-.911 7.699-2.718 2.148-1.823 3.223-4.134 3.223-6.934 0-2.865-1.139-5.208-3.402-7.031s-5.111-2.718-8.496-2.718h-5.273v-9.033h4.736c2.913 0 5.387-.781 7.389-2.376 2.002-1.579 2.995-3.743 2.995-6.494 0-2.441-.895-4.395-2.686-5.859s-4.053-2.197-6.803-2.197c-2.686 0-4.818.716-6.396 2.148s-2.767 3.255-3.451 5.273l-9.033-3.76c1.204-3.402 3.402-6.396 6.624-8.984s7.34-3.89 12.337-3.89c3.695 0 7.031.716 9.977 2.148s5.257 3.418 6.934 5.941c1.676 2.539 2.507 5.387 2.507 8.545 0 3.223-.781 5.941-2.327 8.187-1.546 2.23-3.467 3.955-5.729 5.143v.537a17.39 17.39 0 0 1 7.34 5.729c1.904 2.572 2.865 5.632 2.865 9.212s-.911 6.771-2.718 9.57c-1.823 2.799-4.329 5.013-7.52 6.624s-6.787 2.425-10.775 2.425c-4.622 0-8.887-1.318-12.826-3.988zm56.087-45.312l-10.026 7.243-5.013-7.601 17.985-12.972h6.901v61.198h-9.847z" fill="#1a73e8"/></svg>',
  ical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-25.228 161.263c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm-81.803-59.766c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 139.079c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 168.962c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.15V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.155c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.971 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg>',
  msteams: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 186.047"><path d="M195.349 39.535a20.93 20.93 0 1 1-41.86 0 20.93 20.93 0 1 1 41.86 0zm-55.847 30.233h51.66A8.84 8.84 0 0 1 200 78.605v47.056c0 17.938-14.541 32.479-32.479 32.479h0-.154c-17.938.003-32.481-14.537-32.484-32.474v-.005-51.274a4.62 4.62 0 0 1 4.619-4.619z" fill="#5059c9"/><path d="M149.614 69.767H64.34c-4.823.119-8.637 4.122-8.526 8.944v53.67c-.673 28.941 22.223 52.957 51.163 53.665 28.94-.708 51.836-24.725 51.163-53.665v-53.67c.112-4.823-3.703-8.825-8.526-8.944zm-10.079-39.535a30.233 30.233 0 0 1-60.465 0 30.233 30.233 0 0 1 60.465 0z" fill="#7b83eb"/><path opacity=".1" d="M111.628 69.767v75.209c-.023 3.449-2.113 6.547-5.302 7.86-1.015.43-2.107.651-3.209.651H59.907l-1.628-4.651c-1.628-5.337-2.459-10.885-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M106.977 69.767v79.86a8.241 8.241 0 0 1-.651 3.209c-1.313 3.189-4.412 5.279-7.86 5.302H62.093l-2.186-4.651a46.13 46.13 0 0 1-1.628-4.651 56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M102.326 69.767v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".1" d="M111.628 45.721v14.651l-2.326.093c-.791 0-1.535-.046-2.326-.093-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767 25.845 25.845 0 0 1-1.488-4.651h23.209c4.693.018 8.494 3.818 8.512 8.512z"/><use xlink:href="#B" opacity=".2" transform="scale(.08973306)"/><path d="M106.977 50.372v10c-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767h17.07c4.693.018 8.494 3.818 8.512 8.512zm0 19.395v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z" opacity=".2"/><path opacity=".2" d="M102.326 50.372v9.256a30.233 30.233 0 0 1-20.93-17.767h12.419c4.693.018 8.494 3.818 8.512 8.512z"/><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="17.776" y1="35.199" x2="84.55" y2="150.848"><stop offset="0" stop-color="#5a62c3"/><stop offset=".5" stop-color="#4d55bd"/><stop offset="1" stop-color="#3940ab"/></linearGradient><path fill="url(#A)" d="M8.526 41.86H93.8a8.53 8.53 0 0 1 8.526 8.526v85.274a8.53 8.53 0 0 1-8.526 8.526H8.526A8.53 8.53 0 0 1 0 135.66V50.386a8.53 8.53 0 0 1 8.526-8.526z"/><path fill="#fff" d="M73.6 74.316H56.553v46.419h-10.86V74.316H28.726v-9.005H73.6z"/><defs><path id="B" d="M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"/></defs></svg>',
  ms365: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 239.766"><path d="M200 219.785l-.021-.012V20.591L128.615 0 .322 48.172 0 48.234.016 192.257l43.78-17.134V57.943l84.819-20.279-.012 172.285L.088 192.257l128.515 47.456v.053l71.376-19.753v-.227z"/></svg>',
  outlookcom: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 175"><path d="M178.725 0H71.275A8.775 8.775 0 0 0 62.5 8.775v9.975l60.563 18.75L187.5 18.75V8.775A8.775 8.775 0 0 0 178.725 0z" fill="#0364b8"/><path d="M197.813 96.281c.915-2.878 2.187-5.855 2.187-8.781-.002-1.485-.795-2.857-1.491-3.26l-68.434-38.99a9.37 9.37 0 0 0-9.244-.519c-.312.154-.614.325-.906.512l-67.737 38.6-.025.013-.075.044a4.16 4.16 0 0 0-2.088 3.6c.541 2.971 1.272 5.904 2.188 8.781l71.825 52.532z" fill="#0a2767"/><path d="M150 18.75h-43.75L93.619 37.5l12.631 18.75L150 93.75h37.5v-37.5z" fill="#28a8ea"/><path d="M150 18.75h37.5v37.5H150z" fill="#50d9ff"/><path d="M150 93.75l-43.75-37.5H62.5v37.5l43.75 37.5 67.7 11.05z" fill="#0364b8"/><path d="M106.25 56.25v37.5H150v-37.5zM150 93.75v37.5h37.5v-37.5zm-87.5-75h43.75v37.5H62.5z" fill="#0078d4"/><path d="M62.5 93.75h43.75v37.5H62.5z" fill="#064a8c"/><path d="M126.188 145.113l-73.706-53.75 3.094-5.438 68.181 38.825a3.3 3.3 0 0 0 2.625-.075l68.331-38.937 3.1 5.431z" fill="#0a2767" opacity=".5"/><path d="M197.919 91.106l-.088.05-.019.013-67.738 38.588c-2.736 1.764-6.192 1.979-9.125.569l23.588 31.631 51.588 11.257v-.001c2.434-1.761 3.876-4.583 3.875-7.587V87.5c.001 1.488-.793 2.862-2.081 3.606z" fill="#1490df"/><path d="M200 165.625v-4.613l-62.394-35.55-7.531 4.294a9.356 9.356 0 0 1-9.125.569l23.588 31.631 51.588 11.231v.025a9.362 9.362 0 0 0 3.875-7.588z" opacity=".05"/><path d="M199.688 168.019l-68.394-38.956-1.219.688c-2.734 1.766-6.19 1.984-9.125.575l23.588 31.631 51.587 11.256v.001a9.38 9.38 0 0 0 3.562-5.187z" opacity=".1"/><path d="M51.455 90.721c-.733-.467-1.468-1.795-1.455-3.221v78.125c-.007 5.181 4.194 9.382 9.375 9.375h131.25c1.395-.015 2.614-.366 3.813-.813.638-.258 1.252-.652 1.687-.974z" fill="#28a8ea"/><path d="M112.5 141.669V39.581a8.356 8.356 0 0 0-8.331-8.331H62.687v46.6l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031V150h54.169a8.356 8.356 0 0 0 8.331-8.331z" opacity=".1"/><path d="M106.25 147.919V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 68.75h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M106.25 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M100 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h41.669a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M8.331 37.5h83.337A8.331 8.331 0 0 1 100 45.831v83.338a8.331 8.331 0 0 1-8.331 8.331H8.331A8.331 8.331 0 0 1 0 129.169V45.831A8.331 8.331 0 0 1 8.331 37.5z" fill="#0078d4"/><path d="M24.169 71.675a26.131 26.131 0 0 1 10.263-11.337 31.031 31.031 0 0 1 16.313-4.087 28.856 28.856 0 0 1 15.081 3.875 25.875 25.875 0 0 1 9.988 10.831 34.981 34.981 0 0 1 3.5 15.938 36.881 36.881 0 0 1-3.606 16.662 26.494 26.494 0 0 1-10.281 11.213 30 30 0 0 1-15.656 3.981 29.556 29.556 0 0 1-15.425-3.919 26.275 26.275 0 0 1-10.112-10.85 34.119 34.119 0 0 1-3.544-15.744 37.844 37.844 0 0 1 3.481-16.563zm10.938 26.613a16.975 16.975 0 0 0 5.769 7.463 15.069 15.069 0 0 0 9.019 2.719 15.831 15.831 0 0 0 9.631-2.806 16.269 16.269 0 0 0 5.606-7.481 28.913 28.913 0 0 0 1.787-10.406 31.644 31.644 0 0 0-1.687-10.538 16.681 16.681 0 0 0-5.413-7.75 14.919 14.919 0 0 0-9.544-2.956 15.581 15.581 0 0 0-9.231 2.744 17.131 17.131 0 0 0-5.9 7.519 29.85 29.85 0 0 0-.044 21.5z" fill="#fff"/></svg>',
  yahoo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 177.803"><path d="M0 43.284h38.144l22.211 56.822 22.5-56.822h37.135L64.071 177.803H26.694l15.308-35.645L.001 43.284zm163.235 45.403H121.64L158.558 0 200 .002zm-30.699 8.488c12.762 0 23.108 10.346 23.108 23.106s-10.345 23.106-23.108 23.106a23.11 23.11 0 0 1-23.104-23.106 23.11 23.11 0 0 1 23.104-23.106z"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M2.321 13.529a7.927 7.927 0 0 1 0-11.208 7.927 7.927 0 0 1 11.208 0l86.471 86.471L186.47 2.321a7.927 7.927 0 0 1 11.209 0 7.927 7.927 0 0 1 0 11.208l-86.474 86.469 86.472 86.473a7.927 7.927 0 0 1-11.209 11.208l-86.471-86.471-86.469 86.471a7.927 7.927 0 0 1-11.208-11.208l86.471-86.473z"/></svg>',
  location: '<svg viewBox="0 0 200 266.42" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m148.54 230.43c-12.12 13.291-26.234 25.193-42.083 34.82-1.9513 1.431-4.5964 1.6044-6.7645 0.21681-23.416-14.895-43.08-32.782-58.539-52.23-21.334-26.755-34.755-56.414-39.351-84.99-4.6831-28.966-0.30354-56.848 14.114-79.505 5.6805-8.9543 12.944-17.106 21.79-24.153 20.337-16.196 43.557-24.76 66.713-24.586 22.288 0.17345 44.295 8.4773 63.309 25.844 6.6778 6.0707 12.293 13.03 16.89 20.575 15.502 25.54 18.841 58.105 12.033 91.104-6.7212 32.608-23.416 65.737-48.11 92.839zm-48.544-178.91c27.492 0 49.758 22.288 49.758 49.758 0 27.492-22.288 49.758-49.758 49.758-27.492 0-49.758-22.267-49.758-49.758-0.02168-27.492 22.267-49.758 49.758-49.758z" stroke-width="2.1681"/></svg>',
  warning: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m100 0c27.613 0 52.613 11.195 70.711 29.293 18.094 18.094 29.289 43.098 29.289 70.707 0 27.613-11.195 52.613-29.289 70.711-18.098 18.094-43.098 29.289-70.711 29.289-27.609 0-52.613-11.195-70.707-29.289-18.098-18.098-29.293-43.098-29.293-70.711 0-27.609 11.195-52.613 29.293-70.707 18.094-18.098 43.098-29.293 70.707-29.293zm57.66 42.34c-14.758-14.754-35.145-23.883-57.66-23.883-22.516 0-42.902 9.1289-57.66 23.883-14.754 14.758-23.883 35.145-23.883 57.66 0 22.516 9.1289 42.902 23.883 57.66 14.758 14.754 35.145 23.883 57.66 23.883 22.516 0 42.902-9.1289 57.66-23.883 14.754-14.758 23.883-35.145 23.883-57.66 0-22.516-9.1289-42.902-23.883-57.66z" fill="#f44336" fill-rule="nonzero" stroke-width=".39062"/><g transform="matrix(3.8384 0 0 3.8384 2277.8 -576.85)" style="shape-inside:url(#rect7396);white-space:pre" aria-label="!"><path d="m-563.8 161.59-0.65341 20.185h-5.8381l-0.65341-20.185zm-3.5796 29.503q-1.5199 0-2.6136-1.0795-1.0796-1.0796-1.0796-2.6136 0-1.5057 1.0796-2.571 1.0938-1.0796 2.6136-1.0796 1.4631 0 2.571 1.0796 1.1222 1.0653 1.1222 2.571 0 1.0227-0.52557 1.8608-0.51137 0.83807-1.3494 1.3352-0.82387 0.49715-1.8182 0.49715z"/></g></svg>',
  checkmark: '<svg version="1.1" viewBox="0 0 87.41 79.72" xmlns="http://www.w3.org/2000/svg"><path d="m2.076 33.666s6.0748-0.59297 17.413 4.2983c9.3883 4.5751 11.891 8.3955 11.891 8.3955 5.38-8.65 11.11-16.6 17.16-23.9 10.412-12.578 24.613-22.448 24.613-22.448l14.257-0.012228s-19.308 19.294-32.483 38.51-22.877 41.21-22.877 41.21-9.3948-18.164-14.53-24.53-10.77-11.59-17.52-16.22z" fill="#45b555"/></svg>',
  rsvp: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 104.31 122.88"><g><path d="M25.85,63.15c-0.04-0.12-0.08-0.28-0.1-0.42c-0.22-1.89-0.43-3.98-0.62-5.78c-0.26-2.64-0.55-5.69-0.76-7.83 c-0.14-1.45-0.6-2.83-1.27-3.86c-0.45-0.66-0.95-1.15-1.51-1.39c-0.45-0.18-1-0.2-1.57,0.02c-0.78,0.3-1.65,0.93-2.62,2.03 c-0.86,0.98-1.53,2.29-2.09,3.68c-0.79,2.03-1.26,4.19-1.45,5.67c-0.02,0.1-0.02,0.18-0.06,0.26L8.42,86.07 c-0.08,0.4-0.24,0.76-0.48,1.04c-1.81,2.33-2.95,4.33-3.28,5.95c-0.24,1.19,0,2.15,0.79,2.9l19.8,19.8 c1.26,1.21,2.72,1.97,4.47,2.29c1.91,0.36,4.14,0.16,6.7-0.54c0.04,0,0.1-0.02,0.14-0.02c0.97-0.26,2.24-0.57,3.46-0.88 c5.31-1.29,9.94-2.43,14.23-6.33l5.52-5.76c0.05-0.1,0.14-0.18,0.22-0.26s0.62-0.62,1.35-1.31c3.78-3.69,8.45-8.25,5.61-12.24 l-2.21-2.21c-1.07,1.04-2.21,2.05-3.3,3.02c-1,0.88-1.93,1.69-2.78,2.55c-0.91,0.91-2.38,0.91-3.3,0c-0.91-0.92-0.91-2.38,0-3.3 c0.86-0.86,1.91-1.79,3-2.76c3.74-3.3,8.03-7.07,5.73-10.38l-2.19-2.19c-0.12-0.12-0.22-0.26-0.31-0.4c-1.26,1.29-2.64,2.52-4,3.72 c-1,0.88-1.93,1.69-2.78,2.55c-0.91,0.91-2.38,0.91-3.3,0s-0.91-2.38,0-3.3c0.86-0.86,1.91-1.79,3-2.76 c3.74-3.3,8.03-7.07,5.73-10.38l-2.19-2.19c-0.16-0.16-0.28-0.31-0.38-0.5l-6.42,6.42c-0.91,0.91-2.38,0.91-3.3,0s-0.91-2.38,0-3.3 l17.22-17.25c2.88-2.88,3.54-5.88,2.78-8.15c-0.28-0.83-0.74-1.57-1.31-2.14s-1.31-1.03-2.14-1.31c-2.24-0.74-5.23-0.06-8.19,2.9 l-30.2,30.2c-0.91,0.91-2.38,0.91-3.3,0s-0.91-2.38,0-3.3l3.07-3.07L25.85,63.15L25.85,63.15L25.85,63.15z M83.23,24.31 c-1.22,1.3-3.24,1.34-4.52,0.14c-1.3-1.22-1.34-3.24-0.14-4.52l8.82-9.39c1.22-1.3,3.25-1.34,4.52-0.14 c1.3,1.22,1.34,3.24,0.14,4.52L83.23,24.31L83.23,24.31L83.23,24.31L83.23,24.31z M43.96,23.65c1.3,1.22,1.34,3.25,0.14,4.52 c-1.22,1.3-3.25,1.34-4.52,0.14l-9.4-8.82c-1.29-1.23-1.33-3.25-0.14-4.52c1.22-1.3,3.25-1.34,4.52-0.14L43.96,23.65L43.96,23.65 L43.96,23.65z M63.69,15.96c0.05,1.76-1.34,3.24-3.09,3.3s-3.24-1.34-3.3-3.09L56.91,3.3c-0.06-1.75,1.34-3.24,3.09-3.3 c1.76-0.05,3.24,1.34,3.29,3.09L63.69,15.96L63.69,15.96L63.69,15.96z M76.88,63.31c-1.3-1.22-1.34-3.25-0.14-4.52 c1.22-1.3,3.24-1.34,4.52-0.14l9.39,8.82c1.3,1.22,1.34,3.24,0.14,4.52c-1.22,1.3-3.24,1.34-4.52,0.14L76.88,63.31L76.88,63.31 L76.88,63.31z M88.36,44.35c-1.75,0.06-3.24-1.34-3.3-3.09c-0.05-1.75,1.34-3.24,3.09-3.3l12.86-0.43c1.75-0.06,3.24,1.34,3.3,3.09 s-1.34,3.24-3.09,3.3L88.36,44.35L88.36,44.35L88.36,44.35z M60.88,58.97c0.17,0.1,0.34,0.22,0.5,0.38l2.29,2.29 c0.12,0.12,0.24,0.28,0.34,0.42c2.57,3.52,2.17,6.66,0.42,9.52c0.31,0.12,0.62,0.29,0.86,0.54l2.29,2.29 c0.12,0.12,0.24,0.28,0.34,0.42c2.76,3.8,2.07,7.12,0,10.14c0.1,0.05,0.17,0.14,0.28,0.24l2.29,2.29c0.12,0.12,0.24,0.28,0.34,0.42 c5.31,7.26-1.02,13.42-6.1,18.39l-1.31,1.31l-5.67,5.95l-0.18,0.17c-5.19,4.71-10.33,5.97-16.28,7.42c-1,0.24-2,0.5-3.4,0.86 c-0.04,0-0.06,0.02-0.1,0.02c-3.22,0.88-6.14,1.09-8.76,0.62c-2.66-0.48-4.97-1.67-6.9-3.56L2.31,99.29 c-2-1.93-2.69-4.31-2.12-7.14c0.43-2.26,1.75-4.77,3.81-7.47L9.3,54.74v-0.12c0.24-1.71,0.78-4.24,1.71-6.68 c0.71-1.83,1.67-3.62,2.92-5.07c1.51-1.71,3-2.76,4.47-3.32c1.81-0.69,3.54-0.6,5.07,0.06c1.43,0.6,2.64,1.69,3.56,3.08 c1.12,1.67,1.85,3.8,2.05,6.02c0.16,1.83,0.48,4.85,0.78,7.81l0.24,2.47L53,36.07c4.4-4.4,9.16-5.27,12.97-4.02 c1.53,0.5,2.88,1.33,4,2.45s1.95,2.47,2.45,4c1.26,3.8,0.4,8.63-3.92,12.95l-7.59,7.59L60.88,58.97L60.88,58.97L60.88,58.97z"/></g></svg>'
};
async function Me(e) {
  return e = Rt(e), e.timeZone = ot(e.timeZone), e = Ct(e), e = Bt(e), e = $t(e), e.sizes = It(e.size), e.lightMode = Ot(e.lightMode), e = Ut(e), e = nt(e), e = Nt(e), e = jt(e), e = Zt(e), e = await Ft(e), e;
}
function Rt(e) {
  for (let t = 0; t < Ae.length; t++) {
    const a = Ae[`${t}`];
    if (e[`${a}`]) {
      if (typeof e[`${a}`] != "boolean") {
        const o = e[`${a}`].toString().trim().toLowerCase() || "";
        e[`${a}`] = o === "" || o === "true";
      }
    } else
      e[`${a}`] = !1;
  }
  return e;
}
function ot(e = null) {
  return !e || e === "" ? "GMT" : e;
}
function Ct(e) {
  if (e.recurrence && e.recurrence !== "")
    if (e.recurrence = e.recurrence.replace(/\s+/g, "").toUpperCase(), !/^(RRULE:[\w=;,:+-/\\]+|daily|weekly|monthly|yearly)$/im.test(e.recurrence))
      e.recurrence = "!wrong rrule format!";
    else if (/^RRULE:/i.test(e.recurrence)) {
      e.recurrence_simplyfied = !1;
      const t = e.recurrence.substring(6).split(";"), a = new Object();
      t.forEach(function(o) {
        a[o.split("=")[0]] = o.split("=")[1];
      }), e.recurrence_until = a.UNTIL ? a.UNTIL : "", e.recurrence_count = a.COUNT ? a.COUNT : "", e.recurrence_byDay = a.BYDAY ? a.BYDAY : "", e.recurrence_byMonth = a.BYMONTH ? a.BYMONTH : "", e.recurrence_byMonthDay = a.BYMONTHDAY ? a.BYMONTHDAY : "", e.recurrence_interval = a.INTERVAL ? a.INTERVAL : 1, e.recurrence_frequency = a.FREQ ? a.FREQ : "";
    } else
      e.recurrence_simplyfied = !0, (!e.recurrence_interval || e.recurrence_interval === "") && (e.recurrence_interval = 1), (!e.recurrence_weekstart || e.recurrence_weekstart === "" | e.recurrence_weekstart.length > 2) && (e.recurrence_weekstart = "MO"), e.recurrence_frequency = e.recurrence, e.recurrence = "RRULE:FREQ=" + e.recurrence + ";WKST=" + e.recurrence_weekstart + ";INTERVAL=" + e.recurrence_interval, e.recurrence_until && e.recurrence_until !== "" && (e.endTime && e.endTime !== "" ? e.recurrence = e.recurrence + ";UNTIL=" + e.recurrence_until.replace(/-/g, "").slice(0, 8) + "T" + e.endTime.replace(":", "") + "00" : e.recurrence = e.recurrence + ";UNTIL=" + e.recurrence_until.replace(/-/g, "").slice(0, 8)), e.recurrence_count && e.recurrence_count !== "" && (e.recurrence = e.recurrence + ";COUNT=" + e.recurrence_count), e.recurrence_byDay && e.recurrence_byDay !== "" && (e.recurrence = e.recurrence + ";BYDAY=" + e.recurrence_byDay), e.recurrence_byMonth && e.recurrence_byMonth !== "" && (e.recurrence = e.recurrence + ";BYMONTH=" + e.recurrence_byMonth), e.recurrence_byMonthDay && e.recurrence_byMonthDay !== "" && (e.recurrence = e.recurrence + ";BYMONTHDAY=" + e.recurrence_byMonthDay);
  return e;
}
function Bt(e) {
  const t = function() {
    if (D() || e.fakeIOS) {
      if (e.optionsIOS)
        return e.optionsIOS;
      if (e.optionsMobile)
        return e.optionsMobile;
    }
    return (fe() || e.fakeMobile || e.fakeAndroid) && e.optionsMobile ? e.optionsMobile : e.options || ["ical"];
  }(), a = [];
  let o = !1, n = !1;
  for (let l = 0; l < t.length; l++) {
    const r = t[`${l}`].split("|")[0].toLowerCase().replace("microsoft", "ms").replace(/\./, "");
    r === "apple" && (n = !0), r === "ical" && (o = !0), !(D() && Lt.includes(r) || e.recurrence && e.recurrence !== "" && (!Et.includes(r) || e.recurrence_until && e.recurrence_until !== "" && (r === "apple" || r === "ical") || D() && r === "google") || e.subscribe && St.includes(r)) && a.push(r);
  }
  return a.length === 0 && (D() || a.push("ical"), o = !0), D() && o && !n && a.push("apple"), e.options = a, e;
}
function $t(e) {
  return e.inlineRSVP && (e.inline = !0), (!e.listStyle || e.listStyle === "") && (e.listStyle = "dropdown"), e.listStyle === "modal" && (e.trigger = "click"), e.buttonStyle && e.buttonStyle !== "" && e.buttonStyle != "default" ? (e.buttonStyle == "round" || e.buttonStyle == "text" || e.buttonStyle == "date" || e.buttonStyle == "neumorphism") && (e.trigger = "click") : e.buttonStyle = "default", (e.buttonStyle == "default" || e.buttonStyle == "3d" || e.buttonStyle == "flat") && !e.hideTextLabelList && e.hideTextLabelButton && (e.listStyle == "dropdown" || e.listStyle == "dropdown-static" || e.listStyle == "dropup-static") && (e.listStyle = "overlay"), e.buttonsList && e.buttonStyle == "date" && (e.buttonsList = !1), e;
}
function It(e) {
  const t = [];
  if (t.l = t.m = t.s = 16, e && e !== "") {
    const a = e.split("|");
    for (let o = 0; o < a.length; o++)
      a[`${o}`] = parseInt(a[`${o}`]);
    a[0] >= 0 && a[0] < 11 && (t.l = t.m = t.s = 10 + a[0]), a.length > 2 ? (a[1] >= 0 && a[1] < 11 && (t.m = 10 + a[1]), a[2] >= 0 && a[2] < 11 && (t.s = 10 + a[2])) : a.length == 2 && a[1] >= 0 && a[1] < 11 && (t.m = t.s = 10 + a[1]);
  }
  return t;
}
function Ot(e = "") {
  return e == "system" && B() ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e != "bodyScheme" && e != "dark" ? "light" : e;
}
function Ut(e) {
  return (!e.language || e.language === "" || !Sa.includes(e.language)) && (e.language = "en"), e.language.length > 2 && (e.language = e.language.substring(0, 2)), Ea.includes(e.language) ? e.rtl = !0 : e.rtl = !1, e;
}
function nt(e) {
  if (e.dates && e.dates.length > 0)
    for (let a = 0; a < e.dates.length; a++) {
      !e.dates[`${a}`].timeZone && e.timeZone && (e.dates[`${a}`].timeZone = e.timeZone), !e.dates[`${a}`].useUserTZ && e.useUserTZ && (e.dates[`${a}`].useUserTZ = e.useUserTZ);
      const o = Oe(e.dates[`${a}`]);
      e.dates[`${a}`].startTime = o.startTime, e.dates[`${a}`].endTime = o.endTime, e.dates[`${a}`].timeZone = o.timeZone, e.dates[`${a}`].startDate = ce(o.startDate), e.dates[`${a}`].endDate = ce(o.endDate), e.dates[`${a}`].timestamp = ye("timestamp", e.dates[`${a}`].startDate, e.dates[`${a}`].startTime, e.dates[`${a}`].timeZone), e.dates[`${a}`].overdue = ye("overdue", e.dates[`${a}`].endDate, e.dates[`${a}`].endTime, e.dates[`${a}`].timeZone);
    }
  else {
    e.dates = [], e.dates[0] = new Object(), e.useUserTZ && (e.dates[0].useUserTZ = e.useUserTZ);
    const a = Oe(e);
    e.startTime = e.dates[0].startTime = a.startTime, e.endTime = e.dates[0].endTime = a.endTime, e.timeZone = e.dates[0].timeZone = a.timeZone, e.startDate = e.dates[0].startDate = ce(a.startDate), e.endDate = e.dates[0].endDate = ce(a.endDate), e.recurrence ? e.dates[0].overdue = !1 : e.dates[0].overdue = ye("overdue", e.endDate, e.endTime, e.timeZone);
  }
  const t = /* @__PURE__ */ new Date();
  return (!e.created || e.created === "") && (e.created = M(t, "clean", !0)), (!e.updated || e.updated === "") && (e.updated = M(t, "clean", !0)), e;
}
function Nt(e) {
  return (!e.status || e.status === "") && (e.status = "CONFIRMED"), (!e.sequence || e.sequence === "") && (e.sequence = 0), e;
}
function Ht(e, t) {
  const a = (n) => n.replace(/(\\r\\n|\\n|\\r|<br(\s*\/?)>)/g, "");
  let o = e.dates[`${t}`].description || e.description || "";
  if (o) {
    if (o = a(o), e.customVar)
      for (const c in e.customVar) {
        const r = c.replace(/[^a-zA-Z0-9\-_.]/g, "");
        o = o.replace(new RegExp(`%%${r}%%`, "g"), e.customVar[`${c}`]);
      }
    const n = K(o, !0), l = K(o, !0, !0);
    o = K(o), e.dates[`${t}`] = { ...e.dates[`${t}`], description: o, descriptionHtmlFree: n, descriptionHtmlFreeICal: l };
  } else
    e.dates[`${t}`].descriptionHtmlFree = e.dates[`${t}`].descriptionHtmlFreeICal = e.dates[`${t}`].description = "";
  return e;
}
function jt(e) {
  for (let t = 0; t < e.dates.length; t++)
    if (e = Ht(e, t), (!e.dates[`${t}`].name || e.dates[`${t}`].name === "") && (e.dates[`${t}`].name = e.name), e.dates[`${t}`].status ? e.dates[`${t}`].status = e.dates[`${t}`].status.toUpperCase() : e.dates[`${t}`].status = e.status.toUpperCase(), e.dates[`${t}`].sequence || (e.dates[`${t}`].sequence = e.sequence), !e.dates[`${t}`].organizer && e.organizer && (e.dates[`${t}`].organizer = e.organizer), !e.dates[`${t}`].attendee && e.attendee && (e.dates[`${t}`].attendee = e.attendee), !e.dates[`${t}`].availability && e.availability ? e.dates[`${t}`].availability = e.availability.toLowerCase() : e.dates[`${t}`].availability && (e.dates[`${t}`].availability = e.dates[`${t}`].availability.toLowerCase()), !e.dates[`${t}`].location && e.location && (e.dates[`${t}`].location = e.location), e.dates[`${t}`].location && e.dates[`${t}`].location.startsWith("http") ? e.dates[`${t}`].onlineEvent = !0 : e.dates[`${t}`].onlineEvent = !1, e.dates[`${t}`].uid || (t === 0 && e.uid && e.uid !== "" ? e.dates[0].uid = e.uid : e.uid && e.uid !== "" ? e.dates[`${t}`].uid = e.uid + "-" + (t + 1) : e.dates[`${t}`].uid = ft()), e.customVar)
      for (const a in e.customVar) {
        const o = a.replace(/[^a-zA-Z0-9\-_.]/g, "");
        e.dates[`${t}`].name = e.dates[`${t}`].name.replace(new RegExp(`%%${o}%%`, "g"), e.customVar[`${a}`]), e.dates[`${t}`].location = e.dates[`${t}`].location.replace(new RegExp(`%%${o}%%`, "g"), e.customVar[`${a}`]);
      }
  return e.recurrence && e.recurrence !== "" && (e.dates[0].recurrence = e.recurrence), e.dates.length > 1 && e.dates.sort((t, a) => t.timestamp - a.timestamp), e;
}
function Oe(e) {
  if ((!e.endDate || e.endDate === "") && (e.endDate = e.startDate), ["start", "end"].forEach(function(a) {
    if (!/^(\d{4}-\d{2}-\d{2}T?(?:\d{2}:\d{2}|)Z?|today(?:\+\d{1,4}|))$/i.test(e[a + "Date"]))
      e[a + "Date"] = "badly-formed";
    else {
      if (e[a + "Date"]) {
        e[a + "Date"] = e[a + "Date"].replace(/\.\d{3}/, "").replace("Z", "");
        const o = e[a + "Date"].split("T");
        o[1] && (e[a + "Date"] = o[0], e[a + "Time"] = o[1]);
      }
      if (e[a + "Time"] && e[a + "Time"].length === 8) {
        const o = e[a + "Time"];
        e[a + "Time"] = o.substring(0, o.length - 3);
      }
    }
  }), e.timeZone === "currentBrowser" || e.useUserTZ) {
    const a = Intl.DateTimeFormat().resolvedOptions().timeZone || "GMT";
    if (e.useUserTZ && e.startTime && e.startTime !== "" && e.endTime && e.endTime !== "") {
      const o = Ve(e.startDate, e.startTime, e.timeZone, a), n = Ve(e.endDate, e.endTime, e.timeZone, a);
      e.startDate = o[0], e.startTime = o[1], e.endDate = n[0], e.endTime = n[1];
    }
    e.timeZone = a;
  }
  return e;
}
function ye(e, t, a = null, o) {
  try {
    const n = function() {
      if (a) {
        const c = de(o, t, a);
        return /* @__PURE__ */ new Date(t + " " + a + ":00 GMT" + c);
      }
      return new Date(t);
    }();
    if (e === "timestamp")
      return n.getTime();
    a || n.setDate(n.getDate() + 1);
    const l = (/* @__PURE__ */ new Date()).toISOString();
    return n.getTime() < new Date(l).getTime();
  } catch {
    return !1;
  }
}
function ce(e) {
  const t = /* @__PURE__ */ new Date(), a = t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1) + "-" + t.getUTCDate();
  e = e.replace(/today/gi, a);
  const o = e.split("+"), n = o[0].split("-");
  let l = function() {
    return n[0].length < 4 ? new Date(Date.UTC(n[2], n[0] - 1, n[1])) : new Date(Date.UTC(n[0], n[1] - 1, n[2]));
  }();
  o[1] && o[1] > 0 && l.setDate(l.getDate() + parseInt(o[1]));
  try {
    return l.toISOString().replace(/T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g, "");
  } catch {
    return !1;
  }
}
function Zt(e) {
  (!e.pastDateHandling || e.pastDateHandling != "disable" && e.pastDateHandling != "hide") && (e.pastDateHandling = "none");
  const t = function() {
    for (let a = 0; a < e.dates.length; a++)
      if (!e.dates[`${a}`].overdue)
        return !1;
    return !0;
  }();
  return e.allOverdue = !1, t && (e.allOverdue = !0, e.pastDateHandling == "disable" ? e.disabled = !0 : e.pastDateHandling == "hide" && (e.hidden = !0)), (e.disabled || e.hidden) && (e.blockInteraction = !0), e;
}
async function Ft(e) {
  return typeof He != "function" || !e.rsvp || Object.keys(e.rsvp).length === 0 || (e.rsvp.expired = function() {
    return !!(e.rsvp && e.rsvp.expires && new Date(e.rsvp.expires) < /* @__PURE__ */ new Date());
  }(), e.rsvp.bookedOut = await He(e), (e.rsvp.expired || e.rsvp.bookedOut) && (e.blockInteraction = !0), e.blockInteraction && (e.disabled = !0)), e;
}
async function Ee(e) {
  if (!e.name || e.name === "")
    throw new Error("Add to Calendar Button generation failed: required name information missing");
  if (e.dates != null && e.dates.length > 0) {
    if (e.subscribe === !0 && e.dates.length > 1)
      throw new Error("Add to Calendar Button generation failed: a subscription calendar cannot be a multi-date setup");
    const t = ["name", "startDate"], a = ["name"];
    return t.every(function(o) {
      for (let n = 0; n < e.dates.length; n++)
        if (!a.includes(`${o}`) && (!e.dates[`${n}`][`${o}`] || e.dates[`${n}`][`${o}`] === "") || a.includes(`${o}`) && (!e.dates[`${n}`][`${o}`] || e.dates[`${n}`][`${o}`] === "") && (!e[`${o}`] || e[`${o}`] === "")) {
          if (!e.subscribe || o !== "startDate")
            throw new Error("Add to Calendar Button generation failed: required setting missing [dates array object #" + (n + 1) + "/" + e.dates.length + "] => [" + o + "]");
          e.dates[`${n}`].startDate = "today";
        }
      return !0;
    });
  } else
    return ["startDate"].every(function(a) {
      if (!e[`${a}`] || e[`${a}`] === "") {
        if (!e.subscribe || a !== "startDate")
          throw new Error("Add to Calendar Button generation failed: required setting missing [" + a + "]");
        e.startDate = "today";
      }
      return !0;
    });
}
async function rt(e) {
  const t = "Add to Calendar Button generation (" + e.identifier + ")";
  try {
    return await it(e, t), await Pt(e, t), await qt(e, t), await Vt(e, t), await Kt(e, t), await Gt(e, t), await Qt(e, t), await ra(e, t), e.recurrence_simplyfied && await ia(e, t), !0;
  } catch (a) {
    throw new Error(a.message);
  }
}
async function it(e, t, a = "", o = "") {
  const n = function() {
    return a !== "" && e.dates[`${a}`].icsFile ? e.dates[`${a}`].icsFile : a === "" && e.icsFile ? e.icsFile : "";
  }();
  if (n !== "" && (!ae(n, !1) || !e.icsFile.startsWith("https://") && !e.icsFile.startsWith("http://")))
    throw new Error(t + " failed: explicit ics file path not valid" + o);
  return !0;
}
async function Pt(e, t) {
  if (!["default", "3d", "flat", "round", "neumorphism", "text", "date", "custom", "none"].includes(e.buttonStyle))
    throw new Error(t + " failed: provided buttonStyle invalid");
  if (e.customCss && e.customCss !== "" && (!ae(e.customCss, !1) || !/\.css($|\?)/.test(e.customCss)))
    throw new Error(t + " failed: customCss provided, but no valid url");
  if ((!e.customCss || e.customCss === "") && e.buttonStyle === "custom")
    throw new Error(t + ' failed: buttonStyle "custom" selected, but no customCss file provided');
  if (e.rsvp && (e.buttonStyle === "date" || e.buttonStyle === "none"))
    throw new Error(t + " failed: buttonStyle " + e.buttonStyle + " is not compatible with the RSVP functionality");
  return !0;
}
async function qt(e, t) {
  if (e.subscribe === !0 && (!e.icsFile || e.icsFile === ""))
    throw new Error(t + " failed: a subscription calendar requires a valid explicit ics file as well");
  return !0;
}
async function Vt(e, t) {
  if (!/^\d{8}T\d{6}Z$/.test(e.created))
    throw new Error(t + " failed: created date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ");
  return !0;
}
async function Kt(e, t) {
  if (!/^\d{8}T\d{6}Z$/.test(e.updated))
    throw new Error(t + " failed: updated date format not valid. Needs to be a full ISO-8601 UTC date and time string, formatted YYYYMMDDTHHMMSSZ");
  return !0;
}
async function Gt(e, t) {
  return e.options.every((o) => {
    if (!At.includes(o))
      throw new Error(`${t} failed: invalid option [${o}]`);
    return !0;
  });
}
async function Qt(e, t) {
  try {
    for (let a = 0; a < e.dates.length; a++) {
      const o = function() {
        return e.dates.length === 1 ? "" : " [dates array object #" + (a + 1) + "/" + e.dates.length + "] ";
      }();
      await it(e, t, a, o), await Wt(e, t, a, o), await Jt(e, t, a, o), await Xt(e, t, a, o), await ea(e, t, a, o), await ta(e, t, a, o), await aa(e, t, a, o), await oa(e, t, a, o), await na(e, t, a, o);
    }
    return !0;
  } catch (a) {
    throw new Error(a.message);
  }
}
async function Wt(e, t, a, o) {
  if (e.dates[`${a}`].status !== "TENTATIVE" && e.dates[`${a}`].status !== "CONFIRMED" && e.dates[`${a}`].status !== "CANCELLED")
    throw new Error(t + " failed: event status needs to be TENTATIVE, CONFIRMED, or CANCELLED" + o);
  return !0;
}
async function Jt(e, t, a, o) {
  if (e.dates[`${a}`].availability && e.dates[`${a}`].availability !== "" && e.dates[`${a}`].availability !== "free" && e.dates[`${a}`].availability !== "busy")
    throw new Error(t + ' failed: event availability needs to be "free" or "busy"' + o);
  return !0;
}
async function Xt(e, t, a, o) {
  if (e.dates[`${a}`].organizer && e.dates[`${a}`].organizer !== "") {
    const n = e.dates[`${a}`].organizer.split("|");
    if (n.length !== 2 || n[0].length > 50 || n[1].length > 80 || !pe(n[1]))
      throw new Error(t + ' failed: organizer needs to match the schema "NAME|EMAIL" with a valid email address' + o);
  }
  return !0;
}
async function ea(e, t, a, o) {
  if (e.dates[`${a}`].attendee && e.dates[`${a}`].attendee !== "") {
    if (!e.dates[`${a}`].organizer || e.dates[`${a}`].organizer === "")
      throw new Error(t + " failed: if an attendee is set, you also need to set the organizer" + o);
    const n = e.dates[`${a}`].attendee.split("|");
    if (n.length === 1 && pe(n[0]))
      return !0;
    if (n.length !== 2 || n[0].length > 50 || n[1].length > 80 || !pe(n[1]))
      throw new Error(t + ' failed: attendee needs to be a valid email address or match the schema "NAME|EMAIL" with EMAIL being a valid email address' + o);
  }
  return !0;
}
async function ta(e, t, a, o) {
  return /^(\w|-){1,254}$/.test(e.dates[`${a}`].uid) || (e.debug && console.warn(t + ": UID not valid. May only contain alpha, digits, and dashes; and be less than 255 characters. Falling back to an automated value!" + o), e.dates[`${a}`].uid = ft()), !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e.dates[`${a}`].uid) && e.debug && console.warn(t + ": UID is highly recommended to be a hex-encoded random Universally Unique Identifier (UUID)!" + o), !0;
}
async function aa(e, t, a, o) {
  return e.dates[`${a}`].sequence && (e.dates[`${a}`].sequence < 0 || e.dates[`${a}`].sequence % 1 !== 0) && (e.debug && console.log(t + ": sequence needs to be a full number >= 0. Used the default 0 instead" + o), e.dates[`${a}`].sequence = 0), !0;
}
async function oa(e, t, a, o) {
  if (!Tt().includes(e.dates[`${a}`].timeZone))
    throw new Error(t + " failed: invalid time zone given" + o);
  return !0;
}
async function na(e, t, a, o) {
  const n = e.dates[`${a}`], l = ["startDate", "endDate"], c = {};
  if (l.forEach((i) => {
    const s = n[`${i}`];
    if (s.length !== 10)
      throw new Error(`${t} failed: date misspelled [-> YYYY-MM-DD]${o}`);
    const b = s.split("-");
    if (b.length !== 3)
      throw new Error(`${t} failed: date misspelled [${i}: ${s}]${o}`);
    c[`${i}`] = new Date(b[0], b[1] - 1, b[2]);
  }), ["startTime", "endTime"].forEach((i) => {
    const s = n[`${i}`];
    if (s) {
      if (s.length !== 5)
        throw new Error(`${t} failed: time misspelled [-> HH:MM]${o}`);
      const b = s.split(":");
      if (b.length !== 2 || b[0] > 23 || b[1] > 59)
        throw new Error(`${t} failed: time misspelled [${i}: ${s}]${o}`);
      const p = i === "startTime" ? "startDate" : "endDate";
      c[`${p}`] = new Date(c[`${p}`].getTime() + parseInt(b[0], 10) * 36e5 + parseInt(b[1], 10) * 6e4);
    }
  }), n.startTime && !n.endTime || !n.startTime && n.endTime)
    throw new Error(`${t} failed: if you set a starting or end time, the respective other one also needs to be defined${o}`);
  if (c.endDate < c.startDate)
    throw new Error(`${t} failed: end date before start date${o}`);
  return !0;
}
async function ra(e, t) {
  if (e.recurrence && e.recurrence !== "" && e.dates.length > 1)
    throw new Error(t + " failed: RRULE and multi-date set at the same time");
  if (e.recurrence && e.recurrence !== "" && !/^RRULE:[\w=;,:+-/\\]+$/i.test(e.recurrence))
    throw new Error(t + " failed: RRULE data misspelled");
  return !0;
}
async function ia(e, t) {
  if (e.recurrence_interval && (e.recurrence_interval < 1 || e.recurrence_interval % 1 !== 0))
    throw new Error(t + " failed: recurrence data (interval) misspelled");
  if (e.recurrence_until && e.recurrence_until !== "" && !/^(\d|-|:)+$/i.test(e.recurrence_until))
    throw new Error(t + " failed: recurrence data (until) misspelled");
  if (e.recurrence_count && (e.recurrence_count < 1 || e.recurrence_count % 1 !== 0))
    throw new Error(t + " failed: recurrence data (interval) misspelled");
  if (e.recurrence_byMonth && e.recurrence_byMonth !== "" && !/^(\d|,)+$/.test(e.recurrence_byMonth))
    throw new Error(t + " failed: recurrence data (byMonth) misspelled");
  if (e.recurrence_byMonthDay && e.recurrence_byMonthDay !== "" && !/^(\d|,)+$/.test(e.recurrence_byMonthDay))
    throw new Error(t + " failed: recurrence data (byMonthDay) misspelled");
  if (e.recurrence_byDay && e.recurrence_byDay !== "" && !/^(\d|-|MO|TU|WE|TH|FR|SA|SU|,)+$/im.test(e.recurrence_byDay))
    throw new Error(t + " failed: recurrence data (byDay) misspelled");
  if (e.recurrence_weekstart && e.recurrence_weekstart !== "" && !/^(MO|TU|WE|TH|FR|SA|SU)$/im.test(e.recurrence_weekstart))
    throw new Error(t + " failed: recurrence data (weekstart) misspelled");
  return !0;
}
function Y(e, t, a = "", o = null, n = !1, l = !1) {
  t == "open" ? Ue(e, a, o, n, l) : t == "close" || o.classList.contains("atcb-active") || e.querySelector(".atcb-active-modal") ? V(e, n) : Ue(e, a, o, n, l);
}
async function Ue(e, t, a = null, o = !1, n = !1) {
  if (e.querySelector(".atcb-list") || e.querySelector(".atcb-modal"))
    return;
  S("openList", t.identifier, t.identifier), z.active = t.identifier;
  const l = da(e, t), c = document.createElement("div");
  c.classList.add("atcb-list-wrapper"), c.setAttribute("part", "atcb-list-wrapper"), t.hideTextLabelList && c.classList.add("atcb-no-text"), a ? (a.classList.add("atcb-active"), a.setAttribute("aria-expanded", !0), t.listStyle === "modal" ? (a.classList.add("atcb-modal-style"), l.classList.add("atcb-modal")) : (c.append(l), c.classList.add("atcb-dropdown"), t.listStyle === "overlay" && c.classList.add("atcb-dropoverlay")), n && l.classList.add("atcb-generated-button")) : l.classList.add("atcb-modal");
  const r = bt(e, t.trigger, t.listStyle === "modal", !t.hideBackground);
  if (t.listStyle === "modal") {
    const s = await ne(e, t);
    s.querySelector(".atcb-modal-host-initialized").append(r), r.append(l), t.hideBranding || be(s, !1), oe(l, t.sizes), De(s), Z(r);
  } else
    t.forceOverlay && (e = await ba(e, t), a = e.querySelector("button.atcb-button")), e.querySelector(".atcb-initialized").append(c), c.append(l), t.buttonStyle != "default" && c.classList.add("atcb-style-" + t.buttonStyle), t.hideBranding || be(e), e.append(r), oe(l, t.sizes), c.style.display = "none", setTimeout(function() {
      c.style.display = "block", t.listStyle === "dropdown-static" ? we(e, a, c, !0) : t.listStyle === "dropup-static" ? we(e, a, c, !1, !0) : we(e, a, c);
    }, 5), Z(r);
  const i = function() {
    const s = e.querySelector(".atcb-list-item");
    if (s)
      return s;
    const b = document.getElementById(t.identifier + "-modal-host");
    if (b)
      return b.shadowRoot.querySelector(".atcb-list-item");
  }();
  i && (o ? i.focus() : (i.focus({ preventScroll: !0 }), i.blur()));
}
function V(e, t = !1) {
  const a = document.getElementById(e.host.getAttribute("atcb-button-id") + "-modal-host"), o = function() {
    return !a || a.length === 0 ? [] : a.shadowRoot.querySelectorAll(".atcb-modal[data-modal-nr]");
  }();
  if (o.length > 1) {
    a.shadowRoot.querySelectorAll('.atcb-modal[data-modal-nr="' + o.length + '"]')[0].remove();
    const n = a.shadowRoot.querySelectorAll('.atcb-modal[data-modal-nr="' + (o.length - 1) + '"]')[0];
    n.style.display = "block";
    let l = n;
    const c = n.getElementsByTagName("button");
    c.length > 0 && (l = c[0]), l.focus(), t || l.blur();
  } else {
    const n = function() {
      const c = e.querySelector(".atcb-active, .atcb-active-modal");
      return c || document.querySelector(".atcb-active, .atcb-active-modal");
    }();
    n && (n.focus({ preventScroll: !0 }), t || n.blur()), Array.from(e.querySelectorAll(".atcb-active")).forEach((c) => {
      c.classList.remove("atcb-active"), c.setAttribute("aria-expanded", !1);
    }), Array.from(e.querySelectorAll(".atcb-active-modal")).forEach((c) => {
      c.classList.remove("atcb-active-modal");
    }), Array.from(document.querySelectorAll(".atcb-active")).forEach((c) => {
      c.classList.remove("atcb-active"), c.setAttribute("aria-expanded", !1);
    }), Array.from(document.querySelectorAll(".atcb-active-modal")).forEach((c) => {
      c.classList.remove("atcb-active-modal");
    }), a && a.remove(), document.body.classList.remove("atcb-modal-no-scroll"), document.documentElement.classList.remove("atcb-modal-no-scroll"), Array.from(e.querySelectorAll(".atcb-list-wrapper")).concat(Array.from(e.querySelectorAll(".atcb-list"))).concat(Array.from(e.querySelectorAll("#atcb-reference"))).concat(Array.from(e.querySelectorAll("#atcb-bgoverlay"))).forEach((c) => c.remove());
    const l = document.querySelector(".atcb-shadow-hide");
    l && (l.shadowRoot.querySelector(".atcb-initialized").style.opacity = "1", l.classList.remove("atcb-shadow-hide"), window.removeEventListener("scroll", ue), window.removeEventListener("resize", ue)), z.active = "";
  }
}
async function Ne(e, t) {
  let a = e, o = t;
  e.host || (a = a.shadowRoot, o = await Me(o));
  const n = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" /></svg>', l = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" /></svg>', c = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>';
  /*!
   *  @preserve
   *  PER LICENSE AGREEMENT, YOU ARE NOT ALLOWED TO REMOVE OR CHANGE THIS FUNCTION!
   */
  if ((!o.proKey || o.proKey === "") && !window.location.hostname.match(/^(localhost|.*\.add-to-calendar-pro.com)$/))
    return;
  const r = await ne(a, o);
  Z(r.querySelector(".atcb-modal-host-initialized"));
  const i = o.ty;
  (i.type === "link" || i.type === "form") && (!i.url || i.url === "" || !i.url.startsWith("http")) && (i.type = "text"), (!i.headline || i.headline === "") && (i.headline = u("thankyou", o) + "!");
  let s = '<div class="pro"><p id="ty-success-msg">' + u("form.success", o) + '</p><div id="ty-content">';
  i.text && i.text !== "" && (s += K(i.text)), i.type === "share" && (s += `<p class="pro-pt pro-share-buttons">
    <a href="mailto:?subject=${encodeURIComponent(u("label.share.email.subject", o))}&body=%0A&#10142;%20${encodeURIComponent(i.url)}%0A%0A" target="_blank" rel="noopener" class="atcb-modal-btn atcb-modal-btn-primary atcb-modal-btn-border btn-flex">
      ${c}
      ${u("label.share.email", o)}
    </a>
    <button id="atcb-ty-share-copy" class="atcb-modal-btn atcb-modal-btn-primary atcb-modal-btn-border btn-flex">
      ${n}
      ${u("label.share.copy", o)}
    </button>
    </p>`);
  let b = {};
  if (i.type === "form") {
    const p = !i.text || i.text === "" || i.text === void 0, m = function() {
      return i.button_label && i.button_label !== "" ? i.button_label : u("submit", o);
    }();
    if (s += '<form id="' + o.identifier + '-ty-form" class="pro-form' + (p ? " no-intro" : "") + '">', i.fields && i.fields.length > 0) {
      const d = i.fields.find((g) => g.name === "header" && g.type === "hidden");
      if (d && d.default && d.default !== "" && d.default.startsWith("{"))
        try {
          b = JSON.parse(d.default), Object.keys(b).length === 0 && (b.atcb = !0), i.fields = i.fields.filter((g) => g.name !== "header");
        } catch {
        }
      const w = lt(i.fields, o.identifier + "-ty");
      i.fields = w.fields, s += w.html;
    }
    s += '<p id="submit-error"></p>', s += '<p class="pro-pt"><button type="submit" id="pro-form-submit" class="atcb-modal-btn atcb-modal-btn-primary atcb-modal-btn-border">' + m + '</button><span id="pro-form-submitting" class="pro-waiting"><span>.</span><span>.</span><span>.</span></span></p>', s += "</form>";
  }
  if (i.type === "link") {
    const p = function() {
      return i.button_label && i.button_label !== "" ? i.button_label : u("continue", o);
    }();
    s += '<p class="pro-pt"><a href="' + i.url + '" target="_blank" rel="noopener" class="atcb-modal-btn atcb-modal-btn-primary atcb-modal-btn-border">' + p + "</a></p>";
  }
  if (s += "</div></div>", await H(r, o, "checkmark", i.headline, s), i.type === "share") {
    const p = r.getElementById("atcb-ty-share-copy");
    p.addEventListener("click", function() {
      me(i.url), p.innerHTML = l + u("label.share.copied", o) + "!", setTimeout(function() {
        p.innerHTML = n + u("label.share.copy", o);
      }, 3e3);
    }), p.addEventListener("keyup", function(m) {
      m.key === "Enter" && (m.preventDefault(), p.click());
    });
  }
  if (i.type === "form") {
    const p = r.getElementById(o.identifier + "-ty-form"), m = r.getElementById("submit-error"), d = r.getElementById("pro-form-submit"), w = r.getElementById("pro-form-submitting");
    d.addEventListener("click", async function(g) {
      g.preventDefault(), w.style.display = "block", d.style.display = "none";
      let k = ct(r, i.fields);
      if (k || (m.textContent = u("form.error.required", o) + "."), k) {
        const E = [];
        let h = !1;
        if (i.fields.forEach((f) => {
          f.type !== "label" && (f.type === "radio" ? h || (r.querySelectorAll('[name="' + f.name + '"]').forEach(function(x) {
            x.checked && E.push({ name: f.name, value: x.value });
          }), h = !0) : f.type === "checkbox" ? (E.push({ name: f.name, value: r.getElementById(f.fieldId).checked }), h = !1) : (E.push({ name: f.name, value: r.getElementById(f.fieldId).value }), h = !1));
        }), await st(i.url, E, b) === !0) {
          r.getElementById("ty-success-msg").style.display = "block", r.getElementById("ty-content").style.display = "none";
          return;
        }
        m.textContent = u("form.error.sending", o) + ".";
      }
      p.classList.add("form-error"), w.style.display = "none", d.style.display = "block";
    }), d.addEventListener("keyup", function(g) {
      g.key === "Enter" && (g.preventDefault(), d.click());
    });
  }
}
async function R(e, t, a, o = !1) {
  /*!
   *  @preserve
   *  PER LICENSE AGREEMENT, YOU ARE NOT ALLOWED TO REMOVE OR CHANGE THIS FUNCTION!
   */
  const n = t.rsvp, l = !n.text || n.text === "" || n.text === void 0, c = !n.headline || n.headline === "" || n.headline === void 0;
  let r = "", i = '<div class="pro">';
  const s = localStorage.getItem(t.proKey + "-rsvp-sent") || !1;
  s && (i += '<div id="rsvp-sent-content">', i += "<p>" + u("form.success.already", t) + "</p>", t.hideButton || (i += '<div id="rsvp-atcb"></div>'), t.inlineRsvp && (i += '<button id="pro-form-restart" ' + (t.disabled && "disabled") + ' class="atcb-modal-btn atcb-modal-btn btn-small atcb-modal-btn-border">' + u("label.rsvp.restart", t) + "</button>"), i += "</div>"), i += '<div id="rsvp-success-msg"><p>' + u("form.success.sent", t) + '</p><p id="rsvp-success-msg-email">' + u("form.success.email", t) + '</p><p id="rsvp-success-msg-doi">' + u("form.success.doi", t) + "</p></div>", i += '<div id="rsvp-success-msg-demo">' + u("form.success.demo", t) + "</div>", i += '<div id="rsvp-content" ' + (s ? 'style="display:none;"' : "") + ">", n.text && n.text !== "" && (i += K(n.text)), i += '<form id="' + t.identifier + '-rsvp-form" class="pro-form' + (l ? " no-intro" : "") + (c ? " no-headline" : "") + '">';
  const b = t.proKey || "demo-rsvp";
  n.initial_confirmation === !1 ? (i += '<div id="rsvp-status-group">', i += "<p>" + u("form.status", t) + "</p>", i += '<div class="pro-field pro-field-type-radio"><div><input type="radio" name="' + b + '-status" id="' + t.identifier + '-rsvp-status-confirmed" aria-label="' + u("form.status.confirmed", t) + '" checked value="confirmed" ' + (t.disabled && "disabled") + ' /><label for="' + t.identifier + '-rsvp-status-confirmed" class="status-confirmed"><span>' + u("form.status.confirmed", t) + "</span></label></div>", n.maybe_option === !0 && (i += '<div><input type="radio" name="' + b + '-status" id="' + t.identifier + '-rsvp-status-undecided" aria-label="' + u("form.status.undecided", t) + '" value="undecided" ' + (t.disabled && "disabled") + ' /><label for="' + t.identifier + '-rsvp-status-undecided" class="status-undecided"><span>' + u("form.status.undecided", t) + "</span></label></div>"), i += '<div><input type="radio" name="' + b + '-status" id="' + t.identifier + '-rsvp-status-declined" aria-label="' + u("form.status.declined", t) + '" value="declined" ' + (t.disabled && "disabled") + ' /><label for="' + t.identifier + '-rsvp-status-declined" class="status-declined"><span>' + u("form.status.declined", t) + "</span></label></div></div>", i += "</div>") : r += '<input type="hidden" name="' + b + '-status" id="' + t.identifier + '-rsvp-status-confirmed" value="confirmed" />';
  const p = n.maxpp || 1;
  p === 1 ? r += '<input type="hidden" name="' + b + '-amount" id="' + t.identifier + '-rsvp-amount" value="1" />' : (i += '<div class="pro-field"><label for="' + t.identifier + '-rsvp-amount">' + u("form.amount", t) + " (" + u("form.max", t) + " " + p + ")<span>*</span></label>", i += '<input type="number" name="' + b + '-amount" min="1" max="' + p + '" id="' + t.identifier + '-rsvp-amount" ' + (t.disabled && "disabled") + ' aria-label="' + u("form.amount", t) + '" value="1" /></div>');
  const m = function() {
    if (t.attendee && t.attendee !== "") {
      const x = t.attendee.split("|");
      return x.length > 1 ? x[1] : x[0];
    }
    return "";
  }();
  if (m !== "" ? r += '<input type="hidden" name="' + b + '-email" id="' + t.identifier + '-rsvp-email" value="' + m + '" />' : (i += '<div class="pro-field"><label for="' + t.identifier + '-rsvp-email">' + u("form.email", t) + "<span>*</span></label>", i += '<input type="email" name="' + b + '-email" id="' + t.identifier + '-rsvp-email" ' + (t.disabled && "disabled") + ' aria-label="' + u("form.email", t) + '" value="" /></div>'), n.fields && n.fields.length > 0) {
    const x = lt(n.fields, t.identifier + "-rsvp", t.disabled);
    n.fields = x.fields, i += x.html;
  }
  i += r, i += '<p id="submit-error"></p>', i += '<p class="pro-pt"><button type="submit" id="pro-form-submit" ' + (t.disabled && "disabled") + ' class="atcb-modal-btn atcb-modal-btn-primary atcb-modal-btn-border">' + u("submit", t) + '</button><span id="pro-form-submitting" class="pro-waiting"><span>.</span><span>.</span><span>.</span></span></p>', i += "</form>", i += "</div></div>";
  let d = null;
  if (!t.inlineRsvp)
    d = await ne(e, t), Z(d.querySelector(".atcb-modal-host-initialized")), await H(
      d,
      t,
      void 0,
      n.headline,
      i,
      [
        { type: "none", label: u("label.rsvp.restart", t), small: !0, primary: !0, id: "pro-form-restart" },
        { type: "close", label: u("close", t), small: !0, id: "modal-btn-close" },
        { type: "close", label: u("cancel", t), small: !0, id: "modal-btn-cancel" }
      ],
      [],
      o,
      {},
      !1
    );
  else {
    d = e;
    const x = document.createElement("div");
    if (x.classList.add("atcb-modal-box", "rsvp-inline-wrapper"), x.setAttribute("part", "atcb-modal-box"), t.rtl && x.classList.add("atcb-rtl"), a.append(x), n.headline) {
      const y = document.createElement("div");
      y.classList.add("atcb-modal-headline"), x.append(y), y.innerHTML = n.headline;
    }
    const L = document.createElement("div");
    if (L.classList.add("atcb-modal-content"), x.append(L), !t.hideBranding) {
      const y = be(d, !1, !0);
      x.append(y);
    }
    if (n.expired) {
      L.innerHTML = '<div class="pro"><p>' + u("label.rsvp.expired", t) + "</p></div>";
      return;
    } else if (n.bookedOut) {
      L.innerHTML = '<div class="pro"><p>' + u("label.rsvp.bookedout", t) + "</p></div>";
      return;
    } else
      L.innerHTML = i;
  }
  const w = d.getElementById("modal-btn-close"), g = d.getElementById("modal-btn-cancel"), k = d.getElementById("pro-form-restart");
  if (S("openRSVP", t.identifier, t.identifier), t.debug && console.log('RSVP form for "' + t.identifier + '" created'), s) {
    g && (g.style.display = "none");
    const x = d.getElementById("rsvp-atcb");
    if (x && !t.hideButton) {
      const L = JSON.parse(JSON.stringify(t));
      L.hideTextLabelButton = !0, L.hideIconButton = !1, L.buttonsList = !0, dt(e, x, L);
    }
  } else
    w && (w.style.display = "none"), k && (k.style.display = "none");
  const E = d.getElementById(t.identifier + "-rsvp-form"), h = d.getElementById("submit-error"), T = d.getElementById("pro-form-submit"), f = d.getElementById("pro-form-submitting"), v = d.getElementById("pro-form-restart");
  T && (T.addEventListener("click", async function(x) {
    x.preventDefault(), f.style.display = "block", T.style.display = "none";
    const L = [
      { type: "email", name: t.proKey + "-email", fieldId: t.identifier + "-rsvp-email", required: !0 },
      { type: "number", name: t.proKey + "-amount", fieldId: t.identifier + "-rsvp-amount", required: !0 }
    ];
    let y = ct(d, [...L, ...n.fields]);
    const Q = d.getElementById(t.identifier + "-rsvp-amount"), re = parseInt(Q.value) || 1;
    if (n.maxpp && n.maxpp > 0 && re > n.maxpp && (Q.classList.add("error"), y = !1), y || (h.textContent = u("form.error.required", t) + "."), y) {
      if (!t.proKey || t.proKey === "") {
        d.getElementById("rsvp-success-msg-demo").style.display = "block", d.getElementById("rsvp-content").style.display = "none", S("successRSVP", t.identifier, t.identifier), g && (g.style.display = "none"), w && (w.style.display = "block");
        return;
      }
      const U = [];
      U.push({ name: "prokey", value: t.proKey }), U.push({ name: "language", value: t.language });
      const Ce = d.querySelector('[name="' + t.proKey + '-status"]:checked');
      U.push({ name: "status", value: Ce ? Ce.value : "confirmed" }), U.push({ name: "amount", value: re }), U.push({ name: "email", value: d.getElementById(t.identifier + "-rsvp-email").value }), t.dev && U.push({ name: "dev", value: !0 });
      const W = {};
      let ie = !1;
      n.fields.forEach((I) => {
        I.type !== "label" && (I.type === "radio" ? ie || (d.querySelectorAll('[name="' + I.name + '"]').forEach(function(Be) {
          Be.checked && (W[I.name] = Be.value);
        }), ie = !0) : I.type === "checkbox" ? (W[I.name] = d.getElementById(I.fieldId).checked, ie = !1) : (W[I.name] = d.getElementById(I.fieldId).value, ie = !1));
      }), Object.keys(W).length > 0 && U.push({ name: "payload", value: W });
      const $ = await st("https://api.add-to-calendar-pro.com/24586219-9910-41fe-9b59-df53de9db7af", U, { rsvp: !0 });
      if ($ === "doi" || $ === !0) {
        d.getElementById("rsvp-success-msg").style.display = "block", $ === "doi" ? d.getElementById("rsvp-success-msg-doi").style.display = "block" : d.getElementById("rsvp-success-msg-email").style.display = "block", d.getElementById("rsvp-content").style.display = "none", g && (g.style.display = "none"), w && (w.style.display = "block"), S("successRSVP", t.identifier, t.identifier), localStorage.setItem(t.proKey + "-rsvp-sent", !0);
        return;
      }
      $.error && $.error === 2 ? h.textContent = u("form.error.email", t) + "." : $.error && $.error === 5 ? h.textContent = u("label.rsvp.expired", t) + "." : $.error && $.error === 6 ? re > 1 ? h.textContent = u("form.error.bookedoutmany", t) + "." : h.textContent = u("label.rsvp.bookedout", t) + "." : h.textContent = u("form.error.sending", t) + ".";
    }
    E.classList.add("form-error"), f.style.display = "none", T.style.display = "block";
  }), T.addEventListener("keyup", function(x) {
    x.key === "Enter" && (x.preventDefault(), T.click());
  })), v && (v.addEventListener("click", function(x) {
    x.preventDefault(), d.getElementById("rsvp-sent-content").style.display = "none", d.getElementById("rsvp-content").style.display = "block", w && (w.style.display = "none"), k && (k.style.display = "none"), g && (g.style.display = "block");
  }), v.addEventListener("keyup", function(x) {
    x.key === "Enter" && (x.preventDefault(), v.click());
  }));
}
async function la(e, t) {
  const a = e.querySelector(".atcb-initialized"), o = document.createElement("div");
  o.classList.add("atcb-button-wrapper"), t.rtl && o.classList.add("atcb-rtl"), a.append(o), oe(o, t.sizes);
  const n = document.createElement("button");
  n.classList.add("atcb-button", "atcb-click", "atcb-single"), t.disabled && n.setAttribute("disabled", !0), t.hideTextLabelButton && n.classList.add("atcb-no-text"), n.type = "button", n.setAttribute("aria-expanded", !1), o.append(n);
  const l = function() {
    return t.rsvp.expired ? u("label.rsvp.expired", t) : t.rsvp.bookedOut ? u("label.rsvp.bookedout", t) : u("label.rsvp", t);
  }();
  return te(e, t, n, "rsvp", !t.hideIconButton, l, !0), t.debug && console.log('Add to Calendar RSVP Button "' + t.identifier + '" created'), !0;
}
async function He(e) {
  if (e.rsvp && e.rsvp.max && e.proKey && e.proKey !== "")
    try {
      const t = await fetch("https://api.add-to-calendar-pro.com/dffb8bbd-ee5e-4a4f-a7ea-503af98ca468?prokey=" + e.proKey + (e.dev ? "&dev=true" : ""), {
        method: "GET"
      });
      if (!t.ok)
        throw new Error("Network response was not ok");
      const a = await t.json();
      if (parseInt(a.total) >= e.rsvp.max)
        return !0;
    } catch (t) {
      console.error("Error:", t);
    }
  return !1;
}
function lt(e, t = "", a = !1) {
  /*!
   *  @preserve
   *  PER LICENSE AGREEMENT, YOU ARE NOT ALLOWED TO REMOVE OR CHANGE THIS FUNCTION!
   */
  let o = "", n = "", l = 0, c = "", r = !1;
  for (let i = 1; i <= e.length; i++) {
    r = !1;
    const s = e[i - 1];
    if (s.type !== "label" && (!s.name || s.name === "")) {
      r = !0;
      continue;
    }
    (c === "radio" && s.type !== "radio" || c !== "radio") && (l = i), e[i - 1].fieldId = t + "-" + i;
    const b = s.type === "radio" ? s.placeholder || "" : s.default || "", p = s.label || "", m = s.type === "radio" ? "" : s.placeholder || "";
    let d = "";
    c !== "hidden" && i === l && i !== 1 && !r && (d += "</div>"), s.type !== "hidden" && i === l && (d += '<div class="pro-field pro-field-type-' + s.type + '">'), s.type === "label" ? d += "<p>" + p + "</p>" : (s.type === "radio" && (d += "<div>"), s.type === "hidden" ? n += '<input type="hidden" name="' + s.name + '" id="' + s.fieldId + '" value="' + b + '" />' : d += ca(s.type, s.name, p, s.fieldId, s.required, b, s.default, m, a), s.type === "radio" && (d += "</div>")), o += d, c = s.type;
  }
  return c !== "hidden" && (o += "</div>"), o += n, { html: o, fields: e };
}
function ca(e, t, a, o, n = !1, l, c = null, r = "", i = !1) {
  let s = "";
  return (e === "text" || e === "number") && (a !== "" || n) && (s += '<label for="' + o + '">' + a + (n ? "<span>*</span>" : "") + "</label>"), s += '<input type="' + e + '"' + (e === "number" ? ' min="0"' : "") + ((e === "checkbox" || e === "radio") && c && (c === "true" || c === !0) ? " checked" : "") + ' name="' + t + '" id="' + o + '" placeholder="' + r + '" ' + (i && "disabled") + ' aria-label="' + a + '" value="' + l + '" />', (e === "checkbox" || e === "radio") && (a !== "" || n) && (s += '<label for="' + o + '">' + a + (n ? "<span>*</span>" : "") + "</label>"), s;
}
function ct(e, t) {
  /*!
   *  @preserve
   *  PER LICENSE AGREEMENT, YOU ARE NOT ALLOWED TO REMOVE OR CHANGE THIS FUNCTION!
   */
  let a = !0;
  return t.forEach(function(o) {
    if (o.type !== "label" && o.type !== "radio") {
      const n = e.getElementById(o.fieldId);
      if (o.type !== "checkbox") {
        if (n.value = G(n.value.trim()), o.type === "number" && (n.value = n.value.replace(/\D/g, "")), o.type === "email" && n.value !== "" && !pe(n.value)) {
          n.classList.add("error"), a = !1;
          return;
        }
        if (o.required && n.value === "") {
          n.classList.add("error"), a = !1;
          return;
        } else
          n.classList.remove("error");
      } else if (o.required && n.checked === !1) {
        n.classList.add("error"), a = !1;
        return;
      } else
        n.classList.remove("error");
    }
    if (o.type === "radio") {
      const n = e.querySelectorAll('[name="' + o.name + '"]');
      let l = !1;
      if (n.forEach(function(c) {
        c.checked && (l = !0);
      }), l === !1) {
        n[0].classList.add("error"), a = !1;
        return;
      } else
        n[0].classList.remove("error");
    }
  }), a;
}
async function st(e, t, a = {}) {
  /*!
   *  @preserve
   *  PER LICENSE AGREEMENT, YOU ARE NOT ALLOWED TO REMOVE OR CHANGE THIS FUNCTION!
   */
  let o = new FormData(), n = {}, l = {};
  Object.keys(a).length === 0 ? (t.forEach((c) => {
    o.append(c.name, c.value);
  }), l = { method: "POST", body: o }) : (a["Cache-Control"] = "no-cache", a["Content-Type"] = "application/json", a.Accept = "*/*", t.forEach((c) => {
    n[c.name] = c.value;
  }), l = { method: "POST", headers: a, body: JSON.stringify(n) });
  try {
    const c = await fetch(e, l), r = await c.json();
    return c.ok ? r.status && r.status === "doi" ? "doi" : !0 : (console.error("Network response was not ok"), r.error ? r : !1);
  } catch (c) {
    return console.error("Error:", c), !1;
  }
}
function te(e, t, a, o, n = !1, l = "", c = !1) {
  switch (o) {
    case "trigger":
    case "rsvp":
    default:
      a.id = t.identifier, t.blockInteraction || (a.addEventListener("keyup", function(r) {
        (r.key === "Enter" || r.code == "Space" || r.key === "Alt" && r.key === "Control" && r.code === "Space") && (r.preventDefault(), o === "rsvp" && typeof R == "function" ? R(e, t, a, !0) : Y(e, "auto", t, a, !0, !0));
      }), a.addEventListener(
        "touchend",
        N((r) => {
          r.preventDefault(), o === "rsvp" && typeof R == "function" ? R(e, t, a) : Y(e, "auto", t, a, !1, !0);
        })
      ), t.trigger === "click" || o === "rsvp" && typeof R == "function" ? a.addEventListener(
        "mouseup",
        N((r) => {
          r.preventDefault(), o === "rsvp" && typeof R == "function" ? R(e, t, a) : Y(e, "auto", t, a, !1, !0);
        })
      ) : a.addEventListener(
        "mouseenter",
        N((r) => {
          r.preventDefault(), Y(e, "open", t, a, !1, !0);
        })
      ));
      break;
    case "apple":
    case "google":
    case "ical":
    case "msteams":
    case "ms365":
    case "outlookcom":
    case "yahoo":
      a.id = t.identifier + "-" + o, t.blockInteraction || (a.addEventListener(
        "click",
        N(() => {
          var r;
          c ? ((r = e.querySelector("#" + a.id)) == null || r.blur(), S("openSingletonLink", a.id, t.identifier)) : (Y(e, "close"), S("openCalendarLink", a.id, t.identifier)), j(e, o, t);
        })
      ), a.addEventListener("keyup", function(r) {
        var i;
        r.key === "Enter" && (r.preventDefault(), c ? ((i = e.querySelector("#" + a.id)) == null || i.blur(), S("openSingletonLink", a.id, t.identifier)) : (Y(e, "close"), S("openCalendarLink", a.id, t.identifier)), j(e, o, t, "all", !0));
      }));
      break;
    case "close":
      a.id = t.identifier + "-close", a.addEventListener(
        "click",
        P(() => {
          S("closeList", "List Close Button", z.active), Y(e, "close");
        })
      ), a.addEventListener("keyup", function(r) {
        r.key === "Enter" && (r.preventDefault(), S("closeList", "List Close Button", z.active), Y(e, "close", t, "all", !0));
      });
      break;
  }
  sa(t, a, o, n, l, c);
}
function sa(e, t, a, o, n, l) {
  const c = function() {
    if (e.pastDateHandling != "none") {
      let r = !0;
      for (let i = 0; i < e.dates.length; i++)
        if (!e.dates[`${i}`].overdue) {
          r = !1;
          break;
        }
      if (r)
        return u("expired", e);
    }
    return u("label.addtocalendar", e);
  }();
  if (n === "" && (e.options.length === 1 || a === "trigger" ? n = c : a === "close" ? n = u("close", e) : n = u(a, e)), t.setAttribute("aria-label", l ? u("label.addtocalendar", e) + ": " + e.name + ": " + n : a === "trigger" ? n + ": " + e.name : n), !(e.buttonStyle === "date" && (a === "trigger" || l))) {
    if (o) {
      const r = document.createElement("div");
      r.classList.add("atcb-icon"), r.setAttribute("part", a === "trigger" ? "atcb-button-icon" : "atcb-list-icon"), r.classList.add(`atcb-icon-${a}`), r.innerHTML = q[`${a}`], t.append(r);
    }
    if ((a === "trigger" || l) && !e.hideTextLabelButton || !l && a !== "trigger" && !e.hideTextLabelList) {
      const r = document.createElement("span");
      r.classList.add("atcb-text"), r.setAttribute("part", a === "trigger" ? "atcb-button-text" : "atcb-list-text"), r.textContent = n, t.append(r);
    }
  }
}
function dt(e, t, a) {
  const o = function() {
    return !!(a.options.length === 1 || a.buttonsList && a.buttonStyle != "date");
  }();
  (o ? a.options : ["default"]).forEach(function(l, c) {
    const r = document.createElement("div");
    r.classList.add("atcb-button-wrapper"), r.setAttribute("part", "atcb-button-wrapper"), a.rtl && r.classList.add("atcb-rtl"), t.append(r), oe(r, a.sizes);
    const i = document.createElement("button");
    if (i.classList.add("atcb-button"), i.setAttribute("part", "atcb-button"), a.disabled && i.setAttribute("disabled", !0), a.hideTextLabelButton && i.classList.add("atcb-no-text"), a.trigger === "click" && i.classList.add("atcb-click"), a.listStyle === "overlay" && i.classList.add("atcb-dropoverlay"), i.type = "button", i.setAttribute("aria-expanded", !1), r.append(i), a.buttonStyle === "date" && pt(a, i), o) {
      i.classList.add("atcb-single");
      const s = function() {
        return a.buttonsList && a.options.length > 1 ? u(`${a.options[`${c}`]}`, a) : a.label;
      }();
      te(e, a, i, l, !a.hideIconButton, s, !0), i.id = a.identifier, a.buttonsList && (i.id = a.identifier + "-" + l);
    } else {
      te(e, a, i, "trigger", !a.hideIconButton, a.label);
      const s = document.createElement("div");
      s.classList.add("atcb-dropdown-anchor"), i.append(s);
    }
    if (!a.hideCheckmark && !a.hideTextLabelButton && !a.buttonsList && !a.disabled) {
      const s = document.createElement("div");
      s.classList.add("atcb-checkmark"), s.innerHTML = q.checkmark, i.append(s);
    }
  }), a.debug && console.log('Add to Calendar Button "' + a.identifier + '" created');
}
function da(e, t) {
  const a = document.createElement("div");
  a.classList.add("atcb-list"), a.setAttribute("part", "atcb-list"), a.role = "list", t.rtl && a.classList.add("atcb-rtl");
  let o = 0;
  if (t.options.forEach(function(n) {
    const l = document.createElement("div");
    l.classList.add("atcb-list-item"), l.setAttribute("part", "atcb-list-item"), l.role = "link", l.tabIndex = 0, o++, l.dataset.optionNumber = o, a.append(l), te(e, t, l, n, !t.hideIconList);
  }), t.listStyle === "modal") {
    const n = document.createElement("div");
    n.classList.add("atcb-list-item", "atcb-list-item-close"), n.setAttribute("part", "atcb-list-item-close"), n.role = "button", n.tabIndex = 0, o++, n.dataset.optionNumber = o, a.append(n), te(e, t, n, "close", !t.hideIconList);
  }
  return a;
}
function bt(e, t = "", a = !1, o = !0, n = !0) {
  const l = function() {
    return a ? document.createElement("dialog") : document.createElement("div");
  }();
  if (a && l.setAttribute("open", !0), l.id = "atcb-bgoverlay", o || l.classList.add("atcb-no-bg"), l.role = "button", l.tabIndex = 0, n) {
    l.addEventListener(
      "mouseup",
      N((r) => {
        r.target === r.currentTarget && (S("closeList", "Background Hit", z.active), Y(e, "close"));
      })
    );
    let c = !1;
    l.addEventListener(
      "touchstart",
      N(() => c = !1),
      { passive: !0 }
    ), l.addEventListener(
      "touchmove",
      N(() => c = !0),
      { passive: !0 }
    ), l.addEventListener(
      "touchend",
      P((r) => {
        c !== !1 || r.target !== r.currentTarget || (S("closeList", "Background Hit", z.active), Y(e, "close"));
      }),
      { passive: !0 }
    ), t !== "click" ? l.addEventListener(
      "mousemove",
      N((r) => {
        r.target === r.currentTarget && (S("closeList", "Background Hit", z.active), Y(e, "close"));
      })
    ) : l.classList.add("atcb-click");
  }
  return l;
}
function be(e, t = !0, a = !1) {
  //do not uncomment these lines
  // const o = document.createElement("div");
  // if (o.id = "atcb-reference", setTimeout(() => {
  //   const n = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.916 2.8305"><path d="M51.446 1.2565c.0708-.2518.293-.4511.5555-.4783.2211-.042.4641.0128.622.18.2474.2472.3045.6146.2916.9503v.8594h-.8307l-.0027-1.0447c-.0079-.1547-.1075-.343-.2868-.3238-.2049.0128-.3115.2421-.295.4257v.9428h-.823l-.0027-1.0435c-.0076-.1569-.1131-.3412-.2918-.3252-.2069.008-.311.2351-.2939.4188v.9499h-.8307V.8237h.8307v.4019c.0906-.2264.2876-.4188.5368-.449.2878-.0533.6071.0705.7509.3331.0279.0465.0509.0959.0699.1468zm-3.9843.5228c-.0102.1874.107.3914.3024.424.1869.0419.3799-.0941.4215-.2776.0535-.1967-.0023-.4493-.2015-.5411-.1767-.0892-.4107.0032-.483.1865-.0297.0649-.0391.1374-.0392.2082zm-.7691 0c.0037-.2984.1395-.5957.3792-.7774.3035-.2327.7168-.2798 1.0829-.2005.3299.0729.6352.3018.7481.6275.1337.3797.0441.8526-.2795 1.1099-.3184.2561-.7624.3092-1.152.2184-.3379-.0788-.6426-.3312-.7369-.6717a1.092 1.092 0 0 1-.0417-.3063zm-.2351-.3308c-.1638-.0482-.3406-.0889-.5104-.0492s-.2742.2154-.2664.3837c-.0082.1705.0998.3468.2712.3876.1657.0389.3389.0016.4979-.0492l.0769.5499c-.2369.1272-.5165.1434-.7791.1149-.3236-.0401-.6353-.2311-.7805-.529-.1237-.2511-.139-.5539-.0485-.8181.108-.3075.3782-.5432.6902-.6287.2064-.058.4286-.0585.6371-.0119.1027.0253.198.0732.2884.1269l-.0769.523zm-2.6877.9806c-.003-.1221.066-.2371.1643-.3062.1303-.0934.3092-.1186.4572-.0533.132.054.2426.1752.2607.3197s-.0575.2836-.1746.3603c-.1633.1093-.3947.1063-.5517-.0135-.0951-.0715-.1577-.187-.1559-.307zm-3.046-1.0111c-.0091-.4276.1794-.8577.5181-1.1231.3714-.2958.8865-.3488 1.3384-.2477.4065.0946.7695.3811.9242.7731.2302.553.1173 1.2562-.3406 1.6606-.4021.3563-.9997.4264-1.5018.273-.4407-.1312-.7876-.5106-.8926-.9564a1.565 1.565 0 0 1-.0458-.3795zm1.4499.6961c.2631.014.4813-.2093.5326-.4557.0785-.3033.0224-.6834-.2491-.8753-.2182-.159-.5514-.1019-.704.1211-.1692.2437-.1902.5756-.088.8501.0775.2087.2816.3661.5085.3597zm-1.631.6458c-.1978.0602-.4078.0938-.6123.0464-.2697-.0443-.5044-.2371-.6009-.4927-.0701-.1852-.1026-.3819-.154-.5728h-.1846v1.0268h-.8614V.0601l1.3192.0034c.3398.0217.7177.1323.9118.434.152.2456.127.584-.0389.8163-.0979.1284-.2387.2162-.3846.2807.0316.1513.0475.3167.1461.4418.1193.1187.3064.1031.4596.0812v.6422zm-.871-1.8651c.0103-.138-.1243-.231-.25-.2384-.1427-.0193-.2871-.0088-.4307-.0115v.5422c.1905-.0038.3947.0138.5678-.0796a.234.234 0 0 0 .1128-.2126zM35.573.0603l1.1424.0047c.3439.0209.7218.1098.9446.3944.2252.2934.2163.7545-.0512 1.0195-.279.2859-.698.3701-1.0838.362-.0329.0105-.1126-.0258-.102.0281v.8987h-.8499V.0603zm1.0192 1.2345c.1672.0054.3805-.0562.4233-.2409.0425-.1434-.0225-.3102-.1619-.3724-.1328-.0705-.2859-.0537-.4306-.0559v.6615c.0561.0073.1128.0073.1692.0077zm-2.5176.2226h1.0576v.4653h-1.0576zM32.3311.8234h.8307v.4019q.0942-.2384.25-.348.1577-.1115.3615-.1115l.1154.6442q-.375 0-.5519.0808-.175.0788-.175.2538v1.023h-.8307zm-1.2257 1.5791c-.0937.2116-.2986.3716-.5319.3897-.3887.0533-.7844-.1743-.9578-.5217-.2044-.381-.1519-.892.1543-1.2049.2461-.2614.6627-.389.9973-.2285.1574.0799.2779.2236.3381.3886V.7662h.8268v2.0017h-.8268v-.3653zm0-.6345c-.0052-.2449-.2747-.4425-.5088-.3585-.217.0615-.3402.3271-.243.5316.0896.2161.3875.3078.5783.1678.1106-.0747.179-.2073.1735-.3408zM27.7118.7662c.2401-.008.4923.1021.6064.3222.0351.0816.045.0806.0397.0023V.1721l.8307-.1231v2.7189h-.8307v-.3653c-.0907.2158-.3003.3744-.5356.39-.3605.0507-.7279-.1432-.9123-.4525-.2569-.3983-.1992-.9693.1456-1.2985.173-.1702.412-.2772.6563-.2754zm.6461 1.0018c-.0048-.2526-.2909-.4519-.5276-.3518-.2324.0782-.3309.3933-.1843.5898.1239.1938.425.2285.5871.0636.0811-.0768.1287-.1897.1248-.3015zM24.139.8233h.7922v.4019c.1006-.2169.2949-.397.5347-.4408.2696-.0572.58.0085.76.2293.2045.2403.2438.5692.2358.8734v.8802h-.8268l-.0022-1.1213c-.004-.1252-.0677-.2748-.2066-.2939-.2045-.0306-.3739.1457-.4412.3226-.0292.0785-.0098.1646-.0154.2467v.8459h-.8306V.8233zm-1.0416 1.4236c.2011-.0002.3981-.0574.5807-.1384l.0961.5288c-.3198.1421-.6806.1894-1.027.145-.3369-.0473-.6587-.2545-.8007-.5699-.1588-.3469-.1132-.7886.1413-1.0788.2741-.3191.7406-.4335 1.1413-.3308.2768.0734.5008.3019.5751.5779.0429.146.0624.3015.043.453l-1.1806.1538c.0368.134.158.2311.2944.2482.0449.0082.0907.0114.1363.0114zm.1461-.7557c-.0268-.1234-.1257-.237-.2578-.244-.143-.0241-.2868.0725-.325.2111-.0103.0527-.0737.2029.0271.1552l.5558-.1223zm-1.4939 1.1721c-.2463.1208-.5356.1686-.805.1092-.227-.0527-.3993-.2481-.4518-.4712-.0545-.2125-.0296-.4333-.0353-.6502V.1714l.8307-.1231.0011 1.9292c.002.1378.1537.1938.2711.1813.0651.0169.1819-.1.162.0152l.0274.4893zm-2.5115-.2609c-.0937.2116-.2986.3716-.5319.3897-.3887.0533-.7844-.1743-.9578-.5217-.2044-.381-.1519-.892.1543-1.2049.2461-.2614.6627-.389.9973-.2285.1574.0799.2779.2236.3381.3886V.7661h.8268v2.0017h-.8268v-.3653zm0-.6345c-.0052-.2449-.2747-.4425-.5088-.3585-.217.0615-.3402.3271-.243.5316.0896.2161.3875.3078.5783.1678.1106-.0747.179-.2073.1735-.3408zm-2.3726.35c.1696.0054.3334-.0479.4884-.1115l.1077.6249c-.5137.3026-1.2229.2625-1.6732-.1399-.2959-.2444-.4693-.6191-.4819-1.0009-.0323-.4791.181-.9792.5853-1.2496.4565-.3128 1.0898-.3142 1.5659-.0438l-.1038.6115c-.2721-.1029-.5957-.168-.8667-.0274-.2291.1239-.3077.4039-.2984.6481-.0043.2465.1061.5161.3427.6212.1037.0495.2198.0676.3339.0676zm-2.923-.6005h1.0576v.4653h-1.0576zm-1.7829.2619c-.0102.1874.107.3914.3024.424.1869.0419.3799-.0941.4215-.2776.0535-.1967-.0023-.4493-.2015-.5411-.1767-.0892-.4107.0032-.4831.1865-.0297.0649-.0391.1374-.0392.2082zm-.7691 0c.0037-.2984.1395-.5957.3792-.7774.3035-.2327.7168-.2798 1.0829-.2005.33.0729.6352.3018.7481.6275.1337.3797.0441.8526-.2795 1.1099-.3184.2561-.7624.3092-1.152.2184-.3379-.0788-.6426-.3312-.7369-.6717a1.092 1.092 0 0 1-.0417-.3063zm-.1976.8841c-.2463.1208-.5356.1686-.805.1092-.227-.0527-.3993-.2481-.4518-.4712-.0557-.2169-.0286-.4422-.0334-.6635l.0019-.3551h-.25V.7943h.3115l.3653-.7461h.4v.7461h.4538v.4884h-.4538l.0011.6943c.0034.1365.1541.1943.2715.1818.0768.006.1848-.0959.1624.0301l.0265.4744zm-2.7861-1.146h1.0575v.4653H8.4068zM6.5412.7662c.2401-.008.4923.1021.6064.3223.0351.0816.045.0806.0397.0023V.172l.8307-.1231v2.7189h-.8307v-.3653c-.0907.2158-.3003.3744-.5356.39-.3605.0507-.7279-.1432-.9123-.4525-.2569-.3983-.1992-.9693.1456-1.2985.173-.1702.412-.2772.6563-.2754zm.6461 1.0018c-.0048-.2526-.2909-.4519-.5276-.3518-.2324.0782-.3308.3933-.1843.5898.1239.1938.425.2285.5871.0636.0811-.0768.1287-.1897.1248-.3015zM3.7956.7662c.2401-.008.4923.1021.6064.3222.0351.0816.045.0806.0397.0023V.172l.8307-.1231v2.7189h-.8307v-.3653c-.0907.2158-.3003.3744-.5356.39-.3605.0507-.7279-.1432-.9123-.4525-.2569-.3983-.1992-.9693.1456-1.2985.173-.1702.4119-.2772.6563-.2754zm.6461 1.0018c-.0048-.2526-.2909-.4519-.5276-.3518-.2324.0782-.3308.3933-.1843.5898.1239.1938.425.2285.5871.0636.0811-.0768.1287-.1897.1248-.3015zM.7498.0603h1.196l.7845 2.7074h-.9268l-.1038-.5192H.9997l-.1115.5192h-.8883zm.8576 1.7037L1.3497.5795 1.0843 1.764z"/></svg>';
  //   o.innerHTML = '<a href="https://add-to-calendar-pro.com" target="_blank" rel="noopener">' + n + "</a>";
  // }, 500), t)
  //   e.querySelector(".atcb-initialized .atcb-list-wrapper").append(o);
  // else {
  //   if (a)
  //     return o;
  //   (window.innerHeight > 1e3 || window.innerWidth > 1e3) && (e.append(o), o.classList.add("fixed-ref"));
  // }
}
async function H(e, t, a = "", o, n = "", l = [], c = [], r = !1, i = {}, s = !0) {
  z.active = t.identifier;
  const b = !o || o === "" || o === void 0, p = await ne(e, t, !1), m = function() {
    const h = p.getElementById("atcb-bgoverlay");
    if (!h) {
      const T = bt(e, "click", !0, !t.hideBackground, s);
      return p.querySelector(".atcb-modal-host-initialized").append(T), T;
    }
    return h;
  }(), d = document.createElement("div");
  d.classList.add("atcb-modal"), m.append(d);
  const w = p.querySelectorAll(".atcb-modal").length;
  d.dataset.modalNr = w, d.tabIndex = 0, d.focus({ preventScroll: !0 }), d.blur();
  const g = function() {
    const h = e.getElementById(t.identifier);
    return h || document.getElementById(t.identifier);
  }();
  g && g.classList.add("atcb-active-modal");
  const k = document.createElement("div");
  if (k.classList.add("atcb-modal-box"), k.setAttribute("part", "atcb-modal-box"), t.rtl && k.classList.add("atcb-rtl"), d.append(k), oe(k, t.sizes), Z(m), a !== "" && !t.hideIconModal) {
    const h = document.createElement("div");
    h.classList.add("atcb-modal-icon"), h.innerHTML = q[`${a}`], k.append(h);
  }
  if (!b) {
    const h = document.createElement("div");
    h.classList.add("atcb-modal-headline"), h.textContent = o, k.append(h);
  }
  if (n !== "") {
    const h = document.createElement("div");
    h.classList.add("atcb-modal-content"), b && h.classList.add("no-headline"), h.innerHTML = n, k.append(h);
  }
  if (t.hideBranding || be(p, !1), c.length > 1) {
    const h = document.createElement("div");
    h.classList.add("atcb-modal-content"), k.append(h);
    const T = document.createElement("div");
    T.classList.add("atcb-modal-content-subevents"), h.append(T);
    for (let f = 1; f < c.length; f++) {
      const v = document.createElement("button");
      v.type = "button", v.id = t.identifier + "-" + c[0] + "-" + f, z[`${t.identifier}`][`${c[0]}`][f - 1] > 0 && v.classList.add("atcb-saved"), v.classList.add("atcb-subevent-btn"), T.append(v), pt(t, v, f), !t.dates[f - 1].overdue || t.pastDateHandling === "none" ? (f === 1 && r && v.focus(), v.addEventListener(
        "click",
        P(() => {
          S("openSubEventLink", v.id, t.identifier), v.blur(), j(e, c[0], t, c[`${f}`], r, !0);
        })
      )) : v.setAttribute("disabled", !0);
    }
  }
  l.length === 0 && l.push({ type: "close", label: u("close", t), small: !0 });
  const E = document.createElement("div");
  E.classList.add("atcb-modal-buttons"), k.append(E), l.forEach((h, T) => {
    let f;
    switch (h.href && h.href !== "" ? (f = document.createElement("a"), f.setAttribute("target", _e), f.setAttribute("href", h.href), f.setAttribute("rel", "noopener")) : (f = document.createElement("button"), f.type = "button"), h.id && h.id !== "" && (f.id = h.id), f.classList.add("atcb-modal-btn"), h.primary && f.classList.add("atcb-modal-btn-primary"), h.small && f.classList.add("btn-small"), (!h.label || h.label === "") && (h.label = u("modal.button.default", t)), f.textContent = h.label, E.append(f), T === 0 && c.length < 2 && r && f.focus(), h.type) {
      default:
      case "close":
        f.addEventListener(
          "click",
          P(() => {
            S("closeList", "Modal Close Button", z.active), V(e);
          })
        ), f.addEventListener("keyup", function(v) {
          (v.key === "Enter" || v.code == "Space" || v.key === "Alt" && v.key === "Control" && v.code === "Space") && (S("closeList", "Modal Close Button", z.active), Y(e, "close", "", "", !0));
        });
        break;
      case "yahoo2nd":
        f.addEventListener(
          "click",
          P(() => {
            V(e), je(e, t);
          })
        ), f.addEventListener("keyup", function(v) {
          (v.key === "Enter" || v.code == "Space" || v.key === "Alt" && v.key === "Control" && v.code === "Space") && (Y(e, "close", "", "", !0), je(e, t, r));
        });
        break;
      case "2timeslink":
        f.addEventListener(
          "click",
          P(() => {
            V(e), j(e, i.type, t, i.id, r, !1, !0);
          })
        ), f.addEventListener("keyup", function(v) {
          (v.key === "Enter" || v.code == "Space" || v.key === "Alt" && v.key === "Control" && v.code === "Space") && (Y(e, "close", "", "", !0), j(e, i.type, t, i.id, r, !1, !0));
        });
        break;
      case "none":
        break;
    }
  }), w > 1 && p.querySelector('.atcb-modal[data-modal-nr="' + (w - 1) + '"]').classList.add("atcb-hidden"), De(p, d);
}
function je(e, t, a) {
  he(e, t), j(e, "yahoo2nd", t, "all", a);
}
function pt(e, t, a = "all") {
  a != "all" ? a = parseInt(a) - 1 : e.dates.length == 1 && (a = 0);
  const o = za(e.dates, e.language, a), n = function() {
    return a != "all" && e.dates[`${a}`].status == "CANCELLED" ? u("date.status.cancelled", e) + "<br>" + u("date.status.cancelled.cta", e) : e.pastDateHandling != "none" && (a == "all" && e.allOverdue || a != "all" && e.dates[`${a}`].overdue) ? u("expired", e) : e.label && e.label != "" ? e.label : "+ " + u("label.addtocalendar", e);
  }(), l = function() {
    return a != "all" && e.dates[`${a}`].status == "CANCELLED" ? u("date.status.cancelled", e) : "";
  }(), c = function() {
    return o.length == 0 ? u("recurring", e) + " &#x27F3;" : "&#x27F3;";
  }();
  let r = !1;
  a === "all" && (a = 0, r = !0);
  const i = new Date(C(e.dates[`${a}`]).start), s = C(e.dates[`${a}`]).allday, b = e.dates[`${a}`].timeZone, p = document.createElement("div");
  p.classList.add("atcb-date-btn-left"), t.append(p);
  const m = document.createElement("div");
  m.classList.add("atcb-date-btn-day"), p.append(m);
  const d = document.createElement("div");
  d.classList.add("atcb-date-btn-month"), m.textContent = function() {
    return s ? i.toLocaleString(e.language, { day: "numeric" }) : i.toLocaleString(e.language, {
      day: "numeric",
      timeZone: b
    });
  }(), d.textContent = function() {
    return s ? i.toLocaleString(e.language, { month: "short" }) : i.toLocaleString(e.language, {
      month: "short",
      timeZone: b
    });
  }(), p.append(d);
  const w = document.createElement("div");
  w.classList.add("atcb-date-btn-right"), t.append(w);
  const g = document.createElement("div");
  g.classList.add("atcb-date-btn-details"), w.append(g);
  const k = document.createElement("div");
  if (k.classList.add("atcb-date-btn-headline"), e.dates.length > 1 && r ? k.textContent = e.name : k.textContent = e.dates[`${a}`].name, g.append(k), e.dates[`${a}`].location && e.dates[`${a}`].location !== "" && !e.dates[`${a}`].onlineEvent || l !== "") {
    const h = document.createElement("div");
    if (h.classList.add("atcb-date-btn-content"), g.append(h), l != "")
      h.classList.add("atcb-date-btn-cancelled"), h.textContent = l;
    else {
      const T = document.createElement("span");
      T.classList.add("atcb-date-btn-content-icon"), T.innerHTML = q.location, h.append(T);
      const f = document.createElement("span");
      f.classList.add("atcb-date-btn-content-location"), f.textContent = e.dates[`${a}`].location, h.append(f);
    }
  } else if (e.dates[`${a}`].description !== "" && o.length === 0 && (!e.recurrence || e.recurrence === "")) {
    const h = document.createElement("div");
    h.classList.add("atcb-date-btn-content"), h.textContent = e.dates[`${a}`].descriptionHtmlFree, h.style.cssText = "overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;", g.append(h);
  } else
    k.style.cssText = "-webkit-line-clamp: 2;", o.length == 0 && (e.recurrence == null || e.recurrence == "") && (w.style.alignSelf = "center", k.style.cssText = "text-align: center; -webkit-line-clamp: 2;");
  if (o.length > 0 || e.recurrence != null && e.recurrence != "") {
    const h = document.createElement("div");
    h.classList.add("atcb-date-btn-content"), g.append(h);
    const T = document.createElement("span");
    T.classList.add("atcb-date-btn-content-icon"), T.innerHTML = q.ical, h.append(T);
    const f = document.createElement("span");
    if (f.classList.add("atcb-date-btn-content-text"), h.append(f), o.forEach(function(v) {
      const x = document.createElement("span");
      x.textContent = v, f.append(x);
    }), e.recurrence != null && e.recurrence != "") {
      const v = document.createElement("span");
      v.innerHTML = c, f.append(v);
    }
  }
  const E = document.createElement("div");
  if (E.classList.add("atcb-date-btn-hover"), E.innerHTML = n, w.append(E), !e.hideCheckmark) {
    const h = document.createElement("div");
    h.classList.add("atcb-checkmark"), h.innerHTML = q.checkmark, t.append(h);
  }
}
async function ne(e, t, a = !0) {
  const o = document.getElementById(t.identifier + "-modal-host");
  if (!a && o)
    return o.shadowRoot;
  o && o.remove();
  let n = document.createElement("div");
  n.id = t.identifier + "-modal-host", e.host.hasAttribute("cspnonce") && n.setAttribute("cspnonce", e.host.getAttribute("cspnonce")), n.setAttribute("atcb-button-id", t.identifier), n.setAttribute("style", "transform:translate3D(0, 0, 0);visibility:visible;opacity:1;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;z-index:13999998;"), document.body.append(n), n.attachShadow({ mode: "open", delegateFocus: !0 });
  const l = document.createElement("template");
  return l.innerHTML = '<div class="atcb-modal-host-initialized" style="transform:translate3D(0, 0, 0);visibility:visible;opacity:1;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;z-index:13999999;"></div>', n.shadowRoot.append(l.content.cloneNode(!0)), ge(n.shadowRoot, t), await Re(n.shadowRoot, null, t), n.shadowRoot;
}
async function ba(e, t) {
  const a = await ne(e, t);
  return Z(a.querySelector(".atcb-modal-host-initialized")), Array.from(e.children).forEach((n) => {
    n.tagName != "STYLE" && a.querySelector(".atcb-modal-host-initialized").append(n.cloneNode(!0));
  }), a.querySelector("button.atcb-button").removeAttribute("id"), e.host.classList.add("atcb-shadow-hide"), e.querySelector(".atcb-initialized").style.opacity = "0", mt(e, a), window.addEventListener("scroll", ue), window.addEventListener("resize", ue), a.querySelector(".atcb-modal-host-initialized");
}
function pa(e, t) {
  const a = document.createElement("script");
  if (a.id = "atcb-schema-" + e.identifier, t.hasAttribute("cspnonce")) {
    if (/[`'"()[\]{}<>\s]/.test(t.getAttribute("cspnonce")))
      throw new Error("cspnonce input contains forbidden characters.");
    a.setAttribute("nonce", t.getAttribute("cspnonce"));
  }
  a.type = "application/ld+json";
  const o = e.name.replace(/\s/g, ""), n = [];
  if (e.dates.length > 1) {
    const c = [];
    c.push('"@context":"https://schema.org"'), c.push('"@type":"EventSeries"'), c.push('"@id":"' + o + '"'), c.push('"name":"' + e.name + '",'), n.push(`{\r
` + c.join(`,\r
`) + `\r
`);
  }
  const l = [];
  for (let c = 0; c < e.dates.length; c++) {
    const r = [];
    r.push('"@context":"https://schema.org"'), r.push('"@type":"Event"'), e.dates.length > 1 && r.push('"@id":"' + o + "-" + (c + 1) + '"'), e.dates[`${c}`].status === "CANCELLED" ? r.push('"eventStatus":"https://schema.org/EventCancelled"') : r.push('"eventStatus":"https://schema.org/EventScheduled"'), r.push('"name":"' + e.dates[`${c}`].name + '"'), e.dates[`${c}`].descriptionHtmlFree && r.push('"description":"' + e.dates[`${c}`].descriptionHtmlFree + '"');
    const i = C(e.dates[`${c}`], "delimiters", "general", !0);
    if (r.push('"startDate":"' + i.start + '"'), i.duration && r.push('"duration":"' + i.duration + '"'), r.push(e.dates[`${c}`].onlineEvent ? `"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",\r
"location": {\r
"@type":"VirtualLocation",\r
"url":"` + e.dates[`${c}`].location + `"\r
}` : '"location":"' + e.dates[`${c}`].location + '"'), e.recurrence && e.recurrence !== "" ? r.push(...ua(e, i)) : r.push('"endDate":"' + i.end + '"'), e.dates[`${c}`].organizer && e.dates[`${c}`].organizer !== "") {
      const b = e.dates[`${c}`].organizer.split("|");
      r.push(`"organizer":{\r
"@type":"Person",\r
"name":"` + b[0] + `",\r
"email":"` + b[1] + `"\r
}`);
    }
    const s = [];
    if (e.images && Array.isArray(e.images))
      for (let b = 0; b < e.images.length; b++)
        ae(e.images[`${b}`], e.debug) && e.images[`${b}`].startsWith("http") && s.push('"' + e.images[`${b}`] + '"');
    s.length > 0 && r.push(`"image":[\r
` + s.join(`,\r
`) + "]"), l.push(`{\r
` + r.join(`,\r
`) + `\r
}`);
  }
  e.dates.length > 1 ? a.textContent = n.join(`,\r
`) + `"subEvents":[\r
` + l.join(`,\r
`) + `\r
]\r
}` : a.textContent = l[0], document.body.insertBefore(a, document.body.firstChild);
}
function ua(e, t) {
  const a = [];
  if (a.push('"eventSchedule": { "@type": "Schedule"'), a.push('"scheduleTimezone":"' + e.dates[0].timeZone + '"'), e.recurrence_interval && e.recurrence_interval !== "" && e.recurrence_frequency && e.recurrence_frequency !== "") {
    const o = "P" + e.recurrence_interval + e.recurrence_frequency.substring(0, 1);
    a.push('"repeatFrequency":"' + o + '"');
  }
  if (e.recurrence_byDay && e.recurrence_byDay !== "") {
    const o = function() {
      if (/\d/.test(e.recurrence_byDay))
        return '"' + e.recurrence_byDay + '"';
      {
        const n = e.recurrence_byDay.split(","), l = {
          MO: "https://schema.org/Monday",
          TU: "https://schema.org/Tuesday",
          WE: "https://schema.org/Wednesday",
          TH: "https://schema.org/Thursday",
          FR: "https://schema.org/Friday",
          SA: "https://schema.org/Saturday",
          SU: "https://schema.org/Sunday"
        }, c = [];
        for (let r = 0; r < n.length; r++)
          c.push('"' + l[n[`${r}`]] + '"');
        return "[" + c.join(",") + "]";
      }
    }();
    a.push('"byDay":' + o);
  }
  if (e.recurrence_byMonth && e.recurrence_byMonth !== "") {
    const o = e.recurrence_byMonth.includes(",") ? "[" + e.recurrence_byMonth + "]" : e.recurrence_byMonth;
    a.push('"byMonth":"' + o + '"');
  }
  if (e.recurrence_byMonthDay && e.recurrence_byMonthDay !== "") {
    const o = e.recurrence_byMonthDay.includes(",") ? "[" + e.recurrence_byMonthDay + "]" : e.recurrence_byMonthDay;
    a.push('"byMonthDay":"' + o + '"');
  }
  return e.recurrence_count && e.recurrence_count !== "" && a.push('"repeatCount":"' + e.recurrence_count + '"'), e.recurrence_until && e.recurrence_until !== "" && a.push('"endDate":"' + e.recurrence_until + '"'), e.startTime && e.startTime !== "" && e.endTime && e.endTime !== "" && (a.push('"startTime":"' + e.startTime + ':00"'), a.push('"endTime":"' + e.endTime + ':00"'), a.push('"duration":"' + t.duration + '"')), a.push('"startDate":"' + e.startDate + '" }'), a;
}
function j(e, t, a, o = "all", n = !1, l = !1, c = !1) {
  let r = t;
  if (t === "apple" && (r = "ical"), o !== "all" ? o = parseInt(o) - 1 : a.dates.length == 1 && (o = 0), a.subscribe) {
    fa(e, r, a, n);
    return;
  }
  if (o !== "all") {
    if (a.dates[`${o}`].status === "CANCELLED" && r !== "ical")
      H(e, a, "warning", u("date.status.cancelled", a), u("date.status.cancelled.cta", a), [], [], n);
    else
      switch (r) {
        case "ical":
          ut(e, a, o, n);
          break;
        case "google":
          ga(a, a.dates[`${o}`], o);
          break;
        case "msteams":
          xa(a, a.dates[`${o}`], o);
          break;
        case "ms365":
          Pe(a, a.dates[`${o}`], o);
          break;
        case "outlookcom":
          Pe(a, a.dates[`${o}`], o, "outlook");
          break;
        case "yahoo":
          va(a, a.dates[`${o}`], o);
          break;
      }
    const i = document.getElementById(a.identifier + "-modal-host");
    if (i) {
      const b = i.shadowRoot.getElementById(a.identifier + "-" + t + "-" + (o + 1));
      b && b.classList.add("atcb-saved");
    }
    z[`${a.identifier}`][`${t}`][`${o}`]++, z[`${a.identifier}`][`${t}`].filter(function(b) {
      return b < 1;
    }).length == 0 && he(e, a, l);
    return;
  }
  ma(e, t, r, a, n, l);
}
function ma(e, t, a, o, n, l) {
  if (a === "ical" && o.dates.every(function(c) {
    return !(c.status == "CANCELLED" || c.organizer != null && c.organizer != "");
  })) {
    ut(e, o, "all", n);
    for (let c = 0; c < z[`${o.identifier}`][`${t}`].length; c++)
      z[`${o.identifier}`][`${t}`][`${c}`]++;
    he(e, o, l);
    return;
  }
  if (!l) {
    const c = [t];
    for (let r = 0; r < o.dates.length; r++)
      c.push(r + 1);
    H(e, o, t, u("modal.multidate.h", o), u("modal.multidate.text", o), [], c, n);
  }
}
function fa(e, t, a, o) {
  const n = a.icsFile.replace("https://", "webcal://");
  switch (t) {
    case "ical":
      if (fe() || a.fakeAndroid) {
        Ze(a, a.icsFile);
        break;
      }
      Ze(a, n);
      break;
    case "google":
      ha(a, n);
      break;
    case "ms365":
      Fe(a, n, a.name);
      break;
    case "outlookcom":
      Fe(a, n, a.name, "outlook");
      break;
    case "yahoo":
      if (a.proxy) {
        O(a, "yahoo", "", !0);
        return;
      }
      me(a.icsFile), H(
        e,
        a,
        "yahoo",
        u("modal.subscribe.yahoo.h", a),
        u("modal.clipboard.text", a) + "<br>" + u("modal.subscribe.yahoo.text", a),
        [
          {
            label: u("modal.subscribe.yahoo.button", a),
            primary: !0,
            type: "yahoo2nd",
            href: "https://www.yahoo.com/calendar"
          },
          { label: u("cancel", a) }
        ],
        [],
        o
      );
      return;
    case "yahoo2nd":
      me(a.icsFile), H(
        e,
        a,
        "yahoo",
        u("modal.subscribe.yahoo.h", a),
        u("modal.clipboard.text", a) + "<br>" + u("modal.subscribe.yahoo.text", a),
        [
          {
            label: u("modal.subscribe.yahoo.button", a),
            type: "none",
            href: "https://www.yahoo.com/calendar"
          },
          { label: u("cancel", a) }
        ],
        [],
        o
      );
      return;
  }
  he(e, a);
}
function he(e, t, a = !1) {
  const o = e.getElementById(t.identifier);
  o && o.classList.add("atcb-saved"), ka(e, t), a && e.querySelectorAll(".atcb-modal[data-modal-nr]").length < 2 && Y(e, "close");
}
function Ze(e, t) {
  O(e, "ical", t, !0);
}
function ha(e, t) {
  const a = "https://calendar.google.com/calendar/r?cid=", o = function() {
    return /^(https?:\/\/|webcal:\/\/|\/\/)calendar\.google\.com\//.test(t) ? t.replace(/^(.)*\?cid=/, "") : encodeURIComponent(t);
  }();
  O(e, "google", a + o, !0);
}
function Fe(e, t, a, o = "365") {
  const n = [], l = function() {
    return o == "outlook" ? "https://outlook.live.com/calendar/0/addfromweb/?" : "https://outlook.office.com/calendar/0/addfromweb/?";
  }();
  n.push("url=" + encodeURIComponent(t)), n.push("name=" + encodeURIComponent(a)), O(e, o, l + n.join("&"), !0);
}
function ga(e, t, a = "all") {
  const o = [];
  o.push("https://calendar.google.com/calendar/render?action=TEMPLATE");
  const n = C(t, "clean", "google");
  o.push("dates=" + encodeURIComponent(n.start) + "%2F" + encodeURIComponent(n.end)), t.timeZone != null && t.timeZone != "" && !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(t.timeZone) && !n.allday && o.push("ctz=" + t.timeZone), t.name != null && t.name != "" && o.push("text=" + encodeURIComponent(t.name));
  const l = [];
  if (t.description != null && t.description != "" && l.push(t.description), t.location != null && t.location != "" && (o.push("location=" + encodeURIComponent(t.location)), (D() || e.fakeIOS) && (l.length > 0 && l.push("<br><br>"), l.push("&#128205;: " + t.location))), l.length > 0 && o.push("details=" + encodeURIComponent(l.join(""))), t.recurrence != null && t.recurrence != "" && o.push("recur=" + encodeURIComponent(t.recurrence)), t.availability != null && t.availability != "") {
    const c = function() {
      return t.availability == "free" ? "crm=AVAILABLE&trp=false" : "crm=BUSY&trp=true";
    }();
    o.push(c);
  }
  O(e, "google", o.join("&"), !1, a);
}
function va(e, t, a = "all") {
  const o = [];
  o.push("https://calendar.yahoo.com/?v=60");
  const n = C(t, "clean");
  o.push("st=" + encodeURIComponent(n.start) + "&et=" + encodeURIComponent(n.end)), n.allday && o.push("dur=allday"), t.name != null && t.name != "" && o.push("title=" + encodeURIComponent(t.name)), t.location != null && t.location != "" && o.push("in_loc=" + encodeURIComponent(t.location)), t.descriptionHtmlFree != null && t.descriptionHtmlFree != "" && o.push("desc=" + encodeURIComponent(t.descriptionHtmlFree)), O(e, "yahoo", o.join("&"), !1, a);
}
function Pe(e, t, a = "all", o = "365") {
  const n = [], l = function() {
    return ee() || e.fakeMobile ? "/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent" : "/calendar/action/compose?rru=addevent";
  }(), c = function() {
    return o == "outlook" ? "https://outlook.live.com" + l : "https://outlook.office.com" + l;
  }();
  n.push(c);
  const r = C(t, "delimiters", "microsoft");
  n.push("startdt=" + r.start), n.push("enddt=" + r.end), r.allday && n.push("allday=true"), t.name != null && t.name != "" && n.push("subject=" + encodeURIComponent(t.name.replace(/&/g, "&#xFF06;"))), t.location != null && t.location != "" && n.push("location=" + encodeURIComponent(t.location)), t.description != null && t.description != "" && n.push("body=" + encodeURIComponent(t.description)), O(e, o === "outlook" ? "outlookcom" : "ms365", n.join("&"), !1, a);
}
function xa(e, t, a = "all") {
  const o = [], n = "https://teams.microsoft.com/l/meeting/new?", l = C(t, "delimiters", "msteams", !0);
  !l.allday || ee() || e.fakeMobile ? (o.push("startTime=" + encodeURIComponent(l.start)), o.push("endTime=" + encodeURIComponent(l.end))) : (o.push("startTime=" + l.start), o.push("endTime=" + l.end)), t.name != null && t.name != "" && o.push("subject=" + encodeURIComponent(t.name));
  let c = "";
  t.location != null && t.location != "" && (c = t.location, c += " // ", o.push("location=" + encodeURIComponent(c))), t.descriptionHtmlFree && t.descriptionHtmlFree != "" && o.push("content=" + c + encodeURIComponent(t.descriptionHtmlFree)), O(e, "msteams", n + o.join("&"), !1, a);
}
function O(e, t, a, o = !1, n = null, l = "") {
  if (l == "" && (l = _e), ae(a)) {
    if (e.proxy && e.proKey && e.proKey != "") {
      const r = o ? "s" : "o", i = function() {
        const s = [];
        return e.attendee && e.attendee !== "" && s.push("attendee=" + encodeURIComponent(e.attendee)), e.customVar && typeof e.customVar == "object" && Object.keys(e.customVar).length > 0 && s.push("customvar=" + encodeURIComponent(JSON.stringify(e.customVar))), e.dates && e.dates.length > 1 && n !== null && n !== "all" && s.push("sub-event=" + n), s.length > 0 ? "?" + s.join("&") : "";
      }();
      if (a = (e.dev ? "https://dev.caldn.net/" : "https://caldn.net/") + e.proKey + "/" + r + "/" + t + i, !ae(a))
        return;
    }
    const c = window.open(a, l);
    c && c.focus();
  }
}
function ut(e, t, a = "all", o = !1) {
  a != "all" && (a = parseInt(a));
  const n = ya(t, a), l = function() {
    const m = e.host.getAttribute("attendee") || "", d = e.host.getAttribute("customVar") || "";
    return t.attendee && t.attendee !== "" && m !== "" || t.customVar && t.customVar !== "" && d !== "" ? "" : a != "all" && t.dates[`${a}`].icsFile != null && t.dates[`${a}`].icsFile != "" ? t.dates[`${a}`].icsFile : t.icsFile != null && t.icsFile != "" ? t.icsFile : "";
  }();
  if (t.proxy) {
    O(t, "ical", "https://add-to-calendar-pro.com", !1, a);
    return;
  }
  if (l !== "" && (!D() || !Te() || t.bypassWebViewCheck)) {
    qe(l, n);
    return;
  }
  const c = /* @__PURE__ */ new Date(), r = ["BEGIN:VCALENDAR", "VERSION:2.0"];
  r.push("PRODID:-// https://add-to-calendar-pro.com // button v" + et + " //EN"), r.push("CALSCALE:GREGORIAN"), a == "all" ? r.push("METHOD:PUBLISH") : t.dates[`${a}`].status != null && t.dates[`${a}`].status == "CANCELLED" ? r.push("METHOD:CANCEL") : t.dates[`${a}`].organizer != null && t.dates[`${a}`].organizer != "" ? r.push("METHOD:REQUEST") : r.push("METHOD:PUBLISH");
  const i = [], s = function() {
    return a != "all" ? a : 0;
  }(), b = function() {
    return a != "all" ? a : t.dates.length - 1;
  }();
  for (let m = s; m <= b; m++) {
    const d = C(t.dates[`${m}`], "clean", "ical"), w = function() {
      if (d.allday)
        return ";VALUE=DATE";
      if (t.dates[`${m}`].timeZone && t.dates[`${m}`].timeZone !== "") {
        const g = kt(t.dates[`${m}`].timeZone);
        return i.includes(t.dates[`${m}`].timeZone) || r.push(g[0]), i.push(t.dates[`${m}`].timeZone), ";" + g[1];
      }
    }();
    if (r.push("BEGIN:VEVENT"), t.dates[`${m}`].uid && t.dates[`${m}`].uid !== "" && r.push("UID:" + t.dates[`${m}`].uid), r.push("DTSTAMP:" + M(c, "clean", !0)), r.push("DTSTART" + w + ":" + d.start), r.push("DTEND" + w + ":" + d.end), r.push("SUMMARY:" + F(t.dates[`${m}`].name, !0)), t.dates[`${m}`].descriptionHtmlFreeICal && t.dates[`${m}`].descriptionHtmlFreeICal !== "" && r.push("DESCRIPTION:" + F(t.dates[`${m}`].descriptionHtmlFreeICal, !0)), t.dates[`${m}`].description && t.dates[`${m}`].description !== "" && r.push(`X-ALT-DESC;FMTTYPE=text/html:\r
 <!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 3.2//EN"">\r
 <HTML><BODY>\r
 ` + F(t.dates[`${m}`].description, !0) + `\r
 </BODY></HTML>`), t.dates[`${m}`].location && t.dates[`${m}`].location !== "" && r.push("LOCATION:" + F(t.dates[`${m}`].location, !0)), t.dates[`${m}`].organizer && t.dates[`${m}`].organizer !== "") {
      const g = t.dates[`${m}`].organizer.split("|");
      r.push("ORGANIZER;CN=" + F(g[0], !1, !0) + ":MAILTO:" + g[1]);
    }
    if (t.dates[`${m}`].attendee && t.dates[`${m}`].attendee !== "") {
      const g = t.dates[`${m}`].attendee.split("|");
      g.length === 2 ? r.push("ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=" + F(g[0], !1, !0) + ";X-NUM-GUESTS=0:mailto:" + g[1]) : r.push("ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=" + g[0] + ";X-NUM-GUESTS=0:mailto:" + g[0]);
    }
    if (t.recurrence && t.recurrence !== "" && r.push(t.recurrence), t.dates[`${m}`].availability && t.dates[`${m}`].availability !== "") {
      const g = function() {
        return t.dates[`${m}`].availability == "free" ? "TRANSPARENT" : "OPAQUE";
      }();
      r.push("TRANSP:" + g);
    }
    r.push("SEQUENCE:" + t.dates[`${m}`].sequence), r.push("STATUS:" + t.dates[`${m}`].status), r.push("CREATED:" + t.created), r.push("LAST-MODIFIED:" + t.updated), r.push("END:VEVENT");
  }
  r.push("END:VCALENDAR");
  const p = function() {
    return l != "" ? l : "data:text/calendar;charset=utf-8," + encodeURIComponent(r.join(`\r
`));
  }();
  if (D() && !tt() || Te() && (D() || fe() && zt())) {
    wa(e, p, t, o);
    return;
  }
  qe(p, n);
}
function ya(e, t) {
  const a = function() {
    return t != "all" && t != 0 ? "-" + parseInt(t) + 1 : "";
  }();
  if (e.iCalFileName != null && e.iCalFileName != "")
    return e.iCalFileName + a;
  if (e.icsFile != null && e.icsFile != "") {
    const o = e.icsFile.split("/").pop().split(".")[0];
    if (o != "")
      return o + a;
  }
  return "event-to-save-in-my-calendar" + a;
}
function wa(e, t, a, o) {
  if (me(t), D() && !tt()) {
    H(
      e,
      a,
      "warning",
      u("modal.opensafari.ical.h", a),
      u("modal.opensafari.ical.text", a) + "<br>" + u("modal.clipboard.text", a) + "<br>" + u("modal.opensafari.ical.steps", a),
      [],
      [],
      o
    );
    return;
  }
  H(e, a, "warning", u("modal.webview.ical.h", a), u("modal.webview.ical.text", a) + "<br>" + u("modal.clipboard.text", a) + "<br>" + u("modal.webview.ical.steps", a), [], [], o);
}
function ka(e, t) {
  S("success", t.identifier, t.identifier), t.ty && typeof Ne == "function" && setTimeout(() => {
    Ne(e, t);
  }, 1e3);
}
function qe(e, t) {
  try {
    const a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    a.rel = "noopener", a.href = e, ee() ? a.target = "_self" : a.target = "_blank", a.download = t + ".ics";
    const o = new MouseEvent("click", {
      view: window,
      button: 0,
      bubbles: !0,
      cancelable: !1
    });
    a.dispatchEvent(o), (window.URL || window.webkitURL).revokeObjectURL(a.href);
  } catch (a) {
    console.error(a);
  }
}
function C(e, t = "delimiters", a = "general", o = !1) {
  if (e.startTime && e.startTime !== "" && e.endTime && e.endTime !== "") {
    const n = /* @__PURE__ */ new Date(e.startDate + "T" + e.startTime + ":00.000+00:00");
    e.endDate || (e.endDate = e.startDate);
    const l = /* @__PURE__ */ new Date(e.endDate + "T" + e.endTime + ":00.000+00:00"), c = l - n, r = Math.floor(c / 1e3 / 60 / 60), i = Math.floor((c - r * 60 * 60 * 1e3) / 1e3 / 60 % 60), s = function() {
      return r < 10 ? "0" + r + ":" + ("0" + i).slice(-2) : r + ":" + ("0" + i).slice(-2);
    }();
    if (a == "ical" || a == "google" && !/(GMT[+|-]\d{1,2}|Etc\/U|Etc\/Zulu|CET|CST6CDT|EET|EST|EST5EDT|MET|MST|MST7MDT|PST8PDT|WET)/i.test(e.timeZone))
      return {
        start: M(n, "clean", !0, !0),
        end: M(l, "clean", !0, !0),
        duration: s,
        allday: !1
      };
    const b = de(e.timeZone, e.startDate, e.startTime), p = de(e.timeZone, e.endDate, e.endTime);
    if (o) {
      const w = b.slice(0, 3) + ":" + b.slice(3), g = p.slice(0, 3) + ":" + p.slice(3);
      return {
        start: n.toISOString().replace(".000Z", w),
        end: l.toISOString().replace(".000Z", g),
        duration: s,
        allday: !1
      };
    }
    const m = parseInt(b[0] + 1) * -1 * ((parseInt(b.substring(1, 3)) * 60 + parseInt(b.substring(3, 5))) * 60 * 1e3), d = parseInt(p[0] + 1) * -1 * ((parseInt(p.substring(1, 3)) * 60 + parseInt(p.substring(3, 5))) * 60 * 1e3);
    return n.setTime(n.getTime() + m), l.setTime(l.getTime() + d), {
      start: M(n, t),
      end: M(l, t),
      duration: s,
      allday: !1
    };
  } else {
    const n = e.startDate.split("-"), l = e.endDate ? e.endDate.split("-") : n, c = new Date(Date.UTC(n[0], n[1] - 1, n[2], 12, 0, 0)), r = new Date(Date.UTC(l[0], l[1] - 1, l[2], 12, 0, 0));
    if ((a === "google" || a === "microsoft" && !ee() || a === "msteams" || a === "ical") && r.setDate(r.getDate() + 1), a === "msteams") {
      if (ee()) {
        const i = c.getTimezoneOffset(), s = function() {
          return i < 0 ? "+" + ("0" + Math.abs(i / 60)).slice(-2) + ":" + ("0" + Math.abs(i % 60)).slice(-2) : "-" + ("0" + Math.abs(i / 60)).slice(-2) + ":" + ("0" + Math.abs(i % 60)).slice(-2);
        }();
        return {
          start: M(c, t, !1, !0) + "T00:00:00" + s,
          end: M(r, t, !1, !0) + "T00:00:00" + s,
          allday: !0
        };
      }
      return {
        start: M(c, t, !1, !0) + "+00:00",
        end: M(r, t, !1, !0) + "+00:00",
        allday: !0
      };
    }
    return {
      start: M(c, t, !1),
      end: M(r, t, !1),
      allday: !0
    };
  }
}
function M(e, t = "delimiters", a = !0, o = !1) {
  const n = function() {
    return a ? t == "clean" ? /(-|:|(\.\d{3}))/g : /(\.\d{3})/g : t == "clean" ? /(-|T(\d{2}:\d{2}:\d{2}\.\d{3})Z)/g : /T(\d{2}:\d{2}:\d{2}\.\d{3})Z/g;
  }();
  return o ? e.toISOString().replace(n, "").replace("Z", "") : e.toISOString().replace(n, "");
}
function Ta(e) {
  const t = e[0] === "+" ? 1 : -1, a = parseInt(e.substring(1, 3), 10), o = parseInt(e.substring(3, 5), 10);
  return (a * 60 + o) * t * 6e4;
}
function Ve(e, t, a, o) {
  const n = /* @__PURE__ */ new Date(`${e}T${t}:00Z`), l = de(a, e, t), c = new Date(n.getTime() - Ta(l));
  return [e, t] = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: o,
    hour12: !1
  }).format(c).split(", ");
}
function za(e, t = "en", a = "all", o = !1, n = !1, l = !1, c = !1) {
  if (o) {
    const y = ot();
    e = nt({ dates: e, timeZone: y }).dates;
  }
  let r, i, s, b, p = {}, m = {}, d = [], w = "", g = "";
  const k = Intl.DateTimeFormat().resolvedOptions().timeZone;
  a === "all" ? (p = C(e[0]), m = C(e[e.length - 1]), s = n ? k : e[0].timeZone, b = n ? k : e[e.length - 1].timeZone) : (p = C(e[`${a}`]), m = p, s = n ? k : e[`${a}`].timeZone, b = s), r = new Date(p.start), i = new Date(m.end), p.allday && (s = "GMT"), m.allday && (b = "GMT");
  const E = ["global", "world-wide", "worldwide", "online"];
  (function() {
    let y = 0, Q = e.length - 1;
    for (a != "all" && (y = Q = a), y; y <= Q; y++)
      if (!function() {
        return !!(e[`${y}`].location && e[`${y}`].location !== "" && E.includes(e[`${y}`].location.toLowerCase()));
      }() && !e[`${y}`].onlineEvent)
        return !1;
    return !0;
  })() ? s = b = k : (!p.allday && k !== s && s !== b && (w = "(" + s + ")"), (!m.allday && k !== b || s !== b) && (g = "(" + b + ")"));
  const T = /* @__PURE__ */ new Date(), f = function() {
    return !l && r.getFullYear() === T.getFullYear();
  }(), v = function() {
    return !l && i.getFullYear() === T.getFullYear();
  }(), x = Ke(s, f, t), L = Ke(b, v, t);
  if (r.toLocaleDateString(t, L.DateLong) === i.toLocaleDateString(t, L.DateLong))
    if (p.allday)
      f || d.push(r.toLocaleDateString(t, x.DateLong));
    else {
      let y = "";
      f ? y = r.toLocaleString(t, x.Time) : y = r.toLocaleString(t, x.DateTimeLong), t === "en" && (y = y.replace(/:00/, "")), d.push(y), w !== "" && !c && d.push(w), d.push("-"), y = i.toLocaleTimeString(t, L.Time), t === "en" && (y = y.replace(/:00/, "")), d.push(y), g !== "" && !c && d.push(g);
    }
  else {
    if (p.allday)
      d.push(r.toLocaleDateString(t, x.DateLong));
    else {
      let y = "";
      f ? y = r.toLocaleString(t, x.Time) : y = r.toLocaleString(t, x.DateTimeLong), t === "en" && (y = y.replace(/:00/, "")), d.push(y);
    }
    if (w !== "" && !c && d.push(w), d.push("-"), m.allday)
      d.push(i.toLocaleDateString(t, L.DateLong));
    else {
      let y = i.toLocaleString(t, L.DateTimeLong);
      t === "en" && (y = y.replace(/:00/, "")), d.push(y);
    }
    g !== "" && !c && d.push(g);
  }
  return d;
}
function Ke(e, t = !1, a = "en") {
  const o = /* @__PURE__ */ function() {
    return a === "en" ? "h12" : "h23";
  }();
  return t ? {
    DateLong: {
      timeZone: e,
      month: "short",
      day: "numeric"
    },
    DateTimeLong: {
      timeZone: e,
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hourCycle: o
    },
    Time: {
      timeZone: e,
      hour: "numeric",
      minute: "2-digit",
      hourCycle: o
    }
  } : {
    DateLong: {
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    DateTimeLong: {
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hourCycle: o
    },
    Time: {
      timeZone: e,
      hour: "numeric",
      minute: "2-digit",
      hourCycle: o
    }
  };
}
function G(e, t = !0) {
  const o = (t ? JSON.stringify(e) : e.toString()).replace(/(<(?!br)([^>]+)>)/gi, "");
  return t ? JSON.parse(o) : o;
}
function ae(e, t = !0) {
  return e && e.match(/((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi) ? (t && console.error("Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!"), !1) : !0;
}
function pe(e) {
  return !!/^.{0,70}@.{1,30}\.[a-zA-Z]{2,9}$/.test(e);
}
function K(e, t = !1, a = !1) {
  return t ? (a ? e = e.replace(/(\[br\s?\/?\]|\{br\s?\/?\}|(\[\/p\](?=.))|(\{\/p\}(?=.)))/gi, "\\n") : e = e.replace(/(\[br\s?\/?\]|\{br\s?\/?\}|(\[\/p\](?=.))|(\{\/p\}(?=.)))/gi, " "), e = e.replace(/\[url\](.+?)\[\/url\]/gi, (o, n) => n.split("|")[0]), e = e.replace(/\{url\}(.+?)\{\/url\}/gi, (o, n) => n.split("|")[0]), e = e.replace(/\[(|\/)(hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi, ""), e = e.replace(/\{(|\/)(hr|p|b|strong|u|i|em|li|ul|ol|h\d)\}/gi, ""), e = e.replace(/&[#a-zA-Z0-9]{1,9};/gi, "")) : (e = e.replace(/\[url\]((?:(?!\[\/url\])[\w&$+.,:;=~!*'?@^%#|\s\-()[\]/])*)\[\/url\]/gi, function(o, n) {
    return Ge(n);
  }), e = e.replace(/\{url\}((?:(?!\[\/url\])[\w&$+.,:;=~!*'?@^%#|\s\-()[\]/])*)\{\/url\}/gi, function(o, n) {
    return Ge(n);
  }), e = e.replace(/\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)(\s?\/?)\]/gi, "<$1$2$3>"), e = e.replace(/\{(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)(\s?\/?)\}/gi, "<$1$2$3>")), e;
}
function Ge(e) {
  const t = e.split("|"), a = function() {
    return t.length > 1 && t[1] != "" ? t[1] : t[0];
  }();
  return '<a href="' + t[0] + '" target="' + _e + '" rel="noopener">' + a + "</a>";
}
function F(e, t = !0, a = !1) {
  return a ? e = e.replace(/"/g, "") : e = e.replace(/\\/g, "\\\\").replace(/(,|;)/g, "\\$1").replace(/\\\\n/g, "\\n"), t && (e = e.replace(/.{60}/g, `$&\r
 `)), e;
}
function we(e, t, a, o = !1, n = !1) {
  let l = !1;
  const c = t;
  t.querySelector(".atcb-dropdown-anchor") !== null && (t = t.querySelector(".atcb-dropdown-anchor"), l = !0), a.style.position = "relative", a.style.display = "inline-block";
  let r = t.getBoundingClientRect();
  const i = c.getBoundingClientRect(), s = c.parentNode.getBoundingClientRect(), b = document.documentElement.clientHeight;
  if (l === !0 && !a.classList.contains("atcb-dropoverlay")) {
    let m = a.getBoundingClientRect();
    a.style.width = m.width + "px", a.classList.contains("atcb-dropup") || !o && r.top + m.height > b - 20 && 2 * i.top + i.height - r.top - m.height > 20 || n ? (c.classList.add("atcb-dropup"), a.classList.add("atcb-dropup"), a.style.bottom = s.bottom - i.bottom + (r.top - i.top) + "px") : (a.style.top = i.top - s.top + (r.top - i.top) + "px", c.classList.contains("atcb-dropup") && c.classList.remove("atcb-dropup")), r = t.getBoundingClientRect(), !a.classList.contains("atcb-style-round") && !a.classList.contains("atcb-style-text") && !a.classList.contains("atcb-style-neumorphism") && (a.style.minWidth = r.width + "px", a.classList.contains("atcb-dropdown") && (a.style.maxWidth = r.width + "px")), m = a.getBoundingClientRect(), a.style.left = Math.round(r.left - s.left - (m.width - r.width) / 2) + "px";
  } else {
    a.style.minWidth = i.width + 20 + "px";
    const m = a.getBoundingClientRect();
    a.style.width = m.width + "px";
    const d = Math.round((i.width - m.width) / 2);
    a.style.margin = -Math.round((m.height + i.height) / 2) + "px " + d + "px 0 " + d + "px";
  }
  a.style.position = "absolute", a.style.display = "block";
  const p = e.querySelector("#atcb-reference");
  p && c.classList.contains("atcb-dropup") && (c.parentNode.after(p), p.classList.add("atcb-dropup"));
}
function mt(e, t) {
  const a = e.querySelector(".atcb-initialized ").getBoundingClientRect(), o = t.querySelector(".atcb-initialized");
  let n = a.width;
  a.width < 250 && (n = 250), o.style.width = n + "px", o.style.height = a.height + "px", o.style.top = a.top + "px", o.style.left = a.left + "px";
}
function ue() {
  const e = z.active;
  if (e !== null && e !== "") {
    const t = document.querySelector("add-to-calendar-button[atcb-button-id=" + e + "]").shadowRoot, a = document.querySelector("div[atcb-button-id=" + e + "]").shadowRoot;
    mt(t, a);
  }
}
function De(e, t = null) {
  const a = function() {
    if (t != null)
      return t;
    {
      const n = e.querySelectorAll(".atcb-modal");
      return n.length === 0 ? null : n[n.length - 1];
    }
  }();
  if (a == null)
    return;
  a.getBoundingClientRect().height + 150 > window.innerHeight ? (document.body.classList.add("atcb-modal-no-scroll"), document.documentElement.classList.add("atcb-modal-no-scroll")) : (document.body.classList.remove("atcb-modal-no-scroll"), document.documentElement.classList.remove("atcb-modal-no-scroll"));
}
function Z(e) {
  e.style.width = window.innerWidth + "px", e.style.height = window.innerHeight + 100 + "px";
}
function oe(e, t) {
  e.style.setProperty("--base-font-size-l", t.l + "px"), e.style.setProperty("--base-font-size-m", t.m + "px"), e.style.setProperty("--base-font-size-s", t.s + "px");
}
function ft() {
  return ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (t) => (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16));
}
function me(e) {
  const t = document.createElement("input");
  document.body.append(t);
  const a = t.contentEditable, o = t.readOnly;
  if (t.contentEditable = !0, t.readOnly = !1, t.value = e, D()) {
    var n = document.createRange();
    n.selectNodeContents(t);
    var l = window.getSelection();
    l.removeAllRanges(), l.addRange(n), t.setSelectionRange(0, 999999);
  } else
    t.select();
  t.contentEditable = a, t.readOnly = o, document.execCommand("copy"), t.remove();
}
function P(e, t = 200) {
  let a;
  return (...o) => {
    clearTimeout(a), a = setTimeout(() => {
      e.apply(this, o);
    }, t);
  };
}
function N(e, t = 300) {
  let a;
  return (...o) => {
    a || e.apply(this, o), clearTimeout(a), a = setTimeout(() => {
      a = void 0;
    }, t);
  };
}
function S(e, t, a) {
  const o = function() {
    const n = document.getElementById(a);
    return n || document.querySelector('[atcb-button-id="' + a + '"]');
  }();
  o && o.setAttribute("atcb-last-event", e + ":" + t), B() && Aa(e, t);
}
function Aa(e, t) {
  let a = "";
  switch (e) {
    case "initialization":
      a = "Initialized";
      break;
    case "openList":
      a = "Opened";
      break;
    case "closeList":
      a = "Closed";
      break;
    case "openCalendarLink":
      a = "Opened";
      break;
    case "openSingletonLink":
      a = "Opened";
      break;
    case "openSubEventLink":
      a = "Opened";
      break;
    case "openRSVP":
      a = "Opened";
      break;
    case "success":
      a = "Saved";
      break;
    case "successRSVP":
      a = "Saved";
      break;
  }
  const o = e === "openRSVP" || e === "successRSVP" ? "Add-to-Calendar-RSVP" : "Add-to-Calendar-Button";
  (window.dataLayer = window.dataLayer || []).push({
    eventCategory: o,
    eventAction: a,
    eventLabel: t,
    event: e
  });
}
const Ea = ["ar", "fa"], A = {
  apple: "Apple",
  google: "Google",
  ms365: "Microsoft 365",
  msteams: "Microsoft Teams",
  outlookcom: "Outlook.com",
  yahoo: "Yahoo"
}, Se = {
  en: {
    "label.addtocalendar": "Add to Calendar",
    ical: "iCal File",
    ...A,
    "modal.button.default": "Click me",
    "modal.webview.ical.h": "Open your browser",
    "modal.webview.ical.text": "Unfortunately, in-app browsers have problems with the way we generate the calendar file.",
    "modal.clipboard.text": "We automatically copied a magical URL into your clipboard.",
    "modal.webview.ical.steps": "<ol><li><strong>Open another browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
    "modal.opensafari.ical.h": "Open Safari",
    "modal.opensafari.ical.text": "Unfortunately, iOS has some problems generating and opening the calendar file outside of Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Open Safari</strong>, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>",
    "modal.multidate.h": "This is an event series",
    "modal.multidate.text": "Add the individual events one by one:",
    "date.status.cancelled": "This date got cancelled.",
    "date.status.cancelled.cta": "Please update your calendar!",
    "modal.subscribe.yahoo.h": "Add Calendar to Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Open now the Yahoo Calendar.</li><li>Click the "Actions" tab.</li><li>Hit "Follow Other Calendars".</li><li>Set a name and paste the clipboard content into the url field.</li></ol>',
    "modal.subscribe.yahoo.button": "Open Yahoo Calendar",
    close: "Close",
    continue: "Continue",
    cancel: "Cancel",
    expired: "Expired",
    recurring: "Recurring",
    thankyou: "Thank you",
    submit: "Submit",
    "label.rsvp": "RSVP",
    "label.share.email": "Share via Email",
    "label.share.copy": "Copy Link",
    "label.share.copied": "Copied",
    "label.share.email.subject": "Save this event",
    "form.error.required": "You did not properly fill all required fields",
    "form.error.sending": "There was a problem sending your response. Please try again later",
    "form.success": "Sent successfully!"
  },
  de: {
    "label.addtocalendar": "Im Kalender speichern",
    ical: "iCal-Datei",
    ...A,
    "modal.button.default": "Klick mich",
    "modal.webview.ical.h": "Öffne deinen Browser",
    "modal.webview.ical.text": "Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.",
    "modal.clipboard.text": "Wir haben automatisch eine magische URL in deine Zwischenablage kopiert.",
    "modal.webview.ical.steps": "<ol><li><strong>Öffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.</li></ol>",
    "modal.opensafari.ical.h": "Öffne Safari",
    "modal.opensafari.ical.text": "Leider hat iOS einige Probleme beim Generieren und Öffnen der Kalenderdatei außerhalb von Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Öffne Safari</strong>, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.</li></ol>",
    "modal.multidate.h": "Dies ist eine Termin-Reihe",
    "modal.multidate.text": "Füge die einzelnen Termine der Reihe nach deinem Kalender hinzu:",
    "date.status.cancelled": "Dieser Termin wurde abgesagt.",
    "date.status.cancelled.cta": "Bitte aktualisiere deinen Kalender!",
    "modal.subscribe.yahoo.h": "Kalender zu Yahoo hinzufügen",
    "modal.subscribe.yahoo.text": '<ol><li>Öffne den Yahoo-Kalender.</li><li>Klicke auf den "Aktionen"-Tab.</li><li>Wähle "Weiteren Kalendern folgen".</li><li>Wähle einen Namen und füge die URL aus deiner Zwischenablage in das URL-Feld ein.</li></ol>',
    "modal.subscribe.yahoo.button": "Yahoo-Kalender öffnen",
    close: "Schließen",
    continue: "Weiter",
    cancel: "Abbrechen",
    expired: "Abgelaufen",
    recurring: "Wiederkehrend",
    thankyou: "Danke",
    submit: "Absenden",
    "label.share.email": "Per E-Mail teilen",
    "label.share.copy": "Link kopieren",
    "label.share.copied": "Kopiert",
    "label.share.email.subject": "Merke dir diesen Termin",
    "form.error.required": "Du hast nicht alle erforderlichen Felder korrekt ausgefüllt",
    "form.error.sending": "Es gab ein Problem beim Senden deiner Antwort. Bitte versuche es später noch einmal",
    "form.success": "Erfolgreich gesendet!"
  },
  es: {
    "label.addtocalendar": "Añadir al Calendario",
    ical: "iCal Ficha",
    ...A,
    "modal.button.default": "Haz clic mí",
    "modal.webview.ical.h": "Abra su browser",
    "modal.webview.ical.text": "Lamentablemente, los browsers in-app tienen problemas con la forma en que generamos el archivo del calendario.",
    "modal.clipboard.text": "Hemos copiado automáticamente una URL mágica en su portapapeles.",
    "modal.webview.ical.steps": "<ol><li><strong>Abre otro browser</strong> en tu smartphone, ...</li><li>Utilice la función de <strong>pegar</strong> para continuar.</li></ol>",
    "modal.opensafari.ical.h": "Abrir Safari",
    "modal.opensafari.ical.text": "Desafortunadamente, iOS tiene algunos problemas para generar y abrir el archivo de calendario fuera de Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Abrir Safari</strong>, ...</li><li>Utilice la función de <strong>pegar</strong> para continuar.</li></ol>",
    "modal.multidate.h": "Esta es una serie de fechas",
    "modal.multidate.text": "Añada las fechas individuales a su calendario en orden:",
    "date.status.cancelled": "Esta fecha fue cancelada.",
    "date.status.cancelled.cta": "Actualice su calendario!",
    "modal.subscribe.yahoo.h": "Añadir calendario a Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Abra el calendario de Yahoo.</li><li>Haga clic en la pestaña "Acciones".</li><li>Seleccione "Seguir otros calendarios".</li><li>Elige un nombre y pega la URL de tu portapapeles en el campo URL.</li></ol>',
    "modal.subscribe.yahoo.button": "Abrir calendario de Yahoo",
    close: "Ciérralo",
    continue: "Continuar",
    cancel: "Cancelar",
    expired: "Caducada",
    recurring: "Periódica",
    thankyou: "Gracias",
    submit: "Enviar",
    "label.share.email": "Compartir por E-mail",
    "label.share.copy": "Copiar enlace",
    "label.share.copied": "Copiado",
    "label.share.email.subject": "Recuerda esta fecha",
    "form.error.required": "No has completado correctamente todos los campos requeridos",
    "form.error.sending": "Hubo un problema al enviar tu respuesta. Por favor, inténtalo de nuevo más tarde",
    "form.success": "Enviado con éxito!"
  },
  pt: {
    "label.addtocalendar": "Incluir no Calendário",
    ical: "Ficheiro iCal",
    ...A,
    "modal.button.default": "Clicar-me",
    "modal.webview.ical.h": "Abra o seu browser",
    "modal.webview.ical.text": "Infelizmente, os navegadores em tampas têm problemas com a forma como geramos o ficheiro de calendário.",
    "modal.clipboard.text": "Copiámos automaticamente um URL mágico para a sua área de transferência.",
    "modal.webview.ical.steps": "<ol><li><strong>Abrir outro browser</strong> en tu smartphone, ...</li><li>Use a função <forte>colar</strong> para continuar.</li></ol>",
    "modal.opensafari.ical.h": "Safari aberto",
    "modal.opensafari.ical.text": "Infelizmente, o iOS tem alguns problemas para gerar e abrir o arquivo de calendário fora do Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Safari aberto</strong>, ...</li><li>Use a função <forte>colar</strong> para continuar.</li></ol>",
    "modal.multidate.h": "Esta é uma série de datas",
    "modal.multidate.text": "Adicione as datas individuais ao seu calendário, por ordem:",
    "date.status.cancelled": "Esta data foi cancelada.",
    "date.status.cancelled.cta": "Actualize o seu calendário!",
    "modal.subscribe.yahoo.h": "Adicionar calendário ao Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Abrir o calendário do Yahoo.</li><li>Clique no separador "Acções".</li><li>Seleccione "Seguir outros calendários".</li><li>Escolha um nome e cole o URL da sua área de transferência no campo URL.</li></ol>',
    "modal.subscribe.yahoo.button": "Abra o Calendário do Yahoo",
    close: "Fechar",
    continue: "Continuar",
    cancel: "Cancelar",
    expired: "Expirada",
    recurring: "Recorrente",
    thankyou: "Obrigado",
    submit: "Enviar",
    "label.share.email": "Compartilhar por e-mail",
    "label.share.copy": "Copiar link",
    "label.share.copied": "Copiado",
    "label.share.email.subject": "Lembre-se desta data",
    "form.error.required": "Você não preencheu todos os campos obrigatórios corretamente",
    "form.error.sending": "Houve um problema ao enviar sua resposta. Por favor, tente novamente mais tarde",
    "form.success": "Enviado com sucesso!"
  },
  fr: {
    "label.addtocalendar": "Ajouter à l'Agenda",
    ical: "Fichier iCal",
    ...A,
    "modal.button.default": "Cliquez-moi",
    "modal.webview.ical.h": "Ouvrez votre navigateur",
    "modal.webview.ical.text": "Malheureusement, les navigateurs intégrés aux applications ont des problèmes avec la manière dont nous créons les fichiers de calendrier.",
    "modal.clipboard.text": "Nous avons automatiquement copié une URL magique dans votre presse-papier.",
    "modal.webview.ical.steps": "<ol><li><strong>Ouvrez un autre navigateur</strong> sur votre smartphone ;</li><li><strong>Collez</strong> le contenu du presse-papier et continuez.</li></ol>",
    "modal.opensafari.ical.h": "Ouvrir Safari",
    "modal.opensafari.ical.text": "Malheureusement, iOS rencontre des problèmes pour générer et ouvrir le fichier de calendrier en dehors de Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Ouvrez Safari</strong> ;</li><li><strong>Collez</strong> le contenu du presse-papier et continuez.</li></ol>",
    "modal.multidate.h": "Ceci est une liste d’évènements",
    "modal.multidate.text": "Ajouter les évènements un par un :",
    "date.status.cancelled": "Cet évènement est annulé.",
    "date.status.cancelled.cta": "Actualisez votre agenda !",
    "modal.subscribe.yahoo.h": "Ajouter un agenda à Yahoo",
    "modal.subscribe.yahoo.text": "<ol><li>Ouvrez l’Agenda Yahoo ;</li><li>Cliquez sur l’onglet « Actions » ;</li><li>Sélectionnez « Suivre d’autres agendas » ;</li><li>Choisissez un nom et collez le contenu de votre presse-papier dans le champ URL.</li></ol>",
    "modal.subscribe.yahoo.button": "Ouvrir le calendrier Yahoo",
    close: "Fermer",
    continue: "Continuer",
    cancel: "Annuler",
    expired: "Expiré",
    recurring: "Récurrent",
    thankyou: "Merci",
    submit: "Envoyer",
    "label.share.email": "Partager par E-mail",
    "label.share.copy": "Copier le lien",
    "label.share.copied": "Copié",
    "label.share.email.subject": "Retenez cette date",
    "form.error.required": "Tu n'as pas correctement rempli tous les champs requis",
    "form.error.sending": "Il y a eu un problème lors de l'envoi de ta réponse. Veuillez réessayer plus tard",
    "form.success": "Envoyé avec succès!"
  },
  nl: {
    "label.addtocalendar": "Opslaan in Agenda",
    ical: "iCal File",
    ...A,
    "modal.button.default": "Klik me",
    "modal.webview.ical.h": "Open uw browser",
    "modal.webview.ical.text": "Helaas hebben in-app browsers problemen met de manier waarop wij kalenderbestanden maken.",
    "modal.clipboard.text": "We hebben automatisch een magische URL naar je klembord gekopieerd.",
    "modal.webview.ical.steps": "<ol><li><strong>Open een andere browser</strong> op uw smartphone, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
    "modal.opensafari.ical.h": "Open Safari",
    "modal.opensafari.ical.text": "Helaas heeft iOS enkele problemen met het genereren en openen van het agendabestand buiten Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Open Safari</strong>, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>",
    "modal.multidate.h": "Dit is een reeks data",
    "modal.multidate.text": "Voeg de afzonderlijke delen één voor één toe:",
    "date.status.cancelled": "Deze datum is geannuleerd.",
    "date.status.cancelled.cta": "Uw agenda bijwerken!",
    "modal.subscribe.yahoo.h": "Toevoegen aan Yahoo",
    "modal.subscribe.yahoo.text": `<ol><li>Open de Yahoo calendar.</li><li>Klik op de "Acties" tab.</li><li>Selecteer "Volg Andere Agenda's".</li><li>Kies een naam en plak de URL van uw klembord in het URL-veld.</li></ol>`,
    "modal.subscribe.yahoo.button": "Open Yahoo Agenda",
    close: "Sluiten",
    continue: "Doorgaan",
    cancel: "Annuleren",
    expired: "Verlopen",
    recurring: "Terugkerend",
    thankyou: "Bedankt",
    submit: "Versturen",
    "label.share.email": "Delen via E-mail",
    "label.share.copy": "Link kopiëren",
    "label.share.copied": "Gekopieerd",
    "label.share.email.subject": "Onthoud deze datum",
    "form.error.required": "Je hebt niet alle vereiste velden correct ingevuld",
    "form.error.sending": "Er was een probleem met het versturen van je antwoord. Probeer het later opnieuw",
    "form.success": "Succesvol verstuurd!"
  },
  tr: {
    "label.addtocalendar": "Takvime Ekle",
    ical: "iCal Dosyası",
    ...A,
    "modal.button.default": "Beni tıklayın",
    "modal.webview.ical.h": "Tarayıcınızı açın",
    "modal.webview.ical.text": "Ne yazık ki, uygulama içi tarayıcılar takvim dosyalarını oluşturma şeklimizle ilgili sorunlar yaşıyor.",
    "modal.clipboard.text": "Panonuza otomatik olarak sihirli bir URL kopyaladık.",
    "modal.webview.ical.steps": "<ol><li><strong>Akıllı telefonunuzda başka bir tarayıcı açın</strong>, ...</li><li>Devam etmek için <strong>insert</strong> fonksiyonunu kullanın.</li></ol>",
    "modal.opensafari.ical.h": "Açık Safari",
    "modal.opensafari.ical.text": "Ne yazık ki iOS, takvim dosyasını Safari dışında oluştururken ve açarken bazı sorunlar yaşıyor.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Açık Safari</strong>, ...</li><li>Devam etmek için <strong>insert</strong> fonksiyonunu kullanın.</li></ol>",
    "modal.multidate.h": "Bu bir etkinlik serisidir",
    "modal.multidate.text": "Parçaları teker teker ekleyin:",
    "date.status.cancelled": "Bu tarih iptal edildi.",
    "date.status.cancelled.cta": "Lütfen takviminizi güncelleyin!",
    "modal.subscribe.yahoo.h": "Yahoo'ya takvim ekleme",
    "modal.subscribe.yahoo.text": `<ol><li>Yahoo takvimini açın.</li><li>"Eylemler" sekmesine tıklayın.</li><li>"Diğer Takvimleri Takip Et" öğesini seçin.</li><li>Bir ad seçin ve URL'yi panonuzdan URL alanına yapıştırın.</li></ol>`,
    "modal.subscribe.yahoo.button": "Yahoo Takvimini aç",
    close: "Kapat",
    continue: "Devam etmek",
    cancel: "İptal",
    expired: "Günü geçmiş",
    recurring: "Yinelenen",
    thankyou: "Teşekkürler",
    submit: "Gönder",
    "label.share.email": "E-posta ile Paylaş",
    "label.share.copy": "Bağlantıyı Kopyala",
    "label.share.copied": "Kopyalandı",
    "label.share.email.subject": "Bu Tarihi Unutma",
    "form.error.required": "Gerekli tüm alanları doğru şekilde doldurmadınız",
    "form.error.sending": "Yanıtınızı gönderirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin",
    "form.success": "Başarıyla gönderildi!"
  },
  zh: {
    "label.addtocalendar": "添加到日历",
    ical: "iCal 文件",
    ...A,
    "modal.button.default": "点我",
    "modal.webview.ical.h": "打开浏览器",
    "modal.webview.ical.text": "不幸的是，应用内浏览器在我们生成日历文件的方式上存在问题。",
    "modal.clipboard.text": "我们自动将魔术 URL 复制到您的剪贴板。",
    "modal.webview.ical.steps": "<ol><li>打开手机上的任何其他浏览器, ...</li><li>粘贴剪贴板内容并开始。</li></ol>",
    "modal.opensafari.ical.h": "打开 Safari",
    "modal.opensafari.ical.text": "不幸的是，iOS 在 Safari 之外生成和打开日历文件时遇到一些问题。",
    "modal.opensafari.ical.steps": "<ol><li><strong>打开 Safari</strong>, ...</li><li>粘贴剪贴板内容并开始。</li></ol>",
    "modal.multidate.h": "这是一个活动系列",
    "modal.multidate.text": "逐个添加各个部分:",
    "date.status.cancelled": "此日期已取消。",
    "date.status.cancelled.cta": "请更新您的日历!",
    "modal.subscribe.yahoo.h": "将日历添加到 Yahoo",
    "modal.subscribe.yahoo.text": "<ol><li>打开 Yahoo 日历。</li><li>点击“操作”标签。</li><li>选择“关注其他日历”。</li><li>选择一个名称并将剪贴板中的 URL 粘贴到 URL 字段中。</li></ol>",
    "modal.subscribe.yahoo.button": "打开雅虎日历",
    close: "关",
    continue: "继续",
    cancel: "中止",
    expired: "已到期",
    recurring: "再次发生的",
    thankyou: "谢谢",
    submit: "提交",
    "label.share.email": "通过电子邮件分享",
    "label.share.copy": "复制链接",
    "label.share.copied": "已复制",
    "label.share.email.subject": "记住这个日期",
    "form.error.required": "你没有正确填写所有必填字段",
    "form.error.sending": "发送你的回复时出现问题。请稍后再试",
    "form.success": "成功发送！"
  },
  ar: {
    "label.addtocalendar": "إضافة إلى التقويم",
    ical: "ملف iCal",
    ...A,
    "modal.button.default": "انقر فوق لي",
    "modal.webview.ical.h": "افتح المستعرض الخاص بك",
    "modal.webview.ical.text": "لسوء الحظ ، تواجه المتصفحات داخل التطبيق مشاكل في طريقة إنشاء ملف التقويم.",
    "modal.clipboard.text": "قمنا تلقائيًا بنسخ عنوان URL سحري إلى الحافظة الخاصة بك.",
    "modal.webview.ical.steps": "<ol><li>افتح أي متصفح آخر على هاتفك الذكي, ...</li><li>.الصق محتوى الحافظة واذهب</li></ol>",
    "modal.opensafari.ical.h": "افتح Safari",
    "modal.opensafari.ical.text": "لسوء الحظ ، يواجه iOS بعض المشكلات في إنشاء ملف التقويم وفتحه خارج Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>افتح Safari</strong>, ...</li><li>الصق محتوى الحافظة واذهب.</li></ol>",
    "modal.multidate.h": "هذه سلسلة أحداث",
    "modal.multidate.text": "أضف الأجزاء الفردية واحدة تلو الأخرى:",
    "date.status.cancelled": "تم إلغاء هذا التاريخ.",
    "date.status.cancelled.cta": "الرجاء تحديث التقويم الخاص بك!",
    "modal.subscribe.yahoo.h": "أضف التقويم إلى Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>افتح تقويم Yahoo.</li><li>انقر فوق علامة التبويب "الإجراءات".</li><li>حدد "متابعة تقويمات أخرى".</li><li>اختر اسمًا والصق عنوان URL من الحافظة الخاصة بك في حقل URL.</li></ol>',
    "modal.subscribe.yahoo.button": "افتح تقويم ياهو",
    close: "قريب",
    continue: "استمر",
    cancel: "إحباط",
    expired: "منتهي الصلاحية",
    recurring: "يتكرر",
    thankyou: "شكرا",
    submit: "إرسال",
    "label.share.email": "مشاركة عبر البريد الإلكتروني",
    "label.share.copy": "نسخ الرابط",
    "label.share.copied": "تم النسخ",
    "label.share.email.subject": "تذكر هذا الموعد",
    "form.error.required": "لم تقم بملء جميع الحقول المطلوبة بشكل صحيح",
    "form.error.sending": "حدثت مشكلة أثناء إرسال ردك. الرجاء المحاولة لاحقاً",
    "form.success": "تم الإرسال بنجاح!"
  },
  hi: {
    "label.addtocalendar": "कैलेंडर में जोड़ें",
    ical: "iCal फ़ाइल",
    ...A,
    "modal.button.default": "मुझे क्लिक करें",
    "modal.webview.ical.h": "अपना ब्राउज़र खोलें",
    "modal.webview.ical.text": "दुर्भाग्य से, इन-ऐप ब्राउज़र में कैलेंडर फ़ाइल बनाने के तरीके में समस्याएँ हैं।",
    "modal.clipboard.text": "हमने आपके क्लिपबोर्ड पर स्वचालित रूप से एक जादुई URL कॉपी कर लिया है।",
    "modal.webview.ical.steps": "<ol><li>अपने फ़ोन पर <strong>दूसरा ब्राउज़र खोलें</strong>, ...</li><li>क्लिपबोर्ड सामग्री <strong>चिपकाएं</strong> और जाएं।</li></ol>",
    "modal.opensafari.ical.h": "सफारी खोलें",
    "modal.opensafari.ical.text": "दुर्भाग्य से, iOS में सफ़ारी के बाहर कैलेंडर फ़ाइल बनाने और खोलने में कुछ समस्याएँ हैं।",
    "modal.opensafari.ical.steps": "<ol><li><strong>सफारी खोलें</strong>, ...</li><li>क्लिपबोर्ड सामग्री <strong>चिपकाएं</strong> और जाएं।</li></ol>",
    "modal.multidate.h": "यह एक इवेंट सीरीज़ है",
    "modal.multidate.text": "अलग-अलग हिस्सों को एक-एक करके जोड़ें:",
    "date.status.cancelled": "यह तिथि रद्द हो गई।",
    "date.status.cancelled.cta": "कृपया अपना कैलेंडर अपडेट करें!",
    "modal.subscribe.yahoo.h": "Yahoo . में कैलेंडर जोड़ें",
    "modal.subscribe.yahoo.text": '<ol><li>Yahoo कैलेंडर खोलें।</li><li>"कृती" टैब पर क्लिक करें।</li><li>"इतर कॅलेंडर्सचे अनुसरण करा" चुनें।</li><li>एक नाम चुनें और अपने क्लिपबोर्ड से URL को URL फ़ील्ड में पेस्ट करें।</li></ol>',
    "modal.subscribe.yahoo.button": "याहू कैलेंडर खोलें",
    close: "बंद करना",
    continue: "जारी रखें",
    cancel: "रद्द करना",
    expired: "खत्म हो चुका",
    recurring: "पुनरावर्ती",
    thankyou: "धन्यवाद",
    submit: "जमा करें",
    "label.share.email": "ईमेल के माध्यम से साझा करें",
    "label.share.copy": "लिंक कॉपी करें",
    "label.share.copied": "कॉपी हो गया",
    "label.share.email.subject": "इस तारीख को याद रखें",
    "form.error.required": "आपने सभी आवश्यक फ़ील्ड सही ढंग से नहीं भरी हैं",
    "form.error.sending": "आपका जवाब भेजते समय एक समस्या हुई। कृपया बाद में पुनः प्रयास करें",
    "form.success": "सफलतापूर्वक भेजा गया!"
  },
  pl: {
    "label.addtocalendar": "Dodaj do kalendarza",
    ical: "Plik iCal",
    ...A,
    "modal.button.default": "Kliknij mnie",
    "modal.webview.ical.h": "Otwórz przeglądarkę",
    "modal.webview.ical.text": "Niestety, przeglądarki in-app mają problemy ze sposobem, w jaki generujemy plik kalendarza.",
    "modal.clipboard.text": "Automatycznie skopiowaliśmy magiczny adres URL do schowka.",
    "modal.webview.ical.steps": "<ol><li><strong>Otwórz inną przeglądarkę</strong> w swoim telefonie, ...</li><li><strong>Wklej</strong> zawartość schowka i ruszaj.</li></ol>",
    "modal.opensafari.ical.h": "Otwórz Safari",
    "modal.opensafari.ical.text": "Niestety iOS ma pewne problemy z generowaniem i otwieraniem pliku kalendarza poza Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Otwórz Safari</strong>, ...</li><li><strong>Wklej</strong> zawartość schowka i ruszaj.</li></ol>",
    "modal.multidate.h": "To jest cykl imprez",
    "modal.multidate.text": "Dodawać po kolei poszczególne części:",
    "date.status.cancelled": "Ta data została odwołana.",
    "date.status.cancelled.cta": "Zaktualizuj swój kalendarz!",
    "modal.subscribe.yahoo.h": "Dodaj kalendarz do Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Otwórz kalendarz Yahoo.</li><li>Kliknij na zakładkę "Czynności".</li><li>Wybierz "Obserwuj inne kalendarze".</li><li>Wybierz nazwę i wklej adres URL ze schowka w polu URL.</li></ol>',
    "modal.subscribe.yahoo.button": "Otwórz kalendarz Yahoo",
    close: "Zamknij",
    continue: "Kontynuować",
    cancel: "Anuluj",
    expired: "Wygasły",
    recurring: "Powtarzający się",
    thankyou: "Dziękuję",
    submit: "Wyślij",
    "label.share.email": "Udostępnij przez e-mail",
    "label.share.copy": "Kopiuj link",
    "label.share.copied": "Skopiowane",
    "label.share.email.subject": "Zapamiętaj tę datę",
    "form.error.required": "Nie wypełniłeś wszystkich wymaganych pól poprawnie",
    "form.error.sending": "Wystąpił problem z wysłaniem twojej odpowiedzi. Spróbuj ponownie później",
    "form.success": "Wysłano pomyślnie!"
  },
  id: {
    "label.addtocalendar": "Tambahkan ke Kalender",
    ical: "File iCal",
    ...A,
    "modal.button.default": "Klik saya",
    "modal.webview.ical.h": "Buka browser Anda",
    "modal.webview.ical.text": "Sayangnya, browser dalam aplikasi memiliki masalah dengan cara kami menghasilkan file kalender.",
    "modal.clipboard.text": "Kami telah secara otomatis menyalin URL ajaib ke clipboard Anda.",
    "modal.webview.ical.steps": "<ol><li><strong>Buka peramban lain</strong> pada ponsel Anda, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
    "modal.opensafari.ical.h": "Buka Safari",
    "modal.opensafari.ical.text": "Sayangnya, iOS memiliki beberapa masalah dalam membuat dan membuka file kalender di luar Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Buka Safari</strong>, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>",
    "modal.multidate.h": "Ini adalah rangkaian acara",
    "modal.multidate.text": "Tambahkan masing-masing bagian satu per satu:",
    "date.status.cancelled": "Tanggal ini dibatalkan.",
    "date.status.cancelled.cta": "Perbarui kalender Anda!",
    "modal.subscribe.yahoo.h": "Tambahkan kalender ke Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Buka kalender Yahoo.</li><li>Klik pada tab "Tindakan".</li><li>Pilih "Ikuti Kalender Lain".</li><li>Pilih nama dan tempelkan URL dari clipboard Anda ke bidang URL.</li></ol>',
    "modal.subscribe.yahoo.button": "Buka kalender Yahoo",
    close: "Tutup",
    continue: "Lanjutkan",
    cancel: "Batal",
    expired: "Kedaluwarsa",
    recurring: "Berulang",
    thankyou: "Terima kasih",
    submit: "Kirim",
    "label.share.email": "Bagikan via email",
    "label.share.copy": "Salin tautan",
    "label.share.copied": "Tersalin",
    "label.share.email.subject": "Ingat tanggal ini",
    "form.error.required": "Kamu belum mengisi semua kolom yang diperlukan dengan benar",
    "form.error.sending": "Ada masalah saat mengirim jawabanmu. Coba lagi nanti",
    "form.success": "Berhasil terkirim!"
  },
  no: {
    "label.addtocalendar": "Legg til i kalenderen",
    ical: "iCal-fil",
    ...A,
    "modal.button.default": "Klikk på meg",
    "modal.webview.ical.h": "Åpne nettleseren din",
    "modal.webview.ical.text": "Dessverre har nettlesere i appen problemer med måten vi genererer kalenderfilen på.",
    "modal.clipboard.text": "Vi kopierte automatisk en magisk URL til utklippstavlen din.",
    "modal.webview.ical.steps": "<ol><li><strong>Åpne en annen nettleser</strong> på telefonen, ...</li><li><strong>Lim inn</strong> innholdet på utklippstavlen og gå.</li></ol>",
    "modal.opensafari.ical.h": "Åpne Safari",
    "modal.opensafari.ical.text": "Dessverre har iOS noen problemer med å generere og åpne kalenderfilen utenfor Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Åpne Safari</strong>, ...</li><li><strong>Lim inn</strong> innholdet på utklippstavlen og gå.</li></ol>",
    "modal.multidate.h": "Dette er en avtaleserie",
    "modal.multidate.text": "Legg til de enkelte datoene i kalenderen din i rekkefølge:",
    "date.status.cancelled": "Denne datoen ble avlyst.",
    "date.status.cancelled.cta": "Oppdater kalenderen din!",
    "modal.subscribe.yahoo.h": "Legg til kalender til Yahoo",
    "modal.subscribe.yahoo.text": "<ol><li>Åpne Yahoo-kalenderen.</li><li>Klikk på «Handlinger»-fanen.</li><li>Velg «Følg andre kalendere».</li><li>Velg et navn og lim inn URL-en fra utklippstavlen i URL-feltet.</li></ol>",
    "modal.subscribe.yahoo.button": "Åpne Yahoo-kalenderen",
    close: "Lukk",
    continue: "Fortsette",
    cancel: "Avbryt",
    expired: "Utløpt",
    recurring: "Tilbakevendende",
    thankyou: "Takk",
    submit: "Send inn",
    "label.share.email": "Del via e-post",
    "label.share.copy": "Kopier lenke",
    "label.share.copied": "Kopiert",
    "label.share.email.subject": "Husk denne datoen",
    "form.error.required": "Du har ikke fylt ut alle de nødvendige feltene riktig",
    "form.error.sending": "Det oppsto et problem med å sende svaret ditt. Vennligst prøv igjen senere",
    "form.success": "Sendt suksessfullt!"
  },
  fi: {
    "label.addtocalendar": "Lisää kalenteriin",
    ical: "iCal-tiedosto",
    ...A,
    "modal.button.default": "Klikkaa minua",
    "modal.webview.ical.h": "Avaa selain",
    "modal.webview.ical.text": "Valitettavasti sovelluksen sisäisillä selaimilla on ongelmia kalenteritiedoston luomisessa.",
    "modal.clipboard.text": "Olemme automaattisesti kopioineet maagisen URL-osoitteen leikepöydällesi.",
    "modal.webview.ical.steps": "<ol><li><strong>Avaa toinen selain</strong> puhelimessasi., ...</li><li><strong>liitä</strong> leikepöydän sisältö ja lähde.</li></ol>",
    "modal.opensafari.ical.h": "Avaa Safari",
    "modal.opensafari.ical.text": "Valitettavasti iOS:llä on ongelmia kalenteritiedoston luomisessa ja avaamisessa Safarin ulkopuolella.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Avaa Safari</strong>, ...</li><li><strong>liitä</strong> leikepöydän sisältö ja lähde.</li></ol>",
    "modal.multidate.h": "Tämä on tapahtumasarja",
    "modal.multidate.text": "Lisää yksittäiset osat yksi kerrallaan:",
    "date.status.cancelled": "Tämä päivämäärä peruttiin.",
    "date.status.cancelled.cta": "Päivitä kalenterisi!",
    "modal.subscribe.yahoo.h": "Lisää kalenteri Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Avaa Yahoo-kalenteri.</li><li>Napsauta "Toiminnot"-välilehteä.</li><li>Valitse "Seuraa muiden kalentereita".</li><li>Valitse nimi ja liitä URL-osoite leikepöydältäsi URL-kenttään.</li></ol>',
    "modal.subscribe.yahoo.button": "Avaa Yahoo-kalenteri",
    close: "Sulje",
    continue: "Jatkaa",
    cancel: "Peruuta",
    expired: "Vanhentunut",
    recurring: "Toistuva",
    thankyou: "Kiitos",
    submit: "Lähetä",
    "label.share.email": "Jaa sähköpostitse",
    "label.share.copy": "Kopioi linkki",
    "label.share.copied": "Kopioitu",
    "label.share.email.subject": "Muista tämä päivämäärä",
    "form.error.required": "Et täyttänyt kaikkia vaadittuja kenttiä oikein",
    "form.error.sending": "Vastauksen lähettämisessä ilmeni ongelma. Yritä myöhemmin uudelleen",
    "form.success": "Lähetetty onnistuneesti!"
  },
  sv: {
    "label.addtocalendar": "Lägg till i kalender",
    ical: "iCal-fil",
    ...A,
    "modal.button.default": "Klicka på mig",
    "modal.webview.ical.h": "Öppna din webbläsare",
    "modal.webview.ical.text": "Tyvärr har webbläsare i appen problem med hur vi genererar kalenderfilen.",
    "modal.clipboard.text": "Vi har automatiskt kopierat en magisk URL till ditt klippblock.",
    "modal.webview.ical.steps": "<ol><li><strong>Öppna en annan webbläsare</strong> på telefonen, ...</li><li><strong>Insätt</strong> innehållet i klippbordet och kör.</li></ol>",
    "modal.opensafari.ical.h": "Öppna Safari",
    "modal.opensafari.ical.text": "Tyvärr har iOS vissa problem med att generera och öppna kalenderfilen utanför Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Öppna Safari</strong>, ...</li><li><strong>Insätt</strong> innehållet i klippbordet och kör.</li></ol>",
    "modal.multidate.h": "Detta är en evenemangsserie",
    "modal.multidate.text": "Lägg till de enskilda delarna en efter en:",
    "date.status.cancelled": "Detta datum har ställts in.",
    "date.status.cancelled.cta": "Uppdatera din kalender!",
    "modal.subscribe.yahoo.h": "Lägg till kalender i Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Öppna Yahoo-kalendern.</li><li>Klicka på fliken "Åtgärder".</li><li>Välj "Följ andra kalendrar".</li><li>Välj ett namn och klistra in URL:en från klippbordet i URL-fältet.</li></ol>',
    "modal.subscribe.yahoo.button": "Öppna Yahoo-kalendern",
    close: "Stäng",
    continue: "Fortsätta",
    cancel: "Avbryt",
    expired: "Utgånget",
    recurring: "Återkommande",
    thankyou: "Tack",
    submit: "Skicka",
    "label.share.email": "Dela via e-post",
    "label.share.copy": "Kopiera länk",
    "label.share.copied": "Kopierat",
    "label.share.email.subject": "Kom ihåg detta datum",
    "form.error.required": "Du har inte fyllt i alla nödvändiga fält korrekt",
    "form.error.sending": "Det uppstod ett problem när ditt svar skickades. Försök igen senare",
    "form.success": "Skickat framgångsrikt!"
  },
  cs: {
    "label.addtocalendar": "Přidat do kalendáře",
    ical: "Soubor iCal",
    ...A,
    "modal.button.default": "Klikněte na mě",
    "modal.webview.ical.h": "Otevřete prohlížeč",
    "modal.webview.ical.text": "Prohlížeče v aplikacích mají bohužel problémy se způsobem generování souboru kalendáře.",
    "modal.clipboard.text": "Do schránky jsme automaticky zkopírovali kouzelnou adresu URL.",
    "modal.webview.ical.steps": "<ol><li><strong>Otevření jiného prohlížeče</strong> v telefonu, ...</li><li><strong>Vložte</strong> obsah schránky a přejděte.</li></ol>",
    "modal.opensafari.ical.h": "Otevřít Safari",
    "modal.opensafari.ical.text": "Bohužel má iOS nějaké problémy s generováním a otevíráním souboru kalendáře mimo Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Otevřít Safari</strong>, ...</li><li><strong>Vložte</strong> obsah schránky a přejděte.</li></ol>",
    "modal.multidate.h": "Jedná se o sérii událostí",
    "modal.multidate.text": "Přidávejte jednotlivé díly jeden po druhém:",
    "date.status.cancelled": "Toto datum bylo zrušeno.",
    "date.status.cancelled.cta": "Aktualizujte svůj kalendář!",
    "modal.subscribe.yahoo.h": "Přidat kalendář do Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Otevřete kalendář Yahoo.</li><li>Klikněte na kartu "Akce".</li><li>Vyberte možnost "Sledovat další kalendáře".</li><li>Vyberte název a vložte adresu URL ze schránky do pole URL.</li></ol>',
    "modal.subscribe.yahoo.button": "Otevřete kalendář Yahoo",
    close: "Zavřít",
    continue: "Pokračovat",
    cancel: "Storno",
    expired: "Platnost vypršela",
    recurring: "Opakující se",
    thankyou: "Děkuji",
    submit: "Odeslat",
    "label.share.email": "Sdílet e-mailem",
    "label.share.copy": "Kopírovat odkaz",
    "label.share.copied": "Zkopírováno",
    "label.share.email.subject": "Zapamatuj si tento termín",
    "form.error.required": "Nevyplnil jsi správně všechna požadovaná pole",
    "form.error.sending": "Při odesílání tvé odpovědi došlo k problému. Zkus to prosím později znovu",
    "form.success": "Úspěšně odesláno!"
  },
  ja: {
    "label.addtocalendar": "カレンダーに追加",
    ical: "iCalファイル",
    ...A,
    "modal.button.default": "クリックしてください",
    "modal.webview.ical.h": "ブラウザを起動する",
    "modal.webview.ical.text": "残念ながら、アプリ内ブラウザは、カレンダーファイルの生成方法に問題があります。",
    "modal.clipboard.text": "魔法のURLを自動的にクリップボードにコピーしています。",
    "modal.webview.ical.steps": "<ol><li>スマートフォンで別のブラウザを起動する, ...</li><li>クリップボードの内容を貼り付けて行く。</li></ol>",
    "modal.opensafari.ical.h": "オープンSafari",
    "modal.opensafari.ical.text": "残念ながら、iOS では、Safari の外でカレンダー ファイルを生成したり開いたりする際にいくつかの問題があります。",
    "modal.opensafari.ical.steps": "<ol><li><strong>オープンSafari</strong>, ...</li><li>クリップボードの内容を貼り付けて行く。</li></ol>",
    "modal.multidate.h": "イベントシリーズです",
    "modal.multidate.text": "個々のパーツを一つずつ追加していく:",
    "date.status.cancelled": "この日はキャンセルになりました。",
    "date.status.cancelled.cta": "カレンダーを更新する!",
    "modal.subscribe.yahoo.h": "Yahooにカレンダーを追加する",
    "modal.subscribe.yahoo.text": "<ol><li>Yahooカレンダーを開く。</li><li>[実行] タブをクリックします。</li><li>[その他のカレンダーのフォロー] を選択します。</li><li>名前を決めて、クリップボードにあるURLをURL欄に貼り付けます。</li></ol>",
    "modal.subscribe.yahoo.button": "Yahooカレンダーを開く",
    close: "閉じる",
    continue: "続ける",
    cancel: "キャンセル",
    expired: "期限切れ",
    recurring: "繰り返し",
    thankyou: "ありがとう",
    submit: "送信",
    "label.share.email": "メールで共有",
    "label.share.copy": "リンクをコピー",
    "label.share.copied": "コピー済み",
    "label.share.email.subject": "この日付を覚えておいて",
    "form.error.required": "必要なフィールドをすべて正しく入力していません",
    "form.error.sending": "あなたの回答を送信する際に問題が発生しました。後で再試行してください",
    "form.success": "正常に送信されました！"
  },
  it: {
    "label.addtocalendar": "Aggiungi al calendario",
    ical: "File iCal",
    ...A,
    "modal.button.default": "Clicca su di me",
    "modal.webview.ical.h": "Aprire il browser",
    "modal.webview.ical.text": "Purtroppo i browser in-app hanno problemi con il modo in cui generiamo il file del calendario.",
    "modal.clipboard.text": "Abbiamo copiato automaticamente un URL magico negli appunti.",
    "modal.webview.ical.steps": "<ol><li><strong>Aprire un altro browser</strong> sul cellulare, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
    "modal.opensafari.ical.h": "Aprire Safari",
    "modal.opensafari.ical.text": "Sfortunatamente, iOS ha alcuni problemi nella generazione e nell'apertura del file del calendario al di fuori di Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Aprire Safari</strong>, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>",
    "modal.multidate.h": "Questa è una serie di eventi",
    "modal.multidate.text": "Aggiungere le singole parti una per una:",
    "date.status.cancelled": "La data è stata annullata.",
    "date.status.cancelled.cta": "Aggiornare il calendario!",
    "modal.subscribe.yahoo.h": "Aggiungi il calendario a Yahoo",
    "modal.subscribe.yahoo.text": `<ol><li>Aprire il calendario di Yahoo.</li><li>Fare clic sulla scheda "Azioni".</li><li>Selezionare "Segui altri calendari".</li><li>Scegliere un nome e incollare l'URL dagli appunti nel campo URL.</li></ol>`,
    "modal.subscribe.yahoo.button": "Apri il calendario di Yahoo",
    close: "Chiudere",
    continue: "Continuare",
    cancel: "Annulla",
    expired: "Scaduta",
    recurring: "Ricorrente",
    thankyou: "Grazie",
    submit: "Invia",
    "label.share.email": "Condividi via Email",
    "label.share.copy": "Copia il link",
    "label.share.copied": "Copiato",
    "label.share.email.subject": "Ricorda questa data",
    "form.error.required": "Non hai compilato correttamente tutti i campi richiesti",
    "form.error.sending": "C'è stato un problema nell'invio della tua risposta. Prova di nuovo più tardi",
    "form.success": "Inviato con successo!"
  },
  ko: {
    "label.addtocalendar": "캘린더에 추가",
    ical: "iCal 파일",
    ...A,
    "modal.button.default": "클릭 해주세요",
    "modal.webview.ical.h": "브라우저 열기",
    "modal.webview.ical.text": "불행히도 인앱 브라우저는 캘린더 파일을 생성하는 방식에 문제가 있습니다.",
    "modal.clipboard.text": "매직 URL을 클립보드에 자동으로 복사했습니다.",
    "modal.webview.ical.steps": "<ol><li>휴대전화에서 다른 브라우저 열기, ...</li><li>클립보드 내용을 붙여넣고 이동합니다.</li></ol>",
    "modal.opensafari.ical.h": "Safari 열기",
    "modal.opensafari.ical.text": "안타깝게도 iOS에는 Safari 외부에서 캘린더 파일을 생성하고 여는 데 몇 가지 문제가 있습니다.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Safari 열기</strong>, ...</li><li>클립보드 내용을 붙여넣고 이동합니다.</li></ol>",
    "modal.multidate.h": "이벤트 시리즈입니다",
    "modal.multidate.text": "개별 부품을 하나씩 추가:",
    "date.status.cancelled": "이 날짜는 취소되었습니다.",
    "date.status.cancelled.cta": "캘린더를 업데이트하세요!",
    "modal.subscribe.yahoo.h": "Yahoo에 캘린더 추가",
    "modal.subscribe.yahoo.text": '<ol><li>Yahoo 캘린더를 엽니다.</li><li>"동작" 탭을 클릭합니다.</li><li>"다른 일정관리 팔로우"를 선택합니다.</li><li>이름을 선택하고 클립보드의 URL을 URL 필드에 붙여넣습니다.</li></ol>',
    "modal.subscribe.yahoo.button": "야후 캘린더 열기",
    close: "닫다",
    continue: "계속하다",
    cancel: "취소",
    expired: "만료됨",
    recurring: "되풀이",
    thankyou: "감사합니다",
    submit: "제출하기",
    "label.share.email": "이메일로 공유하기",
    "label.share.copy": "링크 복사하기",
    "label.share.copied": "복사됨",
    "label.share.email.subject": "이 날짜를 기억하세요",
    "form.error.required": "필수 필드를 모두 올바르게 채우지 않았습니다",
    "form.error.sending": "응답을 보내는 데 문제가 발생했습니다. 나중에 다시 시도해주세요",
    "form.success": "성공적으로 전송됨!"
  },
  vi: {
    "label.addtocalendar": "Thêm vào Lịch",
    ical: "Tệp iCal",
    ...A,
    "modal.button.default": "Nhấp vào đây",
    "modal.webview.ical.h": "Mở trình duyệt của bạn",
    "modal.webview.ical.text": "Rất tiếc, các trình duyệt trong ứng dụng gặp sự cố với cách chúng tôi tạo tệp lịch.",
    "modal.clipboard.text": "Chúng tôi đã tự động sao chép một URL ma thuật vào khay nhớ tạm của bạn.",
    "modal.webview.ical.steps": "<ol><li><strong> Mở trình duyệt khác </strong> trên điện thoại của bạn, ...</li><li><strong> Dán </strong> nội dung khay nhớ tạm và bắt đầu.</li></ol>",
    "modal.opensafari.ical.h": "Mở Safari",
    "modal.opensafari.ical.text": "Rất tiếc, iOS gặp một số sự cố khi tạo và mở tệp lịch bên ngoài Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Mở Safari</strong>, ...</li><li><strong> Dán </strong> nội dung khay nhớ tạm và bắt đầu.</li></ol>",
    "modal.multidate.h": "Đây là một chuỗi sự kiện",
    "modal.multidate.text": "Thêm từng phần riêng lẻ một:",
    "date.status.cancelled": "Ngày này đã bị hủy.",
    "date.status.cancelled.cta": "Cập nhật lịch của bạn!",
    "modal.subscribe.yahoo.h": "Thêm lịch vào Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Mở Lịch Yahoo.</li><li>Nhấp vào tab "Hành động".</li><li>Chọn "Theo dõi các Lịch khác".</li><li>Chọn tên và dán URL từ khay nhớ tạm của bạn vào trường URL.</li></ol>',
    "modal.subscribe.yahoo.button": "Mở lịch Yahoo",
    close: "Đóng",
    continue: "Tiếp tục",
    cancel: "Hủy bỏ",
    expired: "Hết hạn",
    recurring: "Định kỳ",
    thankyou: "Cảm ơn",
    submit: "Gửi",
    "label.share.email": "Chia sẻ qua Email",
    "label.share.copy": "Sao chép liên kết",
    "label.share.copied": "Đã sao chép",
    "label.share.email.subject": "Ghi nhớ ngày này",
    "form.error.required": "Bạn chưa điền đúng tất cả các trường bắt buộc",
    "form.error.sending": "Có sự cố khi gửi phản hồi của bạn. Vui lòng thử lại sau",
    "form.success": "Gửi thành công!"
  },
  ro: {
    "label.addtocalendar": "Adauga In Calendar",
    ical: "Fisier iCal",
    ...A,
    "modal.button.default": "Apasa-ma",
    "modal.webview.ical.h": "Deschide browserul",
    "modal.webview.ical.text": "Din pacate, browserele din aplicatie au probleme cu generarea de fisiere pentru calendar.",
    "modal.clipboard.text": "Ti-am copiat automat un URL magic in clipboard",
    "modal.webview.ical.steps": "<ol><li><strong>Deschide un alt browser</strong> pe telefonul tau, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>",
    "modal.opensafari.ical.h": "Deschide Safari",
    "modal.opensafari.ical.text": "Din păcate, iOS are unele probleme la generarea și deschiderea fișierului calendar în afara Safari.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Deschides Safari</strong>, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>",
    "modal.multidate.h": "Aceasta este o serie de evenimente",
    "modal.multidate.text": "Adauga evenimentele individuale una cate una:",
    "date.status.cancelled": "Aceasta data a fost anulata.",
    "date.status.cancelled.cta": "Te rugam sa-ti updatezi calendarul!",
    "modal.subscribe.yahoo.h": "Adauga Calendar in Yahoo",
    "modal.subscribe.yahoo.text": '<ol><li>Deschide acum calendarul Yahoo.</li><li>Apasa pe tab-ul de "Actiuni".</li><li>Apasa "Urmareste alte calendare".</li><li>Seteaza un nume si lipeste continutul din clipboard in casuta cu url.</li></ol>',
    "modal.subscribe.yahoo.button": "Deschideți calendarul Yahoo",
    close: "Inchide",
    continue: "Continua",
    cancel: "Anuleaza",
    expired: "Expirat",
    recurring: "Recurente",
    thankyou: "Mulțumesc",
    submit: "Trimite",
    "label.share.email": "Distribuie prin e-mail",
    "label.share.copy": "Copiază linkul",
    "label.share.copied": "Copiat",
    "label.share.email.subject": "Ține minte această dată",
    "form.error.required": "Nu ai completat corect toate câmpurile necesare",
    "form.error.sending": "A apărut o problemă la trimiterea răspunsului tău. Încearcă din nou mai târziu",
    "form.success": "Trimis cu succes!"
  },
  fa: {
    "label.addtocalendar": "افزودن به تقویم",
    ical: "پرونده iCal",
    ...A,
    "modal.button.default": "اینجا کلیک کنید",
    "modal.webview.ical.h": "مرورگر خود را باز کنید",
    "modal.webview.ical.text": "متاسفانه، مرورگرهای درون برنامه‌ای با نحوه تولید پرونده تقویم مشکل دارند.",
    "modal.clipboard.text": "ما به طور خودکار یک نشانی اینترنتی جادویی را در کلیپ‌بورد شما کپی کردیم.",
    "modal.webview.ical.steps": "<ol><li><strong>مرورگر دیگری را </strong> در گوشی خود باز کنید، ...</li><li>محتوای کلیپ‌بورد را <strong>Paste</strong> کنید و Go را بزنید که آدرس باز شود.</li></ol>",
    "modal.opensafari.ical.h": "سافاری را باز کنید",
    "modal.opensafari.ical.text": "متأسفانه iOS در تولید و باز کردن فایل تقویم خارج از سافاری مشکلاتی دارد.",
    "modal.opensafari.ical.steps": "<ol><li><strong>سافاری را باز کنید</strong>، ...</li><li>محتوای کلیپ‌بورد را <strong>Paste</strong> کنید و Go را بزنید که آدرس باز شود.</li></ol>",
    "modal.multidate.h": "این یک سری رویداد است",
    "modal.multidate.text": "رویدادهای شخصی را یکی یکی اضافه کنید:",
    "date.status.cancelled": "این تاریخ لغو شد",
    "date.status.cancelled.cta": "لطفا تقویم خود را به‌روز کنید!",
    "modal.subscribe.yahoo.h": "افزودن تقویم به یاهو",
    "modal.subscribe.yahoo.text": "<ol><li>اکنون تقویم یاهو را باز کنید.</li><li>روی زبانه «Actions» کلیک کنید.</li><li>روی «Follow Other Calendars» ضربه بزنید.</li><li>یک نام وارد کنید و محتوای کلیپ‌بورد را در قسمت url قرار دهید.</li></ol>",
    "modal.subscribe.yahoo.button": "تقویم یاهو را باز کنید",
    close: "بستن",
    continue: "ادامه دادن",
    cancel: "لغو",
    expired: "منقضی شده",
    thankyou: "ممنون",
    submit: "ارسال",
    "label.share.email": "اشتراک‌گذاری از طریق ایمیل",
    "label.share.copy": "کپی لینک",
    "label.share.copied": "کپی شد",
    "label.share.email.subject": "این تاریخ را به یاد داشته باشید",
    "form.error.required": "شما همه فیلدهای لازم را به درستی پر نکرده‌اید",
    "form.error.sending": "مشکلی در ارسال پاسخ شما وجود داشت. لطفا بعدا دوباره تلاش کنید",
    "form.success": "با موفقیت ارسال شد!"
  },
  et: {
    "label.addtocalendar": "Lisa kalendrisse",
    ical: "iCal fail",
    ...A,
    "modal.button.default": "Kliki siia",
    "modal.webview.ical.h": "Ava oma veebilehitseja",
    "modal.webview.ical.text": "Kahjuks on rakendusesisestel veebilehitsejatel probleeme kalendrifailide loomisega.",
    "modal.clipboard.text": "Kalendri veebi aadress on automaatselt kopeeritud sinu lõikelauale.",
    "modal.webview.ical.steps": "<ol><li><strong>Ava teine veebilehitseja</strong> oma telefonis, ...</li><li><strong>Kleebi</strong> lõikelaua sisu ning mine sellele lehele.</li></ol>",
    "modal.opensafari.ical.h": "Ava Safari",
    "modal.opensafari.ical.text": "Kahjuks on iOS-il probleeme kalendrifaili genereerimise ja avamisega väljaspool Safarit.",
    "modal.opensafari.ical.steps": "<ol><li><strong>Ava Safari</strong>, ...</li><li><strong>Kleebi</strong> lõikelaua sisu ning mine sellele lehele.</li></ol>",
    "modal.multidate.h": "See on sündmuste seeria",
    "modal.multidate.text": "Ava üksikud sündmused ükshaaval:",
    "date.status.cancelled": "See kuupäev on tühistatud.",
    "date.status.cancelled.cta": "Palun uuenda oma kalendrit!",
    "modal.subscribe.yahoo.h": "Lisa kalender Yahoo-sse",
    "modal.subscribe.yahoo.text": '<ol><li>Ava oma Yahoo kalender.</li><li>Kliki "Actions" vahelehte.</li><li>Vajuta "Follow Other Calendars".</li><li>Määra nimi ning lisa lõikelaua sisu URL (veebi aadressi) väljale.</li></ol>',
    "modal.subscribe.yahoo.button": "Avage Yahoo kalender",
    close: "Sulge",
    continue: "Jätkama",
    cancel: "Tühista",
    expired: "Aegunud",
    thankyou: "Aitäh",
    submit: "Saada",
    "label.share.email": "Jaga e-posti teel",
    "label.share.copy": "Kopeeri link",
    "label.share.copied": "Kopeeritud",
    "label.share.email.subject": "Pane see kuupäev kirja",
    "form.error.required": "Sa pole kõiki nõutavaid välju korrektselt täitnud",
    "form.error.sending": "Sinu vastuse saatmisel tekkis probleem. Palun proovi hiljem uuesti",
    "form.success": "Edukalt saadetud!"
  }
}, Sa = Object.keys(Se);
function u(e, t) {
  return t.customLabels && t.customLabels[`${e}`] && t.customLabels[`${e}`] !== "" ? K(t.customLabels[`${e}`]) : ht(e, t.language);
}
function ht(e, t) {
  return t || (t = "en"), Se[`${t}`][`${e}`] ? Se[`${t}`][`${e}`] : t !== "en" ? ht(e, "en") : e;
}
let Le = !1, se = 0;
const X = [], Ye = '<div class="atcb-initialized atcb-hidden"></div>';
if (B()) {
  class e extends HTMLElement {
    constructor() {
      super(), this._initialized = new Promise((o) => this._initializedResolver = o);
      const a = document.createElement("template");
      a.innerHTML = Ye, this.attachShadow({ mode: "open", delegateFocus: !0 }), this.shadowRoot.append(a.content.cloneNode(!0)), this.state = {
        initializing: !1,
        initialized: !1,
        ready: !1,
        updatePending: !1
      }, this.data = {}, this.error = !1;
    }
    connectedCallback() {
      this.initializing || (this.initializing = !0, setTimeout(() => this.initializeComponent(), 0));
    }
    async initializeComponent() {
      if (this.state.ready)
        return;
      this.state.initializing = !0;
      const a = this.getAttribute("debug");
      if (this.debug = !!(this.hasAttribute("debug") && (!a || a === "true" || a === "")), this.hasAttribute("proKey") && this.getAttribute("proKey") !== "" || this.hasAttribute("prokey") && this.getAttribute("prokey") !== "") {
        const o = !!(this.hasAttribute("dev") && (this.getAttribute("dev") === null || this.getAttribute("dev") === "" || this.getAttribute("dev") === "true"));
        this.hasAttribute("proKey") && this.getAttribute("proKey") !== "" ? this.data = await J(this.getAttribute("proKey"), this, { dev: o }) : this.data = await J(this.getAttribute("prokey"), this, { dev: o }), this.data.proKey && (this.proKey = this.data.proKey);
      }
      if (!this.data.name || this.data.name === "") {
        this.data.proKey = "";
        try {
          this.data = await Qe(this, this.debug);
        } catch (o) {
          this.debug && (console.error(o), ke(this.shadowRoot, o)), this.state.initializing = !1, this.state.ready = !0;
          return;
        }
      }
      await this.initButton(), this.state.initializing = !1, this.state.initialized = !0, this.state.ready = !0, this._initializedResolver();
    }
    whenInitialized() {
      return this._initialized;
    }
    disconnectedCallback() {
      We(this.shadowRoot, this.identifier), this.debug && console.log('Add to Calendar Button "' + this.identifier + '" destroyed'), document.querySelectorAll("add-to-calendar-button").length === 0 && (se = 0);
    }
    static get observedAttributes() {
      const a = ["instance", "prokey", "proKey"];
      return this.proKey && this.proKey !== "" ? ze.map((o) => o.toLowerCase()).concat(a) : at.map((o) => o.toLowerCase()).concat(a);
    }
    attributeChangedCallback(a, o, n) {
      this.state.ready && (this.debug && this.state.initialized && console.log(`${a}'s value has been changed from ${o} to ${n}`), this.updatePending || (this.updatePending = !0, setTimeout(() => this.updateComponent(), 0)));
    }
    async updateComponent() {
      if (!this.updatePending)
        return;
      this.data = {}, this.shadowRoot.querySelector(".atcb-initialized").remove();
      const a = document.createElement("template");
      if (a.innerHTML = Ye, this.shadowRoot.append(a.content.cloneNode(!0)), this.hasAttribute("proKey") && this.getAttribute("proKey") !== "" ? (this.data = await J(this.getAttribute("proKey"), this), this.data.proKey && (this.proKey = this.data.proKey)) : this.hasAttribute("prokey") && this.getAttribute("prokey") !== "" && (this.data = await J(this.getAttribute("prokey"), this), this.data.proKey && (this.proKey = this.data.proKey)), !this.data.name || this.data.name === "")
        try {
          this.data = await Qe(this, this.debug);
        } catch (o) {
          this.debug && (console.error(o), ke(this.shadowRoot, o)), this.updatePending = !1;
          return;
        }
      We(this.shadowRoot, this.identifier), await this.initButton(), this.updatePending = !1;
    }
    async initButton() {
      if (this.state.initialized || (se = se + 1), this.identifier && this.identifier !== "")
        this.data.identifier = this.identifier;
      else {
        if (this.data.identifier && this.data.identifier !== "") {
          if (/^[\w\-_]+$/.test(this.data.identifier))
            this.data.identifier = "atcb-btn-" + this.data.identifier;
          else if (this.data.identifier = "", this.debug) {
            let a = "Add to Calendar Button";
            this.data.rsvp && Object.keys(this.data.rsvp).length > 0 && (a = "RSVP"), console.warn(a + " generation: identifier invalid - using auto numbers instead");
          }
        }
        (this.data.identifier == null || this.data.identifier == "") && (this.data.identifier = "atcb-btn-" + se), this.identifier = this.data.identifier;
      }
      this.setAttribute("atcb-button-id", this.data.identifier);
      try {
        return this.style.visibility = "visible", this.style.opacity = "1", this.style.position = "relative", await La(this.shadowRoot, this.data), !0;
      } catch (a) {
        return this.debug && (console.error(a.message ? a.message : a), ke(this.shadowRoot, a)), !1;
      }
    }
  }
  customElements.get("add-to-calendar-button") || customElements.define("add-to-calendar-button", e);
}
async function Qe(e, t = !1) {
  let a;
  try {
    a = gt(e), await Ee(a);
  } catch {
    const n = e.innerHTML.trim();
    if (!n)
      throw new Error("Add to Calendar Button generation failed: No data provided.");
    try {
      const l = JSON.parse(G(n.replace(/(\r\n|\n|\r)/g, ""), !1));
      await Ee(l), a = l;
    } catch (l) {
      throw t && console.error(l), new Error("Add to Calendar Button generation failed: no data provided or missing required fields - see console logs for details");
    }
  }
  return a;
}
function gt(e, t = at) {
  let a = {};
  for (let o = 0; o < t.length; o++) {
    let n = t[`${o}`];
    if (e.hasAttribute(`${n}`)) {
      let l = G(e.getAttribute(`${n}`).replace(/(\\r\\n|\\n|\\r)/g, ""), !1), c;
      if (Ae.includes(n))
        c = !l || l === "" || l.toLowerCase() === "true";
      else if (Yt.includes(n))
        c = JSON.parse(l);
      else if (_t.includes(n)) {
        const r = function() {
          return l.substring(0, 1) != "[" ? "[" + l + "]" : l;
        }();
        c = JSON.parse(r);
      } else if (Mt.includes(n)) {
        const r = function() {
          let i = l;
          return (l.includes('"') || l.includes("'")) && (l.includes("[") ? i = l.substring(2, l.length - 2) : i = l.substring(1, l.length - 1)), l.includes("|") || (i = i.replace(/\s/g, "")), i;
        }();
        r.includes("','") ? c = r.split("','") : c = r.split('","');
      } else
        Dt.includes(n) ? c = parseInt(l) : c = l;
      if (typeof c == "object" && Object.keys(c).length === 0 || Array.isArray(c) && (c.length === 0 || c.length === 1 && c[0] === ""))
        continue;
      a[`${n}`] = c;
    }
  }
  return a;
}
async function La(e, t) {
  try {
    t = await Me(t), await rt(t);
    const a = e.querySelector(".atcb-initialized");
    return ge(e, t), a.setAttribute("lang", t.language), Re(e, a, t), xt(t), wt(e, t), yt(t.proKey, t.debug), t.hidden || (typeof R == "function" && t.rsvp && Object.keys(t.rsvp).length > 0 ? t.inlineRsvp ? await R(e, t, a) : await la(e, t) : dt(e, a, t), !t.hideRichData && !t.subscribe && t.name && t.dates[0].location && t.dates[0].startDate && pa(t, e.host)), S("initialization", t.identifier, t.identifier), !0;
  } catch (a) {
    throw new Error(a.message);
  }
}
function We(e, t) {
  V(e), Da(t);
  const a = document.getElementById("atcb-schema-" + t);
  a && a.remove(), Array.from(e.querySelectorAll(".atcb-debug-error-msg")).concat(Array.from(e.querySelectorAll("style"))).concat(Array.from(e.querySelectorAll("link"))).concat(Array.from(e.querySelectorAll(".atcb-placeholder"))).concat(Array.from(e.querySelectorAll(".atcb-button-wrapper"))).forEach((o) => o.remove()), delete z[`${t}`];
}
function ge(e, t) {
  e.host.classList.remove("atcb-dark", "atcb-light", "atcb-bodyScheme");
  const a = function() {
    return t.lightMode == "bodyScheme" ? document.body.classList.contains("atcb-dark") || document.documentElement.classList.contains("atcb-dark") || document.body.classList.contains("atcp-dark") || document.documentElement.classList.contains("atcp-dark") || document.body.classList.contains("dark") || document.documentElement.classList.contains("dark") ? "dark" : "light" : t.lightMode;
  }();
  e.host.classList.add("atcb-" + a);
}
function vt(e) {
  const t = /[`'"()[\]{}<>\s]/;
  if (!e.host.hasAttribute("cspnonce"))
    return null;
  if (t.test(e.host.getAttribute("cspnonce")))
    throw new Error("cspnonce input contains forbidden characters.");
  return e.host.getAttribute("cspnonce");
}
async function Re(e, t = null, a) {
  const o = vt(e);
  if (!document.getElementById("atcb-global-style")) {
    const i = document.createElement("style");
    i.id = "atcb-global-style";
    const s = window.innerWidth - document.documentElement.clientWidth;
    i.innerText = ".atcb-modal-no-scroll{overflow-y:hidden !important;-webkit-overflow-scrolling:touch;} body.atcb-modal-no-scroll{padding-right:" + s + "px;}", o && i.setAttribute("nonce", o), document.head.append(i);
  }
  const n = document.createElement("style"), l = a.inlineRsvp && a.rsvp && Object.keys(a.rsvp).length > 0 ? "100%" : "fit-content";
  n.innerText = `.atcb-initialized { display: block; position: relative; width: ${l}; }.atcb-initialized.atcb-inline { display: inline-block; }.atcb-initialized.atcb-buttons-list { display: flex; flex-wrap: wrap; justify-content: center; gap: var(--buttonslist-gap); }.atcb-hidden { display: none; }`, o && n.setAttribute("nonce", o), e.prepend(n);
  const c = function() {
    return a.styleLight ? ":host{" + G(a.styleLight.replace(/(\\r\\n|\\n|\\r)/g, ""), !1) + "}" : "";
  }(), r = function() {
    return a.styleDark ? ":host(.atcb-dark){" + G(a.styleDark.replace(/(\\r\\n|\\n|\\r)/g, ""), !1) + "}" : "";
  }();
  if (a.customCss && a.customCss !== "") {
    const i = document.createElement("link");
    if (i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", a.customCss), o && i.setAttribute("nonce", o), !t)
      await Je(i, e, null, o, null, !1, !1, c + r);
    else {
      const s = document.createElement("div");
      s.classList.add("atcb-placeholder"), e.prepend(s);
      const b = document.createElement("style");
      b.innerText = ".atcb-placeholder { background-color: #777; border-radius: 200px; height: 40px; opacity: .3; width: 150px; }", o && b.setAttribute("nonce", o), e.prepend(b), Je(i, e, t, o, s, a.inline, a.buttonsList, c + r);
    }
    return;
  }
  if (a.buttonStyle !== "none" && Ie[`${a.buttonStyle}`]) {
    const i = document.createElement("style");
    o && i.setAttribute("nonce", o), i.innerText = Ie[`${a.buttonStyle}`] + c + r, e.prepend(i);
  }
  t && (a.inline ? (t.style.display = "inline-block", t.classList.add("atcb-inline")) : a.buttonsList && t.classList.add("atcb-buttons-list"), t.classList.remove("atcb-hidden"));
}
async function Je(e, t, a = null, o = null, n = null, l = !1, c = !1, r = "") {
  if (r !== "") {
    const i = document.createElement("style");
    i.innerText = r, o && i.setAttribute("nonce", o), t.prepend(i);
  }
  try {
    t.prepend(e), await new Promise((i) => {
      e.onload = i;
    }), a && (n && n.remove(), l ? (a.style.display = "inline-block", a.classList.add("atcb-inline")) : c && a.classList.add("atcb-buttons-list"), a.classList.remove("atcb-hidden"));
  } catch (i) {
    console.log(i);
  }
}
function ke(e, t) {
  if (e.querySelector(".atcb-debug-error-msg"))
    return;
  const a = vt(e), o = document.createElement("div");
  o.classList.add("atcb-debug-error-msg");
  const n = document.createElement("style");
  n.innerText = ".atcb-debug-error-msg { color: #bf2e2e; font-size: 12px; font-weight: bold; padding: 12px 15px; border: 2px solid #bf2e2e; max-width: 180px; border-radius: 13px; }", a && n.setAttribute("nonce", a), e.prepend(n), o.textContent = t, e.append(o);
}
async function Ba(e, t, a = !1) {
  if (!B())
    return;
  let o = await async function() {
    const r = G(e);
    if (r.prokey && r.prokey !== "" && (r.proKey = r.prokey), r.proKey && r.proKey !== "") {
      const i = await J(r.proKey, null, r);
      if (i.name && i.name != "")
        return i;
    }
    return r;
  }();
  o.debug = o.debug === "true";
  try {
    await Ee(o);
  } catch (r) {
    throw o.debug && console.error(r), new Error("Add to Calendar Button generation failed: no data provided or missing required fields - see console logs for details");
  }
  o = await Me(o);
  let n = document.body;
  o.trigger = "click", t ? (n = t, t.id && t.id !== "" ? o.identifier = t.id : (o.identifier && o.identifier != "" && /^[\w\-_]+$/.test(o.identifier) ? o.identifier = "atcb-btn-" + o.identifier : o.identifier = "atcb-btn-custom", t.id = o.identifier), (o.listStyle === "dropdown" || o.listStyle === "dropdown-static" || o.listStyle === "dropup-static") && (o.listStyle = "modal")) : (o.identifier = "atcb-btn-custom", o.listStyle = "modal");
  try {
    await rt(o);
  } catch (r) {
    return console.error(r), !1;
  }
  const l = function() {
    return o.options.length === 1;
  }(), c = document.getElementById("atcb-customTrigger-" + o.identifier + "-host");
  if (c && (V(c.shadowRoot, !1), z[`${z.active}`] && delete z[`${z.active}`], c.remove()), S("initialization", o.identifier, o.identifier), !o.blockInteraction && !o.hidden) {
    const r = document.createElement("div");
    if (r.id = "atcb-customTrigger-" + o.identifier + "-host", n === document.body ? document.body.append(r) : n.after(r), t) {
      const b = t.getBoundingClientRect();
      r.style.position = "relative", r.style.left = -b.width + "px", r.style.top = b.height + "px";
    }
    r.setAttribute("atcb-button-id", o.identifier), r.attachShadow({ mode: "open", delegateFocus: !0 });
    const i = document.createElement("template");
    i.innerHTML = Ye, r.shadowRoot.append(i.content.cloneNode(!0));
    const s = r.shadowRoot.querySelector(".atcb-initialized");
    xt(o), ge(r.shadowRoot, o), r.shadowRoot.querySelector(".atcb-initialized").setAttribute("lang", o.language), Re(r.shadowRoot, s, o), wt(r.shadowRoot, o), typeof R == "function" && o.rsvp && Object.keys(o.rsvp).length > 0 ? R(r.shadowRoot, o, t, a) : l ? (j(r.shadowRoot, o.options[0], o, "all", a), S("openSingletonLink", o.identifier, o.identifier)) : Y(r.shadowRoot, "open", o, t, a);
  }
  return yt(o.proKey, o.debug), o.debug && console.log('Add to Calendar Button "' + o.identifier + '" triggered'), o.identifier;
}
function xt(e) {
  const t = [];
  for (let a = 0; a < e.options.length; a++) {
    t[e.options[`${a}`]] = [];
    for (let o = 1; o <= e.dates.length; o++)
      t[e.options[`${a}`]].push(0);
  }
  z[e.identifier] = t;
}
function yt(e = "", t = !1) {
  if (!Le) {
    const a = function() {
      return t ? " (version " + et + ")" : "";
    }();
    e != "" ? console.log("Add to Calendar PRO script initialized" + a + " | https://add-to-calendar-pro.com") : (console.log(`%c
Add to Calendar Button script initialized` + a + `
see https://add-to-calendar-button.com for details.
`, "font-weight: bold;"), console.log("✨ %cPRO version available at https://add-to-calendar-pro.com ← check it out!", "font-weight: bold; line-height: 60px;")), Le = !0;
  }
}
async function J(e, t = null, a = {}) {
  /*!
   *  @preserve
   *  PER LICENSE AGREEMENT, YOU ARE NOT ALLOWED TO REMOVE OR CHANGE THIS FUNCTION!
   */
  if (e && e !== "")
    try {
      const o = await fetch((a.dev ? "https://event-dev.caldn.net/" : "https://event.caldn.net/") + e + "/config.json");
      if (o.ok) {
        const n = await o.json();
        if (!n.name || n.name === "")
          throw new Error("Not possible to read proKey config from server...");
        const l = t ? gt(t, ze) : a;
        return ze.forEach((c) => {
          Object.prototype.hasOwnProperty.call(l, c) && (n[`${c}`] = l[`${c}`]);
        }), n.proKey = e, n.identifier = e, n;
      }
      throw new Error("Not possible to read proKey config from server...");
    } catch {
      console.error("Add to Calendar Button proKey invalid or server not responding! Falling back to local data...");
    }
  return {};
}
function wt(e, t) {
  B() && (t.lightMode == "bodyScheme" && (X[t.identifier] = new MutationObserver(function(a) {
    a.forEach((o) => {
      o.attributeName === "class" && ge(e, t);
    });
  }), X[t.identifier].observe(document.documentElement, { attributes: !0 }), X[t.identifier].observe(document.body, { attributes: !0 })), Le || (document.addEventListener("keyup", Ya), document.addEventListener("keydown", _a), window.addEventListener("resize", Ma)));
}
function Ya(e) {
  const t = function() {
    const a = document.querySelector('[atcb-button-id="' + z.active + '"]');
    return a ? a.shadowRoot : null;
  }();
  t && e.key === "Escape" && (S("closeList", "Ecs Hit", z.active), Y(t, "close", "", "", !0));
}
function _a(e) {
  const t = function() {
    const a = document.querySelector('[atcb-button-id="' + z.active + '"]'), o = document.getElementById(z.active + "-modal-host");
    return o ? o.shadowRoot : a ? a.shadowRoot : null;
  }();
  if (t && t.querySelector(".atcb-list") && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab")) {
    e.preventDefault();
    let a = 0, o = t.activeElement;
    const n = t.querySelectorAll(".atcb-list-item").length;
    if (o && o.classList.contains("atcb-list-item"))
      e.key === "ArrowDown" && o.dataset.optionNumber < n ? a = parseInt(o.dataset.optionNumber) + 1 : e.key === "Tab" ? o.dataset.optionNumber < n ? a = parseInt(o.dataset.optionNumber) + 1 : a = 1 : e.key === "ArrowUp" && o.dataset.optionNumber >= 1 && (a = parseInt(o.dataset.optionNumber) - 1), a > 0 && t.querySelector('.atcb-list-item[data-option-number="' + a + '"]').focus();
    else
      switch (e.key) {
        default:
          t.querySelector('.atcb-list-item[data-option-number="1"]').focus();
          break;
        case "ArrowUp":
          t.querySelector('.atcb-list-item[data-option-number="' + n + '"]').focus();
          break;
      }
  }
}
function Ma() {
  const e = function() {
    const t = document.querySelector('[atcb-button-id="' + z.active + '"]'), a = document.getElementById(z.active + "-modal-host");
    return a ? a.shadowRoot : t ? t.shadowRoot : null;
  }();
  if (e) {
    const t = e.querySelector("#atcb-bgoverlay");
    t && (Z(t), De(e));
  }
}
function Da(e) {
  typeof X[`${e}`] < "u" && X[`${e}`].disconnect();
}
const $a = (e) => {
  const t = $e.useMemo(() => {
    const a = {};
    for (const [o, n] of Object.entries(e)) {
      let l = n;
      typeof n != "string" && typeof n != "boolean" && (l = JSON.stringify(n)), Object.assign(a, { [o]: l });
    }
    return a;
  }, [e]);
  return /* @__PURE__ */ $e.createElement("add-to-calendar-button", { ...t });
};
export {
  $a as AddToCalendarButton,
  Ba as atcb_action
};
