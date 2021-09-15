sap.ui.jsview("mickey.view.Main",{

    getControllerName: function(){
        return "mickey.controller.Main";
    },

    //always every JS view has this standard method
    //which is entitled to receive controller object
    createContent: function(oController){

        var form = new sap.ui.layout.form.SimpleForm({
			title: "User Details",
			content: [


				new sap.m.Label({

					text: "User Name:"

				}),

				new sap.m.Input("idUser", {

					type: sap.m.InputType.Text,

					placeholder: "Enter a Name..."

				}),

				new sap.m.Label({

					text: "Password:"

				}),

				new sap.m.Input("idPassword", {

					type: sap.m.InputType.Password,

					placeholder: "Password"

				}),
				new sap.m.Button("idBtn", {
					text: "Click me",
					icon: "sap-icon://program-triangles",
					press: [oController.onLogin, oController]
				})

			]

		});

		return [form];
    }

});