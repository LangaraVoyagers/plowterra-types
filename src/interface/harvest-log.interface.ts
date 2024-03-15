import { IDeduction } from "./deduction.interface";
import { IPickerResponse } from "./picker.interface"
import { ISeasonResponse } from "./season.interface"
import { IAudit } from "./shared.interface"

export interface IHarvestLogResponse extends IAudit {
  id: string
  season?: ISeasonResponse
  picker?: IPickerResponse
  collectedAmount: number
  seasonDeductions?: Array<IDeduction>
  totalDeduction?: number
  notes?: string
  createdAt: number
}

export interface ICreateHarvestLogRequest {
  farmId: string;
  collectedAmount: number;
  seasonId: string;
  pickerId: string;
  seasonDeductionIds?: Array<string>;
  notes?: string;
}
