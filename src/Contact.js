import React from "react";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <div className="container-fluid footer">
        <div className="row">
          <div
            className="col-12 col-md-12 col-lg-12 message"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            {/* Contact heading */}
            <h3 className="about">SEND US MESSAGE</h3>
            <p className="about-pes">
              Interested in working together? Let's connect via email and
              WhatsApp.
            </p>

            {/* Contact options */}
            <table className="p-5">
              <tr>
                <td>
                  <a href="#">
                    <i class="fa fa-envelope fa-lg socialb" aria-hidden="true"></i>
                  </a>
                </td>

                <td>
                  <a href="#">
                    <i class="fa fa-phone fa-lg socialb" aria-hidden="true"></i>
                  </a>
                </td>
              </tr>
            </table>
            <br />
          </div>
        </div>
        {/* Contact form */}
        <form action="https://formspree.io/f/myyazway" method="POST">
          <div className="row form">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-5">
              <label className="about-p">FIRST NAME</label>
              <input
                type="text"
                placeholder="First Name"
                className="inputtest bg-light"
              ></input>
              <br />
              <br />
              <label className="about-p">LAST NAME</label>
              <input
                type="text"
                placeholder="Last Name"
                className="inputtest bg-light"
              ></input>
              <br />
              <br />
              <label className="about-p">EMAIL</label>
              <input
                type="email"
                placeholder="Email"
                className="inputtest bg-light"
              ></input>
              <br />
              <br />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6  pb-5">
              <label className="about-p">MESSAGE</label>
              <textarea
                placeholder="Message"
                rows={9}
                className="inputtext bg-light"
              ></textarea>

              {/* Submit button */}
              <input
                type="submit"
                className="submit"
                style={{ marginTop: "12px" }}
              ></input>
            </div>
          </div>
        </form>

        <div className="row"></div>

        {/* Footer */}
        <hr></hr>
        <center>
          <div className="col">
            © 2023 - All right Reserved.
            <br />
            <b>Designed By Ghulam Umer</b>
          </div>
        </center>
      </div>
    </>
  );
};

export default Contact;
