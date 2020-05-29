import React from 'react'

export interface TrackContributingProps {
  trackId: TrackIdentifier
}

export function TrackContributing({
  trackId,
}: TrackContributingProps): JSX.Element {
  return (
    <div className="d-flex flex-wrap align-items-center mt-4 mb-4 row">
      <div className="col-12 mb-2">
        <p>TODO: add contributing information</p>
      </div>
    </div>
  )
}
