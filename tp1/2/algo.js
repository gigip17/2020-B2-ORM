exports = module.exports = function (input) {
  // YOUR CODE BETWEEN HERE
  //   var nombreDeCarton = input[0];
  var chargeTotal = 0;
  var i = 1;
  var allerRetour = 0;
  for (; i < input.length; i++) {
    var poidsCarton = input[i];
    chargeTotal += poidsCarton;
  }
  if (chargeTotal <= 100) {
    return ++allerRetour;
  } else if ((chargeTotal >= 100) | (chargeTotal <= 200)) {
    return (allerRetour = 2);
  }
  // j'ai pas reussi a trouver comment +1 a tous les 100

  //   for (allerRetour; chargeTotal < 100; allerRetour++) {
  //     console.log(allerRetour);

  // AND HERE
};
