import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Layers,
  Wrench,
  Truck,
  Compass,
  FileCheck2,
  Cpu,
  Package,
  Factory,
  ChevronRight,
  Clock,
  Zap,
} from 'lucide-react';
import { AppRoute } from '../types';
import { PRODUCTS } from '../data/products';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { EvidenceGallery } from '../components/EvidenceGallery';
import { RfqForm } from '../components/RfqForm';
import { SpecTable } from '../components/SpecTable';

interface HomePageProps {
  onNavigate: (route: AppRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const confirmedRtt = PRODUCTS.find((p) => p.id === 'rtt-230-142') || PRODUCTS[0];
  const confirmedAwning = PRODUCTS.find((p) => p.id === 'awning-270') || PRODUCTS[1];

  const faqs = [
    {
      q: 'What equipment product lines do you supply?',
      a: 'We specialize in three core categories: Rooftop Tents (approx. 30 models across aluminum hard-shell, slim lightweight, and soft-shell configurations), Vehicle Awnings (focusing on 270° free-standing and 180° full-frame aluminum models in 2.3m and 2.5m arm lengths), and complementary Expedition & 4WD Accessories including aluminum water tanks (20–35L), expandable pickup bed racks, and 210W vehicle solar panels.',
    },
    {
      q: 'Do you support private label and custom brand manufacturing?',
      a: 'Yes. Private label manufacturing is our primary service. We coordinate custom brand badging, laser-etched metal logo plates, bespoke canvas colorways, custom powder coat finishes, client instruction manuals, and retail-branded export cartons directly with our primary manufacturing base.',
    },
    {
      q: 'What materials and components can be customized?',
      a: 'Customization spans structural and comfort specifications: main tent fabric (320D poly-cotton ripstop, 450D Oxford, 600D heavy canvas), hydrostatic ratings up to 5000mm PU, thermal insulation sub-liners, anti-condensation 3D mesh pads, 45-density memory foam mattresses, internal USB LED strips, and solar mounting channels.',
    },
    {
      q: 'Can you manufacture custom models from CAD drawings?',
      a: 'Yes. We support custom product development from preliminary CAD models and technical drawings to functional prototypes. For projects where the production partner confirms technical schedules, custom prototype manufacturing can typically be completed in approximately 30 days.',
    },
    {
      q: 'What are the minimum order quantities (MOQ)?',
      a: 'Low MOQ options are available depending on the model and customization requirements. For initial product evaluation or specific custom projects, orders can start from approximately 1–10 units depending on the model and production scheduling.',
    },
    {
      q: 'Can international buyers order evaluation samples?',
      a: 'Yes. Sample production and evaluation are standard steps in our sourcing workflow. All samples undergo dimensional tolerance checks, fabric seam sealing inspection, and mechanical joint testing at the factory floor in China prior to international dispatch.',
    },
    {
      q: 'How do you coordinate export packaging and ocean freight?',
      a: 'Our sourcing principals personally supervise export packaging, drop-test honeycomb carton compliance, export documentation, and containerization. We coordinate full container loads (FCL 20ft/40ft HC) or mixed container loads (LCL) shipped to major global ports.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION — Modern Western B2B Industrial
         ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800">
        {/* Subtle architectural schematic grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>China B2B Sourcing & OEM/ODM Partner</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Rooftop Tents & Overlanding Equipment for Global Distributors
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Source ready-to-sell equipment or engineer your own private-label outdoor brand with an integrated China manufacturing partner. Direct factory pricing, low initial MOQs, and comprehensive export coordination.
              </p>

              {/* Direct Ground Coordination Highlight Card */}
              <div className="bg-slate-900/90 border border-slate-800 rounded p-4 text-xs text-slate-300 max-w-xl">
                <span className="font-bold text-white block mb-1 uppercase tracking-wider text-[11px]">
                  Direct On-Site China Coordination:
                </span>
                Direct communication with manufacturing principals • OEM/ODM tooling oversight • Quotation & bill of materials • Sample audits • Containerized ocean freight coordination.
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate({ path: 'request-a-quote' })}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate({ path: 'products' })}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded border border-slate-700 transition-all cursor-pointer"
                >
                  <span>Explore Equipment Catalog</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Technical Specifications Highlights */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  ~30 Rooftop Tent Sourcing Models
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Low Initial MOQs (~1–10 Units)
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  ~30-Day Prototype Lead Time
                </span>
              </div>
            </div>

            {/* Right Hero Visual Card: Featured Production Hard-Shell Tent */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded overflow-hidden shadow-2xl">
                <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                    Featured Hard-Shell Series
                  </span>
                  <span className="text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded font-bold text-[10px] uppercase tracking-wider">
                    Model: RT-230
                  </span>
                </div>

                <div className="relative aspect-16/10 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80"
                    alt="Hard-Shell Rooftop Tent on 4WD Vehicle"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                      Flagship Model
                    </span>
                    <h3 className="text-base font-bold">Hard-Shell Rooftop Tent — 230 × 142 cm</h3>
                  </div>
                </div>

                {/* Technical Engineering Snapshot Table */}
                <div className="p-5 divide-y divide-slate-800 text-xs">
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Shell Construction</span>
                    <span className="font-bold text-white">Rigid Aluminum Hard Shell</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Sleeping Dimensions</span>
                    <span className="font-bold text-white">230 × 142 cm</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Main Tent Fabric</span>
                    <span className="font-bold text-white">320D Poly-Cotton Ripstop (3000mm)</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Internal Mattress</span>
                    <span className="font-bold text-white">45-Density Memory Foam (~5cm)</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Net Weight & Struts</span>
                    <span className="font-bold text-white">Approx. 75 kg • Dual Gas Struts</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() =>
                      onNavigate({ path: 'product-detail', slug: 'rooftop-tent-230-142cm' })
                    }
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Full Datasheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate({ path: 'request-a-quote' })}
                    className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-950 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. THREE CORE EQUIPMENT SECTORS (Industrial Cards)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Manufacturing & Sourcing Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Core Equipment Sectors
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Engineered specifically for overseas overlanding distributors, commercial wholesalers, and private-label brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sector 1: Rooftop Tents */}
          <div className="bg-white border border-slate-200 rounded overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-all hover:shadow-lg group">
            <div>
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80"
                  alt="Rooftop Tents"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-xs">
                  Category 01
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2">
                  Rooftop Tents Series
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Approx. 30 designs available across rigid aluminum hard-shell, ultra-slim lightweight, and fold-out soft-shell models. 320D poly-cotton, 3000mm waterhead, and high-density memory foam.
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Available Designs:</span>
                    <span className="font-semibold">~30 Verified Models</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Evaluation MOQ:</span>
                    <span className="font-semibold">~1–10 Units</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Customization:</span>
                    <span className="font-semibold">Shell Color, Canvas, Badging</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() =>
                  onNavigate({ path: 'products', category: 'rooftop-tents' })
                }
                className="w-full py-2.5 px-4 bg-slate-950 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Rooftop Tents</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sector 2: Vehicle Awnings */}
          <div className="bg-white border border-slate-200 rounded overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-all hover:shadow-lg group">
            <div>
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"
                  alt="Vehicle Awnings"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-xs">
                  Category 02
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2">
                  Vehicle Awnings Series
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Full-frame 270° free-standing batwing awnings and 180° straight vehicle awnings. Heavy-duty die-cast aluminum knuckles, integrated fold-down twist-lock poles, and heavy ripstop fabric.
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Standard Sizes:</span>
                    <span className="font-semibold">2.3 m and 2.5 m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Hinge Mechanism:</span>
                    <span className="font-semibold">Die-Cast CNC Knuckle</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Brackets:</span>
                    <span className="font-semibold">Universal Heavy-Duty Steel</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() =>
                  onNavigate({ path: 'products', category: 'vehicle-awnings' })
                }
                className="w-full py-2.5 px-4 bg-slate-950 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Vehicle Awnings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sector 3: Camping & 4WD Accessories */}
          <div className="bg-white border border-slate-200 rounded overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-all hover:shadow-lg group">
            <div>
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80"
                  alt="Camping & 4WD Accessories"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-xs">
                  Category 03
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-2">
                  Camping & 4WD Accessories
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Aluminum vehicle water tanks (20–35L), modular pickup bed racks, and 210W flexible solar systems engineered to nest cleanly with tent shipments for maximum container efficiency.
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Water Storage:</span>
                    <span className="font-semibold">20–35L Food-Grade Aluminum</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Solar Power:</span>
                    <span className="font-semibold">210W High-Efficiency Monocrystalline</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Logistics Benefit:</span>
                    <span className="font-semibold">Nests into FCL Container Dead Space</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() =>
                  onNavigate({ path: 'products', category: 'camping-4wd-accessories' })
                }
                className="w-full py-2.5 px-4 bg-slate-950 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View 4WD Accessories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. OEM / ODM CONTRACT MANUFACTURING WORKFLOW
         ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Contract Manufacturing Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                OEM / ODM Engineering Workflow
              </h2>
            </div>
            <button
              onClick={() => onNavigate({ path: 'oem-odm' })}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Explore Customization Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-950 border border-slate-800 rounded">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-sm mb-4">
                01
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                CAD Review & Specification Analysis
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review of 2D/3D technical drawings (STEP, DWG), aluminum extrusion profiles, gas strut force requirements, and fabric GSM specifications.
              </p>
            </div>

            <div className="p-6 bg-slate-950 border border-slate-800 rounded">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-sm mb-4">
                02
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                Tooling & Custom Extrusion Jigs
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Calibration of CNC aluminum dies, corner mold tooling, laser cutting templates, and robotic welding fixtures for exact repeatable tolerances.
              </p>
            </div>

            <div className="p-6 bg-slate-950 border border-slate-800 rounded">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-sm mb-4">
                03
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                30-Day Functional Prototyping
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rapid sample manufacturing target of ~30 days. Complete physical unit constructed for fitment validation, latch testing, and buyer inspection.
              </p>
            </div>

            <div className="p-6 bg-slate-950 border border-slate-800 rounded">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-sm mb-4">
                04
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                Quality Inspection & Tolerance Audits
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Factory floor verification: seam heat-tape sealing, water spray penetration checks, hinge load tests, and mattress density conformity.
              </p>
            </div>

            <div className="p-6 bg-slate-950 border border-slate-800 rounded">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-sm mb-4">
                05
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                Flexible Batch Manufacturing
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Low MOQ options available (~1–10 units) for initial test batches, scaling up to full container volume production runs with tight lead times.
              </p>
            </div>

            <div className="p-6 bg-slate-950 border border-slate-800 rounded">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-sm mb-4">
                06
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                Drop-Test Crating & Container Logistics
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Heavy-duty honeycomb export packaging, palletizing inspection, and on-site container loading supervision for secure international ocean transit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. TECHNICAL SPECIFICATION SHOWCASE (SpecTable)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Engineering Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Featured Specification: Hard-Shell Rooftop Tent (230 × 142 cm)
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                onNavigate({ path: 'product-detail', slug: 'rooftop-tent-230-142cm' })
              }
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              View Full Product Page
            </button>
          </div>
        </div>

        <SpecTable
          specifications={confirmedRtt.specifications}
          title="Verified Production Datasheet — Model RT-230"
          subtitle="Engineering data drawn directly from manufacturing partner production blueprints."
        />
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. MANUFACTURING VERIFICATION & QUALITY AUDITS
         ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              On-The-Ground China Inspection
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Manufacturing Verification & Quality Audits
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Direct verification archives from our primary production base in China, covering metal fabrication, assembly jigs, export packaging, and container loading.
            </p>
          </div>

          <EvidenceGallery compact={false} />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. DIRECT GROUND COORDINATION VALUE (Why Choose Us)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                Direct Principal Oversight
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Eliminate China Sourcing Friction with Direct Factory Access
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Overseas buyers often struggle with delayed communication, inconsistent sample-to-production quality, and misunderstood customization requirements. Our sourcing principal personally coordinates on the ground in China to safeguard your brand reputation and capital.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Technical Communication Without Intermediaries
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Direct interaction with factory engineers regarding tolerances, gas strut damping, and seam sealing. No generic trading company misinterpretations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      On-Site Pre-Shipment Inspection
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Every batch is physically audited for latch alignment, mattress dimensions, and export carton strength before goods leave the facility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Container Loading Supervision
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Mixed container optimization nesting rooftop tents with vehicle awnings and water tanks to maximize ocean freight volumetric efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate({ path: 'about' })}
                  className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Read Sourcing & Manufacturing Profile
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-4/3 rounded overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
                      alt="Metal Fabrication"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-4/3 rounded overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                      alt="Engineering Inspection"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-4/3 rounded overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                      alt="Palletizing & Packaging"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-4/3 rounded overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                      alt="Container Logistics"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. B2B PROCUREMENT FAQ
         ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Questions for B2B Buyers
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 py-2 group cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 pb-3">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. CONVERSION GOAL: REQUEST A QUOTE (RFQ SECTION)
         ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Start Sourcing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Request Your B2B Quotation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Send your project specifications, volume requirements, or private label inquiries directly to our engineering coordination desk in China.
            </p>
          </div>

          <RfqForm initialProduct="Rooftop Tent — 230 × 142 cm" />
        </div>
      </section>
    </div>
  );
};
