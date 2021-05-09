import FeatherIcon from 'feather-icons-react'

const DamageCard = ({ i }) => {
  return (
    <div
      key={i}
      className="p-3 shadow-sm border rounded-lg flex justify-between"
    >
      <div>Winshield has a crack on it</div>
      <div>
        <FeatherIcon
          icon={i % 2 === 0 ? 'check' : 'x'}
          style={{ color: i % 2 === 0 ? 'green' : 'red' }}
        />
      </div>
    </div>
  )
}

const Damages = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-2">
      {[0, 1, 2, 3, 4, 4, 4, 5].map((e, i) => {
        return <DamageCard i={i} />
      })}
    </div>
  )
}

export default Damages
