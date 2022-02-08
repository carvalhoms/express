import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request: Request, response: Response) => {
	response.send("API Express com TtpeScript");
});

app.get("/users", (req: Request, res: Response) => {
	res.send("Listar todos os usuários");
});

app.post("/users", (req: Request, res: Response) => {
	res.send(req.body);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
