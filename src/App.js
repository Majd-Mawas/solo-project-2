import './App.css';
import Nav from './components/nav'
import Main from './components/main'
import datas from './data'

const mainData = datas.map(data=>

  <Main {...data} key={data.key}/>
  
  )

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='main-container'>
      <Main />
      {mainData}
      </div>
    </div>
  );
}

export default App;
