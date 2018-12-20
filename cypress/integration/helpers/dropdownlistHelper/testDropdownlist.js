export class DropdownHelper {

    constructor(id, wrapperFn) {
        this.id = id;
        this.wrapperFn = wrapperFn
        return this;
    }

    selector(arg) {
        return (this.wrapperFn ? this.wrapperFn(arg) : arg);
    }

    getElement() {
        return this.selector('#' + this.id);
    }

    getPopupElement() {
        return this.selector('#' + this.id + '_popup');
    }

}

module.exports = DropdownHelper