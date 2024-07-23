"use client"

import React from "react";
import Section, { Section1, Section2, Section3, Section4, SocialMediaContent } from "./Section";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../globals.css";
import SectionAll from "./Section";
import { parseCookies, setCookie } from 'nookies';
import SetCookieButton from "@/components/cookie/SetCookieButton";
import ShowCookie from "@/components/cookie/ShowCookie";
import CookieConsent from "@/components/cookie/CookieConsent";
import { HeroHome, HeroVideoHome } from "@/components/hero";



export const getServerSideProps = async (ctx) => {
  // Set a cookie
  setCookie(ctx, 'myCookie', 'myCookieValue', {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });

  // Read a cookie
  const cookies = parseCookies(ctx);
  console.log(cookies.myCookie); // "myCookieValue"

  return {
    props: {}, // Will be passed to the page component as props
  };
};


export default function Homepage() {

  
  return (
    <div>
      <HeroVideoHome/>
      <HeroHome/>
      <SectionAll/>
      <CookieConsent />
    </div>
  );
}
