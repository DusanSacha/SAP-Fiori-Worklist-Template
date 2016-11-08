sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent,JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("cadaxo.app.Component", {
   	  metadata: {
   	  	manifest: "json"
   	  },

      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         
         var oData = {
   	  		name: "World"	
   	  	};
   	  	
   	  	var oModel = new JSONModel(oData);
   	  	this.setModel(oModel);
   	  
	}
   });
});