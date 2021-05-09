import AuditHeader from '../AuditHeader'
import VideoInterface from './VideoInterface'
import AuditSidePanel from './AuditSidePanel'
const LiveAudit = () => {
  return (
    <div>
      <AuditHeader />
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
