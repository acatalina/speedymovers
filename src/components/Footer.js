import React from 'react';

const Footer = (props) => {
  return (
    <footer itemScope itemType="http://schema.org/LocalBusiness" 
      itemRef="_image2" className="footer"
    >
      <div className="footer-contactdetails">
        <span itemProp="name">Speedy Movers</span>
        <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress" itemRef="_addressRegion7">
        <span itemProp="streetAddress"><span>Building 24a Hindley Business Centre</span>
        <span>Prospect Mill</span></span>
        <span itemProp="postalCode">WN2 3PA</span>
        <span itemProp="adressLocality">Hindley, Wigan</span>
        <span itemProp="adressRegion">Northwest</span>
        <span itemProp="addressCountry">England, United Kingdom</span></span>
        <span itemProp="telephone">07923 953034</span>
        <span itemProp="email">speedystorage7@gmail.com</span>
      </div>
      <p className="created">Coded by <a href="https://github.com/acatalina">
        Drasek</a>
      </p>
      <meta itemProp="url" content="http://www.speedy-movers.co.uk/"/>
    </footer>
  );
}

export default Footer;
