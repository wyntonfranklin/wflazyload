<html>
<head>
  <script src="jquery.js" type="text/javascript"></script>
</head>
<?php
  echo "hello world";
 ?>
<div id="lazy-content-1">
</div>

<div id="lazy-content-2">
</div>

<script src="lazy.js" type="text/javascript"></script>
<script>
//$("#lazy-content-1").lazyload({url:"loadpageone.php",});
$("#lazy-content-2").lazyload({url:"loadpagetwo.php",});
</script>
</html>
