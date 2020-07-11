
// TODO: return true with a probability of 20%.
const hasNewMessage = () => {
  if (Math.random() <= 0.2) {
    return true
  }else {
    return false}
};

const newMessage = () => {

  const subject = ['Congratulations', 'Google Alert', 'Markets', 'myFT', 'Thank you', 'Welcome'];
  const sender = ['Financial Times', 'McKinsey', 'Eventbrite', 'Agnes', 'Sarah', 'LinkedIn'];
  const randomSubject = subject[Math.floor(Math.random() * subject.length)];
  const randomSender = sender[Math.floor(Math.random() * sender.length)];

  return {
    sender: (randomSubject),
    subject: (randomSender)
  }
//code to execute if conditional is true
  // TODO: return a random message as an object with two keys, subject and sender
};
var message = newMessage()
const appendMessageToDom = (message) => {

  const Email = document.querySelector ('#inbox');
  Email.insertAdjacentHTML("beforebegin",
    `<div class="container" id="inbox">
    <div class="row message unread">
        <div class="col-3">${message.sender}</div>
        <div class="col-9">${message.subject}</div>
    </div>`);



//create some html in a string, pass string to intertAdjacentHTML
//interpolate object values into string using tag template literal
};
  // create a new div element
  // TODO: append the given message to the DOM (as a new row of `#inbox`)

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.

  let counter = document.querySelector("#count")
  if (hasNewMessage()){
    counterInt = parseInt(counter.innerText[1])
    counterInt += 1
    counter.innerText = `(${counterInt})`
    appendMessageToDom(newMessage())
  }
};








// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

