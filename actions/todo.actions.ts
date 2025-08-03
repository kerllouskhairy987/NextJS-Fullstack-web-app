"use server";

import { todoFormValues } from '@/schema';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// CRUD Operations
export const getTodoListAction = async () => {
    return await prisma.todo.findMany();
    // Error Handling
}
export const createTodoAction = async ({ title, body }: todoFormValues) => {
    return await prisma.todo.create({
        data: {
            title,
            body,
        }
    })
}
export const updateTodoAction = async () => { }
export const deleteTodoAction = async () => { }
