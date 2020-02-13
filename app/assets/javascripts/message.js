$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message-list" data-message-id=${message.id}>
         <div class="message-list__upper-info">
           <div class="message-list__upper-info__user">
             ${message.user_name}
           </div>
           <div class="message-list__upper-info___date">
             ${message.created_at}
           </div>
         </div>
         <div class="message-list-text">
           <p class="message-list-text__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message-list" data-message-id=${message.id}>
         <div class="message-list__upper-info">
           <div class="message-list__upper-info__user">
             ${message.user_name}
           </div>
           <div class="message-list__upper-info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="message-list-text">
           <p class="message-list-text__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.message-lists').append(html);      
    $('form')[0].reset();
    $('.message-lists').animate({ scrollTop: $('.message-lists')[0].scrollHeight});
  })
  .fail(function(data){
    alert('エラーが発生したためメッセージは送信できませんでした。');
  })
  .always(function(data){
    $('.send-btn').prop('disabled', false);
  })
})
});