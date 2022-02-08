import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
	response.send("API Express com TtpeScript");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
