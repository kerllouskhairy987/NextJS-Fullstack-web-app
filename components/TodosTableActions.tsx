"use client";

// React Hooks
import { useState } from "react";
// ShadCN UI
import { Button } from "./ui/button"
// Components
import { Spinner } from "./ui/Spinner";
// Icons
import { Pen, Trash } from "lucide-react"
import { deleteTodoAction } from "@/actions/todo.actions";


const TodosTableActions = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    return (
        <>
            <Button size={"icon"}>
                <Pen />
            </Button>
            <Button size={"icon"} variant={"destructive"}
                onClick={async () => {
                    setLoading(true);
                    setDisableBtn(true);
                    await deleteTodoAction({ id });
                    setLoading(false);
                    setDisableBtn(false);
                }}
                disabled={disableBtn}
            >
                {loading ? <Spinner /> : <Trash />}
            </Button>
        </>
    )
}

export default TodosTableActions