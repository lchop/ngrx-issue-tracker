//Such type alias declarations are generally more powerful 
//than interfaces since they can give a name to any type
//- including things like functions or primitives.
export type Issue = {
    id: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "high"; resolved: boolean;
};

