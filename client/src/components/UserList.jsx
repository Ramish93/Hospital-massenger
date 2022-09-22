import React,{useEffect, useState} from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

import { InviteIcon } from '../assets'

const ListContainer = ({children}) => {
    return (
        <div className='user-list__container'>
            <div className='user-list__header'>
                <p>User</p>
                <p>Invite</p>
            </div>
        </div>
    )
}

const userItem = () => {
    return (
        <div className='user-item__wrapper'>
            <div className='user-item_name__wrapper'>
                <Avatar />
            </div>
        </div>
    )
}

const UserList = () => {
    const {client} = useChatContext()
     const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const getUser = async () => {
        if(loading) return
      
      setLoading(true)
        const response = await client.queryUsers({

        })
      try {
        
      } catch (error) {
        
      }
    }
    }, [filters])
    

  return (
    <ListContainer>
        userlist
    </ListContainer>
  )
}

export default UserList