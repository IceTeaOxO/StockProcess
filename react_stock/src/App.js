import './App.css';
import KLineChart from './components/charts/KLineChart';
import './styles/tailwind.css'
import Layout from './components/layout/latout1';
function App() {
  return (
    <div className="App">
      
      <main>
        {/* <Layout /> */}
        <KLineChart />
      </main>
    </div>

  );
}

export default App;
