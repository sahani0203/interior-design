function ContactButtons() {
  return (
    <div className="contact-buttons">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>

      {/* Call */}
      <a
        href="tel:+919999999999"
        className="call-button"
        aria-label="Call us"
      >
        Call
      </a>

    </div>
  );
}

export default ContactButtons;