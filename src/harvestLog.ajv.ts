import Ajv from "ajv";
import { JSONSchemaType } from "ajv";
import { ICreateHarvestLogRequest } from "./harvestLog";
import { Request, Response, NextFunction } from "express";

const ajv = new Ajv();

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

const harvestLogValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (!valid) {
    return res.status(400).json(validate.errors);
  }
  next();
};

export default schema;
export { harvestLogValidator };
