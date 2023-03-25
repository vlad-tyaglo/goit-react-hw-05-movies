import PropTypes from 'prop-types';
import { Button, Container, Form, Input } from "./SearchBox.styled";

const SearchBox = ({ onSubmit }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    if (!query) {
      return alert('Please, enter something')
    }

    onSubmit(query);
    event.target.reset();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="query"
          type="text"
        />
        <Button type="submit">Search</Button>
      </Form>
    </Container>
    
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;