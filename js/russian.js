$(function() {

  var dict = {
    "Home": {
      ru: "Главная"
    },
    "Essays": {
      ru: "Проекты"
    },
    "Categories": {
      ru: "Категории"
    },
    "Tags": {
      ru: "Теги"
    }
  };

  $( ".wj-breadcrumbs a" ).addClass( "trn" );
  var translator = $('body').translate({lang: "ru", t: dict}); //use Russian

});