import React from 'react'
import { Loader } from '@mantine/core';


const Loading = () => {
  return (
    <div className=' absolute top-0 w-screen bg-white z-[1000] flex justify-center items-center h-screen'>
      <Loader color="violet" variant="bars" />
    </div>
  )
} 

export default Loading
