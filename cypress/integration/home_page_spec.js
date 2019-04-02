import { DropDownListHelper } from '@syncfusion/ej2-dropdowns/helpers/e2e';



describe('The Home Page', function () {
    var curDropDown;

    it('successfully loads', function (done) {
        cy.visit('https://ej2.syncfusion.com/demos/#/material/drop-down-list/grouping-icon.html').then(function () {
            curDropDown = new DropDownListHelper('icons', cy.get);
            done();
        });
    });

    it('getting setting model', function () {
        curDropDown.setModel("value", "media1");
        curDropDown.getModel("value").should('eq', 'media1');
    });

    it('invoke function', function () {
        curDropDown.invoke("showPopup");
    });

    it('Event handling', function () {
        curDropDown.eventHandler('change', function (e) {
            expect(e.name).to.eq('change');
        });
        cy.get('[data-value="media2"]').trigger("click");
    });

});