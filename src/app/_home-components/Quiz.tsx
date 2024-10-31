import { SectionContainer } from '@/components/common/SectionContainer'
import { TextHeading } from '@/components/common/TextHeading'
import React from 'react'

export const Quiz = () => {
  return (
    <SectionContainer>
      <TextHeading className='pb-4'>Take the Quiz to find your immigration pathway!</TextHeading>

      <p>By taking this quiz, you will discover which immigration pathway best fits your unique situation.</p>
    </SectionContainer>
  )
}
