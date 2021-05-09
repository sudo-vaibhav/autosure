import { useState } from 'react'
import bell from './bell.svg'
import house from './house.svg'
import diamond from './diamond.svg'
import { useHistory } from 'react-router-dom'

const onboardingMap = {
  1: {
    image: bell,
    heading: 'Your insurance simplified!',
    text:
      'The best plans from the top insurers for you, to compare & purchase instantly',
  },
  2: {
    image: diamond,
    heading: 'Your claims.Our concern',
    text:
      'We’re here for you even in your moment of need, helping you with your claims process',
  },
  3: {
    image: house,
    heading: 'Your safety is our priority',
    text:
      'A carefully crafted experience to ensure you stay safe while guarding what you love.',
  },
}

const Onboarding = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const history = useHistory()
  return (
    <div className="grid place-items-center h-screen w-screen">
      <div className="flex items-center flex-col w-5/6 text-center mx-auto">
        <img
          style={{
            maxHeight: 150,
          }}
          src={onboardingMap[pageNumber].image}
          alt="onboarding"
        />
        <h1 className="my-8 text-xl font-semibold">
          {onboardingMap[pageNumber].heading}
        </h1>
        <p className="text-light-900">{onboardingMap[pageNumber].text}</p>
        <div className="flex justify-center">
          {[1, 2, 3].map((e) => {
            return (
              <div
                key={e}
                className={`rounded-full ${
                  pageNumber < e ? 'bg-light-700' : 'bg-primary-900'
                } h-3 w-3 mx-2 my-8`}
              ></div>
            )
          })}
        </div>
        <button
          data-button="btn-primary-lg"
          onClick={() => {
            if (pageNumber + 1 === 4) {
              history.push('/customer')
            }
            setPageNumber(pageNumber + 1)
          }}
        >
          {pageNumber < 3 ? 'Next' : "Let's get started"}
        </button>
      </div>
    </div>
  )
}

export default Onboarding
