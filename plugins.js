function craz(){

}

craz.prototype.models = {};

craz.prototype.readDoc = "OK!";

craz.prototype.loadModules = function(){
	let parent = this,
		models = Object.keys(parent.models);
	
	for (var i = 0; i < models.length; i++) {
		parent.models[models[i]](this);
		console.log("Module: " + models[i] + " is loaded!");
	};

}

craz.prototype.getModule = function(module_name){
	let parent = this;

	if(typeof parent.models[module_name] == 'function'){
		return parent.models[module_name](parent);
	}

	if(typeof parent.models[module_name] != 'undefined'){
		return parent.models[module_name];
	}

}

craz.prototype.modeling = function(module_name,fn){

	let parent = this;

	parent.models[module_name] = fn;
}

var app = new craz();
app.modeling('modex',function(craz){
	console.log("modex is loaded, and craz readDoc = "+craz.readDoc);

	return {
		api: "this is api"
	}
});

app.modeling('fedex',function(craz){
	console.log("fedex is loaded, and craz readDoc = "+craz.readDoc);

	console.log("load the modex apps....");
	var data = craz.getModule('modex');
	console.log(data.api);
});

app.loadModules();