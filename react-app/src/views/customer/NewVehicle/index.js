import { Form, Formik } from 'formik'
import { useState } from 'react'
import AppHeader from '../../../components/AppHeader'
import FormField from '../../../components/FormField'
import ImagesSelector from './ImagesSelector'
import { db } from '../../../context'
import { useHistory, useParams } from 'react-router-dom'

const models = {
  BMW: [{ model: 'M2' }, { model: '128i' }, { model: '750i' }],
  Audi: [
    {
      model: 'A4',
    },
    {
      model: 'Q8',
    },
    {
      model: 'S5',
    },
  ],
  Mercedes: [
    {
      model: 'Benz C Class',
    },
    {
      model: 'Benz A Class',
    },
    {
      model: 'Benz S Class',
    },
  ],
  Volkswagen: [
    {
      model: 'Polo',
    },
    {
      model: 'Vento',
    },
    {
      model: 'T-Roc',
    },
  ],
  Subaru: [
    {
      model: 'Forester',
    },
    {
      model: 'Outback',
    },
    {
      model: 'Legacy',
    },
  ],
}

const carAngles = [
  {
    url: 'https://i.ibb.co/wKZpGsV/front-bottom-left.png',
    name: 'front bottom left',
  },
  {
    url: 'https://i.ibb.co/vDhrN1p/front-bottom-right.png',
    name: 'front bottom right',
  },
  {
    url: 'https://i.ibb.co/ySrh6kH/front-top-left.png',
    name: 'front top left',
  },
  {
    url: 'https://i.ibb.co/9wwDcFg/front-top-right.png',
    name: 'front top right',
  },
  {
    url: 'https://i.ibb.co/TcgFM3C/rear-bottom-left.png',
    name: 'rear bottom left',
  },
  {
    url: 'https://i.ibb.co/pyZK2qP/rear-bottom-right.png',
    name: 'rear bottom right',
  },
  { url: 'https://i.ibb.co/cxvT24L/rear-top-left.png', name: 'rear top left' },
  {
    url: 'https://i.ibb.co/4tZ1Q93/rear-top-right.png',
    name: 'rear top right',
  },
]

const NewVehicle = () => {
  const history = useHistory()
  const { vehicleType } = useParams()
  const [{ addingImages, images, submitting }, setState] = useState({
    addingImages: false,
    submitting: false,
    images: {},
  })

  return (
    <div className="pb-20">
      <AppHeader>
        <h2 className="text-xl"> Add new vehicle</h2>
      </AppHeader>
      <Formik
        initialValues={{
          make: 'BMW',
          model: 'M2',
          modelNumber: '13123133342345',
          year: '2020',
          hasAntiTheftDevice: 'No',
          milesDrivenPerYear: '60000',
          insuranceNumber: '42935344355344365',
          numberPlate: 'MH 11 AE 1969',
          type: vehicleType,
        }}
      >
        {({ values }) => {
          return (
            <Form
              className="bg-light-500 p-6"
              style={{
                minHeight: 'calc(100vh - 92px)',
              }}
            >
              {!addingImages ? (
                <>
                  <FormField fieldName="make" as="select">
                    <option value="BMW">BMW</option>
                    <option value="Audi">Audi</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Subaru">Subaru</option>
                  </FormField>
                  <FormField fieldName="model" as="select">
                    {models[values.make].map((e) => {
                      return (
                        <option key={e.model} value={e.model}>
                          {e.model}
                        </option>
                      )
                    })}
                  </FormField>
                  <FormField fieldName="modelNumber" />
                  <FormField fieldName="numberPlate" />
                  <div className="grid grid-cols-2 gap-3 ">
                    <FormField fieldName="year" />
                    <FormField fieldName="hasAntiTheftDevice" as="select">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </FormField>
                  </div>
                  <FormField fieldName="milesDrivenPerYear" />
                  <FormField fieldName="insuranceNumber" />
                  {/* {JSON.stringify(Object.keys(images))} */}
                  <div className="mt-8">
                    <div
                      data-button="btn-primary-lg"
                      className="text-center"
                      onClick={() => {
                        !submitting && setState({ addingImages: true, images })
                      }}
                    >
                      {!submitting ? 'Next' : 'Submitting...'}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <ImagesSelector
                    images={images}
                    carAngles={carAngles}
                    modelNumber={values.modelNumber}
                    onFinish={async (angle, uploadedUrl) => {
                      const finished = Object.keys(images).length === 7
                      const newState = {
                        addingImages: Object.keys(images).length !== 7,
                        submitting: finished,
                        images: {
                          ...images,
                          [angle]: uploadedUrl,
                        },
                      }
                      console.log('after uploading', newState)
                      setState(newState)
                      if (finished) {
                        await db.collection('vehicle').add({
                          ...values,
                          ...images,
                        })
                        setState({
                          ...newState,
                          submitting: false,
                        })
                        history.push('/customer/vehicles/' + vehicleType)
                      }
                    }}
                  />
                </>
              )}
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default NewVehicle
