exports = module.exports = function (input) {
  // YOUR CODE BETWEEN HERE
  var classement = input[0];
  var i = 1;
  for (; i < input.length; i++) {
    var majClass = input[i].split(" ");
    // je divise la chaine de caractère à l'espace
    classement += parseInt(majClass[0]);
    //je met à jour mon classement avec la variable majClass
    // qui convertit la premiere string avant l'espace en entier
    classement -= parseInt(majClass[1]);
    // j'utilise les opérateurs += et -= changer mon classement
  }
  //   je retourne l'argent gagner si il y a, ou KO
  if (classement <= 100) {
    return 1000;
  } else if (classement > 100 && classement <= 10000) {
    return 100;
  } else if (classement > 10000) {
    return "KO";
  }
  // AND HERE
};
