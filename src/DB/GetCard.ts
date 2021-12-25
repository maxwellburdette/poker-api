import db from "../DB/config";
import Card from "../Classes/Card";

export default async function draw(
	tableId: string,
	numCards: number | null | undefined
): Promise<Card[]> {
	const topCard: Promise<Card[]> = numCards
		? getTopCard(tableId, numCards)
		: getTopCard(tableId);
	return topCard;
}

function getTopCard(tableId: string, limit?: number): Promise<Card[]> {
	const sql: string = `SELECT * FROM deck.${tableId} LIMIT ${limit ?? 1};`;
	return new Promise((resolve, reject) => {
		db.query(sql, function (error: any, results: any, fields: any) {
			if (error) {
				reject(error);
			} else {
				resolve(results);
			}
		});
	});
}
