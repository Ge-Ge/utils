export default class ClassList {
    ele: Element;
    constructor(ele: Element);
    hasClass(className: string): boolean;
    addClass(className: string): this;
    removeClass(className: string): this;
}
