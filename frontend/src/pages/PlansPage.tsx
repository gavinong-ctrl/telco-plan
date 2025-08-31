import { useEffect, useState } from "react";
import type { Plan } from "../types/plan";
import PlanFilter from "../components/PlanFilter";
import Loader from "../components/loader";
import PlanList from "../components/PlanList";
import PlanDetailsModal from "../components/PlanDetailsModal";
import { fetchPlans } from "../api/planService";

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);
  const [selectedType, setSelectedType] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await fetchPlans();
      setPlans(data);
      setFilteredPlans(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const handleFilterChange = (type: string) => {
    setSelectedType(type);
    if (type === "All") setFilteredPlans(plans);
    else setFilteredPlans(plans.filter((p) => p.type === type));
  };

  const handleViewDetails = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div className="mx-auto p-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide mb-6 text-left">
        Available Plans
      </h1>
      <PlanFilter selectedType={selectedType} onFilterChange={handleFilterChange} className="mb-6" />

      {loading ? (
        <Loader />
      ) : (
        <PlanList plans={filteredPlans} onViewDetails={handleViewDetails} />
      )}

      <PlanDetailsModal
        plan={selectedPlan}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
