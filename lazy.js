(function( $ ){
   $.fn.lazyload = function(params) {
     var content =this;
     var params = jQuery.extend({
       title:"today",
       posttype:"POST",
       url:"/",
       datatype:"html", //json or html
       name:"data", // object name for json
       loader:"/images/ajax-loader.gif",
       delay: 0, //delay for testing really
       data: {},
     },params)
    var data= params.data;
    $.ajax({
    type: params.posttype, url: params.url,
    data:data,
    beforeSend:function(){
      content.empty();
      content.html("<img src='"+params.loader+"'>");
      console.log('start');
    },
    success:function(data){
      setTimeout(function() {
        content.empty();
        if(params.datatype=="html"){
          content.hide();
          content.html(data);
          content.fadeIn();
          console.log('html');
        }else if(params.datatype=="json"){
          console.log('json');
          //content.append(obj[params.name]);
          content.hide();
          content.append('superman');
        }
      }, params.delay);
    },
   error: function(data) { // if error occured
       content.empty();
       console.log('error');
    },
    dataType:'html'
    });
      return this;
   };
})( jQuery );
