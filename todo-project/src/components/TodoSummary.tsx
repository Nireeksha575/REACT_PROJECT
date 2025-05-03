import {Todo} from "../types/todo"
export interface TodoSummaryProps{
    todos:Todo[];
    deleteAllCompleted:()=>void;
}
export default function TododSummary({todos,deleteAllCompleted}:TodoSummaryProps){
               const completedTodos=todos.filter(todo=>todo.completed);
               return(
                <div className="space-y-2 text-center">
                    <p className="text-sm font-medium">
                        {completedTodos.length}/{todos.length} todos completed.
                    </p>
                    {
                        completedTodos.length>0&&(
                            <button onClick={deleteAllCompleted}
                            className="text-red-500 hover:underline text-sm font-medium">
                                Delete all completed
                            </button>
                        )
                    }
                </div>
               )

}