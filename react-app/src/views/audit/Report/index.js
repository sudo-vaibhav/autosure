import { useParams, useRouteMatch } from 'react-router'
import AuditHeader from '../AuditHeader'
import DataField from './DataField'
import carWireframe from './car-wireframe.svg'
import Damages from './Damages'
import approved from './approved.png'
import { useEffect, useState } from 'react'
import { db } from '../../../context'
import { labelText } from '../LiveAudit/AuditSidePanel/Checklist'

const Report = () => {
  const { claimId } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    db.collection('claim')
      .doc(claimId)
      .get()
      .then((doc) => {
        setData({ ...doc.data(), id: doc.id })
      })
  }, [claimId])

  const match = useRouteMatch('/audit/report')
  return (
    <div>
      {data.vehicleInfo && (
        <>
          <AuditHeader
            dataValues={data.vehicleInfo}
            title={match ? 'Claim Document' : ''}
          />
          {/* {JSON.stringify(data)} */}
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-8 gap-8">
              <div className="col-start-1 col-span-3">
                {Object.keys(data.vehicleInfo)
                  .filter((x) => !x.includes('-'))
                  .map((key) => {
                    return (
                      <DataField field={labelText(key)} key={key}>
                        {data.vehicleInfo[key]}
                      </DataField>
                    )
                  })}
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

                <img src={approved} alt="approved" />
              </div>
              <div className="col-start-4 col-span-5">
                <DataField field="Damage Analysis">
                  <img
                    className="mx-auto"
                    src={carWireframe}
                    alt="wireframe"
                    style={{ transform: 'rotate(90deg)', maxHeight: '30vw' }}
                  />
                </DataField>
                <DataField field="Claims">
                  <Damages damages={data.damageRecords} />
                </DataField>
                <DataField field="images">
                  <div className="grid grid-cols-4 gap-4">
                    {data.damagePics.map((e, i) => {
                      return <img src={e} alt="vehicle" />
                    })}
                  </div>
                </DataField>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Report
