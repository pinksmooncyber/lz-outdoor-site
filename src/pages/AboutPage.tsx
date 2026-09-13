import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Tent,
  Compass,
  Sparkles,
  Package,
  Heart,
  Truck,
} from 'lucide-react';
import { AppRoute } from '../types';
import { EvidenceGallery } from '../components/EvidenceGallery';

interface AboutPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-stone-50 min-h-screen pb-24 text-stone-900">
      {/* Header Banner - Outdoor Adventure Style */}
      <div className="bg-stone-900 text-white border-b border-stone-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-stone-700/80">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Born for the Wild • Direct Factory Quality</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
              Crafted for Weekend Campers, 4WD Tourers, and Overland Explorers
            </h1>
            <p className="text-base sm:text-lg text-stone-300 mt-4 leading-relaxed font-normal">
              We engineer dependable rooftop tents, 270° free-standing vehicle awnings, and outdoor camping gear. We partner with outdoor retailers, 4WD shops, and brand builders worldwide with direct factory pricing and accessible low-MOQ custom branding.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">
        {/* ─────────────────────────────────────────────────────────
            OUR BRAND & MANUFACTURING MODEL
           ───────────────────────────────────────────────────────── */}
        <section className="bg-white border border-stone-200/90 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <Tent className="w-4 h-4" />
              <span>Our Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Premium Gear Without the Inflated Middleman Markup
            </h2>
            <div className="text-sm text-stone-700 leading-relaxed space-y-4 font-normal">
              <p>
                In the outdoor and 4WD overland industry, campers shouldn&apos;t have to pay triple the price simply because a product has passed through four layers of trading brokers.
              </p>
              <p>
                <strong className="text-stone-950 font-bold">LZ Outdoor operates in direct, dedicated partnership with our specialized manufacturing facility in China.</strong> We combine high-spec materials—like aviation-grade honeycomb aluminum, ripstop poly-cotton canvas, and heavy-duty gas struts—with strict on-the-ground quality checks.
              </p>
              <p>
                Whether you are a solo overlander looking for a dependable shelter or an outdoor shop looking to launch your own brand with custom logos and shell colors, you get direct communication, honest lead times, and transparent pricing.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            WHAT WE PROVIDE OUR PARTNERS
           ───────────────────────────────────────────────────────── */}
        <section>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Complete Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Why Outdoor Shops & Brands Partner With Us
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-normal">
              We make it easy and risk-free for outdoor stores, 4WD outfitters, and brand entrepreneurs to build their gear lineup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Low MOQ from 1–10 Units',
                desc: 'No need to commit to giant container volumes. Test the waters with small-batch evaluations or custom logo runs.',
                icon: Sparkles,
              },
              {
                title: 'Fast 14-Day Sample Turnaround',
                desc: 'Get a physical sample with your choice of color, mattress thickness, and logo patch produced in just ~14 business days.',
                icon: Package,
              },
              {
                title: 'Aviation-Grade Materials',
                desc: 'Heavy-duty honeycomb aluminum lids, 3000mm+ PU waterhead ripstop canvas, stainless steel 304 hinges, and plush memory foam.',
                icon: Tent,
              },
              {
                title: 'Pre-Shipment Quality Check',
                desc: 'Every tent and awning is set up, measured, inspected for seam waterproofing, and drop-test packed before leaving the floor.',
                icon: CheckCircle2,
              },
            ].map((scope, idx) => {
              const Icon = scope.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-stone-900 mb-2">
                      {scope.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {scope.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Quality Guarantee</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            TRUST & HONESTY
           ───────────────────────────────────────────────────────── */}
        <section className="bg-stone-900 text-white rounded-2xl p-8 sm:p-12 border border-stone-800">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Honest Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Real Track Record Over Inflated Marketing
            </h2>
            <div className="text-xs sm:text-sm text-stone-300 space-y-3 leading-relaxed font-normal">
              <p>
                We believe in straightforward facts. We don&apos;t invent fake brand histories or copy generic slogans.
              </p>
              <p>
                Our team and dedicated production facility have served <strong className="text-white">over 10 real overseas outdoor retailers, 4WD workshops, and private-label buyers</strong> across North America, Australia, and Europe. Our commitment is delivering flawless craftsmanship, responsive English communication, and reliable door or port delivery.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            EVIDENCE GALLERY
           ───────────────────────────────────────────────────────── */}
        <section>
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Field & Production Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Real Production & Camp-Testing Archives
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-normal">
              Visual records of aluminum precision cutting, canvas seam sealing, heavy-duty drop-test carton boxing, and overseas container loading.
            </p>
          </div>

          <EvidenceGallery compact={false} />
        </section>

        {/* Action Bar */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="text-xl font-bold text-stone-900 tracking-tight">
              Ready to Order a Sample or Discuss Your Own Brand?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-normal">
              Send us your questions, quantity requirements, or logo file. We respond promptly with pricing and sample schedules.
            </p>
          </div>
          <button
            onClick={() => onNavigate({ path: 'request-a-quote' })}
            className="px-7 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-md shrink-0"
          >
            <span>Request Sample / Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
