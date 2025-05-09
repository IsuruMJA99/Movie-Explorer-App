import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, user } = useAuth()
  const navigate = useNavigate()

  if (user) {
    return <Navigate to="/" />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!username) {
      return setError('Username is required')
    }
    if (!password) {
      return setError('Password is required')
    }

    const success = login(username, password)
    if (success) {
      navigate('/')
    } else {
      setError('Invalid login credentials')
    }
  }

  return (
    <div className="max-w-md mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          <span className="text-accent text-3xl font-bold">Movie</span>{" "}
          <span className="text-primary text-3xl font-bold">Explorer</span>
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2 text-gray-700">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Demo: Enter any username and password</p>
        </div>
      </div>
    </div>
  )
}

export default Login
