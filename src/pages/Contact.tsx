import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 order-md-last">
            <div className="mt-4">
              <h2>Contact Information</h2>
              <p><strong>Name:</strong> An Đình Khôi</p>
              <p><strong>Phone:</strong> 0378132272</p>
              <p><strong>Email:</strong> dinhkhoian3108@gmail.com</p>
              <p><strong>Facebook:</strong> <a href="https://web.facebook.com/profile.php?id=100021970476988">Đình Khôi</a></p>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center order-md-first">
            <img src="/images/contact.jpg" alt="Contact Us" height="300px" width="300px" />
          </div>
          <div className="col-md-6 order-md-first">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleForm" placeholder="John Smith" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;