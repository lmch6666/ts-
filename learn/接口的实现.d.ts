interface A {
    go: (a: number, b: number) => void;
}
interface B {
    to: (a: string, b: string) => void;
}
declare class Father {
    name: string;
    age: number;
    constructor();
}
declare class Son extends Father implements A, B {
    constructor();
    go(a: number, b: number): void;
    to(a: string, b: string): void;
}
declare function use(a: A): void;
