import { useState, useEffect } from 'react'
import Card from '../../../../components/Card'
import { useHistory } from 'react-router-dom'
import { db } from '../../../../context'
import Checklist from './Checklist'
import PhotosView from './PhotosView'

const AuditSidePanel = ({ className = '', ...props }) => {
  const [claimData, setClaimData] = useState({})
  const [{ sidePanelMode }, setState] = useState({
    sidePanelMode: 'checklist',
  })
  const history = useHistory()
  // const { damageRecordsState, setDamageRecordsState } = useState(
  //   claimData.damageRecords,
  // )

  useEffect(() => {
    db.collection('claim')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get()
      .then((querySnapshot) => {
        let claimDoc = {}
        querySnapshot.forEach((doc) => {
          claimDoc = {
            id: doc.id,
            ...doc.data(),
          }
        })

        setClaimData(claimDoc)
      })
  }, [])

  return (
    <div className={`${className} grid grid-rows-3 grid-cols-1 py-4`}>
      <Card
        dark
        className="pt-0 row-start-1 row-span-2 grid grid-rows-5"
        // style={{ maxHeight: 400 }}
      >
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
          {sidePanelMode === 'checklist' ? (
            <Checklist
              damageRecords={claimData.damageRecords}
              onClick={(key, newValue) => {
                console.log('key', 'newvalue', key, newValue)
                setClaimData({
                  ...claimData,
                  damageRecords: {
                    ...claimData.damageRecords,
                    [key]: newValue,
                  },
                })

                console.log('new claim data', claimData)
              }}
              // damageRecordsState={damageRecordsState}
              // setDamageRecordsState={setDamageRecordsState}
            />
          ) : (
            <PhotosView claimData={claimData} />
          )}
        </div>
      </Card>
      <div className="flex justify-around items-center pt-4 -mt-4 mb-4 row-start-3 row-span-1">
        {[
          {
            text: 'Reject Claim',
            background: '#FF5555',
            onClick: () => {
              alert('claim was rejected')
            },
          },
          {
            text: 'Approve Claim',
            background: '#00B899',
            onClick: async () => {
              await db
                .collection('claim')
                .doc(claimData.id)
                .update({ ...claimData, approved: true })
              history.push('/audit/report/' + claimData.id)
            },
          },
        ].map((e) => {
          return (
            <button
              data-button="btn-lg"
              style={{
                backgroundColor: e.background,
              }}
              className="my-2"
              onClick={() => e.onClick()}
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
