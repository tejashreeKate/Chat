var express = require("express"),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(3000);

app.get('/',function(request,response){
	response.sendfile('index.html');
})

io.sockets.on('connection',function(socket){
	socket.on('send_msg',function(data){
		io.sockets.emit('new message',data);
	})


})

app.configure(function(){
	app.use(express.static(__dirname, 'public'));
})





