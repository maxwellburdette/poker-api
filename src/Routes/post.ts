import express, { Response, Request } from "express";

const router = express();

type Person = {
	first: string;
	last: string;
};

router.post("/user", (req: Request, res: Response) => {
	const max: Person = {
		first: "Maxwell",
		last: "Burdette",
	};
	res.json(max);
});

export default router;
