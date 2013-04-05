
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var MakeReport = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	MakeReport.click = function MakeReport_click (event)// @startlock
	{// @endlock
        report = sources.employee.myReport(); // call the class method and put the result in the array
        sources.report.sync(); //synchronize the report array with the report datasource

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("MakeReport", "click", MakeReport.click, "WAF");
// @endregion
};// @endlock
