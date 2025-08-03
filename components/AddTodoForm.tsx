"use client";

// Hooks
import { useForm } from "react-hook-form";
// Zod
import { zodResolver } from "@hookform/resolvers/zod";
// VALIDATION SCHEMA
import { todoFormSchema, todoFormValues } from "@/schema";
// Components ShadCN UI
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "./ui/checkbox";
// icons
import { Plus } from "lucide-react";
import { createTodoAction } from "@/actions/todo.actions";

const AddTodoForm = () => {
    // DEFAULT VALUES
    const defaultValues: Partial<todoFormValues> = {
        title: "",
        body: "",
        completed: false,
    };

    // FORM // ***** FIRST STEP
    const form = useForm<todoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
    });

    const onSubmit = async (data: todoFormValues) => {
        console.log(data)
        await createTodoAction(data);
    };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button>
                        {" "}
                        <Plus /> New Todo
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Adding Todo</DialogTitle>
                        <DialogDescription>Add a new task to your to-do list and stay organized.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                            >
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Title" {...field} />
                                            </FormControl>
                                            <FormDescription></FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="body"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Short Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Description"
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                You can write a short description about your next todo
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="completed"
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormControl>
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} {...field} />
                                            </FormControl>
                                            <FormLabel> completed </FormLabel>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    );
};

export default AddTodoForm;
