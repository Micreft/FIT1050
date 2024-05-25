document.addEventListener('DOMContentLoaded', function() {
    const contentList = document.querySelectorAll('body, p, span, div, h1, h2, h3, h4, h5, h6'); // Exclude header, navbar, and footer
    const CONTENT_LENGTH = contentList.length;

    function changeFontSize(fontSize) {
        for (let i = 0; i < CONTENT_LENGTH; i++) {
            contentList[i].style.fontSize = fontSize;
        }
    }

    document.getElementById('decrease-font').addEventListener('click', function() {
        changeFontSize('14px'); // Small font size
    });

    document.getElementById('default-font').addEventListener('click', function() {
        changeFontSize('16px'); // Default font size
    });

    document.getElementById('increase-font').addEventListener('click', function() {
        changeFontSize('20px'); // Large font size
    });
});
