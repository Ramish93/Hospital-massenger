import React from 'react'
import {Channel, useChatContext} from 'stream-chat-react'

import {ChannelInner, CreateChannel, EditChannel, TeamChannel} from './'

const ChannelContainer = ({
  isCreating,
  setIsCrearing,
  isEditing,
  setIsEditing,
  createType
}) => {

  const {channel} = useChatContext();

  if(isCreating){
    return (
      <div className='channel__container'>
        <CreateChannel createType={createType} setIsCrearing={setIsCrearing} />
      </div>
    )
  }
  if(isEditing){
    return (
      <div className='channel__container'>
      <EditChannel setIsEditing={setIsEditing} />
    </div>
    )
  }

  const EmptyState=() => (
    <div className='channel-empty__container'>
      <p className='channel-empty__first'> This is the beganing of your chat history</p>
    </div>
  )

  return (
    <div>ChannelContainer</div>
  )
}

export default ChannelContainer