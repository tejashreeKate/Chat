$(document).ready(function(){
 		var socket = io.connect();
 		var $send_message = $("#sendMessage");
 		var $chat = $("#chat");
 		var $chat_form = $("#chat_form");

 		$chat_form.submit(function(e){
 			e.preventDefault();
 			socket.emit('send_msg',$send_message.val())
 			$send_message.val('');

 		})

 		socket.on('new message',function(data){
 			$chat.append(data + "<br>");
 		})
 	})