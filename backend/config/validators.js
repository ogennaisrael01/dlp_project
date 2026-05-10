
import { Ajv } from "ajv";
import addFormat from "ajv-formats"

const ajv = new Ajv();
addFormat(ajv)

const userValidator = {
    type: "object",
    required: ['email', 'password'],
    properties: {
        email: { type: "string", minLength: 8, format: "email"},
        password: { type: 'string', minLength: 8},
    },
    additionalProperties: true
}

export const regValidator = ajv.compile(userValidator)