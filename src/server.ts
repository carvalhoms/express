import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
	response.send("Rota usuários");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
