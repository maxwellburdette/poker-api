import { BigQuery } from "@google-cloud/bigquery";
import schema from "../resources/deckSchema.json";
import Card from "../Classes/Card";

export default async function putDeck(deckId: string, deck: Card[]) {
	await createTable(deckId);
	const response: Promise<any> = runQuery(deckId, deck);
	return response;
}

async function runQuery(deckId: string, deck: Card[]): Promise<any> {
	const bigqueryClient = new BigQuery();

	// The SQL query to run
	const sqlQuery = `
        INSERT INTO \`poker-app-334822.decks.${deckId}\`(value, suite, color, uuid)
        VALUES${deck.map((node) => {
					return ` (\"${node.value}\", \"${node.suite}\", \"${node.color}\", \"${node.uuid}\")`;
				})}`;
	console.log(sqlQuery);
	const options = {
		query: sqlQuery,
		// Location must match that of the dataset(s) referenced in the query.,
		location: "US",
		params: { deckId: deckId },
		useQueryCache: true,
	};

	// Run the query
	const [rows] = await bigqueryClient.query(options);

	return rows;
}

async function createTable(deckId: string) {
	const bq = new BigQuery();
	const datasetId: string = "decks";
	const tableId: string = deckId;

	const options = {
		schema: schema,
		location: "US",
	};

	// Create a new table in the dataset
	const [table] = await bq.dataset(datasetId).createTable(tableId, options);

	return new Promise((resolve, reject) => {
		if (table) {
			resolve(`Table ${table.id} created.`);
		} else {
			reject("Failed creating table");
		}
	});
}
