import { BigQuery } from "@google-cloud/bigquery";

export default async function deleteCard(deckId: string, cardId: string) {
	const response: Promise<any> = runQuery(deckId, cardId);
	return response;
}

async function runQuery(deckId: string, cardId: string): Promise<any> {
	const bigqueryClient = new BigQuery();
	const sqlQuery = `
        DELETE 
        FROM \`poker-app-334822.decks.${deckId}\` 
        WHERE uuid = @cardId
    `;
	const options = {
		query: sqlQuery,
		// Location must match that of the dataset(s) referenced in the query.,
		location: "US",
		params: { cardId: cardId },
		useQueryCache: true,
	};

	// Run the query
	const [rows] = await bigqueryClient.query(options);

	return rows;
}
