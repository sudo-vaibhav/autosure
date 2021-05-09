const PhotosView = ({ claimData }) => {
  const previousImages = Object.keys(claimData.vehicleInfo)
    .filter((e) => e.includes('-'))
    .map((e) => claimData.vehicleInfo[e])
  const damageImages = claimData.damagePics

  const images = {
    'Damage Images': damageImages,
    'Previous Images': previousImages,
  }
  return (
    <div className="py-3 mx-2 overflow-y-auto" style={{ maxHeight: 400 }}>
      {Object.keys(images).map((e) => {
        return (
          <>
            <h3 className="text-light-900 uppercase mt-8 mb-2 font-semibold">
              {e}
            </h3>
            <div className="grid grid-cols-6 gap-4 overflow-y-auto">
              {images[e].map((image) => {
                return (
                  <div style={{ zIndex: 1, position: 'relative' }}>
                    <img
                      src={image}
                      className="mx-auto rounded-lg"
                      alt="vehicle"
                    />
                  </div>
                )
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default PhotosView
