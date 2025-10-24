
import React from 'react';

const GoogleMap = () => {
  return (
    <>
      <div className="tp-contact-map-area map-margin">
        <div className="tp-contact-map">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6311.195276483494!2d-122.46937946508179!3d37.72912131867138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7dc87d56f1a9%3A0xecd4728ee92942b7!2sAptos%20Park!5e0!3m2!1sen!2sbd!4v1688876299603!5m2!1sen!2sbd" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46263392.90799347!2d-6.8004560186699345!3d44.94990011898704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1686374976614!5m2!1sen!2sbd"></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;