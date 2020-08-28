i18next.init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
        //menu
          "menu-1": "Message",
          "key2": "Title"
        }
      },
      zh: {
        translation: {
          "menu-1": "訊息",
          "key2": "Titleleleldld"
        }
      }
    }
  }, function(err, t) {
    // init set content
    updateContent();
  });
  
  function updateContent() {
    document.getElementById('menu-1').innerHTML = i18next.t('menu-1');
    document.getElementById('mc').innerHTML = i18next.t('key2');
  }
  
  function changeLng(lng) {
    i18next.changeLanguage(lng);
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });