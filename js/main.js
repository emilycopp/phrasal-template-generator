var colour;
var creature;
var adjective;
var story;

alert('Let’s make a story together!');

colour = prompt('A colour (orange, indigo, etc.)');
creature = prompt('A creature (dragon, moth, etc.)');
adjective = prompt('An adjective (beautiful, super, etc.)');
verbed = prompt('A past tense verb (ran, burped, etc.)');
story = prompt('Which story would you like? \n a) Snacking  \n b) Escaping c) \n Winning Enter the letter below:');

if (story == 'a') {
  document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' ' + verbed + ' for hours.');
} if (story == 'b') {
  document.write('Ameilia ' + verbed + ' through the ' + adjective + ' ' + colour + ' nebula escaping the space ' + creature + '.');
} if (story == 'c') {
  document.write('Jackson chose his ' + adjective + ', ' + colour + ' ' + creature + ' card and ' + verbed + ' it to the table knowing he won.');
  document.write(' ');
  document.write(adjective);
  document.write(',');
  document.write(' ');
  document.write(colour);
  document.write(' ');
  document.write(creature);
  document.write(' ');
  document.write('card and');
  document.write(' ');
  document.write(verbed);
  document.write(' ');
  document.write('it to the table knowing he won.');
}
