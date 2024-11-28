import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TelaMotorista from './pages/TelaMotorista';
import MainLayout from './layouts/MainLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tela-motorista" element={<TelaMotorista />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
