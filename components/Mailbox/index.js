import React from 'react'
import '@nylas/components-mailbox'

const USER_TOKEN = 'zKWj1flgZN6LZmgoxGT3djc7Ndhb23'

export function Mailbox(props) {
  React.useEffect(() => {
    document
      .querySelector('nylas-mailbox')
      .addEventListener('threadClicked', props.onThreadClicked)
  }, [props.onThreadClicked])

  return (
    <div id="mailbox" className="w-full">
      <nylas-mailbox
        className="w-full"
        header={props.header}
        id="2c9d97db-e07f-4276-8e60-9cf1e5507faf"
        access_token={USER_TOKEN}
      />
    </div>
  )
}
