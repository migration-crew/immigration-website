import { SectionContainer } from '@/components/common/SectionContainer'
import { Heading } from '@/components/common/text/Heading'
import React from 'react'

export const Quiz = () => {
  return (
    <SectionContainer>
      <Heading className='pb-4'>Take the Quiz to find your immigration pathway!</Heading>

      <p>By taking this quiz, you will discover which immigration pathway best fits your unique situation.</p>
    </SectionContainer>
  )
}
