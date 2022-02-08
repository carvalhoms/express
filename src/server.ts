import express from "express";

const app = express();

app.get("/", (request, response) => {
	response.send("Rota usuários");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
