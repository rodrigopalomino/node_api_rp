import { Router } from "express";
import {
  createCliente,
  deleteCliente,
  getCliente,
  getClientes,
  updateCliente,
} from "../controller/cliente";

const router = Router();

router.get("/", getClientes);
router.get("/:codigo_cliente", getCliente);
router.post("/create", createCliente);
router.delete("/delete/:codigo_cliente", deleteCliente);
router.put("/update", updateCliente);

export { router };

/*
  router.get("/", getClientes);

  ************
  router.get("/:codigo_cliente", getCliente);

  ************
  router.post("/create", createCliente);
  body
  {
    (OBLIGATORIOS)
    "nombre":"cliente1",
    "apellido_paterno":"apellidoPaterno1",
    "apellido_materno":"apellidoPaterno2",
    "fecha_nacimiento":"01-01-2000",
    "telefono":"123456879",
    "email":"cliente1@gmail.com"
  }

  ************
  router.delete("/delete/:codigo_cliente", deleteCliente);

  ************
  router.put("/update", updateCliente);

*/
