declare class dnf {
    protected name: string;
    protected getPos(): void;
}
declare class nvgui extends dnf {
    getq(): void;
}
declare let yu: nvgui;
interface IResult<T = undefined> {
    code: 2000 | 4000 | 5000;
    data: T | null;
    message: string;
    [otherKey: string]: any;
}
declare const $request: {
    get(action: string): Promise<any>;
};
declare const getUserInfo: () => Promise<void>;
