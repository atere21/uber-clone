import React from 'react'
import tw from 'tailwind-styled-components'
import { riderList } from '../data/riderList'

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more closest rides to you</Title>
           
            <riderList>
                { riderList.map((ride, index)=>(
                    <Car key={index}>
                        <CarImage src={ride.imgUrl} />
                        <CarDetails>
                            <Service>{ride.service}</Service>
                            <Time>15 min away</Time>
                        </CarDetails>
                        <Price>₦1000.00</Price>
                    </Car>
                )) }

            </riderList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-black
`
const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-4
`
// 🚀 Devlin
const Car = tw.div`
flex p-4 items-center
`

// 🔥 Heimen
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

// Emeric 🔥
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`