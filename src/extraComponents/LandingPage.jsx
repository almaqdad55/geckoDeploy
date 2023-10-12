import '../Styles/LandingPage.css';
import Product from './Product';

const card1 = {
  image: 'Card1.PNG',
  name: 'Normal Card 1',
  item: [
    'No Annual fee',
    'A low 11.99% p.a. variable on purchases and cash advances',
    'Flexible installment plans at a lower 9.99% p.a. variable',
    'No international transaction fees if you make 5+ card purchases that are settled (not pending) each month',
  ],
};

const card2 = {
  image: 'card2.PNG',
  name: 'Platinum Card 1',
  item: [
    '$149 annual fee',
    'Up to $30 cashback on your spend per month',
    'A 16.99% p.a. variable on purchases and cash advances',
    'Complimentary international travel insurance. T&Cs apply',
    'Flexible installmet plans at a lower 9.99% p.a. variable',
    'No international transaction fees if you make 5+ card purchases that are settled (not pending) each month',
  ],
};

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <img className="banner" src="CreditcardImage.PNG"></img>
      <div className="Products">
        <Product card={card1} />
        <Product card={card2} />
      </div>
    </div>
  );
};

export default LandingPage;
