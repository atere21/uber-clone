import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link';

const Confirm = () => {
  const router = useRouter();

  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoidG9zaW4yMTIiLCJhIjoiY2xrOXB3aHB6MHNiMjNmcnR1ZW9lZzJlYyJ9.KTqqNANnbtfhDQ7A1BoHCw", 
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      // Update the state with the pickup coordinates
      if (data.features && data.features.length > 0) {
        const { center } = data.features[0].geometry;
        setPickupCoordinates(center);
      }
    });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoidG9zaW4yMTIiLCJhIjoiY2xrOXB3aHB6MHNiMjNmcnR1ZW9lZzJlYyJ9.KTqqNANnbtfhDQ7A1BoHCw", 
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      // Update the state with the dropoff coordinates
      if (data.features && data.features.length > 0) {
        const { center } = data.features[0].geometry;
        setDropoffCoordinates(center);
      }
    });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/Search">
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
        </Link>
      </ButtonContainer>
      <Map 
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <p>Select your ride preferences:</p>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm Delivery
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ConfirmButton = tw.div`
  bg-purple-800 text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer hover:bg-purple-700
`;

const ButtonContainer = tw.div`
   rounded-md  px-4 bg-white
`;

const BackButton = tw.img`
  h-12 cursor-pointer
`;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;

const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2 px-4 text-xl text-purple-700 py-2
`;

const Wrapper = tw.div`
  flex h-screen flex-col
`;
