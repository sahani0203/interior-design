const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Noida",
    text:
      "The team completely transformed our apartment. The design was beautiful and the entire process was very smooth.",
  },
  {
    name: "Priya Verma",
    location: "Greater Noida",
    text:
      "We loved the design of our living room and kitchen. The team understood exactly what we wanted.",
  },
  {
    name: "Amit Singh",
    location: "Delhi NCR",
    text:
      "Very professional team and excellent quality of work. Our home now feels completely different.",
  },
];

function Testimonials() {
  return (
    <main>

      <section className="inner-page-hero">

        <p className="section-label">
          TESTIMONIALS
        </p>

        <h1>
          What Our Clients
          <br />
          Say.
        </h1>

        <p>
          Real experiences from our interior design clients.
        </p>

      </section>

      <section className="testimonials-page-grid">

        {testimonials.map((testimonial) => (

          <div
            className="testimonial-card"
            key={testimonial.name}
          >

            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p>
              "{testimonial.text}"
            </p>

            <strong>
              {testimonial.name}
            </strong>

            <span>
              {testimonial.location}
            </span>

          </div>

        ))}

      </section>

    </main>
  );
}

export default Testimonials;