import Card from "./Card";
export default class Desk {
	cards: Card[];
	constructor() {
		const unShuffled: Card[] = generateDeck();
		this.cards = this.shuffle(unShuffled);
	}
	shuffle(cards: Card[]): Card[] {
		let currentIndex: number = cards.length;
		let randomIndex: number;
		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[cards[currentIndex], cards[randomIndex]] = [
				cards[randomIndex],
				cards[currentIndex],
			];
		}
		return cards;
	}
}

/**
 * COLORS
 */
//Swap with CSS values eventually
const BLACK: string = "black";
const RED: string = "red";

/**
 * SUITES
 */
const HEARTS: string = "Hearts";
const CLUBS: string = "Clubs";
const SPADES: string = "Spades";
const DIAMONDS: string = "Diamonds";

/**
 * VALUES
 */
const TWO: string = "two";
const THREE: string = "three";
const FOUR: string = "four";
const FIVE: string = "five";
const SIX: string = "six";
const SEVEN: string = "seven";
const EIGHT: string = "eight";
const NINE: string = "nine";
const TEN: string = "ten";
const JACK: string = "jack";
const QUEEN: string = "queen";
const KING: string = "king";
const ACE: string = "ace";

function generateDeck(): Card[] {
	let deck: Card[];
	deck = getSuite(HEARTS, RED);
	deck = deck.concat(getSuite(DIAMONDS, RED));
	deck = deck.concat(getSuite(SPADES, BLACK));
	deck = deck.concat(getSuite(CLUBS, BLACK));
	return deck;
}

function getSuite(suite: string, color: string): Card[] {
	let cards: Card[] = [];
	cards.push(new Card(TWO, suite, color));
	cards.push(new Card(THREE, suite, color));
	cards.push(new Card(FOUR, suite, color));
	cards.push(new Card(FIVE, suite, color));
	cards.push(new Card(SIX, suite, color));
	cards.push(new Card(SEVEN, suite, color));
	cards.push(new Card(EIGHT, suite, color));
	cards.push(new Card(NINE, suite, color));
	cards.push(new Card(TEN, suite, color));
	cards.push(new Card(JACK, suite, color));
	cards.push(new Card(QUEEN, suite, color));
	cards.push(new Card(KING, suite, color));
	cards.push(new Card(ACE, suite, color));
	return cards;
}
