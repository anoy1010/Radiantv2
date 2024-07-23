"use client";
import React from "react";
import Section from "./Section";
import { HeroAbout } from "@/components/hero";

export default function Page() {
  return (
    <div className="pt-32">
      <HeroAbout />
      <Section />
    </div>
  );
}
