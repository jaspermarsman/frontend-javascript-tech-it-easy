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
    console.log("in for loop ", total);
  }
  return total;
}
console.log("total", calculateTvToSellCount());

// Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
// make variable for the new element
// create an element (document.createElement)
//set content by changing elements: element.textContent = total
// appendChild (stick it on the page)

const tvToSellElement = document.createElement("h1");

// const tvType1 = document.createElement("p");
// tvType1.textContent = tvType[0];
// document.body.appendChild(tvType1);
//
// const inventory2 = document.createElement("p");
// inventory2.textContent = currentStock[0];
// document.body.appendChild(inventory2);

// function newTable() {
//   const table = document.getElementById("tvTable");
//   const newRow = table.insertRow(-1)
//   const newCell = newRow.insertCell(-1);
//   const tvType1 = document.createTextNode(tvType[0]);
//   newCell.appendChild(tvType1);
// }
//newTable("tvTable");

// element.innerText --> tekst aanpassen
// element.remove() --> verwijderen
// document.createElement("p); nieuw element aanmaken
// document.body.apendChild(nieuwe-variabele); (op de pagina plakken)

// element selecteren: const button = document.getElementById("best-button");
// listen to click events and handle to it:
// button.addEventListener("click", () => { console.log("handle it"); } );

