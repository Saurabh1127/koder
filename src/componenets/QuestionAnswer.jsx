import React from 'react'
import Answer from './Answer'

const QuestionAnswer = ({ item, index }) => {
    return (
        <>
            <div key={index} className={item.type == 'q' ? 'flex justify-end' : ''}>
                {
                    item.type == 'q'
                        ? <li className='p-2 my-5 text-right border-8  border-zinc-700 bg-zinc-700 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl w-fit '>
                            <Answer ans={item.text} totalresult={1} index={index} type={item.type} />
                        </li>
                        : item.text.map((ansItem, ansIndex) => (
                            <li key={ansIndex + Math.random()} className='px-1'>
                                <Answer ans={ansItem} totalresult={item.text.length} index={ansIndex} type={item.type} />
                            </li>
                        ))
                }
            </div>
        </>
    )
}

export default QuestionAnswer
