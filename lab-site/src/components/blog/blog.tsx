import React, { useState } from 'react';
import { Button } from '../shared/ui/button';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  summary: string;
  content: string;
}

const STATIC_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Blog Post 1',
    date: 'May 14, 2026',
    author: 'Author',
    category: 'Category 1',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: '2',
    title: 'Blog Post 2',
    date: 'May 14, 2026',
    author: 'Author',
    category: 'Category 2',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
];

export const Blog: React.FC = () => {
  //Track which post IDs are currently expanded
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

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
          Our Blogs & Insights
        </h1>
        <p className="text-lg md:text-xl text-edu-slate-600 font-body max-w-2xl mx-auto">
          Conversations, research reflections, and thoughts on innovating teaching, learning, and technology in higher education.
        </p>
        <div className="w-24 h-1 bg-edu-blue-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Blog List */}
      <div className="space-y-6">
        {STATIC_BLOG_POSTS.map( (post, idx) => {
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
                    <span className="text-edu-slate-600 italic">By {post.author}</span>
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
                    {isExpanded ? 'Show Less' : 'Read Article'}
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
                      ↑ Collapse post
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