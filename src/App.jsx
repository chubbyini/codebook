import { AllRoutes } from './Routes/Allroutes';
import { Footer } from './components/Layouts/Footer';
import { Header } from './components';


function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;