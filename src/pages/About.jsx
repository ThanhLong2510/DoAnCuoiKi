import { motion } from 'framer-motion'
import { Shield, Network, Code, Database, Server } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import CyberGrid from '../components/CyberGrid'

const About = () => {
  const skills = [
    {
      name: 'Linux (Ubuntu/Kali)',
      icon: Code,
      description: 'Quản trị hệ thống Linux, sử dụng Kali Linux cho penetration testing và security auditing',
      color: '#f97316',
    },
    {
      name: 'Penetration Testing',
      icon: Shield,
      description: 'Sử dụng Burp Suite, Metasploit, Nmap để kiểm tra và đánh giá bảo mật hệ thống',
      color: '#ef4444',
    },
    {
      name: 'Cyber Security',
      icon: Shield,
      description: 'Bảo mật hệ thống, phân tích lỗ hổng, và triển khai giải pháp an ninh',
      color: '#22c55e',
    },
    {
      name: 'Network / Cloud',
      icon: Network,
      description: 'Thiết kế và quản lý mạng, triển khai hạ tầng cloud',
      color: '#3b82f6',
    },
    {
      name: 'DevOps',
      icon: Code,
      description: 'CI/CD, containerization, automation và quản lý hạ tầng',
      color: '#06b6d4',
    },
    {
      name: 'Database',
      icon: Database,
      description: 'Thiết kế và quản lý cơ sở dữ liệu, tối ưu hiệu suất',
      color: '#8b5cf6',
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
          <motion.h1 
            className="text-5xl lg:text-6xl font-heading font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text neon-glow">{"ABOUT ME"}</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Một kỹ sư đam mê công nghệ, luôn tìm kiếm những giải pháp sáng tạo 
            để giải quyết các thách thức trong lĩnh vực an ninh mạng.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="cyber-card rounded-2xl p-8 lg:p-12 mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-6 gradient-text flex items-center gap-3">
            <Server className="w-8 h-8 text-cyan-400" />
            Giới thiệu
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Tôi là <span className="text-cyan-400 font-semibold">Lê Võ Thành Long</span>, một kỹ sư an ninh mạng với niềm đam mê sâu sắc 
              về công nghệ và bảo mật thông tin. Với nền tảng vững chắc về mạng máy tính, 
              AI/ML, và DevOps, tôi luôn tìm kiếm những cách tiếp cận mới để bảo vệ hệ thống 
              và dữ liệu trong thời đại số.
            </p>
            <p>
              Sứ mệnh của tôi là <span className="text-purple-400 font-semibold">kết nối tương lai</span> thông qua việc xây dựng các giải pháp 
              công nghệ an toàn, hiệu quả và có thể mở rộng.
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
            {"Kỹ Năng"}
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
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 0 30px ${skill.color}40`
                  }}
                  className="cyber-card rounded-xl p-6"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                      border: `1px solid ${skill.color}50`
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" style={{ color: skill.color }} />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">{skill.name}</h3>
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
            {"Hành Trình"}
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{ background: 'linear-gradient(to bottom, #06b6d4, #8b5cf6, #06b6d4)' }}
            />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className={`absolute left-6 top-2 w-4 h-4 rounded-full ${
                      item.status === 'current' ? 'pulse-glow' : ''
                    }`}
                    style={{ 
                      backgroundColor: item.status === 'current' ? '#06b6d4' : '#4b5563',
                      boxShadow: item.status === 'current' ? '0 0 20px rgba(6, 182, 212, 0.8)' : 'none'
                    }}
                    whileHover={{ scale: 1.5 }}
                  />
                  
                  <motion.div 
                    className="cyber-card rounded-xl p-6"
                    whileHover={{ 
                      borderColor: 'rgba(6, 182, 212, 0.5)',
                      x: 10
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg text-cyan-400">{item.year}</span>
                      {item.status === 'current' && (
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-semibold neon-border"
                          style={{ backgroundColor: 'rgba(6, 182, 212, 0.2)', color: '#06b6d4' }}
                        >
                          ● ACTIVE
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
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
