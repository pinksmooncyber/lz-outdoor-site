import React from 'react';
import { Info, Check, SlidersHorizontal } from 'lucide-react';
import { ProductSpecification } from '../types';

interface SpecTableProps {
  specifications: ProductSpecification[];
  title?: string;
  subtitle?: string;
}

export const SpecTable: React.FC<SpecTableProps> = ({
  specifications,
  title = 'Technical Engineering Specifications',
  subtitle = 'Supplier engineering parameters for wholesale procurement and OEM customization.',
}) => {
  // Group specifications by group name
  const groupedSpecs: Record<string, ProductSpecification[]> = {};
  specifications.forEach((spec) => {
    const groupKey = spec.group || 'General Specifications';
    if (!groupedSpecs[groupKey]) {
      groupedSpecs[groupKey] = [];
    }
    groupedSpecs[groupKey].push(spec);
  });

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
      {/* Table Header */}
      <div className="px-6 py-5 border-b border-slate-200 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
          {subtitle && <p className="text-xs text-slate-300 mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 bg-slate-800 text-slate-200 px-3 py-1 rounded border border-slate-700 font-medium">
            <Check className="w-3.5 h-3.5 text-amber-400" />
            Verified Factory Parameter
          </span>
        </div>
      </div>

      {/* Specifications by Group */}
      <div className="divide-y divide-slate-200">
        {Object.entries(groupedSpecs).map(([groupName, specs]) => (
          <div key={groupName} className="p-0">
            {/* Group Header */}
            <div className="px-6 py-3 bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider border-y border-slate-200 flex items-center justify-between">
              <span>{groupName}</span>
              <span className="text-[11px] text-slate-500 font-normal">
                {specs.length} Parameters
              </span>
            </div>

            {/* Parameter Rows */}
            <div className="divide-y divide-slate-100">
              {specs.map((spec, index) => (
                <div
                  key={`${spec.label}-${index}`}
                  className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-3 text-sm hover:bg-slate-50/80 transition-colors items-center"
                >
                  <div className="sm:col-span-5 font-semibold text-slate-700 text-xs uppercase tracking-wide">
                    {spec.label}
                  </div>
                  <div className="sm:col-span-7 flex flex-col justify-center">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-slate-950 font-bold text-sm">
                        {spec.value}
                      </span>
                      {spec.verified && (
                        <span className="inline-flex items-center text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 uppercase">
                          Standard
                        </span>
                      )}
                    </div>
                    {spec.note && (
                      <p className="text-xs text-slate-500 mt-1 flex items-start gap-1.5 leading-normal">
                        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{spec.note}</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
