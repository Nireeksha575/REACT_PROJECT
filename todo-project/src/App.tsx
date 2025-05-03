import AddTodoForm from "./components/addTodoForm"
import TodoList from "./components/TodoList"
import TododSummary from "./components/TodoSummary"
import useTodos from "./hooks/useTodos"

function App() { 
  const {
    todos,
    SetTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted

  }=useTodos();
  return (
    <>
    <main className="py-10 bg-red-50 h-screen space-y-5">
       <h1 className="font-bold text-3xl text-center">Your Todos</h1>
       <div className="max-w-lg mx-auto bg-blue-100 p-3 rounded-md shadow-md space-y-6">
        <AddTodoForm 
        onSubmit={addTodo}/>
        <TodoList
        todos={todos}
        onCompletedChange={SetTodoCompleted}
        onDelete={deleteTodo}
        />
      </div>
      <TododSummary
      todos={todos}
      deleteAllCompleted={deleteAllCompleted}/>
    </main>
    </>
  )
}

export default App
