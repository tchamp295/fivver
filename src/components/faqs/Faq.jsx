import React from "react";

const Faq = () => {
  return (
    <div className="mx-auto py-12 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full">
          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Daisy" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="daisy@site.com" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input type="tel" placeholder="+254 700 000000" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea placeholder="Your message" className="textarea textarea-bordered h-24"></textarea>
          </div>
        </div>
      </div>
          <div className="py-7">
              
      </div>
    </div>
  );
};

export default Faq;
