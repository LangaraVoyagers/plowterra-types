export interface IAudit {
    createdAt: number;
    createdBy: string;
    updatedAt: number | null;
    updatedBy: string | null;
    deletedAt: number | null;
    deletedBy: string | null;
  }
  