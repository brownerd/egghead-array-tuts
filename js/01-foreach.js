// Data
import * as data from '../data/data'


/////////////////
// Get symbols //
/////////////////

//  forEach()
function getStockSymbols(arr) {
  // We want to get all of the symbol items out of the array
  var symbols = [];

  arr.forEach(function(item) {
    symbols.push(item.symbol);
  });

  return symbols;
}

var symbols = getStockSymbols(data.symbols);


console.log(JSON.stringify(symbols));



////////////////
// Get Prices //
////////////////

function getPrices(arr) {
  //Push prices to an empty array
  var prices = []

  arr.forEach(function(item) {
    prices.push(item.price)
  })

  return prices
}

var prices = getPrices(data.symbols)

console.log( JSON.stringify(prices) );



////////////////
// Get Volume //
////////////////

function getVolume(arr) {
  // push volumn items to array
  var volume= []
  arr.forEach(function(item) {
    volume.push(item.volume)
  })

  return volume
}

var volume = getVolume(data.symbols)

console.log( volume );
