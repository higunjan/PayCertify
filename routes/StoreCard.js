var filter = require('./filter.js'),
	striptags = require('striptags');

exports.create = function (req, res){
	var params = req.body,
		data = {};
	
	var processors = "StoreCard";

	params['apitoken'] 	= getApiKey;

	if(filter._validateArray(params)){
		var ret = 1;//self::validParams($params);
		if(ret == 1){
			filter._doTrans(params, processors, function(results){
				var response = results.Response;
				console.log("response : ", response);

				if(response['Result'] && response['Result'] == 0){
					data['success'] = 1;
				}
				if(response['ExtData']){
					response['CardToken'] = striptags(response['ExtData']);
				}
				
				data['response'] = response; 

				res.send(data);
			});
		}else{
			data['error'] = ret;
			res.send(data);
		}
	}else{
		data['error'] = 'Array is not valid, You must pass array is argument.';
		res.send(data);
	}
}