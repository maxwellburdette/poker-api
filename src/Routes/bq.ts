import express, { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import Deck from "../Classes/Deck";
import Card from "../Classes/Card";
import deleteCard from "../BQ/DeleteCard";
import putDeck from "../BQ/InsertDeck";
import draw from "../BQ/GetCard";
const router = express();

router.post("/shuffle", async function (req: Request, res: Response) {
	const deck: Deck = new Deck();
	const deckId: string = uuidv4();
	const cards: Card[] = deck.cards;
	const response: any = await putDeck(deckId, cards);
	res.status(200).json({
		response: response,
		deckId: deckId,
	});
});

router.post("/draw", async function (req: Request, res: Response) {
	const uuid: string = req.body.deckId;
	const card: any = await draw(uuid);
	const cardId = card[0].uuid;
	await deleteCard(uuid, cardId);
	res.json(card[0]);
});
