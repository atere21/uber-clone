import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Link from 'next/link';

export default function Home() {
  // what are components? Reusable UI elements

  return (
    <Wrapper>
      <MapContainer>
        <Map />
      </MapContainer>
      <ActionItems>
        {/* Header */}
        <Header>
          {/* Self closing tag */}
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
          <Profile>
            <UserImage src='https://pbs.twimg.com/profile_images/1356228586299142149/ZA8n5UNJ_400x400.jpg' />
            <Name>Hello, Oluwatosin! </Name>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/Search'>
            <SendButton>
              <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride
            </SendButton>
          </Link>

          <Link href='/Search'>
            <FoodDeliveryButton>
              <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
              Wheels
            </FoodDeliveryButton>
          </Link>
          <Link href='/Search'>
            <ReserveButton>
              <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
              Reserve
            </ReserveButton>
          </Link>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
        {/* ActionButtons */}
        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen  
`;

const MapContainer = tw.div`
  flex-1 w-full h-50  md:h-1/2 
`;

const ActionItems = tw.div`
  flex-1 p-4 md:h-2/5 
`;

const Header = tw.div`
  flex justify-between items-center 
`;

const LogoImage = tw.img`
  h-28 
`;

const Profile = tw.div`
  flex items-center
`;

const UberLogo = tw.img`
h-28 
`

const Name = tw.div`
  mr-4 w-20 text-sm
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ActionButtons = tw.div`
  flex-1 md:grid md:grid-cols-3 
`;

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center 
`;

// Adding colors to the buttons

const SendButton = tw(ActionButton)`
  bg-blue-500 text-white md:flex-1 cursor-pointer
`;

const FoodDeliveryButton = tw(ActionButton)`
  bg-yellow-500 text-white cursor-pointer
`;

const ReserveButton = tw(ActionButton)`
  bg-green-500 text-white
`;
