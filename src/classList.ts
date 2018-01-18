export default class ClassList {
    ele: Element
    constructor(ele: Element) {
        this.ele = ele
    }
    hasClass(className: string): boolean {
        if (!className) return false
        if (this.ele.classList) {
            return this.ele.classList.contains(className);
        } else { return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.ele.className) }
    }
    addClass(className: string): this {
        if (!className) return this
        if (this.ele.classList) {
            this.ele.classList.add(className)
        } else {
            if (this.hasClass(className)) {
                this.ele.className += ' ' + className
            }
        }
        return this
    }
    removeClass(className: string): this {
        if (this.ele.classList) {
            this.ele.classList.remove(className)
        } else {
            if (this.hasClass(className)) {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
                this.ele.className = this.ele.className.replace(reg, '')
            }
        }
        return this
    }
}