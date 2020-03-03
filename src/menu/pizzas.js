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
    img: pepperoniPic
  },
  {
    name: 'Cheese',
    price: 12,
    toppings: [''],
    img: cheesePic
  },
  {
    name: 'Meat Lovers',
    price: 13.5,
    toppings: ['pepperoni', 'bacon', 'ham', 'sausage'],
    img: meatPic
  },
  {
    name: 'Supreme',
    price: 14,
    toppings: ['pepperoni', 'green pepper', 'olives', 'onion'],
    img: supremePic
  },
  {
    name: 'Veggie',
    price: 14,
    toppings: ['onion', 'mushroom', 'olives', 'green pepper'],
    img: veggiePic
  },
  {
    name: 'Hawaiian',
    price: 13,
    toppings: ['ham', 'pineapple'],
    img: hawaiianPic
  },
  {
    name: 'BBQ Chicken',
    price: 13,
    toppings: ['chicken', 'onion', 'bbq Sauce'],
    img: bbqPic
  },
  {
    name: 'Buffalo Chicken',
    price: 13,
    toppings: ['chicken', 'buffalo sauce'],
    img: buffaloPic
  }
];
