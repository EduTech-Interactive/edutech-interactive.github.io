import React, { useState } from 'react';
import { Button } from '../shared/ui/button';
import { useTranslation } from 'react-i18next';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  summary: string;
  content: string;
}

export const Blog: React.FC = () => {
  // Track which post IDs are currently expanded
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: t('blog.posts.post1.title'),
      date: t('blog.posts.post1.date'),
      author: t('blog.posts.post1.author'),
      category: t('blog.posts.post1.category'),
      summary: t('blog.posts.post1.summary'),
      content: t('blog.posts.post1.content'),
    },
    {
      id: '2',
      title: t('blog.posts.post2.title'),
      date: t('blog.posts.post2.date'),
      author: t('blog.posts.post2.author'),
      category: t('blog.posts.post2.category'),
      summary: t('blog.posts.post2.summary'),
      content: t('blog.posts.post2.content'),
    },
  ];

  const togglePost = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 font-nav text-edu-navy-600">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-edu-navy-600 mb-4 tracking-tight">
          {t('blog.header.title')}
        </h1>
        <p className="text-lg md:text-xl text-edu-slate-600 font-body max-w-2xl mx-auto">
          {t('blog.header.subtitle')}
        </p>
        <div className="w-24 h-1 bg-edu-blue-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Blog List */}
      <div className="space-y-6">
        {blogPosts.map((post, idx) => {
          const isExpanded = !!expandedIds[post.id];

          return (
            <article 
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-edu-slate-200/80 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Card Header / Clickable area */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-edu-purple-200 text-edu-purple-600 font-semibold text-xs">
                      {post.category}
                    </span>
                    <span className="text-edu-slate-600">{post.date}</span>
                    <span className="text-edu-slate-400">•</span>
                    <span className="text-edu-slate-600 italic">
                      {t('blog.labels.by', { author: post.author })}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-edu-navy-600 tracking-tight">
                    {post.title}
                  </h2>

                  <p className="text-edu-slate-600 font-body text-base">
                    {post.summary}
                  </p>
                </div>

                {/* Toggle Button */}
                <div className="self-start md:self-center shrink-0">
                  <Button
                    bgClassName={isExpanded ? 'bg-edu-navy-600' : 'bg-edu-blue-400'}
                    hoverBgClassName={isExpanded ? 'hover:bg-edu-navy-400' : 'hover:bg-edu-blue-600'}
                    onClick={() => togglePost(post.id)}
                  >
                    {isExpanded ? t('blog.buttons.showLess') : t('blog.buttons.readArticle')}
                  </Button>
                </div>
              </div>

              {/* Collapsible Content Section */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-8 md:px-8 pt-2 border-t border-edu-slate-200/60 bg-edu-slate-200/20">
                  <div className="prose prose-blue max-w-none text-edu-navy-600 font-body leading-relaxed whitespace-pre-line pt-4">
                    {post.content}
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button 
                      onClick={() => togglePost(post.id)}
                      className="text-sm font-bold text-edu-blue-400 hover:text-edu-blue-600 transition-colors cursor-pointer"
                    >
                      {t('blog.buttons.collapsePost')}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;