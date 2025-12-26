import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/blogData'
import ParticleBackground from '../components/ParticleBackground'
import CyberGrid from '../components/CyberGrid'

const Blog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getTagColor = (tag) => {
    const colors = {
      'Security': { bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 0.5)', text: '#ef4444' },
      'AI': { bg: 'rgba(168, 85, 247, 0.2)', border: 'rgba(168, 85, 247, 0.5)', text: '#a855f7' },
      'ML': { bg: 'rgba(236, 72, 153, 0.2)', border: 'rgba(236, 72, 153, 0.5)', text: '#ec4899' },
      'Deep Learning': { bg: 'rgba(99, 102, 241, 0.2)', border: 'rgba(99, 102, 241, 0.5)', text: '#6366f1' },
      'DevOps': { bg: 'rgba(59, 130, 246, 0.2)', border: 'rgba(59, 130, 246, 0.5)', text: '#3b82f6' },
      'Cloud': { bg: 'rgba(6, 182, 212, 0.2)', border: 'rgba(6, 182, 212, 0.5)', text: '#06b6d4' },
      'Network': { bg: 'rgba(34, 197, 94, 0.2)', border: 'rgba(34, 197, 94, 0.5)', text: '#22c55e' },
    }
    return colors[tag] || { bg: 'rgba(107, 114, 128, 0.2)', border: 'rgba(107, 114, 128, 0.5)', text: '#6b7280' }
  }

  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0f172a 50%, #0a0a0f 100%)' }}>
      <ParticleBackground />
      <CyberGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="gradient-text neon-glow">BLOG</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Chia sẻ kiến thức về an ninh mạng, AI, DevOps và công nghệ
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
              }}
              className="cyber-card rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => {
                    const tagStyle = getTagColor(tag)
                    return (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                          background: tagStyle.bg, 
                          border: `1px solid ${tagStyle.border}`,
                          color: tagStyle.text
                        }}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>

                {/* Title */}
                <h2 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Đọc thêm</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div 
                className="h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: 'linear-gradient(to right, #06b6d4, #0ea5e9, #8b5cf6)' }}
              />
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button 
            className="px-8 py-3 text-white rounded-lg font-semibold neon-border"
            style={{ 
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))',
              border: '1px solid rgba(6, 182, 212, 0.5)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Xem thêm bài viết
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
