export interface ITodo {
    id: string;
    title: string;
    body: string | null;
    completed: boolean;
    user_id?: string;
    createdAt: Date;
}

//  id: string;
//     title: string;
//     body: string | null;
//     completed: boolean;
//     createdAt: Date;