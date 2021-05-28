// @ts-check

import * as express from "express";
import { mcPing } from "./mailchimpPing";

const port =
	process.env.PORT ||
	(process.env.NODE_ENV === "production" ? 8080 : 4000) ||
	4000;

const app = express();

app.get("/ping", mcPing);

app.listen(port, () =>
	console.log(`Server is running on http://localhost:${port}`),
);
