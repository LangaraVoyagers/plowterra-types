import { IAudit } from "./shared";
import { Schema } from "mongoose";

enum PayrollTimeframeEnum {
  WEEKLY = "Weekly",
  BIWEEKLY = "Bi-Weekly",
  MONTHLY = "Monthly",
}
enum StatusEnum {
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
