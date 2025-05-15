import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import InstallPWA from "@/components/install-pwa"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <h1 className="text-xl font-bold">Школьное расписание</h1>
          </div>
          <div className="flex items-center gap-4">
            <InstallPWA />
          </div>
        </div>
      </header>

      <section className="container px-4 py-8 md:py-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Школьное расписание занятий</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Удобное приложение для просмотра расписания уроков
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link href="/schedule">Посмотреть расписание</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/bells">Расписание звонков</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-6 md:py-8 mt-auto">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <p className="text-sm text-gray-500">© 2025 Школьное расписание. Автор: Отеулиев Самат</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
