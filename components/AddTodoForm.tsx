"use client";

// Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
// Actions
import { createTodoAction } from "@/actions/todo.actions";
// Zod
import { zodResolver } from "@hookform/resolvers/zod";
// VALIDATION SCHEMA
import { todoFormSchema, todoFormValues } from "@/schema";
// Components
import { Spinner } from "./ui/Spinner";
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

const AddTodoForm = ({ userId }: { userId: string | null }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

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
        setLoading(true);
        await createTodoAction(data, { userId });
        setLoading(false);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button> <Plus /> New Todo </Button>
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
                                        <FormItem className="flex">
                                            <FormControl>
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                            <FormLabel> Completed </FormLabel>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit" disabled={loading}>{loading ? <><Spinner /> Saving</> : "Save Changes"}</Button>
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
