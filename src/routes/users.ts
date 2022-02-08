import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.send("Listar todos os usuários");
});

router.get("/:id", (req: Request, res: Response) => {
	res.send({
		params: req.params,
		message: `Editando usuário com id ${req.params.id}`,
		body: req.body,
		method: req.method,
	});
});

router.post("/", (req: Request, res: Response) => {
	res.send(req.body);
});

router.put("/:id", (req: Request, res: Response) => {
	res.send({
		params: req.params,
		body: req.body,
	});
});

router.delete("/:id", (req: Request, res: Response) => {
	res.send({
		params: req.params,
		message: `Excluindo usuário com id ${req.params.id}`,
		method: req.method,
	});
});

export default router;
