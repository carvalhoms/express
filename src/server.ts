import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import routerUsers from "./routes/users";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", routerUsers);

app.get("/", (request: Request, response: Response) => {
	response.send("API Express com TtpeScript");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
