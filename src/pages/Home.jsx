import { FiTrendingUp } from 'react-icons/fi'

const Home = () => {
  return (
    <div className="space-y-10">
     
      <section className="bg-gradient-to-r from-secondary to-primary text-white rounded-xl p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Movie Explorer
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-6">
          Discover trending movies, search for your favorites, and keep track of what you want to watch.
        </p>
      </section>

     
      <section>
        <div className="flex items-center mb-4">
          <FiTrendingUp className="text-2xl text-accent mr-2" />
          <h2 className="text-2xl font-bold">Trending Movies</h2>
        </div>
       
      </section>
    </div>
  )
}

export default Home
