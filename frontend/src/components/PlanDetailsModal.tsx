import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import type { Plan } from '../types/plan';

interface PlanDetailsModalProps {
  plan: Plan | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PlanDetailsModal({ plan, isOpen, onClose }: PlanDetailsModalProps) {
  if (!plan) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Centered panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="max-w-md w-full rounded-lg bg-white p-6 shadow-lg space-y-4">
          <DialogTitle className="text-lg font-bold">{plan.name}</DialogTitle>
          <Description className="text-gray-600">
            {plan.description || 'No description available'}
          </Description>

          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            <li>Data Limit: {plan.dataLimit}</li>
            <li>Validity: {plan.validity}</li>
            <li>Type: {plan.type}</li>
            <li>Price: RM {plan.price}</li>
          </ul>

          <button
            onClick={onClose}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
