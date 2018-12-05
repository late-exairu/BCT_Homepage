function updatePageLanguage() {
    var currentLang = localStorage.getItem('lang');
    if (currentLang) {
        switch (currentLang) {
            case 'ru':
                $("#allContent").load('../lang/ru/index.html');
                break;
            default:
                break;
        }
    }
}

updatePageLanguage();

function setLanguage(lang) {
    localStorage.setItem('lang',lang);
    updatePageLanguage();
    //location.reload();
}