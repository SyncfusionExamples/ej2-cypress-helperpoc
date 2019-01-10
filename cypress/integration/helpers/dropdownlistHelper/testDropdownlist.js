export class DropDownHelper {

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

    setModel(property, value) {
        return cy.get('#' + this.id).then((ele) => {
            return ele[0].ej2_instances[0][property] = value;
        });
    }

    getModel(property) {
        return cy.get('#' + this.id).then((ele) => {
            return ele[0].ej2_instances[0][property];
        });
    }

    invoke(fName, args = []) {
        return cy.get('#' + this.id).then((ele) => {
            var inst = ele[0].ej2_instances[0];
            return inst[fName].call(inst, args);
        });
    }

}

module.exports = DropDownHelper;