const Card = ({ dark, children, className, ...props }) => {
  return (
    <div
      className={`p-4 rounded-lg ${
        dark ? 'bg-dark-700 text-light-100' : 'bg-light-100 text-dark-900'
      }
              ${className}
              `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
