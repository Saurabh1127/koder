import React, { useEffect, useState } from 'react';
import { checkHeading, replaceHeadingStars } from '../Helper';

const Answer = ({ ans , totalresult, index,type }) => {

  const [heading,setHeading] = useState(false)
  const [answer,setAnswer] = useState(ans)

  

  useEffect(()=>{
   if(ans,checkHeading(ans)){
    setHeading(true)
    setAnswer(replaceHeadingStars(ans))
   }

  },[])




  return (
    <div >
      
      {
        index==0 && totalresult>1?<span className='py-4  text-xl font-bold block  text-zinc-300'>{answer}</span>:
        heading ?<span className='py-4  text-xl font-bold block'> { answer}</span>
      :<span className={type=='q'?'pl-1 ':'pl-5'}>{answer}</span>
      }
    </div>
  );
};

export default Answer;
