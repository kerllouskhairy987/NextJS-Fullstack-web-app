// Components
import TodosTableActions from "./TodosTableActions";
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
import { Badge } from "./ui/badge";
// Interfaces And Types
import { ITodo } from "@/interfaces";

interface IProps {
    todos: ITodo[],
    totalCount: number
}

export default function TodosTable({ todos, totalCount }: IProps) {

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
                {todos.length !== 0 && todos.map((todo) => (
                    <TableRow key={todo.id}>
                        <TableCell className="font-medium">{todo.id}</TableCell>
                        <TableCell>{todo.title}</TableCell>
                        <TableCell>
                            {todo.completed ? <Badge>Completed</Badge> : <Badge variant={"secondary"}>Uncompleted</Badge>}
                        </TableCell>
                        <TableCell className="flex justify-end items-center space-x-2">
                            <TodosTableActions todo={todo} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{totalCount}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
