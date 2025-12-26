import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar, X, ZoomIn } from 'lucide-react'
import { certificates } from '../data/certificatesData'
import ParticleBackground from '../components/ParticleBackground'
import CyberGrid from '../components/CyberGrid'

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const getIssuerColor = (issuer) => {
    const colors = {
      'Cisco': { from: '#3b82f6', to: '#06b6d4' },
      'Google Cloud': { from: '#60a5fa', to: '#2563eb' },
      'Amazon Web Services': { from: '#fb923c', to: '#ea580c' },
      'EC-Council': { from: '#ef4444', to: '#ec4899' },
      'Coursera / Stanford': { from: '#a855f7', to: '#6366f1' },
      'Cloud Native Computing Foundation': { from: '#06b6d4', to: '#3b82f6' },
      'CompTIA': { from: '#22c55e', to: '#10b981' },
    }
    return colors[issuer] || { from: '#6b7280', to: '#4b5563' }
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
            <span className="gradient-text neon-glow">CHỨNG CHỈ</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Các chứng chỉ và bằng cấp chuyên môn trong lĩnh vực công nghệ thông tin
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const issuerColor = getIssuerColor(cert.issuer)
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
                }}
                className="cyber-card rounded-xl overflow-hidden group"
              >
                {/* Certificate Image */}
                {cert.image ? (
                  <div 
                    className="relative h-48 cursor-pointer overflow-hidden"
                    style={{ background: 'rgba(15, 23, 42, 0.5)' }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ) : (
                  <div 
                    className="h-32 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${issuerColor.from}, ${issuerColor.to})` }}
                  >
                    <Award className="w-16 h-16 text-white/80" />
                  </div>
                )}

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        background: `linear-gradient(135deg, ${issuerColor.from}40, ${issuerColor.to}40)`,
                        border: `1px solid ${issuerColor.from}80`,
                        color: issuerColor.from
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold mb-2 text-white">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  {/* View Button */}
                  {cert.image && (
                    <motion.button 
                      onClick={() => setSelectedCert(cert)}
                      className="w-full py-2 text-sm font-semibold rounded-lg transition-all duration-300"
                      style={{ 
                        color: '#06b6d4', 
                        border: '1px solid rgba(6, 182, 212, 0.5)',
                        background: 'rgba(6, 182, 212, 0.1)'
                      }}
                      whileHover={{ 
                        background: 'rgba(6, 182, 212, 0.2)',
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                      }}
                    >
                      Xem chứng chỉ →
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: certificates.length, label: 'Chứng chỉ' },
            { value: new Set(certificates.map(c => c.issuer)).size, label: 'Tổ chức' },
            { value: new Date().getFullYear() - Math.min(...certificates.map(c => parseInt(c.year))) + 1, label: 'Năm kinh nghiệm' },
            { value: '100%', label: 'Cam kết học tập' },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="cyber-card rounded-xl p-6 text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
              }}
            >
              <div className="text-3xl font-heading font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal xem ảnh chứng chỉ */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0, 0, 0, 0.9)' }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] rounded-xl overflow-hidden"
              style={{ 
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors"
                style={{ 
                  background: 'rgba(6, 182, 212, 0.2)',
                  border: '1px solid rgba(6, 182, 212, 0.5)'
                }}
              >
                <X className="w-6 h-6 text-cyan-400" />
              </button>
              
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="p-4" style={{ background: 'rgba(15, 23, 42, 0.95)' }}>
                <h3 className="text-xl font-heading font-bold text-white">{selectedCert.name}</h3>
                <p className="text-gray-400">{selectedCert.issuer} - {selectedCert.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Certificates
