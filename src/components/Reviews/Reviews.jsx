import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "API";
import { List, ListItem, Section, Title } from "./Reviews.styled";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
        async function fetchReviews(id) {
            const { results } = await fetchMovieReviews(id);
            
            const review = results.map(({id, author, content}) => ({id, author, content}))
            setReviews(review);
    }
    fetchReviews(id);
    }, [id])
    
  return (
      <Section>
          {reviews.length !== 0 ? 
              (<List>
                  {reviews.map((({id, author, content}) => (<ListItem key={id}>
                      <Title>Author: {author}</Title>
                      <p>{content}</p>
                  </ListItem>)))}
              </List>) : (<p>We don't have any reviews on this movie.</p>) }
      </Section>
  );
};

export default Reviews;