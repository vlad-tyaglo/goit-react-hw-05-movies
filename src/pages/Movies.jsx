import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieByName } from '../API';
import MovieList from "components/MovieList/MovieList";
import SearchBox from "components/SearchBox/SearchBox";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

useEffect(() => {
  const query = searchParams.get('query');
  
  if (!query) return;

  async function searchMovies(currentPage) {
    try {
      const { results, total_pages } = await fetchMovieByName(query, currentPage);
      if (results.length === 0) {
        return alert('No movie with such name')
      }
      const moviesToSave = results.map(result => ({ id: result.id, title: result.title }))
      setMovies(moviesToSave);
      setTotalPages(total_pages);
    } catch (error) {
      return alert('Something went wrong!')
    }
  }
  searchMovies(page);
}, [searchParams, page])

  const onSubmit = (query) => {
    setSearchParams({ query });
  }
  
  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  return (
    <main>
      <SearchBox onSubmit={onSubmit} />
      {movies.length !== 0 && <MovieList movies={movies} header={`Movies containing the query "${searchParams.get('query')}"`} changePage={handlePageChange} totalPages={totalPages}/>}
    </main>
  );
};

export default Movies;