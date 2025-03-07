import { Router } from "express";
import { deleteAppointment, saveAppointment, updateAppointment, getAppointmentsByUser } from "./appointment.controller.js";
import { createAppointmentValidator, deleteAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.put("/updateAppointment/:id", updateAppointmentValidator, updateAppointment);

router.delete("/deleteAppointment/:id", deleteAppointmentValidator, deleteAppointment);

router.get("/userAppointments/:userId", getAppointmentsByUser);

export default router;