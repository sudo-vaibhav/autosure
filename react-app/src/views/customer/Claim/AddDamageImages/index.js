import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'
import { storage } from '../../../../context'
const AddDamageImages = ({ onClick }) => {
  const [uploading, setUploading] = useState(false)
  const [damageImages, setImages] = useState([])

  return (
    <div>
      <h2 className="text-xl font-semibold">Add Images of damage to vehicle</h2>
      <label
        data-button="btn-primary-lg"
        className="flex items-center justify-center my-8"
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
            const now = Date.now()
            const fileName = now + fileType
            var storageRef = storage.ref(fileName)
            var task = storageRef.put(file)
            task.on(
              'state_changed',
              function progress(snapshot) {},
              function error(error) {
                console.log('error in uploading image: ', error)
              },
              function complete() {
                const temp = damageImages
                temp.push(
                  `https://firebasestorage.googleapis.com/v0/b/autosure-d1722.appspot.com/o/${fileName}?alt=media`,
                )
                setImages(temp)
                setUploading(false)
              },
            )
          }}
        />
      </label>
      <h2 className="text-sm font-semibold text-light-900 py-4  text-center">
        Show Preview
      </h2>
      <div className="grid grid-cols-4 gap-4 place-items-center">
        {damageImages.map((image) => {
          return <img src={image} key={image} />
        })}
      </div>
      <div className="pt-12">
        <div
          data-button="btn-primary-lg"
          className="text-center  my-20"
          onClick={() => onClick('damagePics', damageImages)}
        >
          Next
        </div>
      </div>
    </div>
  )
}

export default AddDamageImages
