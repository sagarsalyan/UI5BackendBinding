sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Project.BackendBinding.controller.Get", {
		onInit: function () {
		},
		
		onCreate: function() {
			var that = this;
			var obj = {
				"OutPatId": this.getView().byId("pid").getValue(),
				"PatientId": this.getView().byId("poid").getValue(),
				"DateOfExamination":this.getView().byId("pdate").getValue(),
				"LabNumber":this.getView().byId("plnum").getValue()
			};
			// obj.OutPatId = this.getView().byId("pid").getValue();
			// obj.PatientId = this.getView().byId("pname").getValue();
			// obj.DateOfExamination = "2017-09-12T00:00:00";
			// obj.LabNumber="";
			that.getOwnerComponent().getModel().create("/OUT_PATIENTSet", obj, {
				success : function(oData, oResponse) {
					debugger;
				},
				error : function(err, oResponse) {
					debugger;
				}
			});
		}
	});
});