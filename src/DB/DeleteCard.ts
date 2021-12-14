import db from "../DB/config";

export default async function deleteCard(
	tableId: string,
	cardId: Promise<any>
) {
	const card = await cardId;
	if (card) {
		const sql: string = `DELETE FROM deck.${tableId} WHERE uuid = \"${card.uuid}\";`;
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
	const sql: string = `DROP TABLE deck.${tableId};`;
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
