// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.
// - [ ] make a variable to store the total
// - [ ] inventory.map(~ callback here ~)
// - [ ] callback schrijven voor map
// - [ ] parameter: television
// - [ ] log the data we need: television.sold, television.originalStock
// - [ ] do math: const tvsToSell = originalStock - sold
//     - [ ] console.log(tvsToSell)
// - [ ] return the value from the callback: tvsToSell
// - [ ] We should have something like: `[3, 4, 9, 11]`
// - [ ] Loop over the array of numbers and add them together (possibly google it)

function calculateTvToSellCount() {
  const tvSoldArray = inventory.map((television) => {
    return television.originalStock - television.sold;
  });

  let total = 0;

  for (let i = 0; i < tvSoldArray.length; i++) {
    const tvSoldNumber = tvSoldArray[i];
    total = total + tvSoldNumber;
    // of total += tvSoldArray[i];
  }
  return total;
}

// Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
function displayTVToSellCount() {
  const totalCount = calculateTvToSellCount();
  const tvToSellElement = document.createElement("h1");

  tvToSellElement.textContent = `We need to sell ${totalCount} tv's`;
  tvToSellElement.style.color = "red";
  document.body.appendChild(tvToSellElement);
}

displayTVToSellCount();

//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
//gebruik array.map(() => )
// const aanmaken (array) die gevuld word met .map methode
// return inventory.type

const tvTypeNames = inventory.map((tvTypes) => {
  return tvTypes.type;
});
console.log("Dit zijn alle TV type's: ", tvTypeNames);

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn
//array.filter om objecten te filteren
// if statement( stock - sold = 0)
// return object in array

const soldOutProducts = inventory.filter((item) => {
  return item.originalStock - item.sold === 0
});
console.log("Deze producten zijn uitverkocht: ", soldOutProducts);

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken
// array.filter op objecten --> const
// wanneer options.ambilight = true
const tvWithAmbilight = inventory.filter((item) => {
  return item.options.ambiLight;
});
console.log("Deze tv's hebben Ambilight: ", tvWithAmbilight);

//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
//gebruik array.sort om te sorteren op prijs:
// inventory.sort((b, a) => b.price - a.price);
// variabele aanmaken voor gesorteerde prijs
// zet dit in een functie

function sortByPrice() {
  return inventory.sort((a, b) => b.price - a.price);

};

console.log("sorteer op hoogste prijs: ", sortByPrice());

//Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.
//maak een inventory.map en return opbrengst: inventory.price * inventory.originalStock
//maak een let totaal aan
//gebruik for loop om over alle doelopbrengsten te itereren
//tel iedere keer de doelopbrengst bij het totaal op

function calculateTargetRevenue () {
  const targetRevenue = inventory.map((item) => {
    return item.price * item.originalStock;
  })

  let total = 0;
  for (i = 0; i < targetRevenue.length; i++) {
    total += targetRevenue[i];
  }
  return total;
}

console.log(calculateTargetRevenue());

function displayTargetRevenue() {
  const totalTargetRevenue = calculateTargetRevenue();
  const targetRevenueElement = document.createElement("p");

  targetRevenueElement.textContent = `Our ambition is a revenue of ${totalTargetRevenue} euro's!`;
  targetRevenueElement.style.color = "blue";
  document.body.appendChild(targetRevenueElement);
}

displayTargetRevenue();



// element.innerText --> tekst aanpassen
// element.remove() --> verwijderen
// document.createElement("p); nieuw element aanmaken
// document.body.apendChild(nieuwe-variabele); (op de pagina plakken)

// element selecteren: const button = document.getElementById("best-button");
// listen to click events and handle to it:
// button.addEventListener("click", () => { console.log("handle it"); } );

