import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Compass, Mail, Tent, Shield, Sparkles } from 'lucide-react';
import { AppRoute } from '../types';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const handleNavClick = (route: AppRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
  };

  const isRouteActive = (routePath: string) => {
    return currentRoute.path === routePath;
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-md">
      {/* Top Outdoor Announcement Bar */}
      <div className="bg-stone-950 text-stone-300 text-xs py-2 px-4 sm:px-8 border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-pulse" />
            <span className="font-semibold text-stone-200 tracking-wide uppercase text-[11px]">
              Ready-to-Camp & Effortless Custom Branding
            </span>
            <span className="hidden md:inline text-stone-500">•</span>
            <span className="hidden md:inline text-stone-400">
              Low 1–10 pcs MOQ • 14-Day Sample Turnaround • Direct Factory Pricing
            </span>
          </div>
          <div className="flex items-center gap-5 text-stone-400 text-xs">
            <button
              onClick={() => handleNavClick({ path: 'oem-odm' })}
              className="hidden sm:inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Put Your Logo On Our Gear</span>
            </button>
            <button
              onClick={() => handleNavClick({ path: 'contact' })}
              className="text-stone-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Dealer & Sample Desk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Western Outdoor Adventure Aesthetic */}
        <button
          onClick={() => handleNavClick({ path: 'home' })}
          className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-11 h-11 rounded-lg bg-amber-600 text-stone-950 flex items-center justify-center font-black tracking-wider text-xl shadow-sm group-hover:bg-amber-500 transition-all border border-amber-400/30">
            <Tent className="w-6 h-6 text-stone-950 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl text-white tracking-tight leading-none font-sans">
                LZ OUTDOOR
              </span>
            </div>
            <p className="text-[11px] text-stone-400 font-medium tracking-wider mt-1 uppercase">
              Rooftop Tents & Overland Shade
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductDropdownOpen(true)}
            onMouseLeave={() => setProductDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick({ path: 'products' })}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                currentRoute.path === 'products' || currentRoute.path === 'product-detail'
                  ? 'text-amber-400 bg-stone-800'
                  : 'text-stone-200 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <span>Gear Collection</span>
              <ChevronDown className="w-4 h-4 text-stone-400" />
            </button>

            {productDropdownOpen && (
              <div className="absolute top-full left-0 w-96 bg-stone-900 border border-stone-800 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <button
                  onClick={() => handleNavClick({ path: 'products' })}
                  className="w-full text-left p-3 rounded-lg hover:bg-stone-800 transition-colors block group cursor-pointer border-b border-stone-800/80 mb-2"
                >
                  <div className="font-bold text-sm text-white flex items-center justify-between">
                    <span>View All Adventure Gear</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Explore hard-shell rooftop tents, 270° awnings & overland camp essentials
                  </p>
                </button>

                <div className="space-y-1">
                  <button
                    onClick={() => handleNavClick({ path: 'products', category: 'rooftop-tents' })}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-stone-800 transition-colors block cursor-pointer"
                  >
                    <div className="font-semibold text-xs text-stone-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Rooftop Tents</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-0.5 pl-3.5">
                      Heavy-Duty Aluminum Hard Shell, Slim Clamshell & Touring Soft Shell
                    </p>
                  </button>

                  <button
                    onClick={() => handleNavClick({ path: 'products', category: 'vehicle-awnings' })}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-stone-800 transition-colors block cursor-pointer"
                  >
                    <div className="font-semibold text-xs text-stone-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Vehicle Awnings</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-0.5 pl-3.5">
                      270° Free-Standing Batwing & 180° Heavy-Duty Aluminum Arm Awnings
                    </p>
                  </button>

                  <button
                    onClick={() => handleNavClick({ path: 'products', category: 'camping-4wd-accessories' })}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-stone-800 transition-colors block cursor-pointer"
                  >
                    <div className="font-semibold text-xs text-stone-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Camp & 4WD Accessories</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-0.5 pl-3.5">
                      Aluminum Water Tanks (20–35L), Pickup Bed Racks, 210W Solar
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick({ path: 'oem-odm' })}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              isRouteActive('oem-odm')
                ? 'text-amber-400 bg-stone-800'
                : 'text-stone-200 hover:text-white hover:bg-stone-800/60'
            }`}
          >
            <span>Custom Branding</span>
            <span className="text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
              Low MOQ
            </span>
          </button>

          <button
            onClick={() => handleNavClick({ path: 'about' })}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
              isRouteActive('about')
                ? 'text-amber-400 bg-stone-800'
                : 'text-stone-200 hover:text-white hover:bg-stone-800/60'
            }`}
          >
            Our Story & Quality
          </button>

          <button
            onClick={() => handleNavClick({ path: 'blog' })}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
              isRouteActive('blog') || isRouteActive('blog-detail')
                ? 'text-amber-400 bg-stone-800'
                : 'text-stone-200 hover:text-white hover:bg-stone-800/60'
            }`}
          >
            Field Journal
          </button>

          <button
            onClick={() => handleNavClick({ path: 'contact' })}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
              isRouteActive('contact')
                ? 'text-amber-400 bg-stone-800'
                : 'text-stone-200 hover:text-white hover:bg-stone-800/60'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Header Action: Custom Branding & RFQ CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick({ path: 'request-a-quote' })}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer font-sans"
          >
            <span>Get Sample & Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick({ path: 'request-a-quote' })}
            className="sm:hidden px-3.5 py-2 bg-amber-600 text-stone-950 font-bold rounded-md text-xs uppercase cursor-pointer"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-900 px-4 pt-4 pb-6 space-y-2 animate-in slide-in-from-top duration-150 text-stone-200">
          <button
            onClick={() => handleNavClick({ path: 'home' })}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-md hover:bg-stone-800 text-stone-100"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick({ path: 'products' })}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-md hover:bg-stone-800 text-stone-100"
          >
            All Gear Collection
          </button>
          <div className="pl-4 space-y-1 pb-1">
            <button
              onClick={() => handleNavClick({ path: 'products', category: 'rooftop-tents' })}
              className="w-full text-left px-3 py-1.5 text-xs text-stone-400 rounded-md hover:bg-stone-800"
            >
              • Rooftop Tents
            </button>
            <button
              onClick={() => handleNavClick({ path: 'products', category: 'vehicle-awnings' })}
              className="w-full text-left px-3 py-1.5 text-xs text-stone-400 rounded-md hover:bg-stone-800"
            >
              • 270° & 180° Vehicle Awnings
            </button>
            <button
              onClick={() => handleNavClick({ path: 'products', category: 'camping-4wd-accessories' })}
              className="w-full text-left px-3 py-1.5 text-xs text-stone-400 rounded-md hover:bg-stone-800"
            >
              • Camp & 4WD Accessories
            </button>
          </div>
          <button
            onClick={() => handleNavClick({ path: 'oem-odm' })}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-md hover:bg-stone-800 text-amber-400 flex items-center justify-between"
          >
            <span>Custom Branding (Low MOQ)</span>
            <span className="text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">1–10 pcs</span>
          </button>
          <button
            onClick={() => handleNavClick({ path: 'about' })}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-md hover:bg-stone-800 text-stone-100"
          >
            Our Story & Quality
          </button>
          <button
            onClick={() => handleNavClick({ path: 'blog' })}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-md hover:bg-stone-800 text-stone-100"
          >
            Field Journal & Guides
          </button>
          <button
            onClick={() => handleNavClick({ path: 'contact' })}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-md hover:bg-stone-800 text-stone-100"
          >
            Contact
          </button>
          <div className="pt-3">
            <button
              onClick={() => handleNavClick({ path: 'request-a-quote' })}
              className="w-full py-3 bg-amber-600 text-stone-950 rounded-lg text-sm font-bold uppercase tracking-wider text-center"
            >
              Get Sample & Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
