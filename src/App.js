import React from 'react';


function Food({name, picture}){

  return(
    <div>   
      <h1>{name}</h1>
      <img alt="사진" src={picture} width={200}/>
    </div>
  )
}

const foodLike=[
  { name:'kimchi',
    image:"https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg"
  },
  { name:"GoDunger-Jorim",
    image:"https://homecuisine.co.kr/files/attach/images/140/744/009/e382399431288b69da57cb0a73f79bee.JPG"
  }
]

  

function App() {
  return (
    <div className="App">
      {foodLike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
