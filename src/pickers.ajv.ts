import { JSONSchemaType } from "ajv";
import { BloodType, ICreatePickerRequest, Relationship } from "./pickers";

const schema: JSONSchemaType<ICreatePickerRequest> = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 1,
      maxLenght: 50,
    },
    phone: {
      type: "string",
      minLength: 6,
      maxLenght: 13,
    },
    govId: {
      type: "string",
      maxLenght: 20,
    },
    bloodType: {
      type: "string",
      enum: Object.keys(BloodType) as readonly (keyof typeof BloodType)[],
    },
    address: {
      type: "string",
      maxLenght: 50,
    },
    score: {
      type: "number",
    },
    emergencyContact: {
      type: "object",
      required: [],
      properties: {
        name: {
          type: "string",
          minLength: 1,
          maxLength: 50,
        },
        phone: {
          type: "string",
          minLength: 1,
          maxLength: 50,
        },
        relationship: {
          type: "string",
          enum: Object.keys(
            Relationship
          ) as readonly (keyof typeof Relationship)[],
        },
      },
    },
    employment: {
      type: "object",
      required: [],
      properties: {
        startDate: {
          type: "integer",
        },
        endDate: {
          type: "integer",
          nullable: true,
        },
      },
    },
  },
  required: ["name", "phone", "emergencyContact"],
  additionalProperties: false,
};

export default schema;
