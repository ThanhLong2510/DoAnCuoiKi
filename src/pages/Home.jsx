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
    <div className="min-h-screen bg-gradient-to-br from-bg-white via-bg-light to-bg-lighter">
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
                <span className="px-4 py-2 bg-gradient-to-r from-primary to-accent-blue text-white rounded-full text-sm font-semibold shadow-lg glow-effect">
                  Kỹ sư An Ninh Mạng
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="block text-gray-900">LÊ VÕ</span>
                <span className="block gradient-text">THÀNH LONG</span>
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
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-accent-blue text-white rounded-lg font-semibold shadow-lg hover:shadow-xl glow-effect-hover transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Tải CV</span>
              </a>
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-bg-light transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-bg-light transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              
              <a
                href="tel:+84123456789"
                className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-bg-light transition-all duration-300"
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
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg bg-gradient-to-br from-primary/20 via-accent-blue/20 to-accent-purple/20 flex items-center justify-center glow-effect">
                    <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for avatar image */}
                      <div className="text-6xl font-heading font-bold gradient-text">
                        LVTL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
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
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/20 rounded-full blur-2xl"
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


