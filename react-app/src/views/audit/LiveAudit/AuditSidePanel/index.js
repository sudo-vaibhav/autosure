import { useState } from 'react'
import Card from '../../../../components/Card'
import Checklist from './Checklist'
import PhotosView from './PhotosView'

const AuditSidePanel = ({ className = '', ...props }) => {
  const [{ sidePanelMode }, setState] = useState({
    sidePanelMode: 'checklist',
  })

  return (
    <div className={`${className} grid grid-rows-3 grid-cols-1 py-4`}>
      <Card dark className="pt-0 row-start-1 row-span-2 grid grid-rows-5">
        <div className="py-4 grid sticky top-0 bg-dark-700 text-center uppercase grid-cols-2 gap-x-4 row-start-1 row-span-1">
          {[
            {
              state: 'checklist',
              text: 'Checklist',
            },
            {
              state: 'photos',
              text: 'Photos',
            },
          ].map((tab) => {
            return (
              <div
                onClick={() => {
                  setState({ sidePanelMode: tab.state })
                }}
                className={`${
                  sidePanelMode === tab.state
                    ? 'border-b-4 pb-2 border-light-100 font-semibold'
                    : ''
                }`}
              >
                {tab.text}
              </div>
            )
          })}
        </div>
        <div className="row-start-2 row-span-4">
          {sidePanelMode === 'checklist' ? <Checklist /> : <PhotosView />}
        </div>
      </Card>
      <div className="flex justify-around items-center my-4 row-start-3 row-span-1">
        {[
          { text: 'Reject Claim', background: '#FF5555' },
          { text: 'Approve Claim', background: '#00B899' },
        ].map((e) => {
          return (
            <button
              data-button="btn-lg"
              style={{
                backgroundColor: e.background,
              }}
              className="my-2"
            >
              {e.text}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default AuditSidePanel
