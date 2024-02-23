// app/javascript/controllers/chatroom_subscriptions_controller.js
import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

export default class extends Controller {
  static values = { chatroomId: Number }
  static targets = ["messages", "form"]

  connect() {
    this.channel = createConsumer().subscriptions.create(
      { channel: "ChatroomChannel", id: this.chatroomIdValue },
      {
        received: data => this.insertMessageAndScrollDown(data),
      }
    );
    console.log(`Subscribed to the chatroom with the id ${this.chatroomIdValue}.`);
  }

  disconnect() {
    console.log("Unsubscribed from the chatroom");
    this.channel.unsubscribe();
  }
  insertMessageAndScrollDown(data) {
    this.messagesTarget.insertAdjacentHTML("beforeend", data);

    // Get the last message element
    const lastMessage = this.messagesTarget.lastElementChild;

    // Scroll the last message into view
    lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }





  resetForm() {
    this.formTarget.reset();
  }
}
