var colour;
var creature;
var adjective;
var story;

alert('Let’s make a story together!');

colour = prompt('A colour (orange, indigo, etc.)');
creature = prompt('A creature (dragon, moth, etc.)');
adjective = prompt('An adjective (beautiful, super, etc.)');
verbed = prompt('A past tense verb (ran, burped, etc.)');
story = prompt('Which story would you like? a) Snacking b) Escaping c) Winning Enter the letter below:');

if (story == 'a') {
  document.write('After snacking on');
  document.write(' ');
  document.write(adjective);
  document.write(' ');
  document.write('treats, the');
  document.write(' ');
  document.write(colour);
  document.write(' ');
  document.write('bellied');
  document.write(' ');
  document.write(creature);
  document.write(' ');
  document.write(verbed);
  document.write(' ');
  document.write('for hours.');
} if (story == 'b') {
  document.write('Ameilia');
  document.write(' ');
  document.write(verbed);
  document.write(' ');
  document.write('through the');
  document.write(' ');
  document.write(adjective);
  document.write(' ');
  document.write(colour);
  document.write(' ');
  document.write('nebula escaping the space');
  document.write(' ');
  document.write(creature);
} if (story == 'c') {
  document.write('Jackson chose his');
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
