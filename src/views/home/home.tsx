import { useAppDispatch, useAppSelector } from '../../hooks';
import { switchTheme } from '../../reducers/theme';
import Button from '../../shared/button/button';
import { NavButton } from '../../shared/navButton/navButton';

import { Container } from './home.styles';
const Home = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  return (
    <>
      <Container>
        <h1>Home page</h1>
        <h2>current theme: {theme}</h2>
      </Container>
      <Button onClick={() => dispatch(switchTheme())}>Change Theme</Button>
      <NavButton onClick={() => {}}>Nav</NavButton>
    </>
  );
};

export default Home;
