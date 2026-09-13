import React from 'react';
import {
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Compass,
  Sparkles,
} from 'lucide-react';
import { AppRoute } from '../types';
import { RfqForm } from '../components/RfqForm';

interface ContactPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="bg-stone-50 min-h-screen pb-24 text-stone-900">
      {/* Header Banner - Adventure Outdoor Style */}
      <div className="bg-stone-900 text-white border-b border-stone-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 border border-stone-700/80 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Let&apos;s Build Your Outdoor Lineup</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Get in Touch & Inquire
            </h1>
            <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed font-normal">
              Have questions about sample units, custom logo badges, or container orders? Reach out directly. We assist outdoor retailers, 4WD outfitters, rental fleets, and adventurers worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200/90 rounded-2xl p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                      Direct Email Desk
                    </span>
                    <span className="font-bold text-stone-900 text-sm">
                      hello@lz-outdoor.com
                    </span>
                    <p className="text-xs text-stone-500 mt-1 font-normal">
                      Quotes, questions, custom logo artwork, and sample orders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                      Direct WhatsApp / WeChat
                    </span>
                    <span className="font-bold text-stone-900 text-sm">
                      +86 (Direct Factory Coordination)
                    </span>
                    <p className="text-xs text-stone-500 mt-1 font-normal">
                      Available for video walkthroughs of sample tents, fabric swatches, and live packing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                      Manufacturing & Shipping Hubs
                    </span>
                    <span className="font-bold text-stone-900 text-sm">
                      Zhejiang / Shandong Facilities, China
                    </span>
                    <p className="text-xs text-stone-500 mt-1 font-normal">
                      Major export ports: Ningbo, Shanghai, and Qingdao. Global door-to-door sea freight available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                      Response Window
                    </span>
                    <span className="font-bold text-stone-900 text-sm">
                      Mon – Sat: 08:30 – 19:30 (UTC+8)
                    </span>
                    <p className="text-xs text-stone-500 mt-1 font-normal">
                      Inquiries typically answered within 2 to 12 hours across US, European, and Australian time zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outdoor Brand Assurance Notice */}
            <div className="bg-stone-900 text-white border border-stone-800 rounded-2xl p-6 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Small Batch Custom Runs Welcome</span>
              </div>
              <p className="text-stone-300 leading-relaxed font-normal">
                Whether you need a single rooftop tent sample to test on your own 4WD rig, or 50 custom-branded units for your shop, we treat every order with personal attention and strict quality control.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <RfqForm />
          </div>
        </div>
      </div>
    </div>
  );
};
