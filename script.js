const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Burn, feel no shame or pity. Burn, apocalyptic city",
  "Expect no thanks, you can kiss my ass.",
  "Fallen saint, Fallen saint, Fallen saint ' Fallen!",
  "Go and give 'em war! True bloody war!",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = getRandomMessage(); //Create the message from the messages arr
  toasts.appendChild(notif); //Append it to the DOM

  //To remove messages from the DOM
  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
