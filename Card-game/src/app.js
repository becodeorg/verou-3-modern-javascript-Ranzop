import component from './component';
import makeElement from '../../modules/makeElement';

const a = "hi little bro";
console.log(a);
const body = document.querySelector("body");
console.log(body);
let drawCard = makeElement("div", "first-card", body);
console.log (drawCard);



const cardDeck = [];

const startPath = "../images/"
const middlePath = "-of-"

cardDeck[0] = startPath + "ace" + middlePath + "clover"
cardDeck[1] = startPath + "ace" + middlePath + "diamonds"
cardDeck[2] = startPath + "ace" + middlePath + "hearts"
cardDeck[3] = startPath + "ace" + middlePath + "spades"
cardDeck[4] = startPath + "eight" + middlePath + "clover"
cardDeck[5] = startPath + "eight" + middlePath +"diamonds"
cardDeck[6] = startPath + "eight" + middlePath +"hearts"
cardDeck[7] = startPath + "eight" + middlePath +"spades"
cardDeck[8] = startPath + "five" + middlePath +"clover"
cardDeck[9] = startPath + "five" + middlePath +"diamonds"
cardDeck[10] = startPath + "five" + middlePath + "hearts"
cardDeck[11] = startPath + "five" + middlePath + "spades"
cardDeck[12] = startPath + "four" + middlePath + "clover"
cardDeck[13] = startPath + "four" + middlePath + "diamonds"
cardDeck[14] = startPath + "four" + middlePath + "hearts"
cardDeck[15] = startPath + "four" + middlePath + "spades"
cardDeck[16] = startPath + "jack" + middlePath + "clover"
cardDeck[17] = startPath + "jack" + middlePath + "diamonds"
cardDeck[18] = startPath + "jack" + middlePath + "hearts"
cardDeck[19] = startPath + "jack" + middlePath + "spades"
cardDeck[20] = startPath + "king" + middlePath + "clover"
cardDeck[21] = startPath + "king" + middlePath + "diamonds"
cardDeck[22] = startPath + "king" + middlePath + "hearts"
cardDeck[23] = startPath + "king" + middlePath + "spades"
cardDeck[24] = startPath + "nine" + middlePath + "clover"
cardDeck[25] = startPath + "nine" + middlePath + "diamonds"
cardDeck[26] = startPath + "nine" + middlePath + "hearts"
cardDeck[27] = startPath + "nine" + middlePath + "spades"
cardDeck[29] = startPath + "queen" + middlePath + "diamonds"
cardDeck[28] = startPath + "queen" + middlePath + "clover"
cardDeck[30] = startPath + "queen" + middlePath + "hearts"
cardDeck[31] = startPath + "queen" + middlePath + "spades"
cardDeck[32] = startPath + "seven" + middlePath + "clover"
cardDeck[33] = startPath + "seven" + middlePath + "diamonds"
cardDeck[34] = startPath + "seven" + middlePath + "hearts"
cardDeck[35] = startPath + "sevenm" + middlePath + "spades"
cardDeck[36] = startPath + "six" + middlePath + "clover"
cardDeck[37] = startPath + "six" + middlePath + "diamonds"
cardDeck[38] = startPath + "six" + middlePath + "hearts"
cardDeck[39] = startPath + "six" + middlePath + "spades"
cardDeck[40] = startPath + "ten" + middlePath + "clover"
cardDeck[41] = startPath + "ten" + middlePath + "diamonds"
cardDeck[42] = startPath + "ten" + middlePath + "hearts"
cardDeck[43] = startPath + "ten" + middlePath + "spades"
cardDeck[44] = startPath + "three" + middlePath + "clover"
cardDeck[45] = startPath + "three" + middlePath + "diamonds"
cardDeck[46] = startPath + "three" + middlePath + "hearts"
cardDeck[47] = startPath + "three" + middlePath + "spades"
cardDeck[48] = startPath + "two" + middlePath + "clover"
cardDeck[49] = startPath + "two" + middlePath + "diamonds"
cardDeck[50] = startPath + "two" + middlePath + "hearts"
cardDeck[51] = startPath + "two" + middlePath + "spades"
console.log (cardDeck);

/* const addNumbering = (item, index) => {
    item[index] = i++
}
cardDeck.forEach(addNumbering); */


