import Routes from './routes/Routes';
import '../src/scss/style.scss';
import MovieState from './components/context/Movies/movieState';
import DropzoneState from './components/context/Dropzone/dropzoneState';
import ApiState from './components/context/Api/ApiState';
import api from './api';

function App() {
  return (
    <ApiState fetchUrl={api.POPULAR_URL}>
      <MovieState>
        <DropzoneState>
          <Routes />
        </DropzoneState>
      </MovieState>
    </ApiState>
  );
}

export default App;
