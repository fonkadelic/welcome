'use strict';

var I18n = require('react-native-i18n');

I18n.defaultLocale = 'de';
I18n.fallbacks = true;

class I18nService {
  constructor(){
    this.I18n = I18n;

    this.I18n.translations = {
      en: {
        guide: "Guide",
        chat: "Chat",
        infosearch: "Info Search",
        addresses: "Addresses",
        profile: "Profile"
      },
      syria: {
        guide: "دليل",
        chat: "يتحدث",
        infosearch: "معلومات",
        addresses: "دفتر العناوين",
        profile: "البيانات الشخصية"
      },
      afghanistan: {
        guide: "دليل",
        chat: "يتحدث",
        infosearch: "معلومات",
        addresses: "دفتر العناوين",
        profile: "البيانات الشخصية"
      },
      iraq: {
        guide: "دليل",
        chat: "يتحدث",
        infosearch: "معلومات",
        addresses: "دفتر العناوين",
        profile: "البيانات الشخصية"
      },
    };
  }

  set(language) {
    I18n.locale = language;
  }

  get() {
    return this.I18n;
  }
}

var service = new I18nService();

module.exports = service;
