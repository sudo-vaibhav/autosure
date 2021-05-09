import ClaimHeader from './ClaimHeader'
import VehicleInformation from './VehicleInformation'
import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import AccidentData from './AccidentData'
import Damages from './Damages'
import AddDamageImages from './AddDamageImages'
import { db } from '../../../context'
const Claim = () => {
  const history = useHistory()
  const { vehicleId } = useParams()
  const steps = [
    {
      heading: 'Vehicle Information',
    },
    {
      heading: 'Accident Information',
    },
    {
      heading: 'Damages',
    },
    {
      heading: 'Images',
    },
  ]
  let [state, setState] = useState({ step: 1 })
  const step = state.step
  const stepDetails = steps[step - 1]

  const [claimData, setClaimData] = useState({})

  const onClick = async (newKey, data) => {
    const temp = claimData
    temp[newKey] = data
    if (step === 4) {
      await db
        .collection('claim')
        .add({ ...temp, approved: false, createdAt: Date.now() })
      history.push('/customer/meeting')
    }

    setClaimData(temp)

    console.log('new claim data', claimData)
    setState({ ...state, step: step + 1 })
  }
  return (
    <div className="pb-20">
      {step <= 4 && <ClaimHeader step={step} stepDetails={stepDetails} />}
      <div
        className="p-4 bg-light-500 "
        style={{
          minHeight: 'calc(100vh - 104px)',
        }}
      >
        {step === 1 ? (
          <VehicleInformation onClick={onClick} vehicleId={vehicleId} />
        ) : step === 2 ? (
          <AccidentData onClick={onClick} />
        ) : step === 3 ? (
          <Damages onClick={onClick} />
        ) : step === 4 ? (
          <AddDamageImages onClick={onClick} />
        ) : null}
      </div>
    </div>
  )
}

export default Claim
