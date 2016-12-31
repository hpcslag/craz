var craz = require('./craz.js');


var app = new craz();

app.on('sayhello',function(str){
	console.log(str);
});

app.sayhello();