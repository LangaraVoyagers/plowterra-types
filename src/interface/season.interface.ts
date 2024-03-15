import { ICurrency } from "./currency.interface"
import { IProduct } from "./product.interface"
import { IAudit } from "./shared.interface"
import { IUnit } from "./unit.interface"

export enum PayrollTimeframeEnum {
  WEEKLY = "Weekly",
  BIWEEKLY = "Bi-Weekly",
  MONTHLY = "Monthly",
}

export enum StatusEnum {
  ACTIVE = "Active",
  CLOSED = "Closed",
}

export interface ISeasonDeduction {
  deductionID: string
  price: string
}

export interface ISeasonResponse extends IAudit {
  _id: string
  name: string
  startDate: number
  endDate: number
  payrollTimeframe: keyof typeof PayrollTimeframeEnum
  price: number
  status: keyof typeof StatusEnum
  product: IProduct
  currency: ICurrency
  unit: IUnit
  hasHarvestLog: boolean
  deductions: Array<ISeasonDeduction>
}
