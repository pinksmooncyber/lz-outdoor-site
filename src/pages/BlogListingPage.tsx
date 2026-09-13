import React, { useState } from 'react';
import { ArrowRight, Compass, Clock, BookOpen } from 'lucide-react';
import { AppRoute } from '../types';
import { BLOG_POSTS } from '../data/blogs';
import { PlaceholderImage } from '../components/PlaceholderImage';

interface BlogListingPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const BlogListingPage: React.FC<BlogListingPageProps> = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState<string | 'all'>('all');

  const allTags = Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)));

  const filteredPosts =
    selectedTag === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.tags.includes(selectedTag));

  return (
    <div className="bg-stone-50 min-h-screen pb-24 text-stone-900">
      {/* Header Banner - Outdoor Adventure Style */}
      <div className="bg-stone-900 text-white border-b border-stone-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 border border-stone-700/80 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Overland Field Guides & Gear Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Outdoor Gear Guides & Camp Insights
            </h1>
            <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed font-normal">
              Practical guides covering rooftop tent selection, vehicle awning setups, waterproof fabrics, and advice for outdoor shops creating custom-branded gear lines.
            </p>

            {/* Tag Filters */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedTag === 'all'
                    ? 'bg-amber-600 text-stone-950 font-bold shadow-xs'
                    : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'
                }`}
              >
                All Articles
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-amber-600 text-stone-950 font-bold shadow-xs'
                      : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden hover:border-amber-400 transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <PlaceholderImage
                  label={post.title}
                  type="detail"
                  aspectRatio="aspect-16/10"
                  caption={`Field Guide: ${post.category}`}
                  badgeText="Gear Guide"
                />

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="text-amber-700 font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-stone-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-stone-900 tracking-tight leading-snug group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 font-normal">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate({ path: 'blog-detail', slug: post.slug })}
                  className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Read Field Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
