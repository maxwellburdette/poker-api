import db from "../DB/config";

export default async function tempSelectAll(tableId: string): Promise<any> {
	const sql: string = `SELECT * FROM deck.${tableId};`;
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
