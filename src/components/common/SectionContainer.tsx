import React from 'react'

export const SectionContainer = ({children}:{children: React.ReactNode}) => {
  return (
    <section className='grid place-content-center w-full'>
      <div className='max-w-[398px] lg:max-w-[1080px]'>
        {children}
      </div>
    </section>
  )
}
