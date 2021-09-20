import ToDos from './components/ToDos'

function App() {
  const listItems = [
    { task: 'create lesson', done: false },
    { task: 'clean apartment', done: false }
  ]

  return (
    <div className="App">
      <ToDos tasks={listItems} />
    </div>
  );
}

export default App;
