const COUNTRIES = [
  {
    name: "Ascension Island",
    code: "AC",
    emoji: "🇦🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg",
  },
  {
    name: "Andorra",
    code: "AD",
    emoji: "🇦🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    emoji: "🇦🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
  },
  {
    name: "Afghanistan",
    code: "AF",
    emoji: "🇦🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
  },
  {
    name: "Antigua & Barbuda",
    code: "AG",
    emoji: "🇦🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
  },
  {
    name: "Anguilla",
    code: "AI",
    emoji: "🇦🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
  },
  {
    name: "Albania",
    code: "AL",
    emoji: "🇦🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
  },
  {
    name: "Armenia",
    code: "AM",
    emoji: "🇦🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
  },
  {
    name: "Angola",
    code: "AO",
    emoji: "🇦🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
  },
  {
    name: "Antarctica",
    code: "AQ",
    emoji: "🇦🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg",
  },
  {
    name: "Argentina",
    code: "AR",
    emoji: "🇦🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
  },
  {
    name: "American Samoa",
    code: "AS",
    emoji: "🇦🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg",
  },
  {
    name: "Austria",
    code: "AT",
    emoji: "🇦🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
  },
  {
    name: "Australia",
    code: "AU",
    emoji: "🇦🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
  },
  {
    name: "Aruba",
    code: "AW",
    emoji: "🇦🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
  },
  {
    name: "Åland Islands",
    code: "AX",
    emoji: "🇦🇽",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    emoji: "🇦🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
  },
  {
    name: "Bosnia & Herzegovina",
    code: "BA",
    emoji: "🇧🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg",
  },
  {
    name: "Barbados",
    code: "BB",
    emoji: "🇧🇧",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg",
  },
  {
    name: "Bangladesh",
    code: "BD",
    emoji: "🇧🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
  },
  {
    name: "Belgium",
    code: "BE",
    emoji: "🇧🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    emoji: "🇧🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg",
  },
  {
    name: "Bulgaria",
    code: "BG",
    emoji: "🇧🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
  },
  {
    name: "Bahrain",
    code: "BH",
    emoji: "🇧🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
  },
  {
    name: "Burundi",
    code: "BI",
    emoji: "🇧🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg",
  },
  {
    name: "Benin",
    code: "BJ",
    emoji: "🇧🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg",
  },
  {
    name: "St. Barthélemy",
    code: "BL",
    emoji: "🇧🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg",
  },
  {
    name: "Bermuda",
    code: "BM",
    emoji: "🇧🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg",
  },
  {
    name: "Brunei",
    code: "BN",
    emoji: "🇧🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
  },
  {
    name: "Bolivia",
    code: "BO",
    emoji: "🇧🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg",
  },
  {
    name: "Caribbean Netherlands",
    code: "BQ",
    emoji: "🇧🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg",
  },
  {
    name: "Brazil",
    code: "BR",
    emoji: "🇧🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
  },
  {
    name: "Bahamas",
    code: "BS",
    emoji: "🇧🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg",
  },
  {
    name: "Bhutan",
    code: "BT",
    emoji: "🇧🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg",
  },
  {
    name: "Bouvet Island",
    code: "BV",
    emoji: "🇧🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg",
  },
  {
    name: "Botswana",
    code: "BW",
    emoji: "🇧🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg",
  },
  {
    name: "Belarus",
    code: "BY",
    emoji: "🇧🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
  },
  {
    name: "Belize",
    code: "BZ",
    emoji: "🇧🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
  },
  {
    name: "Canada",
    code: "CA",
    emoji: "🇨🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    emoji: "🇨🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg",
  },
  {
    name: "Congo - Kinshasa",
    code: "CD",
    emoji: "🇨🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg",
  },
  {
    name: "Central African Republic",
    code: "CF",
    emoji: "🇨🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg",
  },
  {
    name: "Congo - Brazzaville",
    code: "CG",
    emoji: "🇨🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg",
  },
  {
    name: "Switzerland",
    code: "CH",
    emoji: "🇨🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
  },
  {
    name: "Côte d’Ivoire",
    code: "CI",
    emoji: "🇨🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg",
  },
  {
    name: "Cook Islands",
    code: "CK",
    emoji: "🇨🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg",
  },
  {
    name: "Chile",
    code: "CL",
    emoji: "🇨🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
  },
  {
    name: "Cameroon",
    code: "CM",
    emoji: "🇨🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg",
  },
  {
    name: "China",
    code: "CN",
    emoji: "🇨🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
  },
  {
    name: "Colombia",
    code: "CO",
    emoji: "🇨🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
  },
  {
    name: "Clipperton Island",
    code: "CP",
    emoji: "🇨🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg",
  },
  {
    name: "Costa Rica",
    code: "CR",
    emoji: "🇨🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
  },
  {
    name: "Cuba",
    code: "CU",
    emoji: "🇨🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg",
  },
  {
    name: "Cape Verde",
    code: "CV",
    emoji: "🇨🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg",
  },
  {
    name: "Curaçao",
    code: "CW",
    emoji: "🇨🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg",
  },
  {
    name: "Christmas Island",
    code: "CX",
    emoji: "🇨🇽",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg",
  },
  {
    name: "Cyprus",
    code: "CY",
    emoji: "🇨🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
  },
  {
    name: "Czechia",
    code: "CZ",
    emoji: "🇨🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
  },
  {
    name: "Germany",
    code: "DE",
    emoji: "🇩🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
  },
  {
    name: "Diego Garcia",
    code: "DG",
    emoji: "🇩🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg",
  },
  {
    name: "Djibouti",
    code: "DJ",
    emoji: "🇩🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg",
  },
  {
    name: "Denmark",
    code: "DK",
    emoji: "🇩🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
  },
  {
    name: "Dominica",
    code: "DM",
    emoji: "🇩🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    emoji: "🇩🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
  },
  {
    name: "Algeria",
    code: "DZ",
    emoji: "🇩🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
  },
  {
    name: "Ceuta & Melilla",
    code: "EA",
    emoji: "🇪🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg",
  },
  {
    name: "Ecuador",
    code: "EC",
    emoji: "🇪🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
  },
  {
    name: "Estonia",
    code: "EE",
    emoji: "🇪🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
  },
  {
    name: "Egypt",
    code: "EG",
    emoji: "🇪🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
  },
  {
    name: "Western Sahara",
    code: "EH",
    emoji: "🇪🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg",
  },
  {
    name: "Eritrea",
    code: "ER",
    emoji: "🇪🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg",
  },
  {
    name: "Spain",
    code: "ES",
    emoji: "🇪🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
  },
  {
    name: "Ethiopia",
    code: "ET",
    emoji: "🇪🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
  },
  {
    name: "European Union",
    code: "EU",
    emoji: "🇪🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg",
  },
  {
    name: "Finland",
    code: "FI",
    emoji: "🇫🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
  },
  {
    name: "Fiji",
    code: "FJ",
    emoji: "🇫🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg",
  },
  {
    name: "Falkland Islands",
    code: "FK",
    emoji: "🇫🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg",
  },
  {
    name: "Micronesia",
    code: "FM",
    emoji: "🇫🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    emoji: "🇫🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
  },
  {
    name: "France",
    code: "FR",
    emoji: "🇫🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
  },
  {
    name: "Gabon",
    code: "GA",
    emoji: "🇬🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg",
  },
  {
    name: "United Kingdom",
    code: "GB",
    emoji: "🇬🇧",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
  },
  {
    name: "Grenada",
    code: "GD",
    emoji: "🇬🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg",
  },
  {
    name: "Georgia",
    code: "GE",
    emoji: "🇬🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
  },
  {
    name: "French Guiana",
    code: "GF",
    emoji: "🇬🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg",
  },
  {
    name: "Guernsey",
    code: "GG",
    emoji: "🇬🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg",
  },
  {
    name: "Ghana",
    code: "GH",
    emoji: "🇬🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
  },
  {
    name: "Gibraltar",
    code: "GI",
    emoji: "🇬🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg",
  },
  {
    name: "Greenland",
    code: "GL",
    emoji: "🇬🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
  },
  {
    name: "Gambia",
    code: "GM",
    emoji: "🇬🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg",
  },
  {
    name: "Guinea",
    code: "GN",
    emoji: "🇬🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    emoji: "🇬🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    emoji: "🇬🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg",
  },
  {
    name: "Greece",
    code: "GR",
    emoji: "🇬🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
  },
  {
    name: "South Georgia & South Sandwich Islands",
    code: "GS",
    emoji: "🇬🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg",
  },
  {
    name: "Guatemala",
    code: "GT",
    emoji: "🇬🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
  },
  {
    name: "Guam",
    code: "GU",
    emoji: "🇬🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    emoji: "🇬🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg",
  },
  {
    name: "Guyana",
    code: "GY",
    emoji: "🇬🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg",
  },
  {
    name: "Hong Kong SAR China",
    code: "HK",
    emoji: "🇭🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg",
  },
  {
    name: "Heard & McDonald Islands",
    code: "HM",
    emoji: "🇭🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg",
  },
  {
    name: "Honduras",
    code: "HN",
    emoji: "🇭🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
  },
  {
    name: "Croatia",
    code: "HR",
    emoji: "🇭🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
  },
  {
    name: "Haiti",
    code: "HT",
    emoji: "🇭🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg",
  },
  {
    name: "Hungary",
    code: "HU",
    emoji: "🇭🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
  },
  {
    name: "Canary Islands",
    code: "IC",
    emoji: "🇮🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg",
  },
  {
    name: "Indonesia",
    code: "ID",
    emoji: "🇮🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
  },
  {
    name: "Ireland",
    code: "IE",
    emoji: "🇮🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
  },
  {
    name: "Israel",
    code: "IL",
    emoji: "🇮🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
  },
  {
    name: "Isle of Man",
    code: "IM",
    emoji: "🇮🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg",
  },
  {
    name: "India",
    code: "IN",
    emoji: "🇮🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    emoji: "🇮🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg",
  },
  {
    name: "Iraq",
    code: "IQ",
    emoji: "🇮🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
  },
  {
    name: "Iran",
    code: "IR",
    emoji: "🇮🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
  },
  {
    name: "Iceland",
    code: "IS",
    emoji: "🇮🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
  },
  {
    name: "Italy",
    code: "IT",
    emoji: "🇮🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
  },
  {
    name: "Jersey",
    code: "JE",
    emoji: "🇯🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg",
  },
  {
    name: "Jamaica",
    code: "JM",
    emoji: "🇯🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
  },
  {
    name: "Jordan",
    code: "JO",
    emoji: "🇯🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
  },
  {
    name: "Japan",
    code: "JP",
    emoji: "🇯🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
  },
  {
    name: "Kenya",
    code: "KE",
    emoji: "🇰🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    emoji: "🇰🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
  },
  {
    name: "Cambodia",
    code: "KH",
    emoji: "🇰🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
  },
  {
    name: "Kiribati",
    code: "KI",
    emoji: "🇰🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg",
  },
  {
    name: "Comoros",
    code: "KM",
    emoji: "🇰🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg",
  },
  {
    name: "St. Kitts & Nevis",
    code: "KN",
    emoji: "🇰🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg",
  },
  {
    name: "North Korea",
    code: "KP",
    emoji: "🇰🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg",
  },
  {
    name: "South Korea",
    code: "KR",
    emoji: "🇰🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
  },
  {
    name: "Kuwait",
    code: "KW",
    emoji: "🇰🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    emoji: "🇰🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    emoji: "🇰🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
  },
  {
    name: "Laos",
    code: "LA",
    emoji: "🇱🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
  },
  {
    name: "Lebanon",
    code: "LB",
    emoji: "🇱🇧",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
  },
  {
    name: "St. Lucia",
    code: "LC",
    emoji: "🇱🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    emoji: "🇱🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    emoji: "🇱🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
  },
  {
    name: "Liberia",
    code: "LR",
    emoji: "🇱🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg",
  },
  {
    name: "Lesotho",
    code: "LS",
    emoji: "🇱🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg",
  },
  {
    name: "Lithuania",
    code: "LT",
    emoji: "🇱🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
  },
  {
    name: "Luxembourg",
    code: "LU",
    emoji: "🇱🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
  },
  {
    name: "Latvia",
    code: "LV",
    emoji: "🇱🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
  },
  {
    name: "Libya",
    code: "LY",
    emoji: "🇱🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg",
  },
  {
    name: "Morocco",
    code: "MA",
    emoji: "🇲🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
  },
  {
    name: "Monaco",
    code: "MC",
    emoji: "🇲🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
  },
  {
    name: "Moldova",
    code: "MD",
    emoji: "🇲🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg",
  },
  {
    name: "Montenegro",
    code: "ME",
    emoji: "🇲🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
  },
  {
    name: "St. Martin",
    code: "MF",
    emoji: "🇲🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg",
  },
  {
    name: "Madagascar",
    code: "MG",
    emoji: "🇲🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    emoji: "🇲🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg",
  },
  {
    name: "North Macedonia",
    code: "MK",
    emoji: "🇲🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg",
  },
  {
    name: "Mali",
    code: "ML",
    emoji: "🇲🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg",
  },
  {
    name: "Myanmar (Burma)",
    code: "MM",
    emoji: "🇲🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg",
  },
  {
    name: "Mongolia",
    code: "MN",
    emoji: "🇲🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
  },
  {
    name: "Macao SAR China",
    code: "MO",
    emoji: "🇲🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    emoji: "🇲🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg",
  },
  {
    name: "Martinique",
    code: "MQ",
    emoji: "🇲🇶",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg",
  },
  {
    name: "Mauritania",
    code: "MR",
    emoji: "🇲🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg",
  },
  {
    name: "Montserrat",
    code: "MS",
    emoji: "🇲🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg",
  },
  {
    name: "Malta",
    code: "MT",
    emoji: "🇲🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
  },
  {
    name: "Mauritius",
    code: "MU",
    emoji: "🇲🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg",
  },
  {
    name: "Maldives",
    code: "MV",
    emoji: "🇲🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
  },
  {
    name: "Malawi",
    code: "MW",
    emoji: "🇲🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg",
  },
  {
    name: "Mexico",
    code: "MX",
    emoji: "🇲🇽",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
  },
  {
    name: "Malaysia",
    code: "MY",
    emoji: "🇲🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
  },
  {
    name: "Mozambique",
    code: "MZ",
    emoji: "🇲🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg",
  },
  {
    name: "Namibia",
    code: "NA",
    emoji: "🇳🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg",
  },
  {
    name: "New Caledonia",
    code: "NC",
    emoji: "🇳🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg",
  },
  {
    name: "Niger",
    code: "NE",
    emoji: "🇳🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    emoji: "🇳🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg",
  },
  {
    name: "Nigeria",
    code: "NG",
    emoji: "🇳🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
  },
  {
    name: "Nicaragua",
    code: "NI",
    emoji: "🇳🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
  },
  {
    name: "Netherlands",
    code: "NL",
    emoji: "🇳🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
  },
  {
    name: "Norway",
    code: "NO",
    emoji: "🇳🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
  },
  {
    name: "Nepal",
    code: "NP",
    emoji: "🇳🇵",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
  },
  {
    name: "Nauru",
    code: "NR",
    emoji: "🇳🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg",
  },
  {
    name: "Niue",
    code: "NU",
    emoji: "🇳🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg",
  },
  {
    name: "New Zealand",
    code: "NZ",
    emoji: "🇳🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
  },
  {
    name: "Oman",
    code: "OM",
    emoji: "🇴🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
  },
  {
    name: "Panama",
    code: "PA",
    emoji: "🇵🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
  },
  {
    name: "Peru",
    code: "PE",
    emoji: "🇵🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
  },
  {
    name: "French Polynesia",
    code: "PF",
    emoji: "🇵🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    emoji: "🇵🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg",
  },
  {
    name: "Philippines",
    code: "PH",
    emoji: "🇵🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
  },
  {
    name: "Pakistan",
    code: "PK",
    emoji: "🇵🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
  },
  {
    name: "Poland",
    code: "PL",
    emoji: "🇵🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
  },
  {
    name: "St. Pierre & Miquelon",
    code: "PM",
    emoji: "🇵🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg",
  },
  {
    name: "Pitcairn Islands",
    code: "PN",
    emoji: "🇵🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    emoji: "🇵🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
  },
  {
    name: "Palestinian Territories",
    code: "PS",
    emoji: "🇵🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg",
  },
  {
    name: "Portugal",
    code: "PT",
    emoji: "🇵🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
  },
  {
    name: "Palau",
    code: "PW",
    emoji: "🇵🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg",
  },
  {
    name: "Paraguay",
    code: "PY",
    emoji: "🇵🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
  },
  {
    name: "Qatar",
    code: "QA",
    emoji: "🇶🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
  },
  {
    name: "Réunion",
    code: "RE",
    emoji: "🇷🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg",
  },
  {
    name: "Romania",
    code: "RO",
    emoji: "🇷🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
  },
  {
    name: "Serbia",
    code: "RS",
    emoji: "🇷🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
  },
  {
    name: "Russia",
    code: "RU",
    emoji: "🇷🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
  },
  {
    name: "Rwanda",
    code: "RW",
    emoji: "🇷🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    emoji: "🇸🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    emoji: "🇸🇧",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg",
  },
  {
    name: "Seychelles",
    code: "SC",
    emoji: "🇸🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg",
  },
  {
    name: "Sudan",
    code: "SD",
    emoji: "🇸🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg",
  },
  {
    name: "Sweden",
    code: "SE",
    emoji: "🇸🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
  },
  {
    name: "Singapore",
    code: "SG",
    emoji: "🇸🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
  },
  {
    name: "St. Helena",
    code: "SH",
    emoji: "🇸🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg",
  },
  {
    name: "Slovenia",
    code: "SI",
    emoji: "🇸🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
  },
  {
    name: "Svalbard & Jan Mayen",
    code: "SJ",
    emoji: "🇸🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg",
  },
  {
    name: "Slovakia",
    code: "SK",
    emoji: "🇸🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    emoji: "🇸🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg",
  },
  {
    name: "San Marino",
    code: "SM",
    emoji: "🇸🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg",
  },
  {
    name: "Senegal",
    code: "SN",
    emoji: "🇸🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
  },
  {
    name: "Somalia",
    code: "SO",
    emoji: "🇸🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg",
  },
  {
    name: "Suriname",
    code: "SR",
    emoji: "🇸🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg",
  },
  {
    name: "South Sudan",
    code: "SS",
    emoji: "🇸🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg",
  },
  {
    name: "São Tomé & Príncipe",
    code: "ST",
    emoji: "🇸🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg",
  },
  {
    name: "El Salvador",
    code: "SV",
    emoji: "🇸🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
  },
  {
    name: "Sint Maarten",
    code: "SX",
    emoji: "🇸🇽",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg",
  },
  {
    name: "Syria",
    code: "SY",
    emoji: "🇸🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg",
  },
  {
    name: "Eswatini",
    code: "SZ",
    emoji: "🇸🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg",
  },
  {
    name: "Tristan da Cunha",
    code: "TA",
    emoji: "🇹🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg",
  },
  {
    name: "Turks & Caicos Islands",
    code: "TC",
    emoji: "🇹🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg",
  },
  {
    name: "Chad",
    code: "TD",
    emoji: "🇹🇩",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg",
  },
  {
    name: "French Southern Territories",
    code: "TF",
    emoji: "🇹🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg",
  },
  {
    name: "Togo",
    code: "TG",
    emoji: "🇹🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg",
  },
  {
    name: "Thailand",
    code: "TH",
    emoji: "🇹🇭",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    emoji: "🇹🇯",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
  },
  {
    name: "Tokelau",
    code: "TK",
    emoji: "🇹🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg",
  },
  {
    name: "Timor-Leste",
    code: "TL",
    emoji: "🇹🇱",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    emoji: "🇹🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg",
  },
  {
    name: "Tunisia",
    code: "TN",
    emoji: "🇹🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
  },
  {
    name: "Tonga",
    code: "TO",
    emoji: "🇹🇴",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg",
  },
  {
    name: "Turkey",
    code: "TR",
    emoji: "🇹🇷",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
  },
  {
    name: "Trinidad & Tobago",
    code: "TT",
    emoji: "🇹🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg",
  },
  {
    name: "Tuvalu",
    code: "TV",
    emoji: "🇹🇻",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg",
  },
  {
    name: "Taiwan",
    code: "TW",
    emoji: "🇹🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
  },
  {
    name: "Tanzania",
    code: "TZ",
    emoji: "🇹🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg",
  },
  {
    name: "Ukraine",
    code: "UA",
    emoji: "🇺🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
  },
  {
    name: "Uganda",
    code: "UG",
    emoji: "🇺🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
  },
  {
    name: "U.S. Outlying Islands",
    code: "UM",
    emoji: "🇺🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg",
  },
  {
    name: "United Nations",
    code: "UN",
    emoji: "🇺🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg",
  },
  {
    name: "United States",
    code: "US",
    emoji: "🇺🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
  },
  {
    name: "Uruguay",
    code: "UY",
    emoji: "🇺🇾",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    emoji: "🇺🇿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
  },
  {
    name: "Vatican City",
    code: "VA",
    emoji: "🇻🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg",
  },
  {
    name: "St. Vincent & Grenadines",
    code: "VC",
    emoji: "🇻🇨",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg",
  },
  {
    name: "Venezuela",
    code: "VE",
    emoji: "🇻🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
  },
  {
    name: "British Virgin Islands",
    code: "VG",
    emoji: "🇻🇬",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg",
  },
  {
    name: "U.S. Virgin Islands",
    code: "VI",
    emoji: "🇻🇮",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg",
  },
  {
    name: "Vietnam",
    code: "VN",
    emoji: "🇻🇳",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
  },
  {
    name: "Vanuatu",
    code: "VU",
    emoji: "🇻🇺",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg",
  },
  {
    name: "Wallis & Futuna",
    code: "WF",
    emoji: "🇼🇫",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg",
  },
  {
    name: "Samoa",
    code: "WS",
    emoji: "🇼🇸",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg",
  },
  {
    name: "Kosovo",
    code: "XK",
    emoji: "🇽🇰",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg",
  },
  {
    name: "Yemen",
    code: "YE",
    emoji: "🇾🇪",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
  },
  {
    name: "Mayotte",
    code: "YT",
    emoji: "🇾🇹",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg",
  },
  {
    name: "South Africa",
    code: "ZA",
    emoji: "🇿🇦",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
  },
  {
    name: "Zambia",
    code: "ZM",
    emoji: "🇿🇲",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    emoji: "🇿🇼",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
  },
  {
    name: "Scotland",
    code: "SCOTLAND",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
  },
  {
    name: "Wales",
    code: "WALES",
    emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
  },
];

COUNTRIES.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive comparison
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0; // Names are equal
});

export { COUNTRIES };
