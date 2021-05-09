import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'
import { storage } from '../../../../context'

const ImagesSelector = ({ images, carAngles, onFinish, modelNumber }) => {
  let currentUploadedCount = Object.keys(images).length
  const carAngle = carAngles[currentUploadedCount]
  const [uploading, setUploading] = useState(false)
  return (
    <div className="text-center">
      <div>
        Click image for <span className="font-semibold">"{carAngle.name}"</span>{' '}
        view. Refer to the sample given below
      </div>
      <img src={carAngle.url} className="my-4 w-3/4 mx-auto rounded-xl" />
      <label
        data-button="btn-primary-lg"
        className="flex items-center justify-center"
      >
        {uploading ? (
          <>UPLOADING...</>
        ) : (
          <>
            CLICK IMAGE <FeatherIcon icon="camera" className="ml-3" />
          </>
        )}
        <input
          type="file"
          disabled={uploading}
          style={{ position: 'absolute', left: -10000000 }}
          accept=".png,.jpg,.jpeg"
          onChange={(e) => {
            setUploading(true)
            const file = e.target.files[0]
            const fileType = file.name.substr(file.name.lastIndexOf('.'))
            const fileName =
              `${modelNumber}-${carAngle.name.replaceAll(' ', '-')}` + fileType
            var storageRef = storage.ref(fileName)
            var task = storageRef.put(file)
            task.on(
              'state_changed',
              function progress(snapshot) {},
              function error(error) {
                console.log('error in uploading image: ', error)
              },
              function complete() {
                setUploading(false)
                onFinish(
                  carAngle.name.replaceAll(' ', '-'),
                  `https://firebasestorage.googleapis.com/v0/b/autosure-d1722.appspot.com/o/${fileName}?alt=media`,
                )
              },
            )
          }}
        />
      </label>
      <h5 className="my-4 font-semibold">Upload Previews</h5>
      <div className="grid grid-cols-4 place-items-center gap-4">
        {Object.keys(images).map((key) => {
          return <img src={images[key]} key={key} />
        })}
      </div>
    </div>
  )
}

export default ImagesSelector
