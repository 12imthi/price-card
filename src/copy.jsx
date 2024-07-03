import React from 'react';
import './PriceCard.css'; // You'll need to create this CSS file for styling

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="price-card">
      <h2>${price}/month</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.included ? 'included' : 'not-included'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

const App = () => {
  const plans = [
    {
      plan: 'FREE',
      price: 0,
      features: [
        { name: 'Single User', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: false },
        { name: 'Dedicated Phone Support', included: false },
        { name: 'Free Subdomain', included: false },
        { name: 'Monthly Status Reports', included: false },
      ],
    },
    {
      plan: 'PLUS',
      price: 9,
      features: [
        { name: '5 Users', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: true },
        { name: 'Dedicated Phone Support', included: true },
        { name: 'Free Subdomain', included: true },
        { name: 'Monthly Status Reports', included: false },
      ],
    },
    {
      plan: 'PRO',
      price: 49,
      features: [
        { name: 'Unlimited Users', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: true },
        { name: 'Dedicated Phone Support', included: true },
        { name: 'Free Subdomain', included: true },
        { name: 'Monthly Status Reports', included: true },
      ],
    },
  ];

  return (
    <div className="app">
      {plans.map((plan, index) => (
        <PriceCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default App;