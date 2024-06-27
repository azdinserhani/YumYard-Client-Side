const countries = [
  { id: 0, name: "Afghanistan" },
  { id: 1, name: "Albania" },
  { id: 2, name: "Algeria" },
  { id: 3, name: "Andorra" },
  { id: 4, name: "Angola" },
  { id: 5, name: "Antigua and Barbuda" },
  { id: 6, name: "Argentina" },
  { id: 7, name: "Armenia" },
  { id: 8, name: "Australia" },
  { id: 9, name: "Austria" },
  { id: 10, name: "Azerbaijan" },
  { id: 11, name: "Bahamas" },
  { id: 12, name: "Bahrain" },
  { id: 13, name: "Bangladesh" },
  { id: 14, name: "Barbados" },
  { id: 15, name: "Belarus" },
  { id: 16, name: "Belgium" },
  { id: 17, name: "Belize" },
  { id: 18, name: "Benin" },
  { id: 19, name: "Bhutan" },
  { id: 20, name: "Bolivia" },
  { id: 21, name: "Bosnia and Herzegovina" },
  { id: 22, name: "Botswana" },
  { id: 23, name: "Brazil" },
  { id: 24, name: "Brunei" },
  { id: 25, name: "Bulgaria" },
  { id: 26, name: "Burkina Faso" },
  { id: 27, name: "Burundi" },
  { id: 28, name: "Cabo Verde" },
  { id: 29, name: "Cambodia" },
  { id: 30, name: "Cameroon" },
  { id: 31, name: "Canada" },
  { id: 32, name: "Central African Republic" },
  { id: 33, name: "Chad" },
  { id: 34, name: "Chile" },
  { id: 35, name: "China" },
  { id: 36, name: "Colombia" },
  { id: 37, name: "Comoros" },
  { id: 38, name: "Congo (Congo-Brazzaville)" },
  { id: 39, name: "Costa Rica" },
  { id: 40, name: "Croatia" },
  { id: 41, name: "Cuba" },
  { id: 42, name: "Cyprus" },
  { id: 43, name: "Czechia (Czech Republic)" },
  { id: 44, name: "Democratic Republic of the Congo" },
  { id: 45, name: "Denmark" },
  { id: 46, name: "Djibouti" },
  { id: 47, name: "Dominica" },
  { id: 48, name: "Dominican Republic" },
  { id: 49, name: "Ecuador" },
  { id: 50, name: "Egypt" },
  { id: 51, name: "El Salvador" },
  { id: 52, name: "Equatorial Guinea" },
  { id: 53, name: "Eritrea" },
  { id: 54, name: "Estonia" },
  { id: 55, name: "Eswatini (fmr. Swaziland)" },
  { id: 56, name: "Ethiopia" },
  { id: 57, name: "Fiji" },
  { id: 58, name: "Finland" },
  { id: 59, name: "France" },
  { id: 60, name: "Gabon" },
  { id: 61, name: "Gambia" },
  { id: 62, name: "Georgia" },
  { id: 63, name: "Germany" },
  { id: 64, name: "Ghana" },
  { id: 65, name: "Greece" },
  { id: 66, name: "Grenada" },
  { id: 67, name: "Guatemala" },
  { id: 68, name: "Guinea" },
  { id: 69, name: "Guinea-Bissau" },
  { id: 70, name: "Guyana" },
  { id: 71, name: "Haiti" },
  { id: 72, name: "Honduras" },
  { id: 73, name: "Hungary" },
  { id: 74, name: "Iceland" },
  { id: 75, name: "India" },
  { id: 76, name: "Indonesia" },
  { id: 77, name: "Iran" },
  { id: 78, name: "Iraq" },
  { id: 79, name: "Ireland" },

  { id: 81, name: "Italy" },
  { id: 82, name: "Jamaica" },
  { id: 83, name: "Japan" },
  { id: 84, name: "Jordan" },
  { id: 85, name: "Kazakhstan" },
  { id: 86, name: "Kenya" },
  { id: 87, name: "Kiribati" },
  { id: 88, name: "Kuwait" },
  { id: 89, name: "Kyrgyzstan" },
  { id: 90, name: "Laos" },
  { id: 91, name: "Latvia" },
  { id: 92, name: "Lebanon" },
  { id: 93, name: "Lesotho" },
  { id: 94, name: "Liberia" },
  { id: 95, name: "Libya" },
  { id: 96, name: "Liechtenstein" },
  { id: 97, name: "Lithuania" },
  { id: 98, name: "Luxembourg" },
  { id: 99, name: "Madagascar" },
  { id: 100, name: "Malawi" },
  { id: 101, name: "Malaysia" },
  { id: 102, name: "Maldives" },
  { id: 103, name: "Mali" },
  { id: 104, name: "Malta" },
  { id: 105, name: "Marshall Islands" },
  { id: 106, name: "Mauritania" },
  { id: 107, name: "Mauritius" },
  { id: 108, name: "Mexico" },
  { id: 109, name: "Micronesia" },
  { id: 110, name: "Moldova" },
  { id: 111, name: "Monaco" },
  { id: 112, name: "Mongolia" },
  { id: 113, name: "Montenegro" },
  { id: 114, name: "Morocco" },
  { id: 115, name: "Mozambique" },
  { id: 116, name: "Myanmar (formerly Burma)" },
  { id: 117, name: "Namibia" },
  { id: 118, name: "Nauru" },
  { id: 119, name: "Nepal" },
  { id: 120, name: "Netherlands" },
  { id: 121, name: "New Zealand" },
  { id: 122, name: "Nicaragua" },
  { id: 123, name: "Niger" },
  { id: 124, name: "Nigeria" },
  { id: 125, name: "North Korea" },
  { id: 126, name: "North Macedonia" },
  { id: 127, name: "Norway" },
  { id: 128, name: "Oman" },
  { id: 80, name: "Palestine" },
  { id: 129, name: "Pakistan" },
  { id: 130, name: "Palau" },
  { id: 131, name: "Palestine State" },
  { id: 132, name: "Panama" },
  { id: 133, name: "Papua New Guinea" },
  { id: 134, name: "Paraguay" },
  { id: 135, name: "Peru" },
  { id: 136, name: "Philippines" },
  { id: 137, name: "Poland" },
  { id: 138, name: "Portugal" },
  { id: 139, name: "Qatar" },
  { id: 140, name: "Romania" },
  { id: 141, name: "Russia" },
  { id: 142, name: "Rwanda" },
  { id: 143, name: "Saint Kitts and Nevis" },
  { id: 144, name: "Saint Lucia" },
  { id: 145, name: "Saint Vincent and the Grenadines" },
  { id: 146, name: "Samoa" },
  { id: 147, name: "San Marino" },
  { id: 148, name: "Sao Tome and Principe" },
  { id: 149, name: "Saudi Arabia" },
  { id: 150, name: "Senegal" },
  { id: 151, name: "Serbia" },
  { id: 152, name: "Seychelles" },
  { id: 153, name: "Sierra Leone" },
  { id: 154, name: "Singapore" },
  { id: 155, name: "Slovakia" },
  { id: 156, name: "Slovenia" },
  { id: 157, name: "Solomon Islands" },
  { id: 158, name: "Somalia" },
  { id: 159, name: "South Africa" },
  { id: 160, name: "South Korea" },
  { id: 161, name: "South Sudan" },
  { id: 162, name: "Spain" },
  { id: 163, name: "Sri Lanka" },
  { id: 164, name: "Sudan" },
  { id: 165, name: "Suriname" },
  { id: 166, name: "Sweden" },
  { id: 167, name: "Switzerland" },
  { id: 168, name: "Syria" },
  { id: 169, name: "Tajikistan" },
  { id: 170, name: "Tanzania" },
  { id: 171, name: "Thailand" },
  { id: 172, name: "Timor-Leste" },
  { id: 173, name: "Togo" },
  { id: 174, name: "Tonga" },
  { id: 175, name: "Trinidad and Tobago" },
  { id: 176, name: "Tunisia" },
  { id: 177, name: "Turkey" },
  { id: 178, name: "Turkmenistan" },
  { id: 179, name: "Tuvalu" },
  { id: 180, name: "Uganda" },
  { id: 181, name: "Ukraine" },
  { id: 182, name: "United Arab Emirates" },
  { id: 183, name: "United Kingdom" },
  { id: 184, name: "United States of America" },
  { id: 185, name: "Uruguay" },
  { id: 186, name: "Uzbekistan" },
  { id: 187, name: "Vanuatu" },
  { id: 188, name: "Vatican City (Holy See)" },
  { id: 189, name: "Venezuela" },
  { id: 190, name: "Vietnam" },
  { id: 191, name: "Yemen" },
  { id: 192, name: "Zambia" },
  { id: 193, name: "Zimbabwe" },
];

export default countries;