import React from 'react'
import '@nylas/components-mailbox'

const USER_TOKEN = 'zKWj1flgZN6LZmgoxGT3djc7Ndhb23'

export function Mailbox() {
  return (
    <div id="mailbox">
      <nylas-mailbox
        header="Team"
        id="2c9d97db-e07f-4276-8e60-9cf1e5507faf"
        access_token={USER_TOKEN}
      />
    </div>
  )
}
