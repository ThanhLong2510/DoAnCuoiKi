import { motion } from 'framer-motion'
import { Download, Github, Mail, Phone } from 'lucide-react'

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

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #ffffff, #f8fbff, #e6f4ff)' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-block">
                <span 
                  className="px-4 py-2 text-white rounded-full text-sm font-semibold shadow-lg glow-effect"
                  style={{ background: 'linear-gradient(to right, #06b6d4, #0ea5e9)' }}
                >
                  Kỹ sư An Ninh Mạng
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="block gradient-text">LÊ VÕ THÀNH LONG</span>
              </h1>
              
              <h2 className="text-3xl lg:text-5xl font-heading font-bold gradient-text">
                KẾT NỐI TƯƠNG LAI
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed max-w-xl"
            >
              Đam mê nghiên cứu bảo mật thông tin, networking, triển khai mô hình, 
              triển khai hệ thống thực tế và DevOps. Luôn tìm kiếm những giải pháp 
              công nghệ tiên tiến để bảo vệ và kết nối thế giới số.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#"
                className="flex items-center space-x-2 px-6 py-3 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl glow-effect-hover transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #06b6d4, #0ea5e9)' }}
              >
                <Download className="w-5 h-5" />
                <span>Tải CV</span>
              </a>
              
              <a
                href="https://github.com/ThanhLong2510"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white border-2 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#06b6d4', color: '#06b6d4' }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-2 px-6 py-3 bg-white border-2 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#06b6d4', color: '#06b6d4' }}
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              
              <a
                href="tel:+84123456789"
                className="flex items-center space-x-2 px-6 py-3 bg-white border-2 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#06b6d4', color: '#06b6d4' }}
              >
                <Phone className="w-5 h-5" />
                <span>Phone</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Avatar Card */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="gradient-border">
                <div className="bg-white rounded-lg p-2">
                  <div 
                    className="w-[400px] h-[570px] lg:w-[480px] lg:h-[680px] rounded-lg flex items-center justify-center glow-effect"
                    style={{ background: 'linear-gradient(to bottom right, rgba(6,182,212,0.2), rgba(14,165,233,0.2), rgba(139,92,246,0.2))' }}
                  >
                    <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                      {/* Avatar Image - tỷ lệ 9:16 (1080x1920) */}
                      <img 
                        src="/AnhCV.png" 
                        alt="Lê Võ Thành Long"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          if (e.target.nextSibling) {
                            e.target.nextSibling.style.display = 'flex'
                          }
                        }}
                      />
                      <div 
                        className="text-4xl font-heading font-bold gradient-text items-center justify-center w-full h-full absolute text-center"
                        style={{ display: 'none' }}
                      >
                        LVTL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl"
                style={{ backgroundColor: 'rgba(6,182,212,0.2)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-2xl"
                style={{ backgroundColor: 'rgba(139,92,246,0.2)' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
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