import { ISeasonRequest } from "../interface/season.interface";
import { JSONSchemaType } from "ajv";

const SeasonSchema: JSONSchemaType<ISeasonRequest> = {
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    startDate: {
      type: "integer"
    },
    payrollTimeframe: {
      type: "string",
      enum: [
        "BIWEEKLY",
        "WEEKLY",
        "MONTHLY"
      ]
    },
    price: {
      type: "number"
    },
    farmId: {
      type: "string"
    },
    productId: {
      type: "string"
    },
    unitId: {
      type: "string"
    },
    currencyId: {
      type: "string"
    },
    deductions: {
      type: "array",
      items: {
        type: "object",
        deductionID: "string",
        price: "number",
        required: [
          "deductionID", 
          "price"
        ]
      }
    }
  },
  required: [
    "name", 
    "startDate", 
    "payrollTimeframe", 
    "price", 
    "farmId", 
    "productId", 
    "unitId", 
    "currencyId",
    "deductions"
  ],
  additionalProperties: false
};

export default SeasonSchema;
