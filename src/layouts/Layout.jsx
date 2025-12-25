import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg-white">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}

export default Layout


