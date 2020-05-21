import React, { useCallback, useState, SyntheticEvent, useRef } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import getValidationErrors from '../../../utils/getValidationErrors';
import { ErrorForm } from '../../../utils/DefaultPrivateProps';
import { useToast } from '../../../hooks/toast';
import UserAction from '../../../actions/User';

const Form: React.FC = () => {
  const pageTestId = 'signup-form';

  const history = useHistory();
  const dispatch = useDispatch();

  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({} as ErrorForm);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      try {
        const schema = Yup.object().shape({
          userName: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Minimo de 6 digitos'),
        });

        const user = {
          userName: formRef.current.userName.value,
          email: formRef.current.email.value,
          password: formRef.current.password.value,
        };

        await schema.validate(user, {
          abortEarly: false,
        });

        dispatch(await UserAction.signup(user));

        history.push('/signin');

        addToast({
          type: 'success',
          title: 'Bem vindo ;)',
          description: 'Agora, insira seus dados e comece a cadastrar',
        });
      } catch (err) {
        setErrors(getValidationErrors(err));
      }
    },
    [history, addToast, dispatch],
  );

  return (
    <Container>
      <form onSubmit={handleSubmit} ref={formRef}>
        <Input
          testId={pageTestId}
          index={0}
          name="userName"
          icon={FiUser}
          placeholder="Nome"
          error={errors.userName}
        />
        <Input
          testId={pageTestId}
          index={1}
          name="email"
          icon={FiMail}
          placeholder="E-mail"
          error={errors.email}
        />

        <Input
          testId={pageTestId}
          index={2}
          name="password"
          icon={FiLock}
          placeholder="Senha"
          error={errors.password}
          type="password"
        />
        <Button testId={pageTestId} type="submit">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default Form;
