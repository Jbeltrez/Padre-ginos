import { useState } from "react";
import Pizza from "./Pizza";

// anything you see use in react the alarm should go off in your head that that s hook 

export default function Order () {
    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M"); 
    console.log(pizzaType, pizzaSize) 

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>

                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select 

                                // e is a normal browser evet, gets an anonymous function 
                                // whenever a change happens on the select call this function , which takes in an event and 
                                // calls setPizzaType with the target.value and the target is gonna be one of these options and the 
                                // value will change.                
                            onChange={(e) => setPizzaType(e.target.value)}

                            name="pizza-type" value={pizzaType}>
                            <option value="pepperoni">The Pepperoni Pizza</option>
                            <option value="hawaiian">The Hawaiian Pizza</option>
                            <option value="big_meat">The Big Meat Pizza</option>

                        </select>
                    </div>
                    <div>
                        
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input checked={pizzaSize === 'S'} 
                                type="radio"
                                name="pizza-size"
                                value="S"
                                id="pizza-s"
                                onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input checked={pizzaSize === 'M'} 
                                type="radio"
                                name="pizza-size"
                                value="M"
                                id="pizza-m"
                                onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-m">Meidum</label>
                            </span>
                            <span>
                                <input checked={pizzaSize === 'L'} 
                                type="radio"
                                name="pizza-size"
                                value="L"
                                id="pizza-l"
                                onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to Cart</button>
                </div>
                <div className="order-pizza">
                    <Pizza
                        name="Pepperoni"
                        description="another pep pizza"
                        image="/public/pizzas/pepperoni.webp"
                    />
                    <p>$13.37</p>

                </div>
            </form>

        </div>
    )
}