import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import Form from './Form';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Realize seu cadastro.</h1>

        <Form />

        <Link to="/signin">
          <FiArrowLeft />
          Voltar para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
