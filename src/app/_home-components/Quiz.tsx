import { ResponsiveImage } from '@/components/common/ResponsiveImage'
import { SectionContainer } from '@/components/common/SectionContainer'
import { Heading } from '@/components/common/text/Heading'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import startQuiz from "@/public/startQuiz.png"
import React from 'react'

export const Quiz = () => {
  return (
    <SectionContainer>
      <Heading className='pb-4'>Take the Quiz to find your immigration pathway!</Heading>

      <p>By taking this quiz, you will discover which immigration pathway best fits your unique situation.</p>

      <Card className='h-[602px]'>
        <CardHeader className='bg-secondary-blue rounded-t-xl h-[474px] mb-0'>
          <ResponsiveImage alt='startQuiz' src={startQuiz} divClassName='h-[400px] w-[500px]' imgClassName=''></ResponsiveImage>
        </CardHeader>
        <CardFooter></CardFooter>
      </Card>
    </SectionContainer>
  )
}
