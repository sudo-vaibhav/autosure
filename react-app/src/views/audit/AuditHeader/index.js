import AppHeader from '../../../components/AppHeader'
import vehicle from './vehicle.png'

const AuditHeader = ({ title = '', dataValues }) => {
  const data = {
    'Involved Insurance ': dataValues.insuranceNumber,
    'Insured Vehicle': dataValues.make + ' ' + dataValues.model,
    'Plate No.': dataValues.numberPlate,
  }
  return (
    <AppHeader>
      <div className="flex justify-between container mx-auto py-4">
        <div className="flex flex-col items-stretch flex-grow">
          <h1 className="text-2xl font-semibold">
            {title || 'Insurance Claim Verification Call'}
          </h1>
          <div className="grid grid-cols-3 w-full mt-6">
            {Object.keys(data).map((key) => {
              return (
                <div key={key}>
                  <div className="text-light-900">{key}</div>
                  <div className="font-semibold">{data[key]}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <img alt="vehicle" src={vehicle} style={{ maxHeight: 117 }} />
        </div>
      </div>
    </AppHeader>
  )
}

export default AuditHeader
