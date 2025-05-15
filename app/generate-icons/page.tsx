import GenerateIcons from "@/components/generate-icons"

export default function GenerateIconsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Генерация иконок</h1>
      <p className="mb-4">Эта страница генерирует иконки для PWA приложения. Иконки будут автоматически скачаны.</p>
      <GenerateIcons />
    </div>
  )
}
