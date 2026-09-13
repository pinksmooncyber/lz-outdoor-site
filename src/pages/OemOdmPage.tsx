import React from 'react';
import {
  Wrench,
  Layers,
  Cpu,
  Clock,
  Package,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sun,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { AppRoute } from '../types';
import { RfqForm } from '../components/RfqForm';

interface OemOdmPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const OemOdmPage: React.FC<OemOdmPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* Header Banner */}
      <div className="bg-slate-950 text-white border-b border-slate-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Contract Manufacturing & Private-Label Development</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              OEM / ODM Engineering & Custom Manufacturing
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              We empower global outdoor equipment distributors and private-label brands to engineer customized rooftop tents, vehicle awnings, and overlanding accessories. Partner directly with our integrated China manufacturing base for CAD modeling, material customization, precision tooling, and volume production.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <div className="bg-slate-900 px-4 py-2.5 rounded border border-slate-800 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Prototype Lead Time: ~30 Days (Scheduled Projects)</span>
              </div>
              <div className="bg-slate-900 px-4 py-2.5 rounded border border-slate-800 flex items-center gap-2.5">
                <Package className="w-4 h-4 text-amber-400" />
                <span>Low MOQ Options: ~1–10 Units for Initial Evaluation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">
        {/* ─────────────────────────────────────────────────────────
            THE FOUR CUSTOMIZATION DIMENSIONS
           ───────────────────────────────────────────────────────── */}
        <section>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Engineering Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Four Core Dimensions of Product Customization
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every parameter is backed by confirmed tooling, manufacturing relationships, and real component supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dimension 1: Design & Structure */}
            <div className="bg-white border border-slate-200 rounded p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded bg-slate-950 text-amber-400 flex items-center justify-center mb-5">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">1. Structural Design & Shell Kinematics</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Customize shell geometry, gas strut damping, and vehicle mounting channels to match specific brand aesthetics and vehicle fitments.
                </p>
                <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-5 rounded border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Aesthetics & Finish:</strong> Custom shell profiles, automotive-grade powder coating, anodized matte black, desert tan, or tactical gray.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Kinematics:</strong> Aluminum triangle-opening clamshells, slim lightweight frames, horizontal pop-ups, or fold-out soft-shells.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Mounting Hardware:</strong> Heavy-duty stainless steel brackets, ladder lock clips, and universal crossbar track systems.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dimension 2: Materials & Coatings */}
            <div className="bg-white border border-slate-200 rounded p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded bg-slate-950 text-amber-400 flex items-center justify-center mb-5">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">2. Performance Materials & Coatings</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Select performance textiles, hydrostatic waterhead ratings, thermal sub-liners, and comfort cores engineered for harsh environments.
                </p>
                <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-5 rounded border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Canvas Textiles:</strong> Heavy-duty 320D poly-cotton ripstop (3000mm, UV50+), 450D Oxford, or 600D heavy expedition canvas.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Rainfly & Outer Cover:</strong> 450D Oxford with PVC coating and PU 5000mm hydrostatic resistance with heat-taped seams.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Mattress Core:</strong> High-density memory foam (density 45, ~5cm thickness), condensation mesh mat, and washable zip cover.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dimension 3: Electrical & Climate Features */}
            <div className="bg-white border border-slate-200 rounded p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded bg-slate-950 text-amber-400 flex items-center justify-center mb-5">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">3. Electrical & Auxiliary Systems</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Incorporate integrated power, multi-mode LED lighting, and climate ports for modern overland expedition demands.
                </p>
                <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-5 rounded border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Internal Illumination:</strong> Three-color dimmable LED lighting strip (Warm White, Amber bug-repellent, Cool Daylight).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Power Management:</strong> Integrated internal USB-A/Type-C charging hub with 12V cigarette/Anderson plug passthrough.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Climate & Solar:</strong> Dedicated external air-conditioner duct sleeve, diesel heater intake, and rooftop solar mounting channels.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dimension 4: Private Label & Packaging */}
            <div className="bg-white border border-slate-200 rounded p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded bg-slate-950 text-amber-400 flex items-center justify-center mb-5">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">4. Brand Identity & Export Packaging</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Complete white-label and private-label packaging to ensure immediate retail readiness for international distributors.
                </p>
                <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-5 rounded border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Custom Brand Badging:</strong> CNC laser-cut aluminum logo plates, woven fabric labels, and rubberized 3D badges.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Technical Documentation:</strong> Custom branded user manuals, warranty booklets, and bilingual installation sheets.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Export Crating:</strong> Heavy-duty double-wall corrugated cartons with honeycomb edge protectors and palletizing straps.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            30-DAY PROTOTYPE DEVELOPMENT TIMELINE
           ───────────────────────────────────────────────────────── */}
        <section className="bg-slate-950 text-white rounded p-8 sm:p-12 border border-slate-800">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Rapid Engineering Program
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              30-Day Prototype Development Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              For scheduled custom development projects, our partner manufacturing base follows a disciplined 30-day timeline from 3D CAD sign-off to functional prototype validation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Days 01 – 07
              </span>
              <h4 className="font-bold text-base text-white mb-2">CAD & BOM Finalization</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review 3D STEP/DWG drawings, calculate aluminum extrusion weights, establish component bill of materials (BOM), and approve sample production costs.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Days 08 – 16
              </span>
              <h4 className="font-bold text-base text-white mb-2">Tooling & Component Sourcing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fabricate custom extrusion profiles, laser-cut shell plates, calibrate CNC bending dies, and procure dyed poly-cotton canvas and memory foam.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Days 17 – 24
              </span>
              <h4 className="font-bold text-base text-white mb-2">Assembly & Pattern Stitching</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                TIG weld aluminum frame members, install hydraulic gas struts, precision-stitch main tent body, apply heat-taped seam sealing, and wire LED lighting.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Days 25 – 30
              </span>
              <h4 className="font-bold text-base text-white mb-2">Inspection & International Dispatch</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Conduct dimensional tolerance check, water spray penetration test, and latch endurance test. Prepare export crating and initiate international air/ocean freight.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            LOW MOQ INITIATIVE
           ───────────────────────────────────────────────────────── */}
        <section className="bg-white border border-slate-200 rounded p-8 sm:p-10 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
              Buyer Growth Policy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Low Minimum Order Quantities (~1–10 Units)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We understand that developing a new private-label equipment line requires rigorous field testing and market validation. Unlike large trading corporations that demand full container commitments upfront, we offer low initial MOQ tiers of approximately 1–10 units depending on the model and production scheduling.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-800">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Sample Evaluation Available
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Pre-Series Production Batches
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Seamless Scaling to 40ft Containers
              </span>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            CUSTOMIZATION INQUIRY RFQ
           ───────────────────────────────────────────────────────── */}
        <section className="pt-4">
          <RfqForm initialProduct="OEM / ODM Custom Product Development" />
        </section>
      </div>
    </div>
  );
};
