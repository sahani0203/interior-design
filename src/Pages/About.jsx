function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-content">

          <p className="section-label">
            ABOUT US
          </p>

          <h1>
            Designing Homes
            <br />
            With Purpose.
          </h1>

          <p>
            We create beautiful, functional and
            personalised interiors for homes and
            apartments.
          </p>

        </div>

      </section>


      {/* STORY */}
      <section className="about-story">

        <div className="about-story-title">

          <p className="section-label">
            ABOUT US
          </p>

          <h2>
            Designing Spaces
            <br />
            That Feel Like Home.
          </h2>

        </div>

        <div className="about-story-content">

          <p className="large-text">
            We believe a beautiful home should be
            more than just visually appealing. It
            should reflect your personality, lifestyle
            and the way you live.
          </p>

          <p>
            Our interior design team creates
            thoughtful and functional spaces for
            homes and apartments. From concept and
            design to final execution, we take care
            of every detail.
          </p>

          <p>
            Whether you are designing a single room
            or your complete home, we create spaces
            that are comfortable, practical and
            timeless.
          </p>

          <a href="/about" className="about-link">
            Discover More About Us →
          </a>

        </div>

      </section>


      {/* WHY CHOOSE US */}
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

          <div className="why-card">
            <span>01</span>

            <h3>
              Personalised Design
            </h3>

            <p>
              Every project is designed around your
              lifestyle, taste and requirements.
            </p>
          </div>


          <div className="why-card">
            <span>02</span>

            <h3>
              Quality Materials
            </h3>

            <p>
              We focus on reliable materials and
              finishes that look beautiful and last
              longer.
            </p>
          </div>


          <div className="why-card">
            <span>03</span>

            <h3>
              Experienced Team
            </h3>

            <p>
              Our design and execution team works
              together to deliver your project
              professionally.
            </p>
          </div>


          <div className="why-card">
            <span>04</span>

            <h3>
              Complete Execution
            </h3>

            <p>
              From design to final installation, we
              manage the complete interior process.
            </p>
          </div>

        </div>

      </section>


      {/* HOW WE WORK */}
      <section className="process-section">

        <div className="process-header">

          <p className="section-label">
            HOW WE WORK
          </p>

          <h2>
            Simple Process.
            <br />
            Beautiful Results.
          </h2>

        </div>


        <div className="process-grid">

          <div className="process-card">

            <span>01</span>

            <h3>
              Consultation
            </h3>

            <p>
              We understand your requirements,
              lifestyle and design preferences.
            </p>

          </div>


          <div className="process-card">

            <span>02</span>

            <h3>
              Design
            </h3>

            <p>
              Our designers create a personalised
              interior concept for your home.
            </p>

          </div>


          <div className="process-card">

            <span>03</span>

            <h3>
              Execution
            </h3>

            <p>
              Our team manages the execution and
              brings your interior design to life.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <p className="section-label">
          START YOUR PROJECT
        </p>

        <h2>
          Ready To Transform
          <br />
          Your Home?
        </h2>

        <p>
          Tell us about your space and your
          requirements. Our team will get in touch
          with you to discuss your interior design
          project.
        </p>

        <div className="about-cta-buttons">

          <a href="/consultation">
            Book Free Consultation →
          </a>

          <a href="tel:+919999999999">
            Call Us
          </a>

        </div>

      </section>

    </main>
  );
}

export default About;