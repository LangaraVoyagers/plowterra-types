import { JSONSchemaType } from "ajv";
import { ICreateHarvestLogRequest } from "./harvestLog";

const schema: JSONSchemaType<ICreateHarvestLogRequest> = {
  type: "object",
  properties: {
    farmId: { type: "string" },
    collectedAmount: { type: "number" },
    seasonId: { type: "string" },
    pickerId: { type: "string" },
    seasonDeductions: {
      type: "array",
      items: { type: "string" },
      nullable: true,
      minItems: 1,
      uniqueItems: true,
    },
    notes: { type: "string", nullable: true, maxLength: 500 },
  },
  required: ["farmId", "seasonId", "pickerId", "collectedAmount"],
  additionalProperties: false,
};

export default schema;
