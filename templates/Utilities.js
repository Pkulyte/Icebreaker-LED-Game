<p id="demo"></p>

    <script>

var deadline = new Date();
deadline.setSeconds(t.getSeconds() + 120); //adds 120 seconds so countdown is 2 minutes

var x = setInterval(function() {

    var now = new Date().getTime();
    var t = deadline - now;
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML =seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("minute").innerHTML ='0' ;
        document.getElementById("second").innerHTML = '0'; }
}, 1000);
</script>