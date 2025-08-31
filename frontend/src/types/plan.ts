export type PlanType = "Prepaid" | "Postpaid";

export interface Plan {
  id: number;
  name: string;
  price: number;
  validity: string;
  dataLimit: string;
  type: PlanType;
  description?: string;
}
