import express, { Request, Response, Express, response } from "express";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import cors from "cors";
import path from "path";
import post from "./Routes/post";
import get from "./Routes/get";

const app: Express = express();
const port: string | number = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

app.use(async (req: Request, res: Response, next: () => void) => {
	const accessToken: string | null = req.headers.token
		? (req.headers.token as string)
		: null;

	if (!accessToken) {
		res.status(500).send("Must supply token in headers");
		return;
	}
	var config: AxiosRequestConfig = {
		method: "get",
		url: process.env.AUTH_URL,
		headers: {
			id_token: accessToken,
		},
	};
	try {
		const response = await axios(config);
		console.log(`${response.data.email} authenticated`);
		next();
	} catch (e: any) {
		console.log(e.response.data);
		res.status(500).send("Authentication Failed");
		return;
	}
});
app.use("/post", post);
app.use("/get", get);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
