sap.ui.define([
	"cadaxo/app/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"cadaxo/app/model/formatter",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, JSONModel,formatter,MessageToast,Filter,FilterOperator) {
	"use strict";

	return BaseController.extend("cadaxo.app.controller.ProductList", {
		formatter : formatter,
		
		onInit: function() {
			var oViewModel = new JSONModel({
				productListTitle : "Test"
			});
			this.getView().setModel(oViewModel, "productListView");	
		},
		directorPressed: function(oEvent) {
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
		},
		onFilterProducts: function(oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			
			// filter binding
			var oList = this.getView().byId("cdx-productList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onUpdateFinished: function(oEvent) {
			
			var sTitle;
			var oList = oEvent.getSource();
			var iTotalItems = oEvent.getParameter("total");
			
			if (iTotalItems && oList.getBinding("items").isLengthFinal()) {
				sTitle = this.getView().getModel("i18n").getResourceBundle().getText("productListTitleCount", [iTotalItems]);
			} else {
				sTitle = this.getView().getModel("i18n").getResourceBundle().getText("productListTitle");
			}
			
			this.getView().getModel("productListView").setProperty("/productListTitle", sTitle);
		},
		getGroupForList: function(oContext) {
			var sKey = oContext.getProperty("ProductName").substring(0,1);
			return {
				key: sKey,
				title: sKey
			};
			
		},
		onPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var sProductPath = encodeURIComponent(oItem.getBindingContext("product").getPath());
			oRouter.navTo("detail", {
				productPath: sProductPath
			});
		}
	});
});