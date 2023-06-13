var stompClient = null;
/*
* 这个JavaScript文件的主要部分是connect()和sendName()函数
* */
function setConnected(connected) {
    $("#connect").prop("disabled", connected);//prop设定属性值
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}
/*
* connect()函数使用SockJS和stomp.js打开到/gs-guide-websocket的连接，这是我们的SockJS服务器等待连接的地方
* */
function connect() {
    var socket = new SockJS('/gs-guide-websocket');//目的地地址
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        //连接成功后，客户机订阅/topic/greetings目的地，服务器将在此发布问候消息
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}
/*
*sendName()函数检索用户输入的名称，
* 并使用STOMP客户端将其发送到/app/hello目的地(GreetingController.greeting()将在那里接收它)。
* */
function sendName() {
    stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
}
//展示数据
function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}
//识别按键“id”通过click触发函数
$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});