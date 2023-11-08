import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
