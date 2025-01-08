import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Header1 from './components/Header/Header1'
import Header2 from './components/Header2/Header2'
import Introduction from './components/Introduction/Introduction'
import Brandcards from './components/Brandcards/Brandcards'
import Ceramiccards from './components/Ceramiccards/CeramicCards'

function App() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Introduction/>
      <Brandcards/>
      <Ceramiccards/>
      
    </>
  );
}

export default App;
