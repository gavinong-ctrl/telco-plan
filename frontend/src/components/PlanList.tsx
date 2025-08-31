import type { Plan } from "../types/plan";
import PlanCard from "./PlanCard/PlanCard";

interface PlanListProps {
  plans: Plan[];
  onViewDetails: (plan: Plan) => void;
}

export default function PlanList({ plans, onViewDetails }: PlanListProps) {
  // example: sort so "prepared" comes before "postpaid"
  const sortedPlans = [...plans].sort((a, b) => {
    if (a.type === b.type) return 0;
    return a.type === "Postpaid" ? -1 : 1;
  });

  return (
    <div className="flex flex-wrap justify-start gap-4">
      {sortedPlans.map((plan) => (
        <div
          key={plan.id}
          className="w-full sm:w-[250px] md:w-[300px] lg:w-[320px]"
        >
          <PlanCard plan={plan} onViewDetails={onViewDetails} />
        </div>
      ))}
    </div>
  );
}

