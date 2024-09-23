//cards
const suits = ["hearts", "diamonds", "spades", "clubs"];
const numbers = ["7", "8", "9", "Jack", "Queen", "King", "10", "Ace"];
export const heartCards: { key: number; suit: string; number: string }[] = [];
export const diamondCards: { key: number; suit: string; number: string }[] = [];
export const spadesCards: { key: number; suit: string; number: string }[] = [];
export const clubCards: { key: number; suit: string; number: string }[] = [];

const cards = [heartCards, diamondCards, spadesCards, clubCards];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    cards[i].push({ key: j, suit: suits[i], number: numbers[j] });
  }
}
