"use client"
import { useState, useEffect } from 'react';;
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation'




const ChatComponent = () => {
 

  const router = useRouter();

  
  return (
    <>
    <div>
      <div>
       <p>Response from API: </p>
      </div>
    </div>
    </>
  );
};

export default ChatComponent;
