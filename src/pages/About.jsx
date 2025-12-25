import { motion } from 'framer-motion'
import { Brain, Shield, Network, Cloud, Code, Database } from 'lucide-react'

const About = () => {
  const skills = [
    {
      name: 'AI / Machine Learning',
      icon: Brain,
      description: 'Xây dựng và triển khai các mô hình AI/ML cho các ứng dụng thực tế',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Deep Learning',
      icon: Brain,
      description: 'Phát triển mạng neural network và các mô hình deep learning phức tạp',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Cyber Security',
      icon: Shield,
      description: 'Bảo mật hệ thống, phân tích lỗ hổng, và triển khai giải pháp an ninh',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Network / Cloud',
      icon: Network,
      description: 'Thiết kế và quản lý mạng, triển khai hạ tầng cloud',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'DevOps',
      icon: Code,
      description: 'CI/CD, containerization, automation và quản lý hạ tầng',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Database',
      icon: Database,
      description: 'Thiết kế và quản lý cơ sở dữ liệu, tối ưu hiệu suất',
      color: 'from-teal-500 to-cyan-500',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Một kỹ sư đam mê công nghệ, luôn tìm kiếm những giải pháp sáng tạo 
            để giải quyết các thách thức trong lĩnh vực an ninh mạng và công nghệ thông tin.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16 border border-gray-700"
        >
          <h2 className="text-3xl font-heading font-bold mb-6 gradient-text">
            Giới thiệu
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
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
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary transition-all duration-300 glow-effect-hover"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-blue to-accent-purple"></div>
            
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
                  <div className={`absolute left-6 top-2 w-4 h-4 rounded-full ${
                    item.status === 'current' 
                      ? 'bg-primary glow-effect' 
                      : 'bg-gray-600'
                  }`}></div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      {item.status === 'current' && (
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                          Hiện tại
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
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


