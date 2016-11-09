sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("productStatusA");
				case "B":
					return resourceBundle.getText("productStatusB");
				case "C":
					return resourceBundle.getText("productStatusC");
				default:
					return sStatus;
			}
		},
		statusState: function (sStatus) {
			switch (sStatus) {
				case "A":
					return sap.ui.core.ValueState.Success;
				case "B":
					return sap.ui.core.ValueState.Warning;
				case "C":
					return sap.ui.core.ValueState.Error;
				default:
					return sStatus;
			}
		},
		statusSecondState: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("secondStatusA");
				case "B":
					return resourceBundle.getText("secondStatusB");
				case "C":
					return resourceBundle.getText("secondStatusC");
				default:
					return sStatus;
			}		
		}
	};
});