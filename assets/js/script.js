
i18next.init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          "key": "hello world"
        }
      },
      de: {
        translation: {
          "key": "hello welt"
        }
      }
    }
  }, function(err, t) {
    // init set content
    updateContent();
  });
  
  function updateContent() {
    document.getElementById('output').innerHTML = i18next.t('key');
  }
  
  function changeLng(lng) {
    i18next.changeLanguage(lng);
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });
