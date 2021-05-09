const Checklist = () => {
  return (
    <div className="flex flex-col overflow-y-auto py-3 h-full">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((checkpoint) => {
        return (
          <div
            key={checkpoint}
            className="flex justify-between items-center bg-dark-100 px-4 py-5 rounded-lg my-2"
          >
            <div>Windshield has crack on it</div>
            <div>
              <input
                type="checkbox"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Checklist
