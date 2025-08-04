import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth()
  const todos = await getUserTodoListAction({ userId })

  return (
    <div>
      {/* <pre>{JSON.stringify(todos, undefined, 2)}</pre> */}

      <AddTodoForm userId={userId} />
      <TodosTable todos={todos} />
    </div>
  );
}
// font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20
