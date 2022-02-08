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

app.get("/users/:id", (req: Request, res: Response) => {
	res.send({
		params: req.params,
		message: `Editando usuário com id ${req.params.id}`,
		body: req.body,
		method: req.method,
	});
});

app.post("/users", (req: Request, res: Response) => {
	res.send(req.body);
});

app.put("/users/:id", (req: Request, res: Response) => {
	res.send({
		params: req.params,
		body: req.body,
	});
});

app.delete("/users/:id", (req: Request, res: Response) => {
	res.send({
		params: req.params,
		message: `Excluindo usuário com id ${req.params.id}`,
		method: req.method,
	});
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
