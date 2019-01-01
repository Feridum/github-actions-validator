export interface NamedRegExpExecArray extends RegExpExecArray {
    groups?: { [propName: string]: string };
}