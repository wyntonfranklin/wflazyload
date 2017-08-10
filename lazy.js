(function( $ ){
   $.fn.lazyload = function(params) {
     var content =this;
     var params = jQuery.extend({
       title:"today",
       posttype:"POST",
       url:"lazy.php",
       datatype:"html",
       name:"",
       data: {},
     },params)
    var data= params.data;
    $.ajax({
    type: params.posttype, url: params.url,
    data:data,
    beforeSend:function(){
      content.empty();
      content.html("<p>loading...</p>");
      console.log('start');
    },
    success:function(data){
      content.empty();
      if(params.datatype=="html"){
      //  content.html(data);
        console.log('html');
      }else if(params.datatype=="json"){
        console.log('json');
        //content.append(obj[params.name]);
        content.append('superman');
      }
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
