import express, { Request, Response } from "express";
import Deck from "../Classes/Deck";
import Card from "../Classes/Card";
const router = express();

router.get("/deck", (req: Request, res: Response) => {
	const deck: Card[] = new Deck().cards;
	res.json({
		cards: deck,
		count: deck.length,
	});
});

export default router;
