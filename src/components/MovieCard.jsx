function MovieCard({ movie, onSeeDetails }) {
  const rating = movie.rating?.average || 'N/A'
  const year = movie.premiered ? movie.premiered.split('-')[0] : 'N/A'
  
  return (
    <div className="bg-dark-card rounded-xl overflow-hidden border border-dark-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group">
      <div className="relative aspect-[2/3] overflow-hidden">
        {movie.image?.medium ? (
          <img
            src={movie.image.medium}
            alt={movie.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-dark-border flex items-center justify-center">
            <span className="text-4xl">🎬</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
          <span className="text-accent">⭐</span>
          <span className="text-white text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1" title={movie.name}>
          {movie.name}
        </h3>
        
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <span>📅 {year}</span>
          {movie.genres && movie.genres.length > 0 && (
            <span className="ml-2 truncate">• {movie.genres[0]}</span>
          )}
        </div>
        
        <button
          onClick={() => onSeeDetails(movie)}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-primary/20"
        >
          See Details
        </button>
      </div>
    </div>
  )
}

export default MovieCard
