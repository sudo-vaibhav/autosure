export const labelText = (str) => {
  // adding space between strings
  const result = str.replace(/([A-Z])/g, ' $1')

  // converting first character to uppercase and join it to the final string
  const final = result.charAt(0).toUpperCase() + result.slice(1)

  return final // "My Name"
}

const Checklist = ({ damageRecords, onClick }) => {
  // const { damageRecords: damageRecordsState } = claimData

  return (
    <div className="flex flex-col overflow-y-auto py-3 h-full">
      <div className="mb-3">
        Tick the parts of vehicle that are visibly damaged
      </div>
      {Object.keys(damageRecords || {}).map((checkpoint, i) => {
        // console.log(damageRecordsState[checkpoint])
        return (
          <div
            key={i}
            className="flex justify-between items-center bg-dark-100 px-4 py-5 rounded-lg my-2"
          >
            <div>{labelText(checkpoint)}</div>
            <div>
              <input
                type="checkbox"
                defaultChecked={damageRecords[checkpoint]}
                onChange={(e) => {
                  onClick(checkpoint, e.target.checked == true)
                }}
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
