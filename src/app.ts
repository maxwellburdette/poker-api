import express, { Request, Response, Express } from "express";
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

app.use((req: Request, res: Response, next: () => void) => {
	console.log(Date.now());
	console.log("middleware");
	next();
});
app.use("/post", post);
app.use("/get", get);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
