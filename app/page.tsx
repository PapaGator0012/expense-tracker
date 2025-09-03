import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from './components/Guest';

const page = async() => {
  const user = await currentUser();

  if(!user){
    return <Guest></Guest>
  }
  return (
    <div className='text-red-500'>
      Homepage
    </div>
  )
}

export default page
