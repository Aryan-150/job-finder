"use client";

import { cn } from "@/lib/utils";
import Button from "@/ui/button";

export default function Home() {
  return (
    <div className={cn(
      "h-screen p-2 flex flex-col gap-5"
    )}>
      <div className="flex flex-col items-start gap-5">
        <Button variant={"primary"} size={"xs"} text="Log in" />
        <Button variant={"primary"} size={"xs"} text="Log in" disabled />
        <Button variant={"primary"} size={"sm"} text="Log in" />
        <Button variant={"primary"} size={"sm"} text="Log in" isLoading={true} />
        <Button variant={"primary"} size={"md"} text="Log in" />
        <Button variant={"primary"} size={"md"} text="Log in" isLoading={true} />
        <Button variant={"primary"} size={"lg"} text="Log in" />
        <Button variant={"primary"} size={"lg"} text="Log in" disabled />
      </div>
      <div className="flex flex-col items-start gap-5">
        <Button variant={"secondary"} size={"xs"} text="Log in" />
        <Button variant={"secondary"} size={"xs"} text="Log in" disabled />
        <Button variant={"secondary"} size={"sm"} text="Log in" />
        <Button variant={"secondary"} size={"sm"} text="Log in" isLoading={true} />
        <Button variant={"secondary"} size={"md"} text="Log in" />
        <Button variant={"secondary"} size={"md"} text="Log in" isLoading={true} />
        <Button variant={"secondary"} size={"lg"} text="Log in" />
        <Button variant={"secondary"} size={"lg"} text="Log in" disabled />
      </div>
    </div>
  )
}