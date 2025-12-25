import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/blogData'

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
      'Security': 'bg-red-100 text-red-800 border-red-200',
      'AI': 'bg-purple-100 text-purple-800 border-purple-200',
      'ML': 'bg-pink-100 text-pink-800 border-pink-200',
      'Deep Learning': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'DevOps': 'bg-blue-100 text-blue-800 border-blue-200',
      'Cloud': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Network': 'bg-green-100 text-green-800 border-green-200',
    }
    return colors[tag] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-white via-bg-light to-bg-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="gradient-text">BLOG</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-heading font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Đọc thêm</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="h-1 bg-gradient-to-r from-primary via-accent-blue to-accent-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.article>
          ))}
        </div>

        {/* Load More / Pagination (placeholder) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent-blue text-white rounded-lg font-semibold shadow-lg hover:shadow-xl glow-effect-hover transition-all duration-300">
            Xem thêm bài viết
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog


