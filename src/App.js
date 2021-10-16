import Routes from './routes/Routes';
import '../src/scss/style.scss';
import MovieState from './components/context/movieState';

function App() {
  return (
    <MovieState>
      <Routes />
    </MovieState>
  );
}

export default App;
