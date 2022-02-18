declare enum type {
    qew = "12321"
}
declare let data: unknown;
declare function throwError(params: string): never;
declare function noreturnvalue(params: string): never;
interface onee {
    name: 'haha';
}
interface twoo {
    name: 'hehe';
    age: number;
}
declare type merge = onee | twoo;
declare function tst(params: merge): void;
declare let str: any;
declare let num: number;
declare const obj1: {
    userinfo?: {
        id?: string;
        name?: string;
    };
};
declare const id2: string | undefined;
declare const obj23: {
    readonly l: "12312";
};
declare function handleRequest(url: string, method: "GET" | "POST"): void;
declare const req: {
    url: string;
    method: string;
};
declare const reqQ: {
    url: string;
    method: "GET";
};
declare enum Methods {
    "POST" = 0,
    "GET" = 1
}
declare function handleRequest(url: string, methods: keyof typeof Methods): void;
declare type req = {
    url: string;
    methods: keyof typeof Methods;
};
interface UserInfo {
    id?: string;
    age?: number;
    name?: string;
    hobby?: string;
    [key: string]: any;
}
interface Obj {
    lable: string;
    name: string;
    age?: number;
    readonly y: number;
}
interface ClockInterface {
    currentTime: string;
    setTime(d: string): void;
}
declare class NAME {
    constructor();
}
declare class Clock implements ClockInterface {
    currentTime: string;
    setTime(d: string): void;
    constructor(h: number, m: number);
}
declare class QWE extends NAME implements Obj, UserInfo {
    constructor();
    lable: string;
    name: string;
    age?: number | undefined;
    y: number;
}
declare type qee = {
    content: string;
};
interface Iuse {
    name: string;
    age: number;
}
declare type Iuse1 = {
    name: string;
    age: number;
};
interface Iusee {
    name: string;
}
interface Iuseee extends Iusee {
    age: number;
}
declare type Iuse2 = {
    name: string;
};
declare type Iuse22 = Iuse2 & {
    age: number;
};
declare type name = string;
interface Idog {
    name: string;
    run: () => void;
}
interface Icat {
    name: string;
    jiao: () => void;
}
interface Kezhixing {
    (a1: number, a2: number): number;
}
declare const fnnnnn: Kezhixing;
interface fasdj extends Icat, Idog {
}
declare let testobjj: fasdj;
declare type pet = Idog | Icat;
interface Iuseee {
    name: string;
    age: number;
}
interface Iuseee {
    sex: string;
}
interface Person {
    id: string;
    name: string;
}
interface Anam {
    petname: string;
}
declare type dataa = Person & Anam;
declare const dd: dataa;
declare function otherExtends<T, K>(one: T, two: K): T & K;
declare function otherExtends1<T, K>(one: T, two: K): T & K;
declare type val = string | number;
declare const v1: val;
declare const v2: val;
declare type oval = 1000 | 2000 | 3000;
declare let v4: oval;
declare type fnn = (x: number, y: number) => number;
declare let fn: (x: number, y: number) => number;
declare let myAdd: (baseValue: number, increment: number) => number;
declare function name1(params: boolean): string | number;
declare const res: number;
declare let a: string;
declare let d: number;
declare let e: boolean;
declare let b: 99;
declare let arr: readonly [string, 12, 321, "3213", 99, {
    readonly name: "1312312312";
}, number, true];
declare let c: 12;
declare let obj: {
    readonly name: "131231";
};
declare function asd(): readonly [string, (x: number, y: number) => number];
declare let q: string, p: (x: number, y: number) => number;
declare function gen<E, T, K>(aa: E, params: T, par: K): T;
declare function id<T>(params: T): T;
declare const str1: string;
interface fanxingkou<T = undefined> {
    code: 200 | 300 | 400;
    dataa: T | null;
    message: string;
    [key: string]: any;
}
declare const request: {
    getdata(action: string): Promise<any>;
};
declare const getResult: () => Promise<void>;
declare class Count<T> {
    init: T | undefined;
    count: ((x: T, y: T) => T) | undefined;
}
declare const obj11: {
    title: string;
    like1: number;
};
declare type Tj = typeof obj11;
declare const obj2: Tj;
declare let stt: number;
declare type TTT = typeof stt;
declare let sss: TTT;
declare function gen1<T extends string>(params: T): void;
declare function gen333<E>(params: E[]): void;
declare function identity<T>(arg: T): T;
declare let myIdentity: <T>(arg: T) => T;
interface test1 {
    name: string;
    age: number;
    address: string;
}
declare type datee1 = keyof test1;
declare let dddd: datee1;
declare type Tname = "aaaa" | "bbbb" | "cccc";
declare type ADD = {
    [key in Tname]: number;
};
declare const ooo: ADD;
declare function getshuju<T extends {
    [key: string]: number;
}>(params: T, key: keyof T): number;
declare let objj: {
    a: number;
    b: number;
};
interface grade<T extends {
    [key in keyof T]?: string;
} = {}> {
    name: string;
    data: T;
}
interface testt {
    hobby: string;
    gname: string;
}
declare let windd: grade<testt>;
interface TState {
    name: string;
    age: number;
    like: string[];
}
interface ISingleState {
    name: string;
    age: number;
}
interface ISingleState extends Pick<TState, "like" | "age"> {
}
interface oldvalue {
    name: string;
    age: number;
}
declare type lianhe = 'ads' | 'dfg';
declare type otheraa = {
    [k in lianhe]: string;
};
declare type Readonly1<T> = {
    readonly [k in keyof T]: T[k];
};
declare type Partial1<T> = {
    [k in keyof T]?: T[k];
};
declare type readd = Readonly1<oldvalue>;
declare type partial = Partial1<oldvalue>;
declare type Record22<K extends string, T> = {
    [p in K]: T;
};
declare type thhh = Record22<'one' | 'two', string>;
declare type maptopromise<T> = {
    [p in keyof T]: Promise<T[p]>;
};
declare type Tuple = [number, string, boolean];
declare type promiseTuple = maptopromise<Tuple>;
declare const tuple: promiseTuple;
declare type t<T> = T extends string ? string : number;
declare type typename<T> = T extends any ? T : never;
declare type type123 = typename<string | number | boolean>;
declare type TypeName666<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : T extends undefined ? undefined : T extends () => void ? () => void : object;
declare type Type4324<T> = T extends any[] ? T[number] : any;
declare type iop123 = Type4324<boolean[]>;
declare type Type<T> = T extends Array<infer U> ? U : any;
declare type Test = Type<string[]>;
declare type Test123 = Type<string>;
declare class Animal {
    private name;
    constructor(theName: string);
    getName(): string;
}
declare let animal: Animal;
declare class Greeter<E> {
    static standardGreeting: string;
    greeting: string;
    greet(): string;
    static haha(): void;
}
declare let greeter1: Greeter<string>;
declare let greeterMaker: typeof Greeter;
declare let greeterMaker11: Greeter<any>;
declare let greeter2: Greeter<any>;
declare class Life {
    private name;
    constructor(name: string);
    /**
     * setname
     */
    setname(): void;
}
declare class Dog extends Life {
    protected color: string;
    readonly legs: number;
    constructor();
    jiao(): void;
    eat(): void;
}
declare class yellowDog extends Dog {
    static yellowNum: number;
    firstName: string;
    lastName: string;
    get(): string;
    set(fullName: string): void;
    constructor(name: string, color: string);
    private getDogNums;
    eat(): void;
}
declare let x: "hello";
declare let y: readonly [10, 20];
declare let z: {
    readonly name: "123";
};
declare let aaaa: 0.1 | "0.2";
declare let arre: number[];
declare let foo: {
    readonly objarr: number[];
};
interface Info {
    name: string;
}
interface Info1123 {
    name: string;
    innn: {
        age: number;
    };
}
declare let info: Info;
declare const info11: {
    name: string;
    age: number;
};
declare let funcx: (x: number) => number;
declare let funcy: (x: number, y: number) => number;
declare function pickCard(x: number, y: string): number;
declare function pickCard(x: string, y: number): number;
declare function pickCard(x: string, y: string, z: boolean, a: string): number;
declare function pickCard(x: string, y: boolean, z: boolean): number;
declare class Anim {
    static age: string;
    constructor(aa: name);
}
declare class Peop {
    static age: string;
    constructor(aa: name);
}
declare let shili: Anim;
declare class ASD {
    private parameters;
    constructor(parameters: any);
}
declare class DSA extends ASD {
    constructor(parameters: any);
}
declare class Other {
    private parameters;
    constructor(parameters: any);
}
declare let tit: ASD;
