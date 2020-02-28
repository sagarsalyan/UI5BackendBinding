/*global QUnit*/

sap.ui.define([
	"Project/BackendBinding/controller/Get.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Get Controller");

	QUnit.test("I should test the Get controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});