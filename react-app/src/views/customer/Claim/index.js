import ClaimHeader from './ClaimHeader'
import VehicleInformation from './VehicleInformation'
import { useState } from 'react'
import { useParams } from 'react-router'
import AccidentData from './AccidentData'
import Damages from './Damages'

const Claim = () => {
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
  let [state, setState] = useState({ step: 3 })
  const step = state.step
  const stepDetails = steps[step - 1]

  const onClick = () => {
    setState({ ...state, step: step + 1 })
  }
  return (
    <div className="pb-20">
      <ClaimHeader step={step} stepDetails={stepDetails} />
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
        ) : null}
      </div>
    </div>
  )
}

export default Claim
