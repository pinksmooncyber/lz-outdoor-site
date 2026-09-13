import React from 'react';
import { ArrowUpRight, Compass, Mail, MapPin, MessageSquare, Tent, Shield, Sparkles } from 'lucide-react';
import { AppRoute } from '../types';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand & Outdoor Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600 text-stone-950 flex items-center justify-center font-black tracking-wider text-xl shadow-sm">
                <Tent className="w-5 h-5 text-stone-950 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">LZ OUTDOOR</span>
                <span className="block text-xs text-stone-400 font-medium tracking-wider uppercase">
                  Rooftop Tents & Overland Gear
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Built for weekend campers, 4WD tourers, and cross-country overlanders. We supply adventure-ready rooftop tents, 270° free-standing awnings, and off-grid camping gear with direct factory pricing and effortless low-MOQ custom branding (from 1–10 units) for outdoor shops and brands worldwide.
            </p>

            <div className="pt-2 text-xs text-stone-300 space-y-2 bg-stone-900 p-4 rounded-lg border border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Effortless Custom Branding Program</span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">
                Add your logo on our proven hard-shell tents & 270° awnings with custom shell colors, rubber patches, laser badges, and branded packaging. Fast 14-day sample turnaround with zero headache.
              </p>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Gear Collection
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate({ path: 'products', category: 'rooftop-tents' })}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Rooftop Tents (~30 Models)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ path: 'products', category: 'vehicle-awnings' })}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Vehicle Awnings (270° & 180°)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ path: 'products', category: 'camping-4wd-accessories' })}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Camp & 4WD Accessories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ path: 'product-detail', slug: 'rooftop-tent-230-142cm' })}
                  className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer text-left flex items-center gap-1 font-medium"
                >
                  <span>Featured: Hard-Shell 230×142</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Custom Branding & Quality */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Custom Brand & Wholesale
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate({ path: 'oem-odm' })}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Custom Brand Program (1-10 pcs)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ path: 'about' })}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Story & Quality Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ path: 'blog' })}
                  className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Field Journal & Buying Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ path: 'request-a-quote' })}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer text-left"
                >
                  Request Sample & Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Sample Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Dealer & Sample Desk
            </h4>
            <div className="text-xs space-y-3">
              <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-800 space-y-2.5 text-stone-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-stone-400">Direct Email:</span>
                </div>
                <span className="text-xs text-white font-medium block pl-6">
                  hello@lzoutdoor-gear.com
                </span>

                <div className="flex items-center gap-2 pt-1">
                  <MessageSquare className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-stone-400">WhatsApp / WeChat:</span>
                </div>
                <span className="text-xs text-white font-medium block pl-6">
                  Direct Factory & Sample Desk
                </span>

                <div className="flex items-center gap-2 pt-1">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-stone-400">Shipping:</span>
                </div>
                <span className="text-xs text-white font-medium block pl-6">
                  Worldwide Air Express & Ocean Freight
                </span>
              </div>

              <button
                onClick={() => onNavigate({ path: 'request-a-quote' })}
                className="w-full py-2.5 px-3 bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer shadow-sm"
              >
                Request Sample / Dealer Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <span>© {new Date().getFullYear()} LZ Outdoor Gear. Adventure Rooftop Tents & 4WD Camp Equipment.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Wholesale & Custom Branding</span>
            <span>•</span>
            <span>Low MOQ from 1–10 Units</span>
            <span>•</span>
            <span>Worldwide Door & Port Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
