import React, { useState } from 'react';
import { Camera, Factory, Package, Truck, Layers, CheckCircle2 } from 'lucide-react';
import { PlaceholderImage } from './PlaceholderImage';

interface EvidenceItem {
  id: string;
  category: 'all' | 'product' | 'detail' | 'factory' | 'packaging' | 'shipment';
  title: string;
  type: 'product' | 'detail' | 'factory' | 'packaging' | 'shipment';
  description: string;
  badgeText: string;
  imageUrl?: string;
}

const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'ev-1',
    category: 'product',
    title: 'Hard-Shell Rooftop Tent — 230 × 142 cm Production Specimen',
    type: 'product',
    description: 'Precision aluminum hard casing with 320D poly-cotton ripstop canvas and integrated gas-assist struts.',
    badgeText: 'Production Model',
    imageUrl: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ev-2',
    category: 'detail',
    title: 'Die-Cast Aluminum Knuckle & Heavy-Duty Awning Arm Joint',
    type: 'detail',
    description: 'Precision CNC machined hinge joint engineered for 270° free-standing high-wind resilience.',
    badgeText: 'Engineering Detail',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ev-3',
    category: 'detail',
    title: 'High-Density Memory Foam (Density 45, ~5cm) Mattress',
    type: 'detail',
    description: 'Multi-layer thermal insulation base with condensation mat and removable micro-fleece cover.',
    badgeText: 'Comfort Core',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ev-4',
    category: 'factory',
    title: 'Aluminum Extrusion, Laser Cutting & TIG Welding Workshop',
    type: 'factory',
    description: 'Dedicated automated cutting and robotic welding jigs for hard-shell rooftop tent frames.',
    badgeText: 'Factory Floor',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ev-5',
    category: 'packaging',
    title: 'Export Palletizing & High-Density Foam Corner Protection',
    type: 'packaging',
    description: 'Multi-layer corrugated export cartons with honeycomb corner reinforcements for ocean freight.',
    badgeText: 'Export Packing',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ev-6',
    category: 'shipment',
    title: '40ft High Cube Container Loading for International Ocean Transit',
    type: 'shipment',
    description: 'Optimized volumetric containerization nesting rooftop tents, batwing awnings, and water tanks.',
    badgeText: 'Containerization',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
  },
];

export const EvidenceGallery: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'product' | 'detail' | 'factory' | 'packaging' | 'shipment'>('all');

  const filteredItems = activeFilter === 'all'
    ? (compact ? EVIDENCE_ITEMS.slice(0, 4) : EVIDENCE_ITEMS)
    : EVIDENCE_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      {!compact && (
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none border-b border-slate-200">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            All Verification ({EVIDENCE_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveFilter('product')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'product'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            Finished Equipment
          </button>
          <button
            onClick={() => setActiveFilter('detail')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'detail'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Engineering Details
          </button>
          <button
            onClick={() => setActiveFilter('factory')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'factory'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <Factory className="w-3.5 h-3.5" />
            Manufacturing Floor
          </button>
          <button
            onClick={() => setActiveFilter('packaging')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'packaging'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            Export Packaging
          </button>
          <button
            onClick={() => setActiveFilter('shipment')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'shipment'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            Ocean Containerization
          </button>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded overflow-hidden flex flex-col hover:border-slate-400 transition-all hover:shadow-md group"
          >
            <PlaceholderImage
              label={item.title}
              type={item.type}
              aspectRatio="aspect-16/10"
              badgeText={item.badgeText}
              imageUrl={item.imageUrl}
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-950 text-sm tracking-tight mb-2 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  Direct Sourcing Audit
                </span>
                <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                  {item.badgeText}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
