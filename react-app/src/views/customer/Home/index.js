import FeatherIcon from 'feather-icons-react'
import Card from '../../../components/Card'
import fourWheeler from './fourWheeler.svg'
import twoWheeler from './twoWheeler.svg'
import { Link } from 'react-router-dom'

const wheelerMap = {
  2: {
    image: twoWheeler,
  },
  4: {
    image: fourWheeler,
  },
}
const Home = () => {
  return (
    <>
      <>
        <div className="bg-dark-700 px-4 py-8 text-light-100 flex items-center">
          <img
            src={'https://randomuser.me/api/portraits/women/54.jpg'}
            className="rounded-full"
            style={{
              maxHeight: 40,
            }}
            alt="user"
          />
          <h2 className="ml-4 text-xl">Hi Samantha!</h2>
        </div>
        <div
          className="p-4 bg-light-500 "
          style={{
            height: 'calc(100vh - 104px)',
          }}
        >
          <Card dark className="my-4">
            <h2 className="text-xl my-4">
              How to
              <br />
              apply for a claim
            </h2>
            <button
              data-button="btn-sm"
              className="flex items-center bg-light-100 text-dark-700 text-xs"
            >
              <FeatherIcon
                icon="play"
                fill="var(--dark-700)"
                className="mr-2"
                size={12}
              />
              Play
            </button>
          </Card>
          <Card className="my-4" dark>
            <div className="flex py-3 justify-between">
              <h2 className="">Apply for campaign</h2>
              <FeatherIcon icon="chevron-right" />
            </div>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            {[4, 2].map((e) => {
              return (
                <Link to={'/customer/vehicles/' + e}>
                  <Card key={e}>
                    <img
                      src={wheelerMap[e].image}
                      className="w-full"
                      alt="vehicle"
                    />
                    <div className="text-center mt-2">{e} wheeler</div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </>
    </>
  )
}

export default Home
