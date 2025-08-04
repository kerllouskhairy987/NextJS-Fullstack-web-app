import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import Pagination from "@/components/Pagination";
import TodosTable from "@/components/TodoTable";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

interface IProps {
  searchParams?: {
    page?: string;
  };
}

export default async function Home({ searchParams }: IProps) {
  const { userId } = await auth()

  const page = parseInt(searchParams?.page || "1");
  const limit = 10;

  const { todos, totalCount } = await getUserTodoListAction({ userId, page, limit });

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="container mx-auto px-2 sm:px-5 overflow-hidden">
      {/* <pre>{JSON.stringify(todos, undefined, 2)}</pre> */}

      <div className="flex items-center justify-center my-3">
        <AddTodoForm userId={userId} />
      </div>
      <TodosTable todos={todos} totalCount={totalCount} />

      <Pagination page={page} totalPages={totalPages} />
    </div>
  );
}