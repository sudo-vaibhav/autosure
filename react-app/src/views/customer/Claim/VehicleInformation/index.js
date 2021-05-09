import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import FormField from '../../../../components/FormField'
import { db } from '../../../../context'

const VehicleInformation = ({ vehicleId, onClick }) => {
  const [vehicleInfo, setVehicleInfo] = useState({})
  useEffect(() => {
    db.collection('vehicle')
      .doc(vehicleId)
      .get()
      .then((doc) => {
        setVehicleInfo({ ...doc.data(), id: doc.id })
      })
  }, [vehicleId])

  console.log(vehicleInfo)
  return (
    <Formik initialValues={vehicleInfo}>
      {({ values, setValues }) => {
        return (
          <Form>
            {Object.keys(vehicleInfo)
              .filter((key) => !key.includes('-'))
              .map((key) => {
                return (
                  <FormField
                    fieldName={key}
                    key={key}
                    value={vehicleInfo[key]}
                  />
                )
              })}
            <div
              data-button="bg-primary-lg"
              className="text-center"
              onClick={() => onClick('vehicleInfo', vehicleInfo)}
            >
              Next
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default VehicleInformation
