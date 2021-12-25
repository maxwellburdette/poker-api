import db from "../DB/config";
import Card from "../Classes/Card";

export default async function deleteCard(
	tableId: string,
	cardPromise: Promise<Card[]> | Card[]
) {
	const cards: Card[] = await cardPromise;
	if (cards.length > 0) {
		let sql: string = `
			DELETE FROM deck.${tableId} 
			WHERE uuid IN(${cards.map((card) => {
				return `\"${card.uuid}\"`;
			})}) `;

		return runQuery(sql);
	}
	const sql: string = `DROP TABLE deck.${tableId};`;
	return runQuery(sql);
}

function runQuery(sql: string): Promise<Card> {
	console.log(sql);
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
