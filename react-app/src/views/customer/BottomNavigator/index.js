import FeatherIcon from 'feather-icons-react'
import { NavLink, useRouteMatch } from 'react-router-dom'

const BottomNavigatorLink = ({ item }) => {
  const path = '/customer/' + item.link
  const icon = item.icon
  const text = item.text
  let match = useRouteMatch({
    path,
    exact: true,
  })
  return (
    <NavLink
      to={path}
      activeClassName="text-light-100 bg-dark-700 p-3 rounded-lg"
      style={{ flex: 1 }}
      exact
    >
      <div
        className={`flex justify-center items-center h-full ${
          match ? 'text-light-100' : 'text-primary-900'
        }`}
      >
        <FeatherIcon icon={icon} />
        {match && (
          <div
            className="pl-2"
            style={
              {
                // display:  ? 'block' : 'none',
              }
            }
          >
            {text}
          </div>
        )}
      </div>
    </NavLink>
  )
}

const BottomNavigator = () => {
  return (
    <div className=" text-xs bg-light-500 fixed z-10 left-0 bottom-0 right-0">
      <div className="flex justify-around rounded-2xl rounded-b-none px-4 py-8 bg-light-100">
        {[
          {
            icon: 'home',
            text: 'Home',
            link: '',
          },
          {
            icon: 'shield',
            text: 'Claim',
            link: 'new-claim',
          },
          {
            icon: 'file',
            text: 'Documents',
            link: 'documents',
          },
        ].map((item) => (
          <BottomNavigatorLink item={item} key={item.text} />
        ))}
      </div>
    </div>
  )
}

export default BottomNavigator
