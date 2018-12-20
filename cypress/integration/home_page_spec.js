import DropdownHelper from './helpers/dropdownlistHelper/testDropdownlist';



describe('The Home Page', function () {
    var curDropDown;

    it('successfully loads', function (done) {
        cy.visit('https://ej2.syncfusion.com/demos/#/material/drop-down-list/grouping-icon.html').then(function () {
            curDropDown = new DropdownHelper('icons', cy.get);
            done();
        });
    });

    it('Simple test1', function () {
        curDropDown.getElement().should('have.value', '');
    });

    it('Simple test2', function () {
        curDropDown.getElement().click({
            force: true
        });
    });

});