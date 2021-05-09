const images = {
  'Damage Images': [
    'https://static.toiimg.com/thumb/msid-77991201,imgsize-370800,width-400,resizemode-4/77991201.jpg',
    'https://static.toiimg.com/thumb/msid-77991201,imgsize-370800,width-400,resizemode-4/77991201.jpg',
    'https://static.toiimg.com/thumb/msid-77991201,imgsize-370800,width-400,resizemode-4/77991201.jpg',
    'https://static.toiimg.com/thumb/msid-77991201,imgsize-370800,width-400,resizemode-4/77991201.jpg',
    'https://static.toiimg.com/thumb/msid-77991201,imgsize-370800,width-400,resizemode-4/77991201.jpg',
  ],
  'Previous Images': [
    'https://5.imimg.com/data5/GO/NV/MY-28812932/maruti-suzuki-wagon-r-white-color-car-500x500.png',
    'https://5.imimg.com/data5/GO/NV/MY-28812932/maruti-suzuki-wagon-r-white-color-car-500x500.png',
    'https://5.imimg.com/data5/GO/NV/MY-28812932/maruti-suzuki-wagon-r-white-color-car-500x500.png',
    'https://5.imimg.com/data5/GO/NV/MY-28812932/maruti-suzuki-wagon-r-white-color-car-500x500.png',
    'https://5.imimg.com/data5/GO/NV/MY-28812932/maruti-suzuki-wagon-r-white-color-car-500x500.png',
    'https://5.imimg.com/data5/GO/NV/MY-28812932/maruti-suzuki-wagon-r-white-color-car-500x500.png',
    'https://5.imimg.com/data5/GO/NV/MY-28812932/maruti-suzuki-wagon-r-white-color-car-500x500.png',
    'https://5.imimg.com/data5/GO/NV/MY-28812932/maruti-suzuki-wagon-r-white-color-car-500x500.png',
  ],
}
const PhotosView = () => {
  return (
    <div className="py-3 mx-2">
      {Object.keys(images).map((e) => {
        return (
          <>
            <h3 className="text-light-900 uppercase mt-8 mb-2 font-semibold">
              {e}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {images[e].map((image) => {
                return (
                  <div>
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
