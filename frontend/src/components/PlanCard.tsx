import type { Plan } from "../types/plan";

interface PlanCardProps {
  plan: Plan;
  onViewDetails: (plan: Plan) => void;
}

export default function PlanCard({ plan, onViewDetails }: PlanCardProps) {
  // Map plan type → badge color
  const typeColors: Record<string, string> = {
    Prepaid: "bg-blue-100 text-blue-700",
    Postpaid: "bg-green-100 text-green-700",
    // Family: "bg-purple-100 text-purple-700",
    // Business: "bg-yellow-100 text-yellow-700",
    // Default: "bg-gray-100 text-gray-700",
  };

  const badgeColor = typeColors[plan.type] || typeColors.Default;

  return (
    <button
      type="button"
      onClick={() => onViewDetails(plan)}
      className="bg-white/95 rounded-xl px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
                 hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] ring-1 ring-gray-100 
                 transition-all duration-300 flex flex-col justify-between h-full text-left w-full
                 cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 text-left">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
          <span
            className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium leading-tight ${badgeColor}`}
           >
            {plan.type}
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">Data: {plan.dataLimit}</p>
        <p className="text-sm text-gray-500 leading-relaxed">Validity: {plan.validity}</p>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between w-full">
        <span className="text-blue-600 font-bold text-xl">RM {plan.price}</span>
      </div>
    </button>
  );
}
