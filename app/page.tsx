"use client"

import { Heading } from "@/components/core-ui/Heading";
import { Paragraph } from "@/components/core-ui/Paragraph";
import { AvatarSizeDemo } from "@/components/demos/Avatar";
import { ButtonDemoVariants } from "@/components/demos/Button";
import { CardDemo } from "@/components/demos/Card";
import { CheckboxDemo } from "@/components/demos/Checkbox";
import { SeparatorDemo } from "@/components/demos/Separator";
import { SwitchDemo } from "@/components/demos/Switch";
import { TextFieldDemo } from "@/components/demos/TextField";
import { cn } from "@/components/libs/utils";
import Header from "@/components/site-ui/Header";
import { buttonVariants } from "@/components/variants/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Header />
      <section className="flex px-28 items-center justify-between">
      <div className="flex flex-col">
        <div className="space-y-4">
        <header className="space-y-2">
        <Heading className="max-w-lg" type="h1">Speed up your UI development with CoreUI&apos;s modular components.</Heading>
        <Paragraph className="max-w-lg">
        CoreUI&apos;s modular components help you build responsive, scalable UI&apos;s faster, with reusable elements designed for consistency and performance.
        </Paragraph>
        </header>
        <footer className="flex items-center gap-2">
          <Link href={"/docs"} className={cn(buttonVariants({className:"px-4", size:"sm"}))}>Getting Started -&gt; </Link>
          <Link href="/customization" className={cn(buttonVariants({className:"px-4", size:"sm", variant:"ghost"}))}>Customization</Link>
        </footer>
        </div>
      </div>
      <div className="-skew-y-12 relative z-[-1] origin-center select-none scale-105 pointer-events-none flex flex-col gap-5">
        <CardDemo />
        <div className="flex items-center gap-6">
        <SwitchDemo />
        <CheckboxDemo />
        <AvatarSizeDemo />
        </div>
        <TextFieldDemo/>
        <SeparatorDemo />
        <ButtonDemoVariants />
      </div>
      </section>
    </div>
  );
}
