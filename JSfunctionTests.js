//sunday afternoon javascript function practice

/*const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);

const Mocha = require('mocha');
const jsdom = require('jsdom');
const chai = require('chai');

const mocha = new Mocha();
const expect = chai.expect;


mocha.suite.emit('pre-require', this, 'solution', mocha);*/




/**

@param { array } products
 
Given an array of products, return only products which:

1. are in stock, 
2. have a sale price higher than $9, and 
3. have a large image to display

**/

function productsToDisplay(products){
  
  let ans = [];
  
  for(let i = 0; i < products.length; i++){
    if(products[i].inStock && parseFloat(products[i].salePrice) > 9 && products[i].images.large != undefined){        if(products[i].images.large != 'no image')
    {
      if(products.images != 'no image')
        ans.push(products[i])
    }
    }
                                                                                                             
  }
  return ans
}



/**

@param { string } input

Given a query string, return an object of key value pairs

**/

function stringToObject(input) {

  input = input.substring(1);               // remove ?
  input = input.split("&");                 // split each vehicle

  let ans = {};                              //set up empty answer
  
  for(let i = 0; i < input.length; i++){    //loop each - split string
    let val = input[i].split("=");          //split next level to obtain 4cars
    
    let obj = {};
    obj[val[0]] = val[1];                   //assign obj
    ans = {...ans,...obj};                  //append obj to answer
  }
  return ans; 
}



const products = [
  {id: 1, inStock: true, salePrice: '1.50', images: { 'small': ''}},
  {id: 2, inStock: false, salePrice: '12.00', images: {'small': 'https://example.com/img/2.jpg', 'large': 'https://example.com/img/2.jpg'}
  }, 
  {id: 3, inStock: true, salePrice: '10.00', images: {'large': 'https://example.com/img/3.jpg'}
  },
  {id: 4, inStock: true, salePrice: '11.00', images: {'large': 'no image'}
  }, 
];

console.log(productsToDisplay(products));


const input = "?ford=30&toyota=55&kia=10&audi=5";
console.log(stringToObject(input));

console.log("Expected: " , {"ford":30, "toyota":55, "kia":10, "audi":5});
/***

Tests

***/

/*
describe('Associate #1', () => {

    
  describe("productsInStock()", () => {
    it("should return the right product", () => {
      
      const products = [
        {id: 1, inStock: true, salePrice: '1.50', images: { 'small': ''}},
        {id: 2, inStock: false, salePrice: '12.00', images: {'small': 'https://example.com/img/2.jpg', 'large': 'https://example.com/img/2.jpg'}
        }, 
        {id: 3, inStock: true, salePrice: '10.00', images: {'large': 'https://example.com/img/3.jpg'}
        },
        {id: 4, inStock: true, salePrice: '11.00', images: {'large': 'no image'}
        }, 
      ];
    
      const expected = productsToDisplay(products);
      
      expect(expected).to.eql([{id: 3, inStock: true, salePrice: '10.00', images: {'large': 'https://example.com/img/3.jpg'}}]);
      
    });
  });
  
  
  
  
  describe("stringToObject()", () => {
    it("should return the property value for the key 'kia'", () => {
      
      const input = "?ford=30&toyota=55&kia=10&audi=5";
      
      const parsed = stringToObject(input);
      
      expect(parsed["kia"]).to.equal("10");
      
    });
  });
    
  
});




mocha.run();*/