const DataField = ({ field, children }) => {
  return (
    <div className="my-6">
      <h6 className="text-light-900">{field}</h6>
      <div className="font-semibold">{children}</div>
    </div>
  )
}

export default DataField
