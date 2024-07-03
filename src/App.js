import "./App.css";
import Card1 from "./componeds/card1";
import "bootstrap/dist/css/bootstrap.css";

function App() {

  const getButtonColorClass = (planType) => {
    switch (planType) {
      case "FREE":
        return "btn-primary";
      case "PLUS":
        return "btn-success";
      case "PRO":
        return "btn-warning";
      default:
        return "btn-primary";
    }
  };
  const plans = [
    {
      plan: 'FREE',
      price: '$0/Month',
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
      btn: 'BUTTON',
    },
    {
      plan: 'PLUS',
      price: '$9/Month',
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
      btn: 'BUTTON',
    },
    {
      plan: 'PRO',
      price: '$49/Month',
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
      btn: 'BUTTON',
    },
  ];

  
  return (
    <div class="container">
      <div class="row">
        {plans.map((card) => {
          return <Card1 data={card} btnColorClass={getButtonColorClass(card.plan)}></Card1>;
        })}
      </div>
    </div>
  );
}

export default App;
