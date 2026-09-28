import { useEffect } from 'react'

function MovieModal({ movie, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!movie) return null

  const rating = movie.rating?.average || 'N/A'
  const year = movie.premiered ? movie.premiered.split('-')[0] : 'N/A'
  
  // Strip HTML tags from summary
  const stripHtml = (html) => {
    if (!html) return 'No description available.'
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-dark-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-dark-border animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="relative">
          {/* Backdrop image */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            {movie.image?.original ? (
              <img
                src={movie.image.original}
                alt={movie.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <span className="text-6xl">🎬</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
          </div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {movie.name}
          </h2>
          
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-accent text-xl">⭐</span>
              <span className="text-white font-semibold">{rating}</span>
              <span className="text-gray-400 text-sm">/ 10</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>📅</span>
              <span>{year}</span>
            </div>
            {movie.runtime && (
              <div className="flex items-center space-x-2 text-gray-300">
                <span>⏱️</span>
                <span>{movie.runtime} min</span>
              </div>
            )}
            {movie.status && (
              <div className="flex items-center space-x-2 text-gray-300">
                <span>📺</span>
                <span>{movie.status}</span>
              </div>
            )}
          </div>
          
          {/* Genres */}
          {movie.genres && movie.genres.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Genres
              </h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {stripHtml(movie.summary)}
            </p>
          </div>
          
          {/* Additional info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {movie.network?.name && (
              <div className="bg-dark-bg rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-1">Network</h4>
                <p className="text-white">{movie.network.name}</p>
              </div>
            )}
            {movie.language && (
              <div className="bg-dark-bg rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-1">Language</h4>
                <p className="text-white">{movie.language}</p>
              </div>
            )}
            {movie.type && (
              <div className="bg-dark-bg rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-1">Type</h4>
                <p className="text-white">{movie.type}</p>
              </div>
            )}
            {movie.officialSite && (
              <div className="bg-dark-bg rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-1">Official Site</h4>
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Visit Website
                </a>
              </div>
            )}
          </div>
          
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-primary/20"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
