export type Error = {
	code: string;
	errno: number;
	sqlMessage: string;
	sqlState: string;
	index: number;
	sql: string;
};
export default class SQLError {
	error: any;
	constructor(error: any) {
		this.error = error;
	}
	stackTrace(): Error {
		return {
			code: this.error.code,
			errno: this.error.errno,
			sqlMessage: this.error.sql,
			sqlState: this.error.sqlState,
			index: this.error.index,
			sql: this.error.sql,
		};
	}
}
