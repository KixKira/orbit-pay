'use client';
import React from 'react';

const CommentPost = () => {
  return (
    <>
      <div className="tp-postbox-reply">
        <h3 className="tp-postbox-reply-title">Leave a comment</h3>
        <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-md-6">
              <div className="tp-postbox-input">
                <input name="name" type="text" placeholder="Your Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-postbox-input">
                <input name="email" type="email" placeholder="Your E-mail" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-postbox-input">
                <input name="number" type="text" placeholder="Phone Number" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-postbox-input">
                <input name="text" type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-postbox-input">
                <textarea placeholder="Message"></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-postbox-input-btn">
                <button type="submit" className="tp-btn">Submit Now</button>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentPost;