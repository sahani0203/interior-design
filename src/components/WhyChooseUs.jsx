function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Personalised Design",
      description:
        "Every project is designed around your lifestyle, taste and requirements.",
    },
    {
      number: "02",
      title: "Quality Materials",
      description:
        "We focus on reliable materials and finishes that look beautiful and last longer.",
    },
    {
      number: "03",
      title: "Experienced Team",
      description:
        "Our design and execution team works together to deliver your project professionally.",
    },
    {
      number: "04",
      title: "Complete Execution",
      description:
        "From design to final installation, we manage the complete interior process.",
    },
  ];

  return (
    <section className="why-section">

      <div className="why-header">

        <p className="section-label">
          WHY CHOOSE US
        </p>

        <h2>
          Designed With
          <br />
          Purpose.
        </h2>

        <p>
          We believe great interiors are not just
          beautiful. They should also make everyday
          life easier and more comfortable.
        </p>

      </div>

      <div className="why-grid">

        {features.map((feature) => (

          <div
            className="why-card"
            key={feature.number}
          >

            <span>
              {feature.number}
            </span>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;