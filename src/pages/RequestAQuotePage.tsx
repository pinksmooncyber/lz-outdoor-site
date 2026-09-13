import React from 'react';
import { Package, Clock, Sparkles, Compass } from 'lucide-react';
import { RfqForm } from '../components/RfqForm';

interface RequestAQuotePageProps {
  preselectedProduct?: string;
}

export const RequestAQuotePage: React.FC<RequestAQuotePageProps> = ({
  preselectedProduct,
}) => {
  return (
    <div className="bg-stone-50 min-h-screen py-16 lg:py-20 text-stone-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Page Title & Context */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Factory-Direct • Low MOQ Custom Branding</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-sans">
            Request Pricing & Sample Details
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed font-normal">
            Looking to test a rooftop tent sample, order custom-branded gear for your outdoor shop, or get containerized pricing? Fill out the brief form below and our team will get back to you with specs, lead times, and transparent pricing within 24 hours.
          </p>
        </div>

        {/* Outdoor Brand Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="font-bold text-stone-900 text-xs uppercase tracking-wider block">Low Evaluation MOQ</span>
              <span className="text-stone-500 text-xs font-normal">1–10 units for testing & retail trials</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="font-bold text-stone-900 text-xs uppercase tracking-wider block">14-Day Sample Turnaround</span>
              <span className="text-stone-500 text-xs font-normal">Physical samples with your logo</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="font-bold text-stone-900 text-xs uppercase tracking-wider block">Custom Brand Package</span>
              <span className="text-stone-500 text-xs font-normal">Logo plates, woven tags & custom cartons</span>
            </div>
          </div>
        </div>

        {/* The Form */}
        <RfqForm initialProduct={preselectedProduct} />
      </div>
    </div>
  );
};
