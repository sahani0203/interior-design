import { useState } from "react";

function Consultation() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    location: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log("Consultation Request:", formData);

    alert(
      "Thank you! Your consultation request has been submitted."
    );

  };

  return (
    <main className="consultation-page">

      {/* HEADER */}

      <section className="consultation-header">

        <p className="section-label">
          FREE CONSULTATION
        </p>

        <h1>
          Let's Design
          <br />
          Your Dream Home.
        </h1>

        <p>
          Tell us about your home and requirements.
          Our interior design team will get in touch
          with you to discuss your project.
        </p>

      </section>


      {/* FORM */}

      <section className="consultation-form-section">

        <form
          className="consultation-form"
          onSubmit={handleSubmit}
        >

          {/* NAME */}

          <div className="form-group">

            <label>
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

          </div>


          {/* PHONE */}

          <div className="form-group">

            <label>
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />

          </div>


          {/* EMAIL */}

          <div className="form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

          </div>


          {/* PROPERTY TYPE */}

          <div className="form-group">

            <label>
              Property Type *
            </label>

            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Property Type
              </option>

              <option value="2 BHK">
                2 BHK
              </option>

              <option value="3 BHK">
                3 BHK
              </option>

              <option value="4 BHK">
                4 BHK
              </option>

              <option value="5 BHK">
                5 BHK
              </option>

              <option value="Villa">
                Villa
              </option>

              <option value="Apartment">
                Apartment
              </option>

            </select>

          </div>


          {/* LOCATION */}

          <div className="form-group">

            <label>
              Project Location *
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City / Area"
              required
            />

          </div>


          {/* SERVICE */}

          <div className="form-group">

            <label>
              Required Service *
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Service
              </option>

              <option value="Living Room">
                Living Room
              </option>

              <option value="Bedroom">
                Bedroom
              </option>

              <option value="Kitchen">
                Kitchen
              </option>

              <option value="Bathroom">
                Bathroom
              </option>

              <option value="Full Home">
                Full Home
              </option>

              <option value="Apartment Interior">
                Apartment Interior
              </option>

            </select>

          </div>


          {/* BUDGET */}

          <div className="form-group">

            <label>
              Approximate Budget
            </label>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >

              <option value="">
                Select Budget
              </option>

              <option value="3-5 Lakh">
                ₹3 - ₹5 Lakh
              </option>

              <option value="5-10 Lakh">
                ₹5 - ₹10 Lakh
              </option>

              <option value="10-15 Lakh">
                ₹10 - ₹15 Lakh
              </option>

              <option value="15-25 Lakh">
                ₹15 - ₹25 Lakh
              </option>

              <option value="25+ Lakh">
                ₹25+ Lakh
              </option>

            </select>

          </div>


          {/* MESSAGE */}

          <div className="form-group full-width">

            <label>
              Tell Us About Your Project
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows="6"
            />

          </div>


          {/* SUBMIT */}

          <div className="form-submit">

            <button type="submit">
              Request Free Consultation →
            </button>

          </div>

        </form>

      </section>

    </main>
  );
}

export default Consultation;