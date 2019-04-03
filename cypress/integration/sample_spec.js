import { DropDownListHelper } from '@syncfusion/ej2-dropdowns/helpers/e2e';

describe('The Home Page', function () {
    var curDropDown;
    it('successfully loads', function (done) {
        cy.visit('https://ej2.syncfusion.com/demos/drop-down-list/grouping-icon/index.html').then(function () {
            curDropDown = new DropDownListHelper('icons', cy.get);
            done();
        });
    });

    it('getting setting model', function () {
        curDropDown.setModel("value", "media1");
        curDropDown.getModel("value").should('eq', 'media1');
    });

    it('events and method testing', function () {
        curDropDown.invoke("showPopup");
        curDropDown.eventHandler('change', (e) => {
            expect(e.value).to.eq('media2');
        });
        cy.get('[data-value="media2"]').trigger("click");
    });
});