import { useRouteMatch } from 'react-router'
import AuditHeader from '../AuditHeader'
import DataField from './DataField'
import carWireframe from './car-wireframe.svg'
import Damages from './Damages'
import approved from './approved.png'
const RandomData = () => {
  return [1, 2, 3, 4].map((i) => {
    return (
      <DataField key={i} field="Model No.">
        123123123123354
      </DataField>
    )
  })
}

const Report = () => {
  const match = useRouteMatch('/audit/report')
  return (
    <div>
      <AuditHeader title={match ? 'Claim Document' : ''} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-8 gap-8">
          <div className="col-start-1 col-span-3">
            <RandomData />
            <DataField field="Location of Accident">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6998.8747911117935!2d77.14884005312081!3d28.70647164747721!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1620493202055!5m2!1sen!2sin"
                width="100%"
                title="map"
                height="300px"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              />
            </DataField>
            <RandomData />
            <img src={approved} alt="approved" />
          </div>
          <div className="col-start-4 col-span-5">
            <DataField field="Condition of Vehicle">
              Damaged but safe to drive
            </DataField>
            <DataField field="Damage Analysis">
              <img
                className="mx-auto"
                src={carWireframe}
                alt="wireframe"
                style={{ transform: 'rotate(90deg)', maxHeight: '30vw' }}
              />
            </DataField>
            <DataField field="Claims">
              <Damages />
            </DataField>
            <DataField field="images">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 3, 4].map((e, i) => {
                  return (
                    <img
                      src="https://static.toiimg.com/thumb/msid-77991201,imgsize-370800,width-400,resizemode-4/77991201.jpg"
                      alt="vehicle"
                    />
                  )
                })}
              </div>
            </DataField>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
