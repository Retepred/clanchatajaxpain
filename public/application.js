$(function(){

  $('#submit').click(function(e) {
    e.preventDefault();

    var username = $('#username').val();
    var message = $('#message').val();
    var since = $('#since').val();
    var data = {'username': username, 'message': message, 'since': since };

    $.ajax({
      type: 'POST',
      url: '/chat',
      data: data,

      success: function(data){
        console.log(data);
        $.each(data, function(i, message){
          $('#chat').prepend('<span title="04:40:37PM"><span class="username">&lt;'+ message.username +'&gt;</span><span class="message">'+ message.message +'</span></span>');
        });
        $('#since').val(data[data.length-1].timestamp);
        $('#message').val('');
      },
      complete: function(){$('#chat').text(message)}

    })

     console.log(username + '' +message + '' + since);

  });

});