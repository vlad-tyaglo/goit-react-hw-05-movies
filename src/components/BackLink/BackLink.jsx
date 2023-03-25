
import { StyledLink } from "./BackLink.styled";
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
}; 

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
};

export default BackLink;