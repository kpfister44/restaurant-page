export default function menuLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = ""
    contentDiv.innerHTML = `
        <div class="menu-header-container">
            <h1>Menu</h1>
        </div>
        <div class="sub-header-container">
            <p>Beverages</p>
        </div>
        <div class="menu-card">
            <p class="card-title">Coffee</p>
            <p class="card-description">Dip's signature roast. Enjoy this coffee at your leisure. It comes with unlimited refils.</p>
            <p class="card-price">$2</p>
            <img class="rose-garden" src="images/coffee.png" alt="Coffee Logo"/>
        </div>
        <div class="menu-card">
            <p class="card-title">Summer Beer</p>
            <p class="card-description">Dip's exception seasonal summer beer. Its a light hefenwisen beer served in a 16oz mug. It is meant to be enjoyed with others on a nice summer day!</p>
            <p class="card-price">$4</p>
            <img class="rose-garden" src="images/beer.png" alt="Beer logo"/>
        </div>
        <div class="sub-header-container">
            <p>Sides</p>
        </div>
        <div class="menu-card">
            <p class="card-title">Buffalo Chicken Dip</p>
            <p class="card-description">Dip's signature dip. Chips are free and come with the dip. This buffalo chicken dip serves 2-3 people.</p>
            <p class="card-price">$8</p>
            <img class="rose-garden" src="images/chips.png" alt="Chips logo"/>
        </div>
        <div class="menu-card">
            <p class="card-title">Quacomole</p>
            <p class="card-description">Homemade quacomole handmade daily. We use only the freshest avocados available. If we cannot find the right avocados, the dip will not be made available that day.</p>
            <p class="card-price">$6</p>
            <img class="rose-garden" src="images/avocado.png" alt="Avocado Logo"/>
        </div>
        <div class="sub-header-container">
            <p>Main Dishes</p>
        </div>
        <div class="menu-card">
            <p class="card-title">Buffalo Burger</p>
            <p class="card-description">Our signature burger is lathered in our buffalo sauce made with 100% grass fed beef. The staple for someone coming in who is hungry and looking for a delicious burger. Served with a big pile of fries. </p>
            <p class="card-price">$8</p>
            <img class="rose-garden" src="images/burger.png" alt="Burger Logo"/>
        </div>
        <div class="menu-card">
            <p class="card-title">Buffalo Chicken Sandwhich</p>
            <p class="card-description">Our signature chicken sandwhich lightly breaded and lathered in our buffalo sauce. Made with cage free, pasture raised chicken. A staple for someone coming in who is hungry and looking for a delicious burger. Served with a big pile of fries.</p>
            <p class="card-price">$8</p>
            <img class="rose-garden" src="images/chicken-sandwich.png" alt="Chicken Sandwich Logo"/>
        </div>
        <div class="menu-card">
            <p class="card-title">Hot Dog</p>
            <p class="card-description"> 1/4 100% beef hot dog served Chicago style with fries on the top.</p>
            <p class="card-price">$4</p>
            <img class="rose-garden" src="images/hotdog.png" alt="Hotdog Logo"/>
        </div>
        <div class="menu-card">
            <p class="card-title">Chicken Cesar Salad</p>
            <p class="card-description">A chicken cesar salad that will most likely not be finished in one sitting. You won't leave disappointed.</p>
            <p class="card-price">$8</p>
            <img class="rose-garden" src="images/salad.png" alt="Salad Logo"/>
        </div>
        <div class="menu-card">
            <p class="card-title">Pizza Slice</p>
            <p class="card-description">Chicago style pizza slice with your choice of toppings.</p>
            <p class="card-price">$4</p>
            <img class="rose-garden" src="images/pizza.png" alt="Pizza Logo"/>
        </div>
        <div class="menu-card">
            <p class="card-title">Pasta</p>
            <p class="card-description">Customizable pasta served with either alfredo, vodka, or red sauce.</p>
            <p class="card-price">$8</p>
            <img class="rose-garden" src="images/pasta.png" alt="Pasta Logo"/>
        </div>
    `;
}