"use client"

import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { CircleUser } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { cn } from "@/lib/utils"

type Props = {
    auth: boolean,
}

export default function ProfileLink(props: Props) {
    const { toast } = useToast();
    if (props.auth) {
      return (
        <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LogoutLink>Logout</LogoutLink></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
      )
    } else {
      return (
        <Button variant="secondary" size="icon" className="rounded-full" onClick={() => {
          console.log("bru")
          toast({
            className: cn(
              'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
            ),
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "You have to be logged in, if you're new, please sign up!",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}>
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
      )
    }
}