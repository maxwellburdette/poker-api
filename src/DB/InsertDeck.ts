import db from "../DB/config";
import Card from "../Classes/Card";
import SQLError, { Error } from "../Classes/Error";
export default async function putDeck(deckId: string, deck: Card[]) {
	try {
		await createTable(deckId);
		return runQuery(deckId, deck);
	} catch (err) {
		const stackTrack: Error = new SQLError(err).stackTrace();
		console.log(stackTrack);
	}
}

async function runQuery(deckId: string, deck: Card[]): Promise<any> {
	// The SQL query to run
	const sql = `
        INSERT INTO \`${deckId}\`(value, suite, color, uuid)
        VALUES${deck.map((node) => {
					return ` (\"${node.value}\", \"${node.suite}\", \"${node.color}\", \"${node.uuid}\")`;
				})}`;
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

async function createTable(deckId: string): Promise<any> {
	const sql: string = `
		CREATE TABLE deck.${deckId} (
			value varchar(25) NOT NULL,
			suite varchar(25) NOT NULL,
			color varchar(25) NOT NULL,
			uuid varchar(255) NOT NULL
		)
	`;
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
