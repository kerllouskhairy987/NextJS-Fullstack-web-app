import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth()
  const todos = await getUserTodoListAction({ userId })

  return (
    <div className="container mx-auto px-2 sm:px-5 overflow-hidden">
      {/* <pre>{JSON.stringify(todos, undefined, 2)}</pre> */}

      <div className="flex items-center justify-center my-3">
        <AddTodoForm userId={userId} />
      </div>
      <TodosTable todos={todos} />
    </div>
  );
}