import './App.css';
import Footer from '../container/Footer/Footer';
import Main from '../container/Main/Main';
import Header from '../container/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
      <Main/>
      <Footer />    
      <div className="con">
        <p className="text">©WELBEX 2022. Все права защищены.</p>
        <a className="link" href="#">
          Политика конфиденциальности
        </a>
      </div>
      </div>
      <div className='block'>
      <img className="redBallB" src="/img/redball.svg" alt="" />
      <img className="redLig" src="/img/redlight.svg" alt="" />
      <img className="purBall" src="/img/purpleball.png" alt="" />
      <img className="purLig" src="/img/purplelight.svg" alt="" />
      </div>
    </div>
  );
}

export default App;
