import { IAudit } from "./shared.interface";
import { Schema } from "mongoose";

export enum PayrollTimeframeEnum {
  WEEKLY = "Weekly",
  BIWEEKLY = "Bi-Weekly",
  MONTHLY = "Monthly",
}
export enum StatusEnum {
  ACTIVE = "Active",
  CLOSED = "Closed",
}

export interface ISeason extends IAudit {
  name: string;
  startDate: number;
  endDate: number;
  payrollTimeframe: keyof typeof PayrollTimeframeEnum;
  price: number;
  status: keyof typeof StatusEnum;
  hasHarvestLog: boolean;
  product: { id: string; name: string };
  //productID
  //unitID
  //currencyID
  deductions: Array<ISeasonDeduction>;
}

export interface ISeasonDeduction {
  deductionID: Schema.Types.ObjectId;
  price: number;
}

export interface ISeasonRequest {
  name: string;
  startDate: number;
  payrollTimeframe: keyof typeof PayrollTimeframeEnum;
  price: number;
  farmId: string;
  productId: string;
  unitId: string;
  currencyId: string;
  deductions: Array<ISeasonDeduction>;
}

export interface ISeasonResponse {
  name: string;
  startDate: number;
  payrollTimeframe: keyof typeof PayrollTimeframeEnum;
  //endDate: number;
  price: number;
  status: keyof typeof StatusEnum;
  product: { _id: string; name: string };
  hasHarvestLog: boolean;
  deductions: Array<ISeasonDeduction>;
}
