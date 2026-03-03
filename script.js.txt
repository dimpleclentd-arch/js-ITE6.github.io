function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
  // Show selected section
  document.getElementById(sectionId).style.display = 'block';

  // Trigger logic
  switch(sectionId) {
    case 'activity1': activity1(); break;
    case 'activity2': activity2(); break;
    case 'activity3': activity3(); break;
    case 'activity4': activity4(); break;
    case 'activity5': activity5(); break;
    case 'activity6': activity6(); break;
    case 'activity7': activity7(); break;
    case 'activity8': activity8(); break;
  }
}

// Activity 1: Welcome Message
function activity1() {
  document.getElementById("output1").innerHTML = "Welcome to Dimple's Nail Salon 💅✨";
}

// Activity 2: Client Info
function activity2() {
  const client = { name: "Anna", service: "Gel Polish", time: "2 PM" };
  document.getElementById("output2").innerHTML =
    `Client: ${client.name}<br>Service: ${client.service}<br>Time: ${client.time}`;
}

// Activity 3: Price Calculator
function activity3() {
  const services = [
    { name: "Basic Manicure", price: 200 },
    { name: "Gel Polish", price: 350 },
    { name: "Nail Art", price: 150 }
  ];
  let total = services.reduce((sum, s) => sum + s.price, 0);
  document.getElementById("output3").innerHTML =
    services.map(s => `${s.name}: ₱${s.price}`).join("<br>") +
    `<br><strong>Total: ₱${total}</strong>`;
}

// Activity 4: Appointment Input
function activity4() {
  const name = "Dimple";
  const color = "Baby Pink";
  document.getElementById("output4").innerHTML =
    `Appointment booked for ${name} with ${color} nails!`;
}

// Activity 5: Age Check
function activity5() {
  const age = 20;
  const msg = age >= 18 ? "Eligible for salon services ✅" : "Sorry, underage ❌";
  document.getElementById("output5").innerHTML = msg;
}

// Activity 6: Queue Numbers
function activity6() {
  const queue = [1,2,3,4,5];
  document.getElementById("output6").innerHTML = `Queue Numbers: ${queue.join(", ")}`;
}

// Activity 7: Booking Button
function activity7() {
  document.getElementById("output7").innerHTML = `<button class="btn">Book Appointment</button>`;
}

// Activity 8: Extra Example
function activity8() {
  document.getElementById("output8").innerHTML = "Extra activity output here ✨";
}
dddddd

