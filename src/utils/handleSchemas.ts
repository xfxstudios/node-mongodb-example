import { AnyObjectSchema } from "yup";
import yupToObject from "yup-to-object";
import BadRequest from "../errors/BadRequest";

class SchemasValidator {
    async validate(schema: AnyObjectSchema, data: unknown): Promise<void> {
        try {
            await schema.validate(data, { abortEarly: false });
        } catch (error) {
            const errorFormatted = yupToObject(error);
            throw new BadRequest(errorFormatted);
        }
    }
}

export default SchemasValidator;