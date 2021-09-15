sap.ui.define([
	"mickey/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"mickey/model/models"
], function(Controller, JSONModel, myModel) {
	//'use strict';
	return Controller.extend("mickey.controller.MyXML", {
		//Once my Controller object is created then only initialization should happen
		//onInit - like constructor of the class, which gets called once the object is created
		onInit: function() {
			//another way of initializing class level variables
			//base class method which is of same name
			Controller.prototype.onInit.apply(this);
			console.log("Child Class Constructor");
			//a global variable @ class level which can be used by other methods
			this.oView = this.getView();

			var oModel = myModel.createJSONModel("model/mockdata/data.json");

			var oModelGOT = myModel.createJSONModel("model/mockdata/sample.json");
            //Step 3: Make model aware to the app
            //this is our default model
            sap.ui.getCore().setModel(oModel);
            //named model so that it will not overwrite my previous model
			sap.ui.getCore().setModel(oModelGOT, "fire");

            this.getView().byId("idEmpSal").bindValue("/empStr/salary");
            this.getView().byId("idEmpCurr").bindProperty("value","/empStr/currency");

		},
		onBeforeRendering: function() {
			//if(checkings....)
			this.oView.byId("MyButton").setEnabled(false);

		},
		onAfterRendering: function() {
			//$("#myView--myForm").hide().fadeIn(5000);
		},
		//oView : this.getView(),
		clickMe: function(params) {
			//sap.ui.getCore()
			//var oView = this.getView();
			var oControl = this.oView.byId("MyButton");

			//var oControl = sap.ui.getCore().byId("__xmlview0--MyButton");

			oControl.setVisible(false);
		},
		onMagic: function() {
			//gray out all fields
			var oModel = sap.ui.getCore().getModel();
			//access of data using model
			oModel.setProperty("/empStr/mario", false);
		},
		onShow: function() {
			//get model object
			var oModel = sap.ui.getCore().getModel();
			//access of data using model
			oModel.setProperty("/empStr/mario", true);
			var myJsonData = oModel.getProperty("/empStr");
			console.log(myJsonData);

		}
	});
});