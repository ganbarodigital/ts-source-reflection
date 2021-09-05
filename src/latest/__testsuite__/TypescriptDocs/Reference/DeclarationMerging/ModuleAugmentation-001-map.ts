// map.ts
import { Observable } from "./ModuleAugmentation-001-observable";
declare module "./ModuleAugmentation-001-observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}
Observable.prototype.map = <U>(f): Observable<U> => {
    // ... another exercise for the reader
};