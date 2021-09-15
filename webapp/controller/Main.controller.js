sap.ui.define([
    'mickey/controller/BaseController',
    'sap/m/Button'
], function(Controller, oBtn) {
    return Controller.extend("mickey.controller.Main",{

        onLogin: function() {
			var sUser = sap.ui.getCore().byId("idUser").getValue();
			var sPassword = sap.ui.getCore().byId("idPassword").getValue();
			if (sUser === sPassword) {
				alert("Login success!");
			} else {
				alert("Login Failed!");
			}
		},

        //event handler
        clickMe: function(){
            //here we are accessing HTML element using document
            //This NOT a UI5 Element object
            var oInp = document.getElementById("idInp-inner");
            var sVal = oInp.value;
            //we cant access the methods of UI5 Control
            //oInp.setEnabled(false);
            //To obtain UI5 element object, we need to first get 
            //Application object
            var oCore = sap.ui.getCore();
            //alternate in XML Views ONLY
            //var oCore = this.getView();

            //On top of App object, we can get UI5 element object
            var oField = oCore.byId("idInp");
            //Also write above 2 lines in single line
            //Chaining in JS
            var oJustAnotherWay = sap.ui.getCore().byId("idInp");
            //Then we can call any methods of UI5
            oField.setEnabled(false);

            alert(oField.getValue());

            //get the button2 object
            var oBtn2 = oCore.byId("idBtn2");
            debugger;
            //attach the functionality to button 2
            oBtn2.attachPress(this.someMoreCode); //this is the object of current class

        },
        someMoreCode: function(){
            var oCore = sap.ui.getCore();
            //On top of App object, we can get UI5 element object
            var oField = oCore.byId("idInp");
            alert("Method2 ===> " + oField.getValue());

        },
        onInit: function(){
            console.log("Dude, my Controller object is now Created by UI5");
        }
    });
});