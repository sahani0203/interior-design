function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Living Room",
      description:
        "Elegant and comfortable living spaces designed for everyday living, relaxation and entertaining guests.",
    },
    {
      number: "02",
      title: "Bedroom",
      description:
        "Calm and personalised bedrooms designed around comfort, storage and your personal style.",
    },
    {
      number: "03",
      title: "Kitchen",
      description:
        "Modern and functional kitchens with smart storage, practical layouts and beautiful finishes.",
    },
    {
      number: "04",
      title: "Bathroom",
      description:
        "Sophisticated bathroom interiors combining functionality, quality materials and timeless design.",
    },
    {
      number: "05",
      title: "Full Home",
      description:
        "Complete interior solutions covering every room, from initial design to final execution.",
    },
    {
      number: "06",
      title: "Apartment Interior",
      description:
        "Thoughtfully planned apartment interiors that make the best use of your space, layout and lifestyle.",
    },
  ];

  return (
    <section className="services-section">

      {/* Header */}

      <div className="services-header">

        <div>

          <p className="section-label">
            OUR SERVICES
          </p>

          <h2>
            Interiors Designed
            <br />
            Around You.
          </h2>

        </div>

        <p className="services-intro">
          From a single room to a complete home,
          we create beautiful and functional
          interiors that reflect the way you live.
        </p>

      </div>


      {/* Services */}

      <div className="services-grid">

        {services.map((service) => (
          <article
            className="service-card"
            key={service.number}
          >

            <div className="service-number">
              {service.number}
            </div>

            <div className="service-card-content">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <a href="/consultation">
                Discuss Your Space →
              </a>

            </div>

          </article>
        ))}

      </div>


      {/* Bottom CTA */}

      <div className="services-bottom">

        <p>
          Not sure which service is right for you?
        </p>

        <a href="/consultation">
          Talk To Our Design Team →
        </a>

      </div>

    </section>
  );
}

export default ServicesSection;