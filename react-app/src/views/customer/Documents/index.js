import { useEffect, useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import AppHeader from '../../../components/AppHeader'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import { db } from '../../../context'
const Documents = () => {
  const [claims, setClaims] = useState([])
  useEffect(() => {
    db.collection('claim')
      .get()
      .then((querySnapshot) => {
        const claimDocs = []
        querySnapshot.forEach((doc) => {
          claimDocs.push({
            ...doc.data(),
            id: doc.id,
          })
        })

        setClaims(claimDocs)
      })
  })

  return (
    <div>
      <AppHeader>Claim Documents</AppHeader>
      <div
        className="bg-light-500 p-4"
        style={{
          minHeight: `calc(100vh - 103px)`,
        }}
      >
        {claims.map((claim, i) => (
          <Link to={'/audit/report/' + claim.id}>
            <Card className="my-4 flex justify-between" key={i}>
              <div>
                <div>
                  {claim.vehicleInfo.make + ' ' + claim.vehicleInfo.model}
                </div>
                <div className="text-xs text-light-900">
                  Claim Id: {claim.id}
                </div>
              </div>
              <div>
                <FeatherIcon icon="file" className="text-primary-900" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Documents
