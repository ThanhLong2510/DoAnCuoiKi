import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}

export default Layout
