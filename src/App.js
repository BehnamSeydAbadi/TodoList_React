import "./styles/styles.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main>
      <div className='card'>
        <div className='card-header'>
          Todo List
          <div className='card-description'>
            Get things done, one item at a time.
          </div>
          <div className='card-line'></div>
        </div>
        <TodoList />
      </div>
    </main>
  );
}

export default App;
