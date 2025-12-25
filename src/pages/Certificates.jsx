import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'
import { certificates } from '../data/certificatesData'

const Certificates = () => {
  const getIssuerColor = (issuer) => {
    const colors = {
      'Cisco': 'from-blue-500 to-cyan-500',
      'Google Cloud': 'from-blue-400 to-blue-600',
      'Amazon Web Services': 'from-orange-400 to-orange-600',
      'EC-Council': 'from-red-500 to-pink-500',
      'Coursera / Stanford': 'from-purple-500 to-indigo-500',
      'Cloud Native Computing Foundation': 'from-cyan-500 to-blue-500',
      'CompTIA': 'from-green-500 to-emerald-500',
    }
    return colors[issuer] || 'from-gray-500 to-gray-600'
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
            <span className="gradient-text">CHỨNG CHỈ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Các chứng chỉ và bằng cấp chuyên môn trong lĩnh vực công nghệ thông tin
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Certificate Header with Gradient */}
              <div className={`bg-gradient-to-r ${getIssuerColor(cert.issuer)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8" />
                  <div className="flex items-center space-x-2 text-sm bg-white/20 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.year}</span>
                  </div>
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{cert.name}</h3>
                <p className="text-sm text-white/90">{cert.issuer}</p>
              </div>

              {/* Certificate Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                {/* Hover Effect - View Certificate Button */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full py-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300">
                    Xem chi tiết →
                  </button>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${getIssuerColor(cert.issuer)}`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-md">
            <div className="text-3xl font-heading font-bold gradient-text mb-2">
              {certificates.length}
            </div>
            <div className="text-gray-600 text-sm">Chứng chỉ</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-md">
            <div className="text-3xl font-heading font-bold gradient-text mb-2">
              {new Set(certificates.map(c => c.issuer)).size}
            </div>
            <div className="text-gray-600 text-sm">Tổ chức</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-md">
            <div className="text-3xl font-heading font-bold gradient-text mb-2">
              {new Date().getFullYear() - Math.min(...certificates.map(c => parseInt(c.year))) + 1}
            </div>
            <div className="text-gray-600 text-sm">Năm kinh nghiệm</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-md">
            <div className="text-3xl font-heading font-bold gradient-text mb-2">
              100%
            </div>
            <div className="text-gray-600 text-sm">Cam kết học tập</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certificates


