import { useState, useEffect } from "react";
import { fetchTrendMovies } from "API";
import MovieList from "components/MovieList/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    async function fetchStartMovies(currentPage) {
      const response = await fetchTrendMovies(currentPage);
      const { results, total_pages } = response;
      const moviesToSave = results.map(result => ({ id: result.id, title: result.title }))
      setMovies(moviesToSave);
      setTotalPages(total_pages);
    }
    fetchStartMovies(page);
  }, [page, ])

  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  return (
    <main>
      {movies.length !== 0 && <MovieList movies={movies} header={'Trending today'} changePage={handlePageChange} totalPages={totalPages} />}
    </main>
  );
};

export default Home;