import './App.css';
import CollapsibleExample from './components/navbar';
import AutoLayoutExample from './components/first_grid';
import About from './components/about';
import Cards from './components/card';
import  CustomCarousel from './components/carousal';

 
function App() {
  return (
    <div className="">
      <CollapsibleExample/>
      <AutoLayoutExample/>
      <About/>
      <Cards/>
      <CustomCarousel/>
    </div>
  );
}

export default App;
