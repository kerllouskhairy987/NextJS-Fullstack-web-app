import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoListAction()

  return (
    <div>
      {/* <pre>{JSON.stringify(todos, undefined, 2)}</pre> */}

      <AddTodoForm />
      <TodosTable todos={todos} />
    </div>
  );
}
// font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20
