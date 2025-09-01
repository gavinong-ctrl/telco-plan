import { useEffect, useState, useMemo } from "react";
import type { Plan, PlanType } from "../types/plan";
import PlanFilter from "../components/PlanFilter";
import Loader from "../components/loader";
import PlanList from "../components/PlanList";
import PlanDetailsModal from "../components/PlanDetailsModal";
import { fetchPlanById, fetchPlans } from "../api/planService";

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchPlans();
      setPlans(data);
    } catch (error) {
      console.error("Failed to fetch plans:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPlans = useMemo(() => {
    return selectedType === "All"
      ? plans
      : plans.filter((p) => p.type === selectedType);
  }, [plans, selectedType]);

  const handleFilterChange = (type: string) => {
    setSelectedType(type);
  };

 const handleViewDetails = async (plan: Plan) => {
    try {
      const fullPlan = await fetchPlanById(plan.id);
      setSelectedPlan(fullPlan);
    } catch (error) {
      console.error("Failed to fetch plan details:", error);
    }
  };


  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="mx-auto p-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide mb-6 text-left">
        Available Plans
      </h1>

      <PlanFilter
        selectedType={selectedType}
        onFilterChange={handleFilterChange}
        className="mb-6"
      />

      {loading ? (
        <Loader />
      ) : (
        <PlanList plans={filteredPlans} onViewDetails={handleViewDetails} />
      )}

      {selectedPlan && (
        <PlanDetailsModal
          plan={selectedPlan}
          isOpen={!!selectedPlan}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
