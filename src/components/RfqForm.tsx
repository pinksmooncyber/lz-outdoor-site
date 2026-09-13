import React, { useState, useRef } from 'react';
import {
  Send,
  Upload,
  CheckCircle,
  Mail,
  Building2,
  Globe2,
  User,
  FileText,
  ArrowRight,
  X,
  Trash2,
} from 'lucide-react';
import { BuyerType, QuoteRequestFormData } from '../types';

interface RfqFormProps {
  initialProduct?: string;
  onSuccess?: () => void;
  className?: string;
}

export const RfqForm: React.FC<RfqFormProps> = ({
  initialProduct = '',
  className = '',
}) => {
  const [formData, setFormData] = useState<QuoteRequestFormData>({
    name: '',
    company: '',
    email: '',
    country: '',
    buyerType: 'Distributor / Wholesaler',
    productInterest: initialProduct || 'Rooftop Tent — 230 × 142 cm',
    quantity: '',
    customizationRequirements: '',
    message: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    sizeFormatted: string;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const buyerOptions: BuyerType[] = [
    'Distributor / Wholesaler',
    'Private Label / OEM / ODM',
    'Outdoor Retailer',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const processFile = (file: File) => {
    const sizeKB = file.size / 1024;
    const sizeFormatted =
      sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(2)} MB` : `${sizeKB.toFixed(1)} KB`;
    setSelectedFile({
      name: file.name,
      sizeFormatted,
    });
    setFormData((prev) => ({ ...prev, fileName: file.name }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedFile(null);
    setFormData((prev) => ({ ...prev, fileName: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`bg-white border border-slate-200 rounded-lg p-8 sm:p-10 shadow-sm ${className}`}>
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0">
            <CheckCircle className="w-7 h-7 text-amber-400" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Quotation Request Received
            </span>
            <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
              Thank You for Your Inquiry
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              Your inquiry regarding <strong className="text-slate-900">{formData.productInterest}</strong> has been logged. Our export engineering team will review your specifications, assess factory scheduling, and contact you at <strong className="text-slate-900">{formData.email}</strong> within 1 business day with preliminary FOB pricing, packaging specs, and sample lead times.
            </p>

            {/* Structured Project Summary Card */}
            <div className="mt-6 bg-slate-50 border border-slate-200 rounded p-5 text-xs text-slate-700 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Company</span>
                  <span className="font-semibold text-slate-900">{formData.company || 'Not Specified'}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Contact Person</span>
                  <span className="font-semibold text-slate-900">{formData.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Business Classification</span>
                  <span className="font-semibold text-slate-900">{formData.buyerType}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Target Volume</span>
                  <span className="font-semibold text-slate-900">{formData.quantity || 'Sample / Initial Evaluation'}</span>
                </div>
              </div>
              {formData.customizationRequirements && (
                <div className="pt-2">
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Customization Scope</span>
                  <p className="text-slate-800 mt-0.5">{formData.customizationRequirements}</p>
                </div>
              )}
              {formData.fileName && (
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500 uppercase text-[10px] font-bold block">Attached Document</span>
                  <p className="text-slate-800 mt-0.5 font-medium flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-amber-600" />
                    <span>{formData.fileName}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-slate-950 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs ${className}`}
    >
      <div className="border-b border-slate-200 pb-6 mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
          B2B Commercial Procurement
        </span>
        <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
          Request Commercial Quotation & Specifications
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Direct factory quotation for wholesale, distributor volume orders, and OEM/ODM private label production.
        </p>
      </div>

      <div className="space-y-6">
        {/* Row 1: Contact Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Contact Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Marcus Vance"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:border-slate-950 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Company / Business Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                placeholder="e.g. Overland Outfitters Ltd"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:border-slate-950 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Email & Country / Port */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Work Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="marcus@overlandoutfitters.com"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:border-slate-950 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Country & Destination Port
            </label>
            <div className="relative">
              <Globe2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="e.g. Australia (FOB Sydney / Melbourne)"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:border-slate-950 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Buyer Type & Target Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Buyer Category
            </label>
            <select
              name="buyerType"
              value={formData.buyerType}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:border-slate-950 focus:outline-none transition-colors"
            >
              {buyerOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Target Order Volume
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="e.g. 1 Sample / 20 Units / 1x40ft Container"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:border-slate-950 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Product Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Equipment Series of Interest
          </label>
          <input
            type="text"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleInputChange}
            placeholder="e.g. Rooftop Tent 230×142 cm, 270° Awning, or Mixed Container"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:border-slate-950 focus:outline-none transition-colors"
          />
        </div>

        {/* Customization Details */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            OEM / ODM Customization Requirements
          </label>
          <textarea
            name="customizationRequirements"
            rows={3}
            value={formData.customizationRequirements}
            onChange={handleInputChange}
            placeholder="Describe private label requirements: custom logo badging, shell powder coat finish, fabric GSM, mattress upgrades, solar brackets, or carton branding..."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 focus:bg-white focus:border-slate-950 focus:outline-none transition-colors"
          />
        </div>

        {/* File Upload (Drag & Drop or Select with Cancel/Remove option) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Technical Drawing / Tech Pack / Logo Artwork (Optional)
          </label>

          <input
            ref={fileInputRef}
            type="file"
            id="file-upload"
            onChange={handleFileSelect}
            className="hidden"
          />

          {!selectedFile ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border border-dashed rounded-xl p-5 text-center transition-all cursor-pointer ${
                isDragging
                  ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-500/20'
                  : 'border-slate-300 hover:border-slate-400 bg-slate-50/50 hover:bg-slate-50'
              }`}
            >
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center gap-2 cursor-pointer select-none"
              >
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                  <Upload className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-700 font-semibold">
                  Click to browse or drag & drop specification PDF, 2D/3D CAD, logo artwork, or photos
                </span>
                <span className="text-[11px] text-slate-400">
                  Supports PDF, DWG, STEP, AI, EPS, JPG, PNG (Max 25MB)
                </span>
              </label>
            </div>
          ) : (
            <div className="border border-stone-200 bg-stone-50/90 rounded-xl p-4 shadow-xs transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-bold text-stone-900 truncate max-w-[220px] sm:max-w-xs md:max-w-sm">
                        {selectedFile.name}
                      </p>
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        Attached
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {selectedFile.sizeFormatted} • Ready to submit with inquiry
                    </p>
                  </div>
                </div>

                {/* File Action Buttons: Re-select or Cancel/Remove */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200/80 w-full sm:w-auto justify-end">
                  <label
                    htmlFor="file-upload"
                    className="px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Change File
                  </label>
                  <button
                    type="button"
                    id="cancel-uploaded-file-btn"
                    onClick={handleRemoveFile}
                    className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Remove attached file and select again"
                  >
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Cancel / Remove</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold uppercase tracking-wider rounded transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Submit Quotation Request</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
          <p className="text-center text-xs text-slate-500 mt-2.5">
            Commercial inquiry strictly for overseas equipment distributors, retailers, and private label brands.
          </p>
        </div>
      </div>
    </form>
  );
};
