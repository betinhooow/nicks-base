import styled from 'styled-components';
import { shade } from 'polished';
import { Theme } from '../../../styles/theme';

export const Container = styled.div`
  margin: 80px 0;
  width: 340px;
  text-align: center;

  h1 {
    margin-bottom: 24px;
  }

  a {
    color: ${props => props.theme.darkBlue};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, Theme.darkBlue)};
    }
  }
`;
