import { v4 as uuidv4 } from "uuid";
export default class Card {
	value: string;
	suite: string;
	color: string;
	uuid: string;
	constructor(value: string, suite: string, color: string) {
		this.value = value;
		this.suite = suite;
		this.color = color;
		this.uuid = uuidv4();
	}
}
