import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { appointmentExists } from "../helpers/db-validators.js";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const updateAppointmentValidator = [
    param("id").isMongoId().withMessage("No es un ID válido"), 
    param("id").custom(appointmentExists),
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido"),
    body("user").notEmpty().withMessage("El usuario es requerido"),
    body("user").isMongoId().withMessage("No es un ID válido"),
    validarCampos,
    handleErrors
];

export const deleteAppointmentValidator = [
    param("id").isMongoId().withMessage("No es un ID válido"),
    param("id").custom(appointmentExists),
    validarCampos,
    handleErrors
];