import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ArrowLeft, Printer, Download } from "lucide-react"
import Link from "next/link"

export default function SchedulePage() {
  // Дни недели
  const weekDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

  // Классы
  const classes = ["5А", "6Б", "7В", "8Г", "9А", "10А", "11Б"]

  // Предметы с учителями и кабинетами
  const scheduleData = {
    "5А": {
      Понедельник: [
        { subject: "Математика", teacher: "Иванова А.П.", room: "212" },
        { subject: "Русский язык", teacher: "Петрова Н.С.", room: "305" },
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
        { subject: "Литература", teacher: "Петрова Н.С.", room: "305" },
        { subject: "Классный час", teacher: "Иванова А.П.", room: "212" },
      ],
      Вторник: [
        { subject: "Биология", teacher: "Морозова Е.А.", room: "215" },
        { subject: "Математика", teacher: "Иванова А.П.", room: "212" },
        { subject: "Английский язык", teacher: "Соколова Т.В.", room: "308" },
        { subject: "География", teacher: "Николаев П.Р.", room: "219" },
        { subject: "Технология", teacher: "Васильев А.А.", room: "105" },
      ],
      Среда: [
        { subject: "Русский язык", teacher: "Петрова Н.С.", room: "305" },
        { subject: "Математика", teacher: "Иванова А.П.", room: "212" },
        { subject: "Физика", teacher: "Смирнов К.Л.", room: "301" },
        { subject: "Информатика", teacher: "Козлов Д.М.", room: "310" },
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
      ],
      Четверг: [
        { subject: "Литература", teacher: "Петрова Н.С.", room: "305" },
        { subject: "Английский язык", teacher: "Соколова Т.В.", room: "308" },
        { subject: "Математика", teacher: "Иванова А.П.", room: "212" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
        { subject: "Биология", teacher: "Морозова Е.А.", room: "215" },
      ],
      Пятница: [
        { subject: "Математика", teacher: "Иванова А.П.", room: "212" },
        { subject: "Русский язык", teacher: "Петрова Н.С.", room: "305" },
        { subject: "География", teacher: "Николаев П.Р.", room: "219" },
        { subject: "Музыка", teacher: "Белова О.С.", room: "111" },
        { subject: "ИЗО", teacher: "Черных М.Ю.", room: "208" },
      ],
      Суббота: [
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Обществознание", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Литература", teacher: "Петрова Н.С.", room: "305" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
      ],
    },
    "6Б": {
      Понедельник: [
        { subject: "Русский язык", teacher: "Соловьева Л.П.", room: "306" },
        { subject: "Математика", teacher: "Степанова Г.Н.", room: "213" },
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Английский язык", teacher: "Соколова Т.В.", room: "308" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
      ],
      Вторник: [
        { subject: "Математика", teacher: "Степанова Г.Н.", room: "213" },
        { subject: "Биология", teacher: "Морозова Е.А.", room: "215" },
        { subject: "География", teacher: "Николаев П.Р.", room: "219" },
        { subject: "Русский язык", teacher: "Соловьева Л.П.", room: "306" },
        { subject: "Технология", teacher: "Васильев А.А.", room: "105" },
      ],
      Среда: [
        { subject: "Математика", teacher: "Степанова Г.Н.", room: "213" },
        { subject: "Русский язык", teacher: "Соловьева Л.П.", room: "306" },
        { subject: "Физика", teacher: "Смирнов К.Л.", room: "301" },
        { subject: "Литература", teacher: "Соловьева Л.П.", room: "306" },
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
      ],
      Четверг: [
        { subject: "Английский язык", teacher: "Соколова Т.В.", room: "308" },
        { subject: "Математика", teacher: "Степанова Г.Н.", room: "213" },
        { subject: "Информатика", teacher: "Козлов Д.М.", room: "310" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
        { subject: "Биология", teacher: "Морозова Е.А.", room: "215" },
      ],
      Пятница: [
        { subject: "Русский язык", teacher: "Соловьева Л.П.", room: "306" },
        { subject: "Математика", teacher: "Степанова Г.Н.", room: "213" },
        { subject: "География", teacher: "Николаев П.Р.", room: "219" },
        { subject: "Литература", teacher: "Соловьева Л.П.", room: "306" },
        { subject: "ИЗО", teacher: "Черных М.Ю.", room: "208" },
      ],
      Суббота: [
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Обществознание", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Английский язык", teacher: "Соколова Т.В.", room: "308" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
      ],
    },
    "7В": {
      Понедельник: [
        { subject: "Алгебра", teacher: "Новикова Е.В.", room: "214" },
        { subject: "Русский язык", teacher: "Антонова К.С.", room: "307" },
        { subject: "Физика", teacher: "Смирнов К.Л.", room: "301" },
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
      ],
      Вторник: [
        { subject: "Геометрия", teacher: "Новикова Е.В.", room: "214" },
        { subject: "Биология", teacher: "Морозова Е.А.", room: "215" },
        { subject: "Русский язык", teacher: "Антонова К.С.", room: "307" },
        { subject: "География", teacher: "Николаев П.Р.", room: "219" },
        { subject: "Технология", teacher: "Васильев А.А.", room: "105" },
      ],
      Среда: [
        { subject: "Алгебра", teacher: "Новикова Е.В.", room: "214" },
        { subject: "Литература", teacher: "Антонова К.С.", room: "307" },
        { subject: "Физика", teacher: "Смирнов К.Л.", room: "301" },
        { subject: "Информатика", teacher: "Козлов Д.М.", room: "310" },
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
      ],
      Четверг: [
        { subject: "Русский язык", teacher: "Антонова К.С.", room: "307" },
        { subject: "Геометрия", teacher: "Новикова Е.В.", room: "214" },
        { subject: "Химия", teacher: "Федорова А.Н.", room: "302" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
        { subject: "Биология", teacher: "Морозова Е.А.", room: "215" },
      ],
      Пятница: [
        { subject: "Алгебра", teacher: "Новикова Е.В.", room: "214" },
        { subject: "Русский язык", teacher: "Антонова К.С.", room: "307" },
        { subject: "География", teacher: "Николаев П.Р.", room: "219" },
        { subject: "Английский язык", teacher: "Соколова Т.В.", room: "308" },
        { subject: "ИЗО", teacher: "Черных М.Ю.", room: "208" },
      ],
      Суббота: [
        { subject: "История", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Обществознание", teacher: "Сидоров В.Г.", room: "401" },
        { subject: "Литература", teacher: "Антонова К.С.", room: "307" },
        { subject: "Физкультура", teacher: "Кузнецов И.И.", room: "Спортзал" },
      ],
    },
  }

  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2 mr-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Назад</span>
          </Link>
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <h1 className="text-xl font-bold">Школьное расписание</h1>
          </div>
        </div>
      </header>

      <div className="container px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Расписание занятий</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Печать
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Скачать PDF
            </Button>
          </div>
        </div>

        <Tabs defaultValue="5А" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-7 mb-6">
            {classes.map((className) => (
              <TabsTrigger key={className} value={className}>
                {className}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(scheduleData).map((className) => (
            <TabsContent key={className} value={className}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border p-2 text-left">№</th>
                      {weekDays.map((day) => (
                        <th key={day} className="border p-2 text-left">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[0, 1, 2, 3, 4, 5].map((lessonIndex) => (
                      <tr key={lessonIndex} className={lessonIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="border p-2 font-medium">{lessonIndex + 1}</td>
                        {weekDays.map((day) => {
                          const lesson = scheduleData[className][day]?.[lessonIndex]
                          return (
                            <td key={day} className="border p-2">
                              {lesson ? (
                                <div>
                                  <div className="font-medium">{lesson.subject}</div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {lesson.teacher} • Каб. {lesson.room}
                                  </div>
                                </div>
                              ) : (
                                <span className="text-gray-400">—</span>
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
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
