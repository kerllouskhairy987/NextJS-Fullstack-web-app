// ShadCN UI
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
// Icons
import { Pen, Trash } from "lucide-react"
import { getTodoListAction } from "@/actions/todo.actions"
// Interfaces And Types
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";


export default async function TodosTable({ todos }: { todos: ITodo[] }) {

    return (
        <Table>
            <TableCaption>A list of your recent todos.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos.map((todo) => (
                    <TableRow key={todo.id}>
                        <TableCell className="font-medium">{todo.id}</TableCell>
                        <TableCell>{todo.title}</TableCell>
                        <TableCell>
                            {todo.completed ? <Badge>Completed</Badge> : <Badge variant={"secondary"}>Uncompleted</Badge>}
                        </TableCell>
                        <TableCell className="flex justify-end items-center space-x-2">
                            <Button size={"icon"}>
                                <Pen />
                            </Button>
                            <Button size={"icon"} variant={"destructive"}>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{todos.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
