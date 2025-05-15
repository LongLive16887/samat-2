import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/cards"
import { Calendar, ArrowLeft, Clock, Bell } from "lucide-react"
import Link from "next/link"

export default function BellsPage() {
  // Расписание звонков
  const bellSchedule = [
    { lesson: 1, start: "08:30", end: "09:15" },
    { lesson: 2, start: "09:25", end: "10:10" },
    { lesson: 3, start: "10:20", end: "11:05" },
    { lesson: 4, start: "11:25", end: "12:10" },
    { lesson: 5, start: "12:20", end: "13:05" },
    { lesson: 6, start: "13:15", end: "14:00" },
    { lesson: 7, start: "14:10", end: "14:55" },
    { lesson: 8, start: "15:05", end: "15:50" },
  ]

  // Расписание звонков для сокращенных дней
  const shortDaySchedule = [
    { lesson: 1, start: "08:30", end: "09:05" },
    { lesson: 2, start: "09:15", end: "09:50" },
    { lesson: 3, start: "10:00", end: "10:35" },
    { lesson: 4, start: "10:55", end: "11:30" },
    { lesson: 5, start: "11:40", end: "12:15" },
    { lesson: 6, start: "12:25", end: "13:00" },
    { lesson: 7, start: "13:10", end: "13:45" },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2 mr-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Назад</span>
          </Link>
          <div className="flex items-center gap-2">
            <Bell className="h-6 w-6" />
            <h1 className="text-xl font-bold">Расписание звонков</h1>
          </div>
        </div>
      </header>

      <div className="container px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Обычные дни
              </CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Урок</th>
                    <th className="text-left py-2">Начало</th>
                    <th className="text-left py-2">Конец</th>
                    <th className="text-left py-2">Перемена</th>
                  </tr>
                </thead>
                <tbody>
                  {bellSchedule.map((bell, index) => {
                    const breakTime =
                      index < bellSchedule.length - 1
                        ? calculateBreakTime(bell.end, bellSchedule[index + 1].start)
                        : null

                    return (
                      <tr key={bell.lesson} className="border-b last:border-0">
                        <td className="py-3 font-medium">{bell.lesson}</td>
                        <td className="py-3">{bell.start}</td>
                        <td className="py-3">{bell.end}</td>
                        <td className="py-3">
                          {breakTime ? (
                            <span className={breakTime === "20 мин" ? "text-green-600 font-medium" : ""}>
                              {breakTime}
                            </span>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Сокращенные дни
              </CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Урок</th>
                    <th className="text-left py-2">Начало</th>
                    <th className="text-left py-2">Конец</th>
                    <th className="text-left py-2">Перемена</th>
                  </tr>
                </thead>
                <tbody>
                  {shortDaySchedule.map((bell, index) => {
                    const breakTime =
                      index < shortDaySchedule.length - 1
                        ? calculateBreakTime(bell.end, shortDaySchedule[index + 1].start)
                        : null

                    return (
                      <tr key={bell.lesson} className="border-b last:border-0">
                        <td className="py-3 font-medium">{bell.lesson}</td>
                        <td className="py-3">{bell.start}</td>
                        <td className="py-3">{bell.end}</td>
                        <td className="py-3">
                          {breakTime ? (
                            <span className={breakTime === "20 мин" ? "text-green-600 font-medium" : ""}>
                              {breakTime}
                            </span>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Примечания:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Продолжительность урока в обычные дни - 45 минут</li>
            <li>Продолжительность урока в сокращенные дни - 35 минут</li>
            <li>Большая перемена (20 минут) после 3-го урока</li>
            <li>Сокращенные дни проводятся перед праздниками и в особых случаях</li>
          </ul>
        </div>
      </div>

      <footer className="border-t py-6 mt-auto">
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

// Функция для расчета времени перемены
function calculateBreakTime(endTime: string, nextStartTime: string): string {
  const [endHours, endMinutes] = endTime.split(":").map(Number)
  const [startHours, startMinutes] = nextStartTime.split(":").map(Number)

  const totalEndMinutes = endHours * 60 + endMinutes
  const totalStartMinutes = startHours * 60 + startMinutes

  // Если следующий урок на следующий день (что маловероятно), возвращаем пустую строку
  if (totalStartMinutes < totalEndMinutes) {
    return ""
  }

  const breakMinutes = totalStartMinutes - totalEndMinutes
  return `${breakMinutes} мин`
}
