import db from "../DB/config";

export default async function draw(tableId: string): Promise<any> {
	const topCard: Promise<any> | string = getTopCard(tableId);
	return topCard;
}

function getTopCard(tableId: string): Promise<any> {
	const sql: string = `SELECT * FROM deck.${tableId} LIMIT 1;`;
	return new Promise((resolve, reject) => {
		db.query(sql, function (error: any, results: any, fields: any) {
			if (error) {
				reject(error);
			} else {
				resolve(results[0]);
			}
		});
	});
}
