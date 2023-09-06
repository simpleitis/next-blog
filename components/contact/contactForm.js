import axios from "axios";
import { useRef } from "react";

function ContactForm() {
  const email = useRef();
  const name = useRef();
  const message = useRef();

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    const requestBody = {
      email: email.current.value,
      name: name.current.value,
      message: message.current.value,
    };
    const response = await axios.post("/api/contact", requestBody);
  };

  return (
    <section>
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessageHandler}>
        <div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              className="border mt-2"
              ref={email}
            />
          </div>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              className="border mt-2"
              ref={name}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            className="block border "
            ref={message}
          ></textarea>
        </div>

        <div>
          <button className="p-3 border mt-2">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
