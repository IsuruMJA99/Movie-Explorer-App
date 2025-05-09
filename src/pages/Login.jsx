import { useState } from 'react'
import { FiUser, FiLock } from 'react-icons/fi'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!username) {
      return setError('Username is required')
    }
    if (!password) {
      return setError('Password is required')
    }
    
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <div className="bg-gray-600 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In to Movie Explorer</h1>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FiUser />
              </span>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input w-full pl-10"
                placeholder="Enter your username"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FiLock />
              </span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full pl-10"
                placeholder="Enter your password"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary w-full py-3"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Demo: Enter any username and password</p>
        </div>
      </div>
    </div>
  )
}

export default Login