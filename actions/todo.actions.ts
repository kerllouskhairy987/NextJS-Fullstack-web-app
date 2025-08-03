"use server";

import { todoFormValues } from '@/schema';
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

// ------------------------Start Get/Read------------------------------- //
export const getTodoListAction = async () => {
    // Error Handling
    return await prisma.todo.findMany({
        orderBy: {
            createdAt: 'desc'   // kero will add option to sort by [asc, desc] in drop down ---
        }
    });
}
// ------------------------Start Create------------------------------- //
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
// -----------------------Start Update-------------------------------- //
export const updateTodoAction = async ({ id, title, body, completed }: todoFormValues & { id: string }) => {
    await prisma.todo.update({
        where: {
            id
        },
        data: {
            title,
            body,
            completed,
        }
    })
    revalidatePath('/')
}
// -----------------------Start Delete-------------------------------- //
export const deleteTodoAction = async ({ id }: { id: string }) => {
    await prisma.todo.delete({
        where: {
            id
        }
    })
    // Update UI
    revalidatePath('/')
}
