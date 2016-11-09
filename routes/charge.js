var filter = require('./filter.js');

exports.create = function (req, res){

	var params = req.body,
		data = {};

	params['apitoken'] 	= getApiKey;
	
	if(params['RegisterNum'] && params['RegisterNum'] == 56) {
		$params['ReturnTransfer'] = true;
	}
	
	var processors = "ProcessCreditCard",
		transType = ['Sale','Auth','Return','Force','Capture','Void','Reversal','Refund','Repeat'];
	
	data['params'] 	= params;
	data['success'] = 0;
	data['error'] 	= '';
	
	if(filter._validateArray(params)){
		var ret = 1;//self::validParams($params);
		if(ret == 1){
			filter._doTrans(params, processors, function(results){
				var response = results.Response;
				console.log("response : ", response);

				data['response'] = response; 
				
				if(response['Result']){
					data['success'] = 1;
				}
				res.send(data);
			});
		}else{
			data['error'] = ret;
			res.send(data);
		}
		/*$ret = self::validParams($params);
		
		if($ret == 1){
			$response = self::_doTrans($params,self::$processors);
			self::$data['response'] = $response; 
			
			if(isset($response['Result'])) : 
				self::$data['success'] = 1;
			endif;
		}else{
			self::$data['error'] = $ret;
		}*/
	}else{
		//self::$data['error']['invalid_argument'] = 'Array is not valid, You must pass array is argument.';
	}
	
	// self::$data = self::responseFormat(self::$data,Apib::getOutputFormat());
	// return data;
}