import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import FeatherIcon from 'feather-icons-react'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'
import AppHeader from '../../../components/AppHeader'
import { db } from '../../../context'

const MyVehicles = ({ getAll = false }) => {
  let { vehicleType } = useParams()
  const vehicleTypeCode = vehicleType
  const [vehicles, setVehicles] = useState([])
  console.log(`vehicletype ${vehicleType}`)

  useEffect(() => {
    let ref = db.collection('vehicle')
    if (!getAll) {
      ref = ref.where('type', '==', vehicleTypeCode)
    }
    ref.get().then((querySnapshot) => {
      const vehicleDocs = []
      querySnapshot.forEach((doc) => {
        vehicleDocs.push({
          ...doc.data(),
          id: doc.id,
        })
      })

      console.log(vehicleDocs)
      setVehicles(vehicleDocs)
    })
  }, [vehicleType])

  vehicleType = vehicleType === '2' ? 'two' : 'four'
  // const vehicles = allVehicles[vehicleType]

  return (
    <div>
      <AppHeader>
        <h2 className="text-xl">
          {getAll
            ? 'Which vehicle was involved?'
            : 'Your ' + vehicleType + ' wheelers'}
        </h2>
      </AppHeader>
      <div
        className="p-4 bg-light-500 "
        style={{
          height: 'calc(100vh - 104px)',
        }}
      >
        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          {vehicles.map((vehicle, i) => {
            const VehicleCard = () => (
              <Card key={i}>
                <img
                  src={vehicle['front-top-right']}
                  className="rounded-lg w-full"
                  alt="vehicle"
                  style={{
                    maxWidth: 131,
                    maxHeight: 94,
                  }}
                />
                <h5 className="mt-2">{vehicle.make + ' ' + vehicle.model}</h5>
                <h6 className="text-xs text-light-900">
                  {vehicle.numberPlate}
                </h6>
              </Card>
            )

            return getAll ? (
              <Link to={`/customer/new-claim/${vehicle.id}`}>
                <VehicleCard />
              </Link>
            ) : (
              <VehicleCard />
            )
          })}
          {!getAll && (
            <Link to={'/customer/new-vehicle/' + vehicleTypeCode}>
              <Card>
                <div
                  style={{ width: 131, height: 94 }}
                  className="grid place-items-center bg-light-500 rounded-lg"
                >
                  <FeatherIcon icon="plus" />
                </div>
                <h5 className="mt-2 text-light-900">Add vehicle</h5>
              </Card>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyVehicles
