import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import img3 from "../../../../assets/images/companies/img-3.png";

const RightSection = () => {

  const [isBookmarkClick , setIsBookmarkClick] = useState(false);
  return (
    <React.Fragment>
      <Card className="card">
        <CardHeader className="card-header">
          <h5 className="mb-0">Job Overview</h5>
        </CardHeader>
        <CardBody className="card-body">
          <div className="table-responsive table-card">
            <Table className="table mb-0">
              <tbody>
                <tr>
                  <td className="fw-semibold">Title</td>
                  <td>Product Designer</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Company Name</td>
                  <td>Themesbrand</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Location</td>
                  <td>Zuweihir, UAE</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Time</td>
                  <td>
                    <span className="badge bg-success-subtle text-success">Full Time</span>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">Job Application</td>
                  <td>54 Application</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Post Date</td>
                  <td>15 Sep, 2021</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Salary</td>
                  <td>$35k - $45k</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Experience</td>
                  <td>5+ Years</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Qualification</td>
                  <td>Master Degree</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="mt-4 pt-2 hstack gap-2">
            <NavLink to="#!" className="btn btn-primary w-100">
              Apply Now
            </NavLink>
            <Link
              to="#!"
              onClick={() => setIsBookmarkClick(!isBookmarkClick)}
              className={isBookmarkClick ? "btn btn-soft-danger btn-icon custom-toggle flex-shrink-0 active" : "btn btn-soft-danger btn-icon custom-toggle flex-shrink-0"}
            >
              {!isBookmarkClick ?
              <span className="icon-on">
                <i className="ri-bookmark-line align-bottom"></i>
              </span>
              :
              <span className="icon-off">
                <i className="ri-bookmark-3-fill align-bottom"></i>
              </span>
              }
            </Link>
          </div>
        </CardBody>
      </Card>

      <Card className="card">
        <CardBody className="card-body">
          <div className="avatar-sm mx-auto">
            <div className="avatar-title bg-warning-subtle rounded">
              <img src={img3} alt="" className="avatar-xxs" />
            </div>
          </div>
          <div className="text-center">
            <NavLink to="#!">
              <h5 className="mt-3">Themesbrand</h5>
            </NavLink>
            <p className="text-muted">IT Department</p>
          </div>

          <div className="table-responsive">
            <Table className="table mb-0">
              <tbody>
                <tr>
                  <td className="fw-semibold">Company Size</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Industry Type</td>
                  <td>Software</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Founded in</td>
                  <td>2016</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Phone</td>
                  <td>+(234) 12345 67890</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Email</td>
                  <td>themesbrand@gmail.com</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Social media</td>
                  <td>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <NavLink to="#!">
                          <i className="ri-whatsapp-line"></i>
                        </NavLink>
                      </li>
                      <li className="list-inline-item">
                        <NavLink to="#!">
                          <i className="ri-facebook-line"></i>
                        </NavLink>
                      </li>
                      <li className="list-inline-item">
                        <NavLink to="#!">
                          <i className="ri-twitter-line"></i>
                        </NavLink>
                      </li>
                      <li className="list-inline-item">
                        <NavLink to="#!">
                          <i className="ri-youtube-line"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>

      <Card className="card">
        <CardHeader className="card-header">
          <h5 className="mb-0">Job Location</h5>
        </CardHeader>
        <CardBody className="card-body">
          <div className="ratio ratio-4x3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861227.8137337372!2d51.654904288504646!3d24.33915646928631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1664257145153!5m2!1sen!2sin"
              height="450"
              style={{ border: "0" }}
              title="abc"
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </CardBody>
      </Card>

      <Card className="card">
        <CardHeader className="card-header">
          <h5 className="mb-0">Contact Us</h5>
        </CardHeader>
        <CardBody className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="emailInput"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageInput"
                rows={3}
                placeholder="Message"
              ></textarea>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default RightSection;
