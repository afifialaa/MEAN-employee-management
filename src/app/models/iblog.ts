export interface BlogPost {
    title: string;
    content: string;

    comments: [Comment]

    createdAt?: Date;
    updatedAt?: Date;
}

export interface Comment{
    body: string
    postedOn: Date
}
