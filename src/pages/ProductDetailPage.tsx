import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Package,
  ChevronRight,
  Sparkles,
  Tent,
  Compass,
  Layers,
  Truck,
} from 'lucide-react';
import { AppRoute } from '../types';
import { PRODUCTS } from '../data/products';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { SpecTable } from '../components/SpecTable';
import { RfqForm } from '../components/RfqForm';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (route: AppRoute) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="bg-stone-50 min-h-screen pb-24 text-stone-900">
      {/* Outdoor Breadcrumb Bar */}
      <div className="bg-white border-b border-stone-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between text-xs text-stone-500 font-medium">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => onNavigate({ path: 'home' })}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button
              onClick={() => onNavigate({ path: 'products' })}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Gear Collection
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button
              onClick={() => onNavigate({ path: 'products', category: product.category })}
              className="hover:text-stone-950 transition-colors cursor-pointer capitalize"
            >
              {product.category.replace('-', ' ')}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-bold truncate max-w-xs">{product.name}</span>
          </div>

          <button
            onClick={() => onNavigate({ path: 'products' })}
            className="hidden sm:inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-950 font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Gear Collection</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        {/* ─────────────────────────────────────────────────────────
            1. PRODUCT OVERVIEW & HIGH-RES MEDIA SHOWCASE
           ───────────────────────────────────────────────────────── */}
        <div className="bg-white border border-stone-200/90 rounded-xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Gallery Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative">
                <PlaceholderImage
                  label={product.images[selectedImageIndex]?.placeholderLabel || product.name}
                  type={product.images[selectedImageIndex]?.type || 'product'}
                  aspectRatio="aspect-16/10"
                  caption={product.images[selectedImageIndex]?.caption}
                />
              </div>

              {/* Thumbnail Bar */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3 pt-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border transition-all text-left cursor-pointer ${
                        selectedImageIndex === idx
                          ? 'border-amber-600 ring-2 ring-amber-600/30 shadow-xs'
                          : 'border-stone-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <PlaceholderImage
                        label={`Photo ${idx + 1}`}
                        type={img.type}
                        aspectRatio="aspect-video"
                        className="p-1"
                        badgeText={`0${idx + 1}`}
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
                <span>Model Code: <strong className="text-stone-900">{product.code.replace(' (Preliminary Ref)', '')}</strong></span>
                <span>Category: <strong className="text-stone-900">{product.subcategory}</strong></span>
              </div>
            </div>

            {/* Product Meta & Action Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-stone-100 text-stone-700 uppercase tracking-wider">
                    {product.subcategory}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 bg-amber-400 px-3 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-950" />
                    Field Tested Quality
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-tight font-sans">
                  {product.name}
                </h1>

                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {product.shortDescription}
                </p>

                <div className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] block">
                    Product Overview:
                  </span>
                  <p>{product.fullDescription}</p>
                </div>

                {/* Custom Branding & Low MOQ Box */}
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs space-y-2">
                  <div className="font-bold text-amber-900 flex items-center justify-between uppercase tracking-wider text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>Low MOQ & Custom Logo Available</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-600 text-white text-[10px] font-bold">1–10 pcs</span>
                  </div>
                  <p className="text-stone-700">
                    {product.moqInfo}
                  </p>
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <button
                  onClick={() =>
                    onNavigate({
                      path: 'request-a-quote',
                      preselectedProduct: product.name,
                    })
                  }
                  className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Sample & Wholesale Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-stone-500 font-medium">
                  Direct factory pricing • Fast 14-day sample production • Worldwide door or port delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            2. STRUCTURED SPECIFICATION TABLE
           ───────────────────────────────────────────────────────── */}
        <section>
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Materials & Dimensions
            </span>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Detailed Product Specifications
            </h2>
          </div>
          <SpecTable specifications={product.specifications} />
        </section>

        {/* ─────────────────────────────────────────────────────────
            3. PRODUCT FEATURES
           ───────────────────────────────────────────────────────── */}
        <section>
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Camp Ready Design
            </span>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Key Features & Camp Comfort
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-lg border border-stone-200 flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-6 h-6 rounded bg-amber-600 text-stone-950 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-sm font-semibold text-stone-900 leading-snug">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            4. EFFORTLESS CUSTOM BRANDING (LOW MOQ)
           ───────────────────────────────────────────────────────── */}
        <section className="bg-stone-900 text-white rounded-xl p-8 sm:p-10 border border-stone-800">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Effortless Custom Branding
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Put Your Brand On This Model
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2">
              Want to launch your own branded rooftop tent or awning line? Simply send us your logo vector file. We handle sample mocking, shell color matching, badge stitching, and custom carton printing with fast turnaround and low minimum order quantities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.customizationOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-stone-800/80 border border-stone-700/70 text-xs text-stone-200 flex items-start gap-3"
              >
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-medium">{opt}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <span className="text-stone-400 font-medium">
              Sample production ready in ~14 days. Full production orders in 25–35 days.
            </span>
            <button
              onClick={() => onNavigate({ path: 'oem-odm' })}
              className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5"
            >
              <span>Learn More About Custom Branding</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            5. VEHICLE FITMENT & USAGE
           ───────────────────────────────────────────────────────── */}
        <section>
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Compatibility
            </span>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Vehicle Fitment & Recommended Setups
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg border border-stone-200 text-xs font-bold text-stone-900 shadow-xs flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            6. PHOTO GALLERY
           ───────────────────────────────────────────────────────── */}
        <section className="bg-white border border-stone-200/90 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Field & Detail Views
            </span>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Product Photos & Craftsmanship Highlights
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              High-resolution photography showing structural hardware, tent canvas, cozy interior, and camp setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.images.map((img) => (
              <div key={img.id} className="border border-stone-200 rounded-lg overflow-hidden">
                <PlaceholderImage
                  label={img.placeholderLabel}
                  type={img.type}
                  aspectRatio="aspect-16/10"
                  caption={img.caption}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            7. INQUIRY / RFQ EMBED
           ───────────────────────────────────────────────────────── */}
        <section className="pt-4">
          <RfqForm initialProduct={product.name} />
        </section>
      </div>
    </div>
  );
};
