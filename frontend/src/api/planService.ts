import type { Plan } from "../types/plan";

// Hardcoded mock data
const mockPlans: Plan[] = [
  {
    id: 1,
    name: "Prepaid Lite",
    price: 10,
    validity: "7 days",
    dataLimit: "5GB",
    type: "Prepaid",
    description: "Affordable plan with short validity, perfect for light users."
  },
  {
    id: 2,
    name: "Prepaid Plus",
    price: 30,
    validity: "30 days",
    dataLimit: "20GB",
    type: "Prepaid",
    description: "Great for regular users with more data needs."
  },
  {
    id: 3,
    name: "Postpaid Basic",
    price: 50,
    validity: "30 days",
    dataLimit: "40GB",
    type: "Postpaid",
    description: "Unlimited calls + generous data allowance."
  },
  {
    id: 4,
    name: "Postpaid Premium",
    price: 80,
    validity: "30 days",
    dataLimit: "100GB",
    type: "Postpaid",
    description: "For heavy users who want maximum benefits."
  }
];

// Simulate async fetch
export async function fetchPlans(): Promise<Plan[]> {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockPlans), 300); // small delay for realism
  });
}

export async function fetchPlanById(id: number): Promise<Plan> {
  return new Promise((resolve, reject) => {
    const plan = mockPlans.find(p => p.id === id);
    if (plan) {
      setTimeout(() => resolve(plan), 300);
    } else {
      reject(new Error("Plan not found"));
    }
  });
}
