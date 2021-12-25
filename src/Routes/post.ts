import express, { Response, Request, Router } from "express";
import { v4 as uuidv4 } from "uuid";
import Deck from "../Classes/Deck";
import Card from "../Classes/Card";
import putDeck from "../DB/InsertDeck";
import tempSelectAll from "../DB/tempSelectAll";
import draw from "../DB/GetCard";
import deleteCard from "../DB/DeleteCard";
import SQLError, { Error } from "../Classes/Error";
const router: Router = express.Router();

router.post("/draw", async function (req: Request, res: Response) {
	const tableId: string = req.body.deckId;
	const numCards: number = req.body.numCards;
	try {
		const card: Card[] = await draw(tableId, numCards);
		const deleteRes = await deleteCard(tableId, card);
		console.log(deleteRes);
		res.json(card.length > 1 ? card : card[0]);
	} catch (err) {
		const stackTrace: Error = new SQLError(err).stackTrace();
		console.error(stackTrace);
		res.status(204).send();
	}
});

router.post("/shuffle", async function (req: Request, res: Response) {
	const deck: Deck = new Deck();
	const deckId: string = uuidv4().split("-")[0];
	const cards: Card[] = deck.cards;
	try {
		const response: any = await putDeck(deckId, cards);
		res.status(200).json({
			response: response,
			deckId: deckId,
		});
		console.log(response);
	} catch (err) {
		const stackTrace: Error = new SQLError(err).stackTrace();
		console.error(stackTrace);
		res.status(204).send();
	}
});

//Temp
router.post("/selectall", async (req: Request, res: Response) => {
	const tableId = req.body.tableId;
	try {
		const response: Promise<any> = await tempSelectAll(tableId);
		res.json(response);
	} catch (err) {
		const stackTrace: Error = new SQLError(err).stackTrace();
		console.error(stackTrace);
		res.status(204).send();
	}
});

export default router;
