import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Header1 from './components/Header/Header1'
import Header2 from './components/Header2/Header2'
import Introduction from './components/Introduction/Introduction'
import Brandcards from './components/Brandcards/Brandcards'
import Ceramiccards from './components/Ceramiccards/Ceramiccards'
import Accordion from './components/Accordion/Accordion'
import Popularcards from './components/Popularcards/Popularcards'
import Benefit from './components/Benefit/Benefit'
import London from './components/London/London'
import Footers from './components/Footers/Footers'

function App() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Introduction/>
      <Brandcards/>
      <Ceramiccards/>
      <Accordion/>
      <Popularcards/>
      <Benefit/>
      <London/>
      <Footers/>
     
      
    </>
  );
}

export default App;
