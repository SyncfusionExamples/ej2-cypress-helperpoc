import DropDownHelper from './helpers/dropdownlistHelper/testDropdownlist';



describe('The Home Page', function() {
    var curDropDown;

    it('successfully loads', function(done) {
        cy.visit('https://ej2.syncfusion.com/demos/#/material/drop-down-list/grouping-icon.html').then(function() {
            curDropDown = new DropDownHelper('icons', cy.get);
            done();
        });
    });

    it('getting setting model', function() {
        curDropDown.setModel("value", "media1");
        curDropDown.getModel("value").should('eq', 'sdf');
    });

    it('invoke function', function() {
        curDropDown.invoke("showPopup");
    });

});