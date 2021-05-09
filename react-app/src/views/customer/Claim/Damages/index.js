import CarWireFrame from './CarWireFrame'
import { useState } from 'react'

const Damages = ({ onClick }) => {
  const [damages, setDamages] = useState({})
  return (
    <div>
      <CarWireFrame
        className="mx-auto"
        damages={damages}
        setDamages={setDamages}
      />
      <div
        data-button="btn-primary-lg"
        className="text-center mt-8"
        onClick={() => onClick('damageRecords', damages)}
      >
        Next
      </div>
    </div>
  )
}

export default Damages
