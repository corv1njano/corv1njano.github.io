// not my code, credits to: https://stackoverflow.com/questions/37358307/javascript-countdown-timer-to-specific-time-everyday
(function () {
    var start = new Date;
    start.setHours(96, 0, 0);
    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }
    function tick() {
        var now = new Date;
        if (now > start) { // too late, go to tomorrow
            start.setDate(start.getDate() + 1);
        }
        var remain = ((start - now) / 1000);
        var hh = pad((remain / 60 / 60) % 60);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);
        document.getElementById('time').innerHTML =
            hh + ":" + mm + ":" + ss;
        setTimeout(tick, 1000);
    }
    document.addEventListener('DOMContentLoaded', tick);
})();