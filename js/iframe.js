(function() {
    var contentIframe = $('#iframe-content');

    if (contentIframe.length > 0) {
        contentIframe[0].contentWindow.focus();
    }

    function handleDocumentFocus() {
        if (!contentIframe[0]) {
            return ;
        }
        if (!contentIframe[0].contentWindow.document.hasFocus()) {
            contentIframe[0].contentWindow.focus();
        }
    }

    handleDocumentFocus();
    setInterval(function() {
        handleDocumentFocus();
    }, 1000);

}());


