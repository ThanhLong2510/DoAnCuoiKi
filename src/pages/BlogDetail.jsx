import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Circle } from 'lucide-react'
import { blogPosts } from '../data/blogData'
import ParticleBackground from '../components/ParticleBackground'
import CyberGrid from '../components/CyberGrid'

const BlogDetail = () => {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '/')
  }

  const getTagColor = (tag) => {
    const colors = {
      'Security': { bg: 'rgba(239, 68, 68, 0.3)', border: 'rgba(239, 68, 68, 0.8)', text: '#fca5a5' },
      'AI': { bg: 'rgba(168, 85, 247, 0.3)', border: 'rgba(168, 85, 247, 0.8)', text: '#c4b5fd' },
      'Java': { bg: 'rgba(249, 115, 22, 0.3)', border: 'rgba(249, 115, 22, 0.8)', text: '#fdba74' },
      'JavaScript': { bg: 'rgba(234, 179, 8, 0.3)', border: 'rgba(234, 179, 8, 0.8)', text: '#fde047' },
      'Network': { bg: 'rgba(34, 197, 94, 0.3)', border: 'rgba(34, 197, 94, 0.8)', text: '#86efac' },
    }
    return colors[tag] || { bg: 'rgba(107, 114, 128, 0.3)', border: 'rgba(107, 114, 128, 0.8)', text: '#d1d5db' }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0a0a0f' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Bài viết không tồn tại</h1>
          <Link to="/blog" className="text-cyan-400 hover:underline">← Quay lại Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0f172a 50%, #0a0a0f 100%)' }}>
      <ParticleBackground />
      <CyberGrid />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm tracking-widest uppercase"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {post.tags.map((tag) => {
              const tagStyle = getTagColor(tag)
              return (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider"
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
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight"
              style={{ 
                background: 'linear-gradient(135deg, #c084fc 0%, #818cf8 50%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <span className="text-gray-600">//</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} đọc</span>
            </div>
            <span className="text-gray-600">//</span>
            <div className="flex items-center gap-2">
              <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              <span className="text-green-400">Live</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(139, 92, 246, 0.3)' }}
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            {post.description}
          </p>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {post.sections?.map((section, index) => (
            <div key={index} className="mb-10">
              {/* Section Title */}
              {section.title && (
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                  {section.title}
                </h2>
              )}
              
              {/* Section Content */}
              {section.content && (
                <p className="text-gray-400 leading-relaxed mb-6">
                  {section.content}
                </p>
              )}

              {/* Section Image */}
              {section.image && (
                <div className="mb-6 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                  <img 
                    src={section.image} 
                    alt={section.title || 'Illustration'}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Code Block */}
              {section.code && (
                <div className="rounded-xl overflow-hidden mb-6" style={{ background: '#1a1a2e', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                  {/* Code Header */}
                  <div className="flex items-center justify-between px-4 py-3" style={{ background: 'rgba(139, 92, 246, 0.1)', borderBottom: '1px solid rgba(139, 92, 246, 0.2)' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{section.language || 'code'}</span>
                  </div>
                  {/* Code Content */}
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm text-gray-300 font-mono leading-relaxed">
                      {section.code}
                    </code>
                  </pre>
                </div>
              )}

              {/* List Items */}
              {section.list && (
                <ul className="space-y-2 mb-6">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.article>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 flex justify-between gap-4"
          style={{ borderTop: '1px solid rgba(139, 92, 246, 0.2)' }}
        >
          {post.id > 1 && (
            <Link 
              to={`/blog/${post.id - 1}`}
              className="flex-1 p-4 rounded-xl transition-all hover:bg-purple-500/10"
              style={{ border: '1px solid rgba(139, 92, 246, 0.2)' }}
            >
              <span className="text-gray-500 text-sm">← Bài trước</span>
              <p className="text-white font-semibold mt-1 line-clamp-1">
                {blogPosts.find(p => p.id === post.id - 1)?.title}
              </p>
            </Link>
          )}
          {post.id < blogPosts.length && (
            <Link 
              to={`/blog/${post.id + 1}`}
              className="flex-1 p-4 rounded-xl transition-all hover:bg-purple-500/10 text-right"
              style={{ border: '1px solid rgba(139, 92, 246, 0.2)' }}
            >
              <span className="text-gray-500 text-sm">Bài tiếp →</span>
              <p className="text-white font-semibold mt-1 line-clamp-1">
                {blogPosts.find(p => p.id === post.id + 1)?.title}
              </p>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default BlogDetail
