<html>
<head>
  <script src="jquery.js" type="text/javascript"></script>
</head>
<?php
  echo "hello world";
 ?>
<div id="lazy-content">
  sdfsdf
<div>
<script src="lazy.js" type="text/javascript"></script>
<script>
$("#lazy-content").lazyload({
  title:"good bye",
  url:"pagetoload.php",
  datatype:"json",
  name:"",
});
</script>
</html>
