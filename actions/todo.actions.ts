"use server";

import { todoFormValues } from '@/schema';
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

// ------------------------Start Get/Read------------------------------- //
export const getUserTodoListAction = async ({ userId, page = 1, limit = 10 }: { userId: string | null, page?: number, limit?: number }) => {
    // Error Handling DONE BY USING GLOBAL ERROR IN NEXTJS
    const skip = (page - 1) * limit;
    const [todos, totalCount] = await Promise.all([
        await prisma.todo.findMany({
            skip,
            take: limit,
            where: {
                user_id: userId as string,
            },
            orderBy: {
                createdAt: 'desc',
            }
        }),
        await prisma.todo.count({
            where: {
                user_id: userId as string,
            }
        })
    ])
    return {todos, totalCount}
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
