import React from 'react';

const Pricing =()=> {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        <div className="card">
          <h3>Basic</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Access to core features</li>
            <li>Email support</li>
          </ul>
          <button className="btn">Choose Basic</button>
        </div>
        <div className="card popular">
          <h3>Pro</h3>
          <p>$19.99/month</p>
          <ul>
            <li>Everything in Basic</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="btn">Choose Pro</button>
        </div>
      </div>
    </section>
  );
}
export default Pricing