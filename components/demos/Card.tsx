import React from 'react'
import { Card, CardBody, CardHeader } from '../core-ui/Card'
import { Heading } from '../core-ui/Heading'
import { Paragraph } from '../core-ui/Paragraph'
import { Button } from '../core-ui/Button'
import { Icon } from "@iconify/react" 
import { TextField } from "../core-ui/TextField"
const CardDemo = () => {
  return (
    <Card>
     <CardHeader>
          <Heading type="h5">Create account</Heading>
          <Paragraph>Create account, now!</Paragraph>
     </CardHeader>
     <CardBody className="flex flex-col gap-4 pt-0">
          <header className="grid grid-cols-2 gap-3">
               <Button>
                    <Icon icon={"logos:google-icon"} />
                    <span>Continue with Google</span>
               </Button>
               <Button>
                    <Icon className="" icon={"logos:bulma"} />
                    <span>Continue with Bulma</span>
               </Button>
          </header>
          <footer className="flex flex-col gap-4">
               <div className="flex flex-col gap-2">
                    <TextField placeholder="Full Name" />
                    <TextField placeholder="E-Mail" />
               </div>
               <div className="flex flex-col">
                    <Button className="w-full">Login</Button>
               </div>
          </footer>
     </CardBody>
    </Card>
  )
}

export {CardDemo}