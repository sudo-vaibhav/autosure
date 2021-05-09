import AuditHeader from '../AuditHeader'
import VideoInterface from './VideoInterface'
import AuditSidePanel from './AuditSidePanel'
import { db } from '../../../context'
import { useEffect, useState } from 'react'

const LiveAudit = () => {
  const [data, setData] = useState()
  useEffect(() => {
    db.collection('claim')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get()
      .then((querySnapshot) => {
        let doc = {}
        querySnapshot.forEach((i) => {
          doc = { ...i.data(), id: i.id }
        })
        setData(doc)
      })
  })
  return (
    <div>
      <AuditHeader dataValues={data.vehicleInfo} />
      <div className="bg-dark-100 gap-4 text-light-100">
        <div
          className="container mx-auto grid grid-cols-3 gap-x-4 grid-rows-1"
          style={{
            maxHeight: 'calc(100vh - 213px)',
          }}
        >
          <VideoInterface className="col-start-1 col-span-2 row-start-1 row-span-1" />
          <AuditSidePanel className="col-start-3 col-span-1 row-start-1 row-span-1" />
        </div>
      </div>
    </div>
  )
}

export default LiveAudit
