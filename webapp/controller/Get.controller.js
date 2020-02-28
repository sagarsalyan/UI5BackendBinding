sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Project.BackendBinding.controller.Get", {
		onInit: function () {
			var that = this;
			// var router = sap.ui.core.UIComponent.getRouterFor(that);
			// router.attachRoutePatternMatched(that._handleRouteMatched,that);
			var busyDialog = new sap.m.BusyDialog();
			//var that = this;
			that.getOwnerComponent().getModel().read("/PATIENTSet", {
				async : false,
				success : function(oData, oResponse) {
					busyDialog.close();
					var oModel = new sap.ui.model.json.JSONModel(oData);
					that.getView().byId("id_list_patient").setModel(oModel,"PatientModel");
				},
				error:function(error){
					busyDialog.close();
					var errorMsg = JSON.parse(error.response.body);
					errorMsg = errorMsg.error.message.value;
					that.errMsg(errorMsg);
				}
			});
		}
		
		// _handleRouteMatched : function(oevnt)
		// {
		// 	debugger;
		// 	if(oevnt.mParameters.name == "master"){
		// 	var busyDialog = new sap.m.BusyDialog();
		// 	var that = this;
		// 	that.getOwnerComponent().getModel().read("/PATIENTSet", {
		// 		async : false,
		// 		success : function(oData, oResponse) {
		// 			busyDialog.close();
		// 			var oModel = new sap.ui.model.json.JSONModel(oData);
		// 			that.getView().byId("id_list_patient").setModel(oModel,"PatientModel");
		// 		},
		// 		error:function(error){
		// 			busyDialog.close();
		// 			var errorMsg = JSON.parse(error.response.body);
		// 			errorMsg = errorMsg.error.message.value;
		// 			that.errMsg(errorMsg);
		// 		}
		// 	});
		// 	}	
		// }
		,
		onCreate : function() {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("RoutePost",true);
		}
	});
});