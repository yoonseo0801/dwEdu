import TodoForm from "../component/TodoForm"
import TodoList from "../component/TodoList"

export default function TodoPage(){
    return(
        <div className="mx=auto max-w-x1 p-10 space-y-4">
            <h1 className="text-x1">
                오늘 할일 with 파이어베이스
            </h1>

            <TodoForm/>
            <TodoList/>
        </div>
    )
}