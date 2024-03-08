import { ISignInRequest } from "../interface/signin.interface";
import { JSONSchemaType } from "ajv";

const SignInSchema: JSONSchemaType<ISignInRequest> = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
    },
    password: { type: "string", minLength: 1 },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

export default SignInSchema;
