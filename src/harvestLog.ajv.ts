import { JSONSchemaType } from "ajv";
import { ICreateHarvestLogRequest } from "./harvestLog";

const schema: JSONSchemaType<ICreateHarvestLogRequest> = {
  type: "object",
  properties: {
    farmId: { type: "string" },
    collectedAmount: {
      type: "number",
    },
    seasonId: { type: "string" },
    pickerId: { type: "string" },
    seasonDeductionIds: {
      type: "array",
      items: { type: "string" },
      nullable: true,
      uniqueItems: true,
    },
    notes: {
      type: "string",
      nullable: true,
      maxLength: 500,
    },
  },
  required: ["farmId", "seasonId", "pickerId", "collectedAmount"],
  additionalProperties: false,
};

export default schema;
