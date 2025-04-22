//cards
const suits = ["srdce", "kule", "listy", "krize"];
const numbers = [
  "sedma",
  "osma",
  "devet",
  "spodek",
  "vrsek",
  "kral",
  "x",
  "eso",
];
const heartCards: { key: number; suit: string; number: string }[] = [];
const diamondCards: { key: number; suit: string; number: string }[] = [];
const spadesCards: { key: number; suit: string; number: string }[] = [];
const clubCards: { key: number; suit: string; number: string }[] = [];

export const cards = [heartCards, diamondCards, spadesCards, clubCards];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    cards[i].push({ key: j, suit: suits[i], number: numbers[j] });
  }
}
