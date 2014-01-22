define(["dojox/app/main", "dojox/json/ref", 
         "dojo/text!../resources/config/config.json",
         "dojo/text!../resources/config/environmentConfig.json"
         ],
function(Application, jsonRef, 
		configString, environmentConfigString){

	return function(){
	
		//TODO configure environment-specific config
		// one example environment is loaded above, instead
		// could load that conditionally
				
		var jsonParseArgs = { index: {} }; // read two files, share context
		
		// explore different config approaches, these two are added into the index
		// and then can be referenced from the main config.json
		jsonRef.fromJson(environmentConfigString, jsonParseArgs);		
		
		var combinedConfig = jsonRef.fromJson(configString, jsonParseArgs);
	
		Application(combinedConfig);

	};	
});
