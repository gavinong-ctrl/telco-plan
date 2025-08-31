import { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

interface PlanFilterProps {
  selectedType: string;
  onFilterChange: (type: string) => void;
  className?: string;
}

const options = ["All", "Prepaid", "Postpaid"];

export default function PlanFilter({
  selectedType,
  onFilterChange,
  className,
}: PlanFilterProps) {
  return (
    <div className={className}>
      <Listbox value={selectedType} onChange={onFilterChange}>
        <div className="relative w-48">
          <ListboxButton className="relative w-full cursor-pointer bg-white rounded-lg border border-gray-200 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <span className="block truncate">{selectedType}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg border border-gray-200 focus:outline-none sm:text-sm z-10">
            {options.map((type) => (
                <ListboxOption key={type} value={type} as={Fragment}>
                {({ selected, active }) => (
                    <li
                    className={`list-none cursor-pointer select-none relative py-2 pl-10 pr-4 text-left ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`}
                    >
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                        {type}
                    </span>
                    {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                    ) : null}
                    </li>
                )}
                </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
