import React from 'react'

const HomePage = () => {
  return (
    <div className='space-y-5'>
      <h1>AI Content Generator</h1>
      <div className='flex justify-between gap-10 min-h-screen'>
        <section className='w-1/3'>
          <p>What content do you want to create?</p>
          <textarea placeholder='Enter prompt...'></textarea>
        </section>

        <section className='w-2/3'>
          <h3>Output</h3>
          <textarea className='h-3/4' placeholder='Awaiting output...' readOnly disabled></textarea>
        </section>
      </div>
    </div>
  )
}

export default HomePage