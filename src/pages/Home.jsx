import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-primary/20 to-secondary/20" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              🎬 Discover Amazing Movies
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            DISCOVER{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MOVIES
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore and discover your favorite movies from around the world.
            Browse thousands of titles, search by name, and dive into detailed information.
          </p>
          
          <Link
            to="/movies"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose MovieExplorer?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your one-stop destination for discovering and exploring movies and TV shows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-dark-card p-8 rounded-2xl border border-dark-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Search</h3>
              <p className="text-gray-400">
                Search through thousands of movies and TV shows with our powerful search functionality.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-dark-card p-8 rounded-2xl border border-dark-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Detailed Info</h3>
              <p className="text-gray-400">
                Get comprehensive details including ratings, summaries, genres, and more for every title.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-dark-card p-8 rounded-2xl border border-dark-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fully Responsive</h3>
              <p className="text-gray-400">
                Enjoy a seamless experience across all your devices - desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-10 sm:p-16 border border-primary/30 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Explore?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Start browsing our extensive collection of movies and TV shows today.
              Your next favorite film is just a click away.
            </p>
            <Link
              to="/movies"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Browse Movies
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
