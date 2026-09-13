import React, { useState } from 'react';
import {
  ArrowRight,
  Search,
  CheckCircle2,
  Tent,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { AppRoute, ProductCategory } from '../types';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { PlaceholderImage } from '../components/PlaceholderImage';

interface ProductsPageProps {
  initialCategory?: ProductCategory;
  onNavigate: (route: AppRoute) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    initialCategory || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.structureType && product.structureType.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      {/* Page Header - Adventure Outdoor Style */}
      <div className="bg-stone-900 text-white border-b border-stone-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 border border-stone-700/80 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Adventure-Ready • Effortless Custom Branding (1–10 pcs MOQ)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Adventure Gear & Overland Collection
            </h1>
            <p className="text-sm sm:text-base text-stone-300 mt-2.5 leading-relaxed font-normal">
              Explore hard-shell rooftop tents, 270° free-standing vehicle awnings, and field-tested camping gear. Order standard units or personalize with your custom logo, shell color, and brand packaging with low minimums.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-stone-800 pb-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-600 text-stone-950 shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              All Gear ({PRODUCTS.length})
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-stone-950 shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="bg-white p-4 rounded-xl border border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tent name, awning type, or feature..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:bg-white focus:border-stone-950 focus:outline-none text-xs text-stone-900 transition-colors"
            />
          </div>

          <div className="text-xs text-stone-500 font-medium">
            Showing <strong className="text-stone-900">{filteredProducts.length}</strong> gear models
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-stone-200/90 rounded-xl overflow-hidden hover:border-stone-400 transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <PlaceholderImage
                  label={product.name}
                  type="product"
                  aspectRatio="aspect-16/10"
                  caption={product.images[0]?.caption}
                />

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="uppercase font-bold tracking-wider text-amber-700">
                      {product.subcategory}
                    </span>
                    <span className="font-semibold text-stone-400">
                      {product.code.replace(' (Preliminary Ref)', '')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 tracking-tight leading-snug group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 font-normal">
                    {product.shortDescription}
                  </p>

                  {/* Highlights Spec Table */}
                  <div className="bg-stone-50 rounded-lg p-3 border border-stone-100 space-y-1.5 text-xs">
                    {product.specifications.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-stone-500">{spec.label}:</span>
                        <span className="font-bold text-stone-900 text-right truncate max-w-[55%]">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-stone-600 pt-1 flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Custom Logo & Colorways: 1–10 pcs MOQ</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-5 bg-stone-50/80 border-t border-stone-100 flex items-center gap-3">
                <button
                  onClick={() => onNavigate({ path: 'product-detail', slug: product.slug })}
                  className="flex-1 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider text-center transition-colors cursor-pointer"
                >
                  Explore Gear
                </button>
                <button
                  onClick={() =>
                    onNavigate({
                      path: 'request-a-quote',
                      preselectedProduct: product.name,
                    })
                  }
                  className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                >
                  Sample & Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white border border-stone-200 rounded-xl p-8">
            <Tent className="w-12 h-12 text-stone-400 mx-auto mb-3 stroke-[1.5]" />
            <h3 className="text-base font-bold text-stone-900">No gear matched your search</h3>
            <p className="text-xs text-stone-500 mt-1">
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2.5 bg-amber-600 text-stone-950 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer font-sans"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 30-Model Custom Catalog Banner */}
        <div className="mt-14 bg-stone-900 text-white border border-stone-800 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Looking for More Shell Models or Custom Brand Run?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Access Our Full 30+ Rooftop Tent Collection & Custom Color Options
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
              We manufacture ~30 proven rooftop tent configurations, including aluminum triangle pop-ups, ultra-slim clamshells, vertical pop-ups, and touring soft shells. Inquire for the complete catalog, custom shell colorways, and wholesale dealer pricing.
            </p>
          </div>

          <button
            onClick={() =>
              onNavigate({
                path: 'request-a-quote',
                preselectedProduct: 'Full 30-Model Rooftop Tent Catalog Request',
              })
            }
            className="shrink-0 px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2 shadow-md"
          >
            <span>Request Full Catalog Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
