import {Provider} from 'react-redux'
import Routers from './config/routers';
import store from './config/redux/store'

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
