import React from 'react';
import { FiLogIn, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import Form from './Form';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Preencha seus dados para entrar</h1>

        <Form />

        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
        <a href="https://github.com/cicero-cit/basic-front">
          <FiGithub />
          Source code
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
