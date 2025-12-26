import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar, X, ZoomIn } from 'lucide-react'
import { certificates } from '../data/certificatesData'

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)

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
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #ffffff, #f8fbff, #e6f4ff)' }}>
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
              {/* Certificate Image */}
              {cert.image ? (
                <div 
                  className="relative h-48 bg-gray-100 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ) : (
                <div className={`h-32 bg-gradient-to-r ${getIssuerColor(cert.issuer)} flex items-center justify-center`}>
                  <Award className="w-16 h-16 text-white/80" />
                </div>
              )}

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: 'linear-gradient(to right, #06b6d4, #0ea5e9)' }}
                  >
                    {cert.issuer}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.year}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-heading font-bold mb-2 text-gray-900">
                  {cert.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                {/* View Button */}
                {cert.image && (
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2 text-sm font-semibold rounded-lg transition-all duration-300"
                    style={{ color: '#06b6d4', border: '1px solid #06b6d4' }}
                  >
                    Xem chứng chỉ →
                  </button>
                )}
              </div>
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

      {/* Modal xem ảnh chứng chỉ */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
              
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="p-4 bg-white">
                <h3 className="text-xl font-heading font-bold text-gray-900">{selectedCert.name}</h3>
                <p className="text-gray-600">{selectedCert.issuer} - {selectedCert.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Certificates
