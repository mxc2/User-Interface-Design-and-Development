import './App.css'
import Covid from './components/Covid';
import Header from './components/Header';
import InfoList from './components/InfoList';

import { firstInfo, fourthInfo, secondInfo, thirdInfo } from './components/Constants';


function App() {

  return (
    <div>
      <Covid />
      <Header />
      <div className='content'>
        <InfoList infos={firstInfo}/>
        <InfoList infos={secondInfo}/>
        <InfoList infos={thirdInfo}/>
        <InfoList infos={fourthInfo}/>
      </div>
    </div>
  );
}

export default App;
