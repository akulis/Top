four51.app.filter('onproperty', ['$451', function($451) {
	var defaults = {
		'OrderStats': 'Type',
		'Message': 'Box'
	};

	return function(input, query) {
		if (!input || input.length === 0) return;
		if (!query) return input;
		query.Property = query.Property || defaults[query.Model];
		return $451.filter(input, query);
	}
}]);

four51.app.filter('kb', function() {
	return function(value) {
		return isNaN(value) ? value : parseFloat(value) / 1024;
	}
});

four51.app.filter('r', ['$sce', 'WhiteLabel', function($sce, WhiteLabel) {
	return function(value) {
		var result = value, found = false;
		angular.forEach(WhiteLabel.replacements, function(c) {
			if (found) return;
			if (c.key == value) {
				result = $sce.trustAsHtml(c.value);
				found = true;
			}
		});
		return result;
	}
}]);

four51.app.filter('rc', ['$sce', 'WhiteLabel', function($sce, WhiteLabel) {
	return function(value) {
		var result = value, found = false;
		angular.forEach(WhiteLabel.replacements, function(c) {
			if (found) return;
			if (c.key.toLowerCase() == value.toLowerCase()) {
				result = $sce.trustAsHtml(c.value);
				found = true;
			}
		});
		return result;
	}
}]);

four51.app.filter('rl', ['$sce', 'WhiteLabel', function($sce, WhiteLabel) {
	return function(value) {
		var result = value, found = false;
		angular.forEach(WhiteLabel.replacements, function(c) {
			if (found) return;
			if (c.key.toLowerCase() == value.toLowerCase()) {
				result = $sce.trustAsHtml(c.value.toLowerCase());
				found = true;
			}
		});
		return result;
	}
}]);

four51.app.filter('noliverates', function() {
	return function(value) {
		var output = [];
		angular.forEach(value, function(v) {
			if (v.ShipperRateType != 'ActualRates')
				output.push(v);
		});
		return output;
	}
});

four51.app.filter('paginate', function() {
	return function(input, start) {
		if (typeof input != 'object' || !input) return;
		start = +start; //parse to int
		return input.slice(start);
	}
});

//For changing USPS shipping option in dropdown
four51.app.filter('USPSFilter',function() {
    debugger;
    return function(object) {
        if (object) {
            return object.replace(/USPS Priority Mail 2-Day™/g, 'USPS Ground');
        }
		}
});

//For changing USPS shipping option in dropdown
four51.app.filter('USPSFilter2',function() {
    debugger;
    return function(object) {
				if (object) {
					return object.replace(/USPS USPS Retail Ground™/g, 'USPS Retail Ground');
				}
    }
});

//For changing USPS shipping option in dropdown
four51.app.filter('USPSFilter3',function() {
    debugger;
    return function(object) {
			if (object == 'UPS Ground') return 'UPS Ground';
			if (object == 'USPS Priority Mail 2-Day™') return object.replace(/USPS Priority Mail 2-Day™/g, 'USPS Ground');
			if (object == 'USPS USPS Retail Ground™') return object.replace(/USPS USPS Retail Ground™/g, 'USPS Retail Ground');
			//if (object === 'USPS USPS Retail Ground™') object.remove != 'USPS Priority Mail 2-Day™';
    }
});
