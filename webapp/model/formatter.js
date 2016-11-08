sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("invoiceStatusA");
				case "B":
					return resourceBundle.getText("invoiceStatusB");
				case "C":
					return resourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		},
		statusState: function (sStatus) {
			switch (sStatus) {
				case "A":
					return sap.ui.core.ValueState.Error;
				case "B":
					return sap.ui.core.ValueState.Success;
				case "C":
					return sap.ui.core.ValueState.Warning;
				default:
					return sStatus;
			}
		}
	};
});