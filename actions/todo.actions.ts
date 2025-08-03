"use server";

import { todoFormValues } from '@/schema';
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

// CRUD Operations
export const getTodoListAction = async () => {
    return await prisma.todo.findMany();
    // Error Handling
}
export const createTodoAction = async ({ title, body, completed }: todoFormValues) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed,
        }
    })
    // Update UI
    revalidatePath('/')
}
export const updateTodoAction = async () => { }
export const deleteTodoAction = async ({ id }: { id: string }) => {
    await prisma.todo.delete({
        where: {
            id
        }
    })
    // Update UI
    revalidatePath('/')
}
