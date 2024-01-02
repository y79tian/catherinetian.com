import { useAppDispatch, useAppSelector } from '../../hooks';
import { switchTheme } from '../../reducers/theme';

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
      <button onClick={() => dispatch(switchTheme())}>change theme</button>
    </>
  );
};

export default Home;
