import FeatherIcon from 'feather-icons-react'
import { labelText } from '../../LiveAudit/AuditSidePanel/Checklist'

const DamageCard = ({ i, damage, damaged }) => {
  return (
    <div
      key={i}
      className="p-3 shadow-sm border rounded-lg flex justify-between"
    >
      <div>{damage}</div>
      <div>
        <FeatherIcon
          icon={damaged ? 'check' : 'x'}
          style={{ color: damaged ? 'green' : 'red' }}
        />
      </div>
    </div>
  )
}

const Damages = ({ damages }) => {
  return (
    <div className="grid grid-cols-2 gap-4 my-2">
      {Object.keys(damages).map((damage, i) => {
        return (
          <DamageCard
            i={i}
            damage={labelText(damage)}
            damaged={damages[damage]}
          />
        )
      })}
    </div>
  )
}

export default Damages
