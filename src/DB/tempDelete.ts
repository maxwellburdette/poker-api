import db from "../DB/config";

export default async function dropTable(tableId: string): Promise<any> {
	const sql: string = `
		DROP TABLE deck.${tableId}
	`;
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
