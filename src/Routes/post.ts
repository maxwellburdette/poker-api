import express, { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import Deck from "../Classes/Deck";
import Card from "../Classes/Card";
import putDeck from "../DB/InsertDeck";
import tempDelete from "../DB/tempDelete";
import tempSelectAll from "../DB/tempSelectAll";
import draw from "../DB/GetCard";
import deleteCard from "../DB/DeleteCard";
import SQLError, { Error } from "../Classes/Error";
const router = express();

router.post("/draw", async function (req: Request, res: Response) {
	const tableId: string = req.body.deckId;
	try {
		const card: Promise<any> = await draw(tableId);
		const deleteRes = await deleteCard(tableId, card);
		console.log(deleteRes);
		res.json(card);
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

router.post("/drop", async function (req: Request, res: Response) {
	const tableId = req.body.tableId;

	try {
		const test = await tempDelete(tableId);
		res.json(test);
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
