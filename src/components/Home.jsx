import React from 'react'

const Home = () => {
  return (
    
    <>
    <div className="add-to-cart">
        <img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300006/54302308-shopping-cart-icon.jpg" alt="shopping-cart"/>
    </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHVHMP6JrPwvZiVzg-e5a8TT3W6jo73uCbA&usqp=CAU" alt="Phone" />
            </div>
            <div className="text-wrapper item">
                <span>Razer Phone</span>
                <span>Price: 1000$</span>
            </div>
            <div className="btn-wrapper item">
                <button>Add To Cart</button>
            </div>
        </div>
    </>

  )
}

export default Home