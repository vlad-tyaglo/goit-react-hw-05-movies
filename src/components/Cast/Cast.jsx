import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "API";
import { List, ListItem, Section, ActorInfo, Name } from "./Cast.styled";

const defaultImage = 'https://cdn.the-village.ru/the-village.ru/post_image-image/1jHOb464jtkGWX8LGBnHHw-article.png';

const Cast = () => {
    const { id } = useParams();
    const [actors, setActors] = useState([]);
  
    useEffect(() => {
        async function fetchCast(id) {
            const { cast } = await fetchMovieCast(id);
            const casts = cast.map(({ id, name, profile_path, character }) => ({
                id,
                name,
                src: profile_path,
                character,
            }))
            setActors(casts);
    }
    fetchCast(id);
    }, [id])
    
  return (
      <Section>
          {actors.length !== 0 ?
              (<List>
                  {actors.map((({ id, src, name, character }) => (
                      <ListItem key={id}>
                          <img src={src ? `https://image.tmdb.org/t/p/w500/${src}` : defaultImage} alt={name} />
                          <ActorInfo>
                              <Name>{name}</Name>
                              <p>Character: {character}</p>
                          </ActorInfo>
                      </ListItem>)))}
              </List>) : (<p>We don't have any additional information about this movie.</p>)}
    </Section>
  );
};

export default Cast;