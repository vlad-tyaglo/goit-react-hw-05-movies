import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Container, List, ListItem, Link } from "./MovieList.styled";
import { PaginatedItems } from '../Pagination/Pagination';

const MovieList = ({movies, header, totalPages, changePage}) => {
  const location = useLocation();

  return (
    <Container>
      {header && <h1>{ header}</h1>}
          <List>
            {movies.map(({ id, title }) => (
              <ListItem key={id}>
                <Link to={`/movies/${id}`} state={{from: location}}>
                  {title}
                </Link>
            </ListItem>
            ))}
      </List>
      {totalPages > 1 && <Container>
        <PaginatedItems
          onPageChange={changePage}
          pageCount={totalPages} />
      </Container>}
      
      </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
  header: PropTypes.string,
  totalPages: PropTypes.number,
  changePage: PropTypes.func,
};

export default MovieList;