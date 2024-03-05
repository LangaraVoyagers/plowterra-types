import { IPicker } from "./pickers";
import { ISeason } from "./season";
import { Schema } from "mongoose";
import { IDeduction } from "./deduction";

export interface IHarvestLog {
  id?: string;
  season: Schema.Types.ObjectId;
  picker: Schema.Types.ObjectId;
  collectedAmount: number;
  seasonDeductions: Array<Schema.Types.ObjectId>;
  totalDeduction?: number;
  notes?: string;
}

export interface IHarvestLogResponse {
  id: string;
  season?: ISeason;
  picker?: IPicker;
  collectedAmount: number;
  seasonDeductions?: Array<IDeduction>;
  totalDeduction?: number;
  notes?: string;
}

export interface ICreateHarvestLogRequest {
  farmId: string;
  collectedAmount: number;
  seasonId: string;
  pickerId: string;
  seasonDeductionIds?: Array<string>;
  notes?: string;
}
