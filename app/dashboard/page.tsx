'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import MathPracticeCarousel from "@/components/ui/math-practice-carousel"
import EnglishPracticeCarousel from "@/components/ui/english-practice-carousel"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,

  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"


const FormSchema = z.object({
  questions: z
    .string({
      required_error: "Please select a number to continue",
    })
})

export default function Dashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [mathQuestions, setMathQuestions] = useState(0);
  const [englishQuestion, setEnglishQuestions] = useState(0);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setMathQuestions(parseInt(data.questions));
    console.log(mathQuestions);
    setOpen(true);
  }
  function onSubmit2(data: z.infer<typeof FormSchema>) {
    setEnglishQuestions(parseInt(data.questions));
    console.log(mathQuestions);
    setOpen2(true);
  }
  
  return (
    <main>
      <Dialog open={open}>
    <DialogContent className="p-5 flex justify-center items-center flex-col gap-3">
    <DialogHeader>
      <DialogTitle>
        Math Practice
      </DialogTitle>
      </DialogHeader>
        <MathPracticeCarousel questions={mathQuestions} />
    </DialogContent>
    </Dialog>
    <Dialog open={open2}>
    <DialogContent className="p-5 flex justify-center items-center flex-col gap-3">
    <DialogHeader>
      <DialogTitle>
        English Practice
      </DialogTitle>
      </DialogHeader>
        <EnglishPracticeCarousel questions={englishQuestion} />
    </DialogContent>
    </Dialog>
      <h1 className="flex max-w-5xl text-primary font-bold text-[62px] mx-2 leading-none md:text-6xl z-20">Dashboard</h1>
      <div className="flex h-screen">
      <div className="m-auto flex space-x-20">
      <div className="flex flex-col space-y-20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Math Practice</CardTitle>
          <CardDescription>SAT Math practice catered to you - 1 and half minutes per question</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <FormLabel># of questions</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="# of questions" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </CardContent>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>English Practice</CardTitle>
          <CardDescription>SAT English practice catered to you - 1 minute per question</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit2)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <FormLabel># of questions</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="# of questions" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </CardContent>
      </Card>
      </div>
      <div className="flex flex-col space-y-20">
      <Card className="w-[350px] pb-8">
        <CardHeader>
          <CardTitle>Math Full Practice Test</CardTitle>
          <CardDescription>SAT Math Practice Test - 80 minutes</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework"># of questions</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">58</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild>
            <Link href="#">Start</Link>
            </Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px] pb-8">
        <CardHeader>
          <CardTitle>English Full Practice Test</CardTitle>
          <CardDescription>SAT English Practice Test - 35 minutes</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework"># of questions</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">44</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Start</Button>
        </CardFooter>
      </Card>
      </div>
      <div className="flex flex-col space-y-20">
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    /><div></div></div>
      </div>
      </div>
    </main>
  )
}