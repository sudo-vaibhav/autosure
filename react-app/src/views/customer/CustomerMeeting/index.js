import AppHeader from '../../../components/AppHeader'

const CustomerMeeting = () => {
  return (
    <div>
      <AppHeader>
        <h1 className="text-2xl">Claim Settlement Meeting</h1>
      </AppHeader>
      <div
        className=""
        style={{
          height: 'calc(100vh - 213px)',
        }}
      >
        <iframe
          title="meeting"
          allow="camera; microphone; fullscreen; display-capture; autoplay"
          src="https://meet.jit.si/insurance-claim-meet"
          style={{ height: '100%', width: '100%', border: 0 }}
        />
      </div>
    </div>
  )
}

export default CustomerMeeting
