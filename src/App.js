
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.jsx'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
