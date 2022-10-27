import React from 'react';
import styled, {css} from 'styled-components';
import palette from '../../lib/styles/palette';
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import {Link} from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  
  
  

  background: ${palette.gray[7]};
  
  &:hover {
    background: ${palette.gray[6]};
  }

  ${props =>
          props.fullWidth &&
          css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
            
      font-size: 1.125rem;
    `}

  ${props =>
          props.cyan &&
          css`
      background: ${palette.blue[10]};
      &:hover {
        background: ${palette.blue[9]};
      }
    `}
  
`;

const StyledButton = styled.button`
  
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
  
`;



const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    );
};



export default withRouter(Button);