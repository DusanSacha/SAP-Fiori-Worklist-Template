sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"cadaxo/app/model/formatter",
	"sap/m/MessageToast"
], function (Controller, JSONModel,formatter,MessageToast) {
	"use strict";

	return Controller.extend("cadaxo.app.controller.ProductList", {
		formatter : formatter,
		directorPressed : function(oEvent) {
			var oSource = oEvent.getSource();
			var sTitle = oSource.getParent().getTitle();
			var sDirector = oSource.getText();
			
			MessageToast.show("Director of " + sTitle + " is " + sDirector);
		},
		yearOfOriginPressed: function(oEvent) {
			var oSource = oEvent.getSource();
			var sTitle = oSource.getParent().getTitle();
			var sYear = oSource.getText();
			
			MessageToast.show("Year of Origin of " + sTitle + " is " + sYear);
		}
	});
});