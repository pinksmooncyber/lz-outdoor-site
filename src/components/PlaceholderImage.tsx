import React, { useState } from 'react';
import { Camera, Compass, Tent, Trees, Sparkles, CheckCircle2 } from 'lucide-react';

interface PlaceholderImageProps {
  label: string;
  type?: 'product' | 'detail' | 'factory' | 'packaging' | 'shipment';
  aspectRatio?: string; // e.g. 'aspect-video', 'aspect-4/3', 'aspect-square', 'aspect-16/10'
  caption?: string;
  className?: string;
  badgeText?: string;
  imageUrl?: string;
}

const DEFAULT_IMAGES: Record<string, string> = {
  // Overland 4WD with rooftop tent in scenic nature
  product: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
  // High quality camping gear details / canvas & hardware
  detail: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80',
  // Overland campsite with awning & camp chairs
  factory: 'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=1200&q=80',
  // Clean custom brand box / packed gear ready for adventure
  packaging: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
  // Rig on mountain expedition trail
  shipment: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
};

// Specialized image lookups for outdoor adventure context
function resolveImage(type: string, label: string, explicitUrl?: string): string {
  if (explicitUrl) return explicitUrl;

  const l = label.toLowerCase();
  if (l.includes('awning') || l.includes('270') || l.includes('shade') || l.includes('batwing')) {
    // 270 overland awning deployed with vehicle
    return 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80';
  }
  if (l.includes('triangle') || l.includes('slim') || l.includes('clamshell')) {
    // Sleek hard-shell pop-up on 4x4 rig in mountain landscape
    return 'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=1200&q=80';
  }
  if (l.includes('soft shell') || l.includes('annex') || l.includes('family')) {
    // Spacious family fold-out tent in scenic campground
    return 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80';
  }
  if (l.includes('water tank') || l.includes('rack') || l.includes('solar') || l.includes('accessory') || l.includes('bed rack')) {
    // Overland 4WD vehicle gear on trail
    return 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80';
  }
  if (l.includes('interior') || l.includes('mattress') || l.includes('mesh') || l.includes('led') || l.includes('light')) {
    // Cozy warm tent interior with lighting
    return 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80';
  }
  if (l.includes('branding') || l.includes('badge') || l.includes('custom') || l.includes('logo') || l.includes('patch')) {
    // High-end outdoor craftsmanship & gear detail
    return 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80';
  }
  if (l.includes('packaging') || l.includes('carton') || l.includes('delivery') || l.includes('box')) {
    // Adventure gear ready to go
    return 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80';
  }
  if (l.includes('expedition') || l.includes('overland') || l.includes('trail') || l.includes('australia') || l.includes('wild')) {
    // Dramatic mountain/desert trail overlanding
    return 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80';
  }

  return DEFAULT_IMAGES[type] || DEFAULT_IMAGES.product;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  label,
  type = 'product',
  aspectRatio = 'aspect-4/3',
  caption,
  className = '',
  badgeText,
  imageUrl,
}) => {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = resolveImage(type, label, imageUrl);

  const getTypeBadge = () => {
    switch (type) {
      case 'detail':
        return 'Craftsmanship & Specs';
      case 'factory':
        return 'Adventure Tested';
      case 'packaging':
        return 'Custom Brand Ready';
      case 'shipment':
        return 'Direct Dispatch';
      case 'product':
      default:
        return 'Field Ready';
    }
  };

  return (
    <div
      className={`relative w-full ${aspectRatio} bg-stone-900 rounded-lg overflow-hidden flex flex-col justify-between group select-none shadow-sm border border-stone-200/80 ${className}`}
    >
      {/* Photo with smooth zoom on hover */}
      {!hasError ? (
        <img
          src={resolvedSrc}
          alt={label}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.93]"
        />
      ) : (
        /* Warm Overland Canvas Fallback */
        <div className="absolute inset-0 bg-stone-900 flex flex-col items-center justify-center p-6 text-center">
          <Tent className="w-10 h-10 text-amber-500 mb-2 stroke-[1.5]" />
          <span className="text-white font-bold text-sm tracking-tight">{label}</span>
          <span className="text-stone-400 text-xs mt-1">Adventure Gear Collection</span>
        </div>
      )}

      {/* Warm natural gradient scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-stone-950/40 pointer-events-none" />

      {/* Top Outdoor Badge */}
      <div className="relative z-10 p-3.5 flex items-center justify-between gap-2">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-200 bg-stone-950/70 px-2.5 py-1 rounded-md backdrop-blur-xs border border-white/10 flex items-center gap-1.5">
          <Compass className="w-3 h-3 text-amber-400" />
          <span>{getTypeBadge()}</span>
        </span>

        {badgeText ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
            {badgeText}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-900/80 text-stone-300 text-[11px] backdrop-blur-xs border border-white/10">
            <CheckCircle2 className="w-3 h-3 text-amber-400" />
            <span>Outdoor Grade</span>
          </span>
        )}
      </div>

      {/* Bottom Information Overlay */}
      <div className="relative z-10 p-4 pt-6 mt-auto">
        <p className="text-white text-base font-bold tracking-tight drop-shadow-sm line-clamp-1">
          {label}
        </p>
        {caption && (
          <p className="text-xs text-stone-300 mt-1 line-clamp-2 leading-relaxed drop-shadow-xs font-normal">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
