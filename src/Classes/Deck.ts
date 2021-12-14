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

	const two: Card = new Card(TWO, suite, color);
	const three: Card = new Card(THREE, suite, color);
	const four: Card = new Card(FOUR, suite, color);
	const five: Card = new Card(FIVE, suite, color);
	const six: Card = new Card(SIX, suite, color);
	const seven: Card = new Card(SEVEN, suite, color);
	const eight: Card = new Card(EIGHT, suite, color);
	const nine: Card = new Card(NINE, suite, color);
	const ten: Card = new Card(TEN, suite, color);
	const jack: Card = new Card(JACK, suite, color);
	const queen: Card = new Card(QUEEN, suite, color);
	const king: Card = new Card(KING, suite, color);
	const ace: Card = new Card(ACE, suite, color);

	cards.push(two);
	cards.push(three);
	cards.push(four);
	cards.push(five);
	cards.push(six);
	cards.push(seven);
	cards.push(eight);
	cards.push(nine);
	cards.push(ten);
	cards.push(jack);
	cards.push(queen);
	cards.push(king);
	cards.push(ace);

	return cards;
}
