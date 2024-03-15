import { IAudit } from "./shared.interface"

export interface IPayrollResponse extends IAudit {
  farmId: string
  startDate: number
  endDate: number
  pickersCount: number
  season: {
    id: string
    name: string
    price: number
    product: string
    unit: string
    currency: string
  }
  totals: {
    netAmount: number
    collectedAmount: number
    grossAmount: number
    deductions: number
  }
  lastPayroll: {
    nextEstimatedPayroll: {
      startDate: number
      endDate: number
    }
  } | null
  nextEstimatedPayroll: {
    startDate: number
    endDate: number
  }
  harvestLogIds: Array<string>
  details: Array<{
    picker: {
      id: string
      name: string
    }
    collectedAmount: number
    deductions: number
    grossAmount: number
    netAmount: number
  }>
}
