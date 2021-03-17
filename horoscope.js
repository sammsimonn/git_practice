function createRandomNumber(num) {
  return Math.floor(Math.random() * num);
}
const fortuneTellerItems = {
  house: ["mansion", "shack", "apartment", "mobile home"],
  car: ["lamborgini", "bmw", "dump trunk", "none"],
  numOfKids: ["100", "20", "19", "9"],
  fortune: [
    "You will win a million dollars",
    "You will have a great day",
    "You will die in 5 days",
    "You will 10 years of bad luck",
  ],
};

let horoscopeMessage = [];

for (let word in fortuneTellerItems) {
  let randomIndex = createRandomNumber(fortuneTellerItems[word].length);
  switch (word) {
    case "house":
      horoscopeMessage.push(
        `You will live in a ${fortuneTellerItems[word][randomIndex]}.`
      );
      break;
    case "car":
      horoscopeMessage.push(
        `You will drive a ${fortuneTellerItems[word][randomIndex]}.`
      );
      break;
    case "numOfKids":
      horoscopeMessage.push(
        `You will have ${fortuneTellerItems[word][randomIndex]} kids.`
      );
      break;
    case "fortune":
      horoscopeMessage.push(`${fortuneTellerItems[word][randomIndex]}.`);
      break;
  }
}
function formatHoroscope(horoscope) {
  const compiled = horoscopeMessage.join(" ");
  console.log(compiled);
}

console.log(formatHoroscope(horoscopeMessage));
