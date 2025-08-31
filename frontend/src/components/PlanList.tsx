import type { Plan } from "../types/plan";
import PlanCard from "./PlanCard";

interface PlanListProps {
  plans: Plan[];
  onViewDetails: (plan: Plan) => void;
}

export default function PlanList({ plans, onViewDetails }: PlanListProps) {
  return (
    <div className="flex flex-wrap justify-start gap-4">
      {plans.map((plan) => (
        <div
          key={plan.id} 
          className="w-full sm:w-[250px] md:w-[300px]"
        >
          <PlanCard plan={plan} onViewDetails={onViewDetails} />
        </div>
      ))}
    </div>
  );
}
