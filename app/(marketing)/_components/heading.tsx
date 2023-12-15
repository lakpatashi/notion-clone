"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="text-6xl font-bold">Your ideas, Documents. Unified. Welcome to <span className="underline">Jotion</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum vero magni illum mollitia suscipit, quidem eligendi non aperiam ut omnis, labore minus at similique. Incidunt rem culpa impedit est voluptatem maxime ipsam dolorum explicabo soluta magnam, nisi quos, obcaecati dolor libero aspernatur perferendis ipsa, temporibus praesentium alias quod omnis.</p>
        <h3 className="text-2xl font-medium">
            Jotion is connected workspace where <br />
            better, faster work happens.
        </h3>
        <Button>
            Enter Jotion
            <ArrowRight className="h-4 w-4 ml-2"/>
        </Button>
    </div>
  )
}

export default Heading