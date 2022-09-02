/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const dog = {
  species: 'dog',
  name: 'Hugo',
  gender: 'male',
  legs: 4,
  saying: 'Woof! Woof!',
};

const cat = {
  species: 'cat',
  name: 'Kitsya',
  gender: 'female',
  legs: 4,
  saying: 'Meow! Meow!',
};

const woman = {
  species: 'human',
  name: 'Dorothy',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'Well...',
};

const man = {
  species: 'human',
  name: 'George',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: '...Hm',
};

const inhabitans = [dog, cat, woman, man];
const inhabitansPropertyNames = [
  'species',
  'name',
  'gender',
  'legs',
  'hands',
  'saying',
];

// ======== OUTPUT ========
inhabitans.forEach((inhabitant) =>
  print(
    inhabitansPropertyNames
      .map((propertyName) => inhabitant[propertyName])
      .join('; ')
  )
);
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
