export type ProductCategory = 'rooftop-tents' | 'vehicle-awnings' | 'camping-4wd-accessories';

export interface ProductSpecification {
  group?: string;
  label: string;
  value: string;
  verified: boolean;
  note?: string;
}

export interface ProductImage {
  id: string;
  url?: string;
  placeholderLabel: string;
  caption: string;
  type: 'product' | 'detail' | 'factory' | 'packaging' | 'shipment';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string; // Internal temporary identifier
  category: ProductCategory;
  subcategory: string;
  status: 'Confirmed Specification' | 'Sourcing Portfolio' | 'Available on Inquiry';
  shortDescription: string;
  fullDescription: string;
  images: ProductImage[];
  specifications: ProductSpecification[];
  features: string[];
  customizationOptions: string[];
  moqInfo: string;
  structureType?: string;
  applications: string[];
  seo: {
    title: string;
    metaDescription: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  seo: {
    title: string;
    metaDescription: string;
  };
}

export type BuyerType =
  | 'Distributor / Wholesaler'
  | 'Private Label / OEM / ODM'
  | 'Outdoor Retailer'
  | 'Other';

export interface QuoteRequestFormData {
  name: string;
  company: string;
  email: string;
  country: string;
  buyerType: BuyerType;
  productInterest: string;
  quantity: string;
  customizationRequirements: string;
  message: string;
  fileName?: string;
}

export type AppRoute =
  | { path: 'home' }
  | { path: 'products'; category?: ProductCategory }
  | { path: 'product-detail'; slug: string }
  | { path: 'oem-odm' }
  | { path: 'about' }
  | { path: 'blog' }
  | { path: 'blog-detail'; slug: string }
  | { path: 'contact' }
  | { path: 'request-a-quote'; preselectedProduct?: string };
