import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {Button, ButtonGroup} from "@heroui/button";
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@heroui/react";
import { Slider } from "@/components/slider";
import { Card_Slider } from "@/components/card-slider";

import Image from 'next/image';

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useState } from "react";



export default function IndexPage() {

const [isFollowed, setIsFollowed] = useState(false);



  return (
    <DefaultLayout>
      <Slider />

        <Card_Slider />

      <div className="w-full h-[25vh] md:h-[40vh] flex flex-col items-center justify-center gap-2 md:gap-5">
        <div className="text-base md:text-3xl w-[60vw] flex justify-center text-center">Ready to LookUp the answers?</div>
        <div className="text-sm md:text-xl w-[90vw] md:w-[40vw] flex justify-center text-center ">Doubts are unnecessary, clear the fog and start your journey today.</div>
        <Button color="primary" variant="ghost" size="sm" radius="full" className="md:h-10 md:w-[10vw] md:text-base">Get Started</Button>
      </div>

    </DefaultLayout>
  );
}
