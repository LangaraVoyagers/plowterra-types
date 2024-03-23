import { ICreateHarvestLogRequest } from "../interface/harvest-log.interface";
import { JSONSchemaType } from "ajv";

const HarvestLogSchema: JSONSchemaType<ICreateHarvestLogRequest> = {
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
    parentId: {
      type: "string",
      nullable: true,
    },
  },
  required: ["farmId", "seasonId", "pickerId", "collectedAmount"],
  additionalProperties: false,
};

export default HarvestLogSchema;
