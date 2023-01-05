export default function contactLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = ""
    contentDiv.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="images/tree.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">Kyle Pfister</h5>
            <p class="card-text">"I originally came up with the idea for Dips my freshman year of college and mentioned it to my wife. If you ask her now, she would claim it was her idea...however that is not the case! I enjoy seeing friends get together, share a drink, and get quality food at an affordable price. Dips was created as a desire to fufill that need.</p>
            <p class="card-text">Elk Grove Village, IL</p>
            </div>
        </div>
        </div>
    </div>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="images/avocado.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">Melissa Pfister</h5>
            <p class="card-text">I never imagined being a restaurant owner, it just kind of fell into our laps. People would come over to our house all the time and we were known for our great beer and coffee and Dips sort of sprung up as a way to meet the needs of the friends and family who visited so frequently. My husband an I love what we do and I hope you share the joy with us by coming to eat and drink here!</p>
            <p class="card-text">Des Plaines, IL</p>
            </div>
        </div>
        </div>
    </div>
    
    `;
}