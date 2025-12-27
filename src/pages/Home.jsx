import { motion } from 'framer-motion'
import { Download, Github, Mail, Phone, Shield, Lock, Terminal } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import CyberGrid from '../components/CyberGrid'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const floatingIcons = [
    { Icon: Shield, delay: 0 },
    { Icon: Lock, delay: 1 },
    { Icon: Terminal, delay: 2 },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0f172a 50%, #0a0a0f 100%)' }}>
      <ParticleBackground />
      <CyberGrid />
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span 
                  className="px-4 py-2 text-cyan-400 rounded-full text-sm font-semibold neon-border"
                  style={{ 
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid rgba(6, 182, 212, 0.5)'
                  }}
                >
                  <span className="mr-2">🛡️</span>
                  Kỹ sư An Ninh Mạng
                </span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                <motion.span 
                  className="block gradient-text neon-glow whitespace-nowrap"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  LÊ VÕ THÀNH LONG
                </motion.span>
              </h1>
              
              <motion.h2 
                className="text-2xl lg:text-3xl font-heading font-bold text-cyan-400 typing-cursor"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {" SECURITY STARTS WITH YOU "}
              </motion.h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              Đam mê lĩnh vực an ninh mạng, hệ thống mạng máy tính và DevOps. Không ngừng nghiên cứu,
              triển khai các mô hình và môi trường thực tế để nâng cao kỹ năng. 
              Luôn hướng đến những giải pháp công nghệ tiên tiến nhằm tăng cường bảo mật, tối ưu vận hành và bảo vệ thế giới số an toàn hơn.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/CV Thành Long.png"
                download
                className="flex items-center space-x-2 px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 neon-border"
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
                <Download className="w-5 h-5" />
                <span>Tải CV</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/ThanhLong2510"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{ 
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  color: '#06b6d4'
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(6, 182, 212, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
              
              <motion.a
                href="mailto:lvtlong25@gmail.com"
                className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{ 
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  color: '#06b6d4'
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(6, 182, 212, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </motion.a>
              
              <motion.a
                href="tel:+84123456789"
                className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{ 
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  color: '#06b6d4'
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(6, 182, 212, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Phone</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Avatar Card */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating security icons */}
              {floatingIcons.map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${20 + index * 30}%`,
                    left: index % 2 === 0 ? '-20px' : 'auto',
                    right: index % 2 === 1 ? '-20px' : 'auto',
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="p-2 rounded-lg neon-border" style={{ background: 'rgba(6, 182, 212, 0.1)' }}>
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="gradient-border"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                    '0 0 40px rgba(6, 182, 212, 0.5)',
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="rounded-lg p-2" style={{ background: 'rgba(15, 23, 42, 0.9)' }}>
                  <div 
                    className="w-[400px] h-[570px] lg:w-[480px] lg:h-[680px] rounded-lg flex items-center justify-center overflow-hidden relative"
                    style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1))' }}
                  >
                    {/* Scan line effect on image */}
                    <motion.div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background: 'linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)',
                        height: '30%',
                      }}
                      animate={{
                        top: ['-30%', '100%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    
                    <img 
                      src="/AnhCV2.png" 
                      alt="Lê Võ Thành Long"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-32 h-32 rounded-full blur-3xl"
                style={{ backgroundColor: 'rgba(6,182,212,0.3)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full blur-3xl"
                style={{ backgroundColor: 'rgba(139,92,246,0.3)' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
