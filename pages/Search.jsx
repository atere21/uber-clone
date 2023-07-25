import { useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const Search = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [deliveryType, setDeliveryType] = useState('Express Delivery');
  const [paymentType, setPaymentType] = useState('Cash Payment');
  const [deliveryPoints, setDeliveryPoints] = useState([]);


  const handleAddNewDeliveryPoint = () => {
    if (pickup && dropoff) {
      setDeliveryPoints([...deliveryPoints, { pickup, dropoff }]);
      setPickup('');
      setDropoff('');
    }
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>
          <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
          <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
        </FromToIcons>

        <InputBoxes>
          {/* Input field for pickup */}
          <Input
            placeholder='Enter pickup details'
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />

          {/* Input field for dropoff */}
          <Input 
            placeholder='Enter delivery details'
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />

          {/* Text with an icon for "Add New Delivery Point" */}

          <AddNewDelivery onClick={handleAddNewDeliveryPoint}>
            Add New Delivery Point
            <PlusNewIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
          </AddNewDelivery>

        </InputBoxes>
        <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png'/>
        Saved Places
      </SavedPlaces>

      <DeliveryType>
        <h2>Delivery Type</h2>
        <RadioButton>

          <input
            type="radio"
            id="express"
            value="Express Delivery"
            checked={deliveryType === 'Express Delivery'}
            onChange={(e) => setDeliveryType(e.target.value)}
          />
          <label htmlFor="express">Express Delivery</label>
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            id="nextday"
            value="Next-day Delivery"
            checked={deliveryType === 'Next-day Delivery'}
            onChange={(e) => setDeliveryType(e.target.value)}
          />

          <label htmlFor="nextday">Next-day Delivery</label>
        </RadioButton>
      </DeliveryType>

      <PaymentType>
        <h2>Payment Details</h2>
        
        <RadioButton>
          <input
            type="radio"
            id="cash"
            value="Cash Payment"
            checked={paymentType === 'Cash Payment'}
            onChange={(e) => setPaymentType(e.target.value)}
          />

          <label htmlFor="cash">Cash</label>
        </RadioButton>
        <RadioButton>
          <input
            type="radio"
            id="card"
            value="Card Payment"
            checked={paymentType === 'Card Payment'}
            onChange={(e) => setPaymentType(e.target.value)}
          />

          <label htmlFor="card">Card Payment</label>
        </RadioButton>
      </PaymentType>

      {/* Link to confirm locations */}
      
        <Link href={{
          pathname: "/Confirm",
          query: {
            pickup: "Ikeja",
            dropoff: "Egbeda",
          }
        }}>

        <ConfirmButtonContainer>
          Confirm Locations
        </ConfirmButtonContainer>
      </Link>

      {/* Display the list of saved delivery points */}
      <SavedDeliveryPoints>
        {deliveryPoints.map((point, index) => (
          <div key={index}>
            <strong>Pickup:</strong> {point.pickup}, <strong>Dropoff:</strong> {point.dropoff}
          </div>
        ))}

      </SavedDeliveryPoints>
    </Wrapper>
  );
};


export default Search;

const ConfirmButtonContainer = tw.div`
  bg-purple-800 text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`;

const Wrapper = tw.div`
  bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
  bg-white px-4
`;

const BackButton = tw.img`
  h-12 cursor-pointer
`;

const FromToIcons = tw.div`
  w-10 flex flex-col mr-2 items-center
`;

const InputContainer = tw.div`
  bg-white flex items-center px-4 mb-2
`;

const Circle = tw.img`
  h-2.5
`;

const Line = tw.img`
  h-10
`;


const Square = tw.img`
  h-3
`;

const InputBoxes = tw.div`
  flex flex-col flex-1
`;

const Input = tw.input`
  h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const PlusIcon = tw.img`
  w-10 h-10 bg-gray-200 rounded-full ml-3
`;

const PlusNewIcon = tw.img`
  w-6 h-6 ml-3 font-bold cursor-pointer
`;

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2
`;

const AddNewDelivery = tw.div`
  flex items-center cursor-pointer text-purple-600 font-bold hover:text-purple-800
`;

const StarIcon = tw.img`
  bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const DeliveryType = tw.div`
  px-8 py-6 text-2xl font-bold text-purple-800
`;

const RadioButton = tw.div`
  flex items-center py-2 text-sm cursor-pointer
  input[type='radio'] {
    margin-right: 2px;
  }

  label {
    cursor: pointer;
  }

`;

const PaymentType = tw.div `
px-8 py-6 text-2xl font-bold text-purple-800 
`
const SavedDeliveryPoints =tw.div `

`