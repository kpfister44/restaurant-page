export default function pageLoad() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = ""

  const contentHeader = document.createElement("div");
  contentHeader.classList.add("content-header");
  contentDiv.appendChild(contentHeader);

  const contentHeaderTitle = document.createElement("h1");
  contentHeaderTitle.innerHTML = "Welcome to the Rose Garden Cafe";
  contentHeader.appendChild(contentHeaderTitle);

  const contentTestimonial = document.createElement("div");
  contentTestimonial.classList.add("content-testimonial");
  contentDiv.appendChild(contentTestimonial);

  const testimonial = document.createElement("p");
  testimonial.innerHTML =
    '"The Rose Garden cafe is the kind of place that trasnports you back to America in the good ole days. You never feel rushed, have plenty of foot at each meal, and get unlimitted refils on coffee. I can not recommmend this place enough for breakfast or lunch. You also cannot beat the price compared to other breakfast/lunch places."';
  testimonial.classList.add("testimonial");
  contentTestimonial.appendChild(testimonial);

  const testimonialSig = document.createElement("p");
  testimonialSig.innerHTML = "Bob and Sue";
  testimonialSig.classList.add("testimonial-sig");
  contentTestimonial.appendChild(testimonialSig);

  const contentHours = document.createElement("div");
  contentHours.classList.add("content-hours");
  contentDiv.appendChild(contentHours);

  const hoursTitle = document.createElement("p");
  hoursTitle.innerHTML = "Hours";
  hoursTitle.classList.add("hours-title");
  contentHours.appendChild(hoursTitle);

  const p1 = document.createElement("p");
  p1.innerHTML = "Sunday: 5am-8pm";
  contentHours.appendChild(p1);
  const p2 = document.createElement("p");
  p2.innerHTML = "Monday: 5am-8pm";
  contentHours.appendChild(p2);
  const p3 = document.createElement("p");
  p3.innerHTML = "Tuesday: CLOSED";
  contentHours.appendChild(p3);
  const p4 = document.createElement("p");
  p4.innerHTML = "Wednesday: 5am-8pm";
  contentHours.appendChild(p4);
  const p5 = document.createElement("p");
  p5.innerHTML = "Thursday: 5am-8pm";
  contentHours.appendChild(p5);
  const p6 = document.createElement("p");
  p6.innerHTML = "Friday: 5am-9pm";
  contentHours.appendChild(p6);
  const p7 = document.createElement("p");
  p7.innerHTML = "Saturday: 5am-9pm";
  contentHours.appendChild(p7);

  const contentLocation = document.createElement("div");
  contentLocation.classList.add("content-location");
  contentDiv.appendChild(contentLocation);

  const loactionTitle = document.createElement("p");
  loactionTitle.innerHTML = "Location";
  loactionTitle.classList.add("location-title");
  contentLocation.appendChild(loactionTitle);

  const locationP1 = document.createElement("p");
  locationP1.innerHTML = "111 E. Higgins Rd";
  contentLocation.appendChild(locationP1);

  const locationP2 = document.createElement("p");
  locationP2.innerHTML = "Elk Grove Village, IL  60007";
  contentLocation.appendChild(locationP2);
}
