import React, { useState, useCallback } from 'react';
import { Container } from './styles';
import { setTestId } from '../../utils/getTestId';
import { InputInterface } from './props';

const Input: React.FC<InputInterface> = ({
  name,
  icon: Icon,
  testId,
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!rest.value);
  }, [rest.value]);

  const getTestIdData = { testId, index: rest.index, name: 'input' };

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        data-testid={setTestId(getTestIdData)}
        name={name}
        aria-label={name}
      />

      {error && <div className="error">{error}</div>}
    </Container>
  );
};

export default Input;
