import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost, AGENCY_CONTACT } from '../data/agencyData';

interface BlogViewProps {
  onStartProject: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onStartProject }) => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <div className="w-full min-h-screen py-16 flex flex-col gap-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-secondary text-xs font-semibold border border-outline-variant/30">
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            <span>Agency Intelligence & Strategy Playbooks</span>
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-extrabold text-on-surface">
            Insights on Performance, AI & Growth
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-xl">
            Unfiltered frameworks, media buying playbooks, and tactical experiments straight from our campaign desks.
          </p>
        </div>

        {/* Featured Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/20 hover:border-secondary/40 shadow-xl flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <div className="relative w-full h-56 overflow-hidden bg-surface-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-secondary text-xs font-semibold border border-outline-variant/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-outline-variant/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary-container/20 text-secondary flex items-center justify-center text-xs font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-xs text-on-surface font-medium">{post.author}</span>
                </div>
                <span className="text-xs font-semibold text-secondary flex items-center gap-1 group-hover:text-tertiary transition-colors">
                  <span>Read Article</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-3xl bg-surface-container-low rounded-3xl border border-outline-variant/30 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-1">
                  <span className="text-secondary font-semibold">{activeArticle.category}</span>
                  <span>·</span>
                  <span>{activeArticle.date}</span>
                  <span>·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h2 className="font-headline-lg text-xl sm:text-2xl font-bold text-on-surface">
                  {activeArticle.title}
                </h2>
                <p className="text-xs text-on-surface-variant mt-1">
                  By {activeArticle.author} · {activeArticle.authorRole}
                </p>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Key Takeaways Callout */}
            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-2">
              <h4 className="text-xs font-bold text-tertiary uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                <span>Executive Summary & Actionable Takeaways</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-on-surface pt-1">
                {activeArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">check_circle</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Content */}
            <div className="space-y-4 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {activeArticle.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Author Sign-off & CTA */}
            <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <div>
                <h4 className="text-xs font-bold text-on-surface">Want us to apply this strategy to your business?</h4>
                <p className="text-[11px] text-on-surface-variant">We build and scale customized funnels for ambitious brands.</p>
              </div>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onStartProject();
                }}
                className="py-3 px-5 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider whitespace-nowrap"
              >
                Schedule Strategy Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
