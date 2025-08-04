"use client";

// React Hooks
import { useState } from "react";
// Actions
import { deleteTodoAction } from "@/actions/todo.actions";
// ShadCN UI
import { Button } from "./ui/button"
// Components
import { Spinner } from "./ui/Spinner";
import EditTodoForm from "./EditTodoForm";
// Icons
import { Trash } from "lucide-react"
// Interfaces And Types
import { ITodo } from "@/interfaces";


const TodosTableActions = ({ todo }: { todo: ITodo }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <EditTodoForm todo={todo} />
            <Button size={"icon"} variant={"destructive"}
                onClick={async () => {
                    setLoading(true);
                    await deleteTodoAction({ id: todo.id });
                    setLoading(false);
                }}
                disabled={loading}
            >
                {loading ? <Spinner /> : <Trash />}
            </Button>
        </>
    )
}

export default TodosTableActions