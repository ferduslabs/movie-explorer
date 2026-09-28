import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'

function Movies() {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [error, setError] = useState(null)

  // Fetch popular shows on initial load
  useEffect(() => {
    fetchPopularShows()
  }, [])

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        searchMovies(searchQuery)
      } else {
        fetchPopularShows()
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const fetchPopularShows = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://api.tvmaze.com/shows')
      if (!response.ok) throw new Error('Failed to fetch shows')
      const data = await response.json()
      // Sort by rating and take top 50
      const sorted = data
        .filter(show => show.rating?.average)
        .sort((a, b) => b.rating.average - a.rating.average)
        .slice(0, 50)
      setMovies(sorted)
    } catch (err) {
      setError('Failed to load movies. Please try again later.')
      console.error('Error fetching shows:', err)
    } finally {
      setLoading(false)
    }
  }

  const searchMovies = async (query) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
      if (!response.ok) throw new Error('Failed to search shows')
      const data = await response.json()
      setMovies(data.map(item => item.show))
    } catch (err) {
      setError('Failed to search movies. Please try again later.')
      console.error('Error searching shows:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSeeDetails = (movie) => {
    setSelectedMovie(movie)
  }

  const handleCloseModal = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {searchQuery ? `Results for "${searchQuery}"` : 'Browse Movies'}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {searchQuery 
              ? `Found ${movies.length} result${movies.length !== 1 ? 's' : ''} for your search.`
              : 'Discover popular movies and TV shows from around the world.'
            }
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="🔍 Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">😕</span>
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <button
              onClick={searchQuery ? () => searchMovies(searchQuery) : fetchPopularShows}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-gray-400">Loading movies...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🎬</span>
            <h3 className="text-xl font-semibold text-white mb-2">No movies found</h3>
            <p className="text-gray-400">
              {searchQuery 
                ? `No results found for "${searchQuery}". Try a different search term.`
                : 'No movies available right now.'
              }
            </p>
          </div>
        )}

        {/* Movie Grid */}
        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSeeDetails={handleSeeDetails}
              />
            ))}
          </div>
        )}
      </div>

      {/* Movie Modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Movies
