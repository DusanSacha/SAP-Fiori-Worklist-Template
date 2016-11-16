sap.ui.define([
	"cadaxo/app/controller/BaseController",
	"cadaxo/app/model/formatter",
	"sap/ui/core/routing/History"
], function (BaseController, formatter, History) {
	"use strict";
	return BaseController.extend("cadaxo.app.controller.Detail", {
		formatter: formatter,
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			var sProductPath = decodeURIComponent(oEvent.getParameter("arguments").productPath);
			this.getView().bindElement({
				path: sProductPath,
				model: "product"
			});
		}
	});
});