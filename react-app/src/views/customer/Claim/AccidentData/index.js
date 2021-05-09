import { Form, Formik } from 'formik'
import FormField from '../../../../components/FormField'

const AccidentData = ({ onClick }) => {
  const initialData = {
    accidentDescription:
      'Another car tried to overtake my car and to prevent collision, I took a sharp turn due to which the car crashed into the divider',
    thirdPartyDamage: "No, the other driver's wasn't damaged",
    currentVehicleCondition: 'The car is driveable but has severe dents',
  }

  return (
    <Formik initialValues={initialData}>
      {({ values }) => {
        return (
          <Form>
            {Object.keys(initialData).map((e) => {
              return <FormField fieldName={e} key={e} />
            })}
            <div
              data-button="btn-primary-lg"
              className="text-center"
              onClick={onClick}
            >
              Next
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default AccidentData
