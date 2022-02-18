interface Test1 {
    fn: () => void;
}
declare const Inject: (fn?: () => void) => (target: any) => void;
declare const HA: () => (target: Function) => void;
declare class Test1 {
}
declare const test: Test1;
declare const fnn: (key: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare const methodDe: (...args: any) => void;
declare const sleepFn: (target: object, propertyKey: string, descriptor: PropertyDescriptor) => void;
interface Test2 {
    fn: () => void;
}
declare class Test2 {
    private _data;
    role: string;
    constructor();
    get goOut(): string;
    set goOut(val: string);
    sayHello(name: string, age: number): void;
}
declare const test2: Test2;
declare function fib(n: number, a: number, b: number): number;
