import React from 'react';
import { ArrowLeft, Clock, ChevronRight, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { AppRoute } from '../types';
import { BLOG_POSTS } from '../data/blogs';
import { PlaceholderImage } from '../components/PlaceholderImage';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (route: AppRoute) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  return (
    <div className="bg-stone-50 min-h-screen pb-24 text-stone-900">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-stone-200 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 flex items-center justify-between text-xs text-stone-500 font-medium">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => onNavigate({ path: 'home' })}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button
              onClick={() => onNavigate({ path: 'blog' })}
              className="hover:text-stone-950 transition-colors cursor-pointer"
            >
              Field Guides
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-bold truncate max-w-xs">{post.title}</span>
          </div>

          <button
            onClick={() => onNavigate({ path: 'blog' })}
            className="hidden sm:inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-950 font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Guides</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <article className="bg-white border border-stone-200/90 rounded-2xl p-8 sm:p-12 shadow-xs space-y-8">
          {/* Article Header */}
          <div className="space-y-4 border-b border-stone-200 pb-8">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="px-3 py-1 rounded-md bg-stone-900 text-amber-400 uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-stone-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                {post.readTime}
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-500 font-medium">{post.publishDate}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base text-stone-600 leading-relaxed font-normal">
              {post.summary}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-md bg-stone-100 text-stone-700 uppercase tracking-wider"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Visual */}
          <div className="rounded-xl overflow-hidden border border-stone-200">
            <PlaceholderImage
              label={post.title}
              type="detail"
              aspectRatio="aspect-21/9"
              caption={`Field photo: ${post.title}`}
              badgeText="Overland Guide"
            />
          </div>

          {/* Article Structured Body */}
          <div className="space-y-8 text-stone-800 text-sm leading-relaxed">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-3 text-stone-700 leading-relaxed font-normal">
                  {section.body.map((pText, pIdx) => (
                    <p key={pIdx}>{pText}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Action Card */}
          <div className="mt-8 pt-8 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                Looking to order or sample the gear featured in this article?
              </h3>
              <p className="text-xs text-stone-500 mt-0.5 font-normal">
                Order directly or explore small-batch custom branding with low MOQs.
              </p>
            </div>
            <button
              onClick={() => onNavigate({ path: 'request-a-quote' })}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shrink-0 transition-colors shadow-sm"
            >
              <span>Get Sample & Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
