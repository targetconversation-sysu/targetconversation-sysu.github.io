jQuery(document).ready(function($) {
    var timezone = "Etc/GMT" ;
    var deadline = moment.tz("2020-05-08 23:59:59", timezone);
    $('#countdown-TOC: Target-Guided Open-Domain Conversation').countdown(deadline.toDate(), function(event) {
        $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
    });
});
