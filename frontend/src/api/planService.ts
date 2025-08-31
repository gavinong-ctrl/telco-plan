import type { Plan } from "../types/plan";

// Fetch all plans from Spring Boot backend
export async function fetchPlans(): Promise<Plan[]> {
  const response = await fetch("http://localhost:8080/plans");
  if (!response.ok) {
    throw new Error("Failed to fetch plans");
  }
  return response.json();
}

// Fetch a specific plan by ID
export async function fetchPlanById(id: number): Promise<Plan> {
  const response = await fetch(`http://localhost:8080/plans/${id}`);
  if (!response.ok) {
    throw new Error("Plan not found");
  }
  return response.json();
}
