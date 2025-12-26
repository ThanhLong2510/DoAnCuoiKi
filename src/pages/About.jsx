import { motion } from 'framer-motion'
import { Brain, Shield, Network, Code, Database } from 'lucide-react'

const About = () => {
  const skills = [
    {
      name: 'AI / Machine Learning',
      icon: Brain,
      description: 'Xây dựng và triển khai các mô hình AI/ML cho các ứng dụng thực tế',
      color: 'linear-gradient(to right, #a855f7, #ec4899)',
    },
    {
      name: 'Deep Learning',
      icon: Brain,
      description: 'Phát triển mạng neural network và các mô hình deep learning phức tạp',
      color: 'linear-gradient(to right, #3b82f6, #06b6d4)',
    },
    {
      name: 'Cyber Security',
      icon: Shield,
      description: 'Bảo mật hệ thống, phân tích lỗ hổng, và triển khai giải pháp an ninh',
      color: 'linear-gradient(to right, #22c55e, #10b981)',
    },
    {
      name: 'Network / Cloud',
      icon: Network,
      description: 'Thiết kế và quản lý mạng, triển khai hạ tầng cloud',
      color: 'linear-gradient(to right, #f97316, #ef4444)',
    },
    {
      name: 'DevOps',
      icon: Code,
      description: 'CI/CD, containerization, automation và quản lý hạ tầng',
      color: 'linear-gradient(to right, #6366f1, #a855f7)',
    },
    {
      name: 'Database',
      icon: Database,
      description: 'Thiết kế và quản lý cơ sở dữ liệu, tối ưu hiệu suất',
      color: 'linear-gradient(to right, #14b8a6, #06b6d4)',
    },
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Kỹ sư An Ninh Mạng',
      description: 'Nghiên cứu và phát triển các giải pháp bảo mật thông tin',
      status: 'current',
    },
    {
      year: '2023',
      title: 'Thực tập sinh DevOps',
      description: 'Triển khai CI/CD pipeline, containerization với Docker và Kubernetes',
      status: 'completed',
    },
    {
      year: '2022',
      title: 'Sinh viên Công nghệ Thông tin',
      description: 'Học tập chuyên sâu về mạng máy tính, bảo mật và AI',
      status: 'completed',
    },
    {
      year: '2021',
      title: 'Bắt đầu hành trình',
      description: 'Khởi đầu với niềm đam mê công nghệ và an ninh mạng',
      status: 'completed',
    },
  ]

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
            <span className="gradient-text">VỀ TÔI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Một kỹ sư đam mê công nghệ, luôn tìm kiếm những giải pháp sáng tạo 
            để giải quyết các thách thức trong lĩnh vực an ninh mạng và công nghệ thông tin.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 lg:p-12 mb-16 border border-gray-200 shadow-lg"
        >
          <h2 className="text-3xl font-heading font-bold mb-6 gradient-text">
            Giới thiệu
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Tôi là Lê Võ Thành Long, một kỹ sư an ninh mạng với niềm đam mê sâu sắc 
              về công nghệ và bảo mật thông tin. Với nền tảng vững chắc về mạng máy tính, 
              AI/ML, và DevOps, tôi luôn tìm kiếm những cách tiếp cận mới để bảo vệ hệ thống 
              và dữ liệu trong thời đại số.
            </p>
            <p>
              Sứ mệnh của tôi là kết nối tương lai thông qua việc xây dựng các giải pháp 
              công nghệ an toàn, hiệu quả và có thể mở rộng. Tôi tin rằng với sự kết hợp 
              giữa kiến thức chuyên sâu và tư duy sáng tạo, chúng ta có thể tạo ra những 
              hệ thống mạnh mẽ hơn, thông minh hơn.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">
            Kỹ Năng
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: skill.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">{skill.name}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">
            Hành Trình
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{ background: 'linear-gradient(to bottom, #06b6d4, #0ea5e9, #8b5cf6)' }}
            ></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-6 top-2 w-4 h-4 rounded-full ${
                      item.status === 'current' ? 'glow-effect' : ''
                    }`}
                    style={{ 
                      backgroundColor: item.status === 'current' ? '#06b6d4' : '#9ca3af'
                    }}
                  ></div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg" style={{ color: '#06b6d4' }}>{item.year}</span>
                      {item.status === 'current' && (
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: 'rgba(6, 182, 212, 0.2)', color: '#06b6d4' }}
                        >
                          Hiện tại
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
