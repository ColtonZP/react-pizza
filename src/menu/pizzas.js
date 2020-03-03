import pepperoniPic from '../imgs/pizza/pepperoni.png';
import cheesePic from '../imgs/pizza/cheese.png';
import meatPic from '../imgs/pizza/meat-lovers.png';
import supremePic from '../imgs/pizza/supreme.png';
import veggiePic from '../imgs/pizza/veggie.png';
import hawaiianPic from '../imgs/pizza/hawaiian.png';
import bbqPic from '../imgs/pizza/bbq-chicken.png';
import buffaloPic from '../imgs/pizza/buffalo-chicken.png';

export default [
  {
    name: 'Pepperoni',
    price: 12,
    toppings: ['pepperoni'],
    img: pepperoniPic,
    desc:
      'The classic gourmet pizza that is ideal for any night, complete with mozzarella cheese and pepperoni.'
  },
  {
    name: 'Cheese',
    price: 12,
    toppings: ['cheese'],
    img: cheesePic,
    desc:
      'The simplest of pizza made with classic marinara sauce topped with mozzarella cheese.'
  },
  {
    name: 'Meat Lovers',
    price: 13.5,
    toppings: ['pepperoni', 'bacon', 'ham', 'sausage'],
    img: meatPic,
    desc:
      "Meat lover's pizza is the perfect game day pizza, packed with everyone's favorite meat!"
  },
  {
    name: 'Supreme',
    price: 14,
    toppings: ['pepperoni', 'green pepper', 'olives', 'onion'],
    img: supremePic,
    desc:
      'Enjoy this freshly prepared pizza for family dinner or a group lunch.'
  },
  {
    name: 'Veggie',
    price: 14,
    toppings: ['onion', 'mushroom', 'olives', 'green pepper'],
    img: veggiePic,
    desc: 'Featuring all the classic vegetable toppings you know and love.'
  },
  {
    name: 'Hawaiian',
    price: 13,
    toppings: ['ham', 'pineapple'],
    img: hawaiianPic,
    desc:
      'Take a quick trip to paradise, this simple pizza is perfect for any get together.'
  },
  {
    name: 'BBQ Chicken',
    price: 13,
    toppings: ['chicken', 'onion', 'bbq Sauce'],
    img: bbqPic,
    desc: ''
  },
  {
    name: 'Buffalo Chicken',
    price: 13,
    toppings: ['chicken', 'buffalo sauce'],
    img: buffaloPic,
    desc:
      'This classic pizza featuring tasty buffalo sauce and tender chicken is your go-to for any weeknight.'
  }
];
