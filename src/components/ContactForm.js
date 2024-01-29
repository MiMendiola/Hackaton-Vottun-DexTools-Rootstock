import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>¡Envíanos un correo!</h1>
      <form>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea name="message" id="message" placeholder="Message" rows="4"/>
        <button>Envia un mensaje</button>
      </form>
    </div>
  );
}

export default ContactForm;
