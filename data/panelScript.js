self.port.on('write',function(messageInfo){
	console.log("Writing a message....." + messageInfo.msg);
	var messageContainer = document.getElementById('messageContainer');
	if (messageContainer != null){
		var message = document.getElementById('message');
		message.innerHTML = messageInfo.msg;
		message.setAttribute('class',messageInfo.type);
		//message.setAttribute('class',messageInfo.messageType);	
	}
	//alert(messageInfo.msg);
	
	
	//self.port.emit('show','panel');


});
