"use client"
import { HeroServices } from '@/components/hero'
import React from 'react'
import Section from './Section'

function Page() {
  return (
    <div  className="bg-[#FFF4E4]">
      <HeroServices/>
      <Section/>
    </div>
  )
}

export default Page