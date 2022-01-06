var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});

$(document).ready(function () {
    // Copy email to click board
    $('#button-email').click(function () {
        var content = $('#email').html();

        navigator.clipboard.writeText(content)
            .then(() => {})
            .catch(() => {});
    });
});