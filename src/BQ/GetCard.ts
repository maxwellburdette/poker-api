import { BigQuery } from "@google-cloud/bigquery";
export default function draw(deckId: string) {
	const response: Promise<any> = runQuery(deckId);
	return response;
}

async function runQuery(deckId: String): Promise<any> {
	const bigqueryClient = new BigQuery();
	const sqlQuery = `
        SELECT * FROM \`poker-app-334822.decks.${deckId}\` 
		LIMIT 1
    `;
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
