"use server";

import { todoFormValues } from '@/schema';
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

// ------------------------Start Get/Read------------------------------- //
export const getUserTodoListAction = async ({ userId }: { userId: string | null }) => {
    // Error Handling DONE BY USING GLOBAL ERROR IN NEXTJS
    return await prisma.todo.findMany({
        where: {
            user_id: userId as string,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })
}
// ------------------------Start Create------------------------------- //
export const createTodoAction = async ({ title, body, completed }: todoFormValues, { userId }: { userId: string | null }) => {
    await prisma.todo.create({
        data: {
            user_id: userId as string,
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
