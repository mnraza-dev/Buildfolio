import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <Navbar/>
          <Routes>
            <Route path="/" element={
              <div className="mt-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome to Buildfolio</h1>
                <p className="text-gray-300">Your portfolio is ready to be built!</p>
              </div>
            } />
            <Route path="/products" element={
              <div className="mt-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Products</h1>
                <p className="text-gray-300">Our amazing products will be here.</p>
              </div>
            } />
            <Route path="/stories" element={
              <div className="mt-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Customer Stories</h1>
                <p className="text-gray-300">Read about our customer success stories.</p>
              </div>
            } />
            <Route path="/pricing" element={
              <div className="mt-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Pricing</h1>
                <p className="text-gray-300">Choose the perfect plan for you.</p>
              </div>
            } />
            <Route path="/docs" element={
              <div className="mt-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Documentation</h1>
                <p className="text-gray-300">Learn how to use our platform.</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App