import { useParams, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { fetchMovieById } from "API";
import BackLink from "components/BackLink/BackLink";
import Sceleton from "components/Sceleton/Sceleton";
import { Container, MovieCard, Title, Overview, Genres, SecondaryTitle, AdditionalInfoCard, Link, ListItem, List } from "../pages/MovieDetails.styled";

const defaultImage = 'https://cdn.the-village.ru/the-village.ru/post_image-image/1jHOb464jtkGWX8LGBnHHw-article.png';

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
  
    useEffect(() => {
        async function findMovieById(id) {
            const results = await fetchMovieById(id);
            const movieToSave = {
                title: results.original_title,
                src: results.poster_path,
                year: results.release_date.slice(0, 4),
                score: Math.round(results.vote_average *10),
                genres: results.genres.map(genre=>genre.name).join(', '),
                overview: results.overview,
            }
      setMovie(movieToSave);
    }
    findMovieById(id);
  }, [id])
    

    return (
        <main>
            <Container>
                <BackLink to={location?.state?.from ?? '/'}>Go back</BackLink>
                <MovieCard>
                    <img src={movie.src ? `https://image.tmdb.org/t/p/w500/${movie.src}` : defaultImage} alt={movie.title} />
                    <div>
                        <div>
                            <Title>
                                {movie.title} ({movie.year})
                            </Title>
                            <p>User score: {movie.score}%</p>
                        </div>
                        <Overview>
                            <SecondaryTitle>Overview:</SecondaryTitle>
                            <p>
                                {movie.overview}
                            </p>
                        </Overview>
                        <Genres>
                            <SecondaryTitle>Genres:</SecondaryTitle>
                            <p>{movie.genres}</p>
                        </Genres>
                    </div>
                </MovieCard>
                <AdditionalInfoCard>
                    <Title>Additional information</Title>
                    <List>
                        <ListItem>
                            <Link to="cast" state={{from: location?.state?.from ?? '/'}}>Cast</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="reviews" state={{from: location?.state?.from ?? '/'}}>Reviews</Link>
                        </ListItem>
                    </List>
                    <Suspense fallback={<Sceleton/>}>
                        <Outlet />
                    </Suspense>
                </AdditionalInfoCard>
            </Container>
        </main>
  );
};

export default MovieDetails;