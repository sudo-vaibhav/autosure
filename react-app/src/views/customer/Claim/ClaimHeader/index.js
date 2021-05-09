import AppHeader from '../../../../components/AppHeader'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const ClaimHeader = ({ step, stepDetails }) => {
  const percentage = 25 * step
  return (
    <AppHeader>
      <div className="flex justify-between w-full items-center">
        <div style={{ width: 70, height: 70 }}>
          <CircularProgressbar
            value={percentage}
            strokeWidth={10}
            text={`${step} of 4`}
            styles={buildStyles({
              pathColor: '#00B899',
              textColor: '#00B899',
            })}
          />
        </div>
        <h5 className="text-xl font-semibold">{stepDetails.heading}</h5>
      </div>
    </AppHeader>
  )
}

export default ClaimHeader
