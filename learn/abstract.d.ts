declare abstract class Person1 {
    abstract getname(): void;
    abstract getCheckout(): string;
}
declare class Me extends Person1 {
    constructor();
    getCheckout(): string;
    getname(): void;
}
declare class User {
    id?: string;
    age?: number;
    sleep?: () => void;
    run(): string;
}
interface User {
    name: string;
    hobby: string;
    eat: () => string;
}
declare const user: User;
