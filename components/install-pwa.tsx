"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Обработчик события beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      // Предотвращаем стандартное отображение подсказки
      e.preventDefault()
      // Сохраняем событие для использования позже
      setDeferredPrompt(e)
      // Показываем кнопку установки
      setIsInstallable(true)
    }

    // Проверяем, установлено ли уже приложение
    const checkIfInstalled = () => {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true)
      }
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", () => setIsInstalled(true))

    // Проверяем при загрузке
    checkIfInstalled()

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", () => setIsInstalled(true))
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    // Показываем диалог установки
    deferredPrompt.prompt()

    // Ожидаем выбор пользователя
    const { outcome } = await deferredPrompt.userChoice

    // Очищаем сохраненное событие
    setDeferredPrompt(null)

    // Скрываем кнопку установки, если пользователь установил приложение
    if (outcome === "accepted") {
      setIsInstallable(false)
      setIsInstalled(true)
    }
  }

  // Всегда показываем кнопку "Скачать", даже если приложение не может быть установлено
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleInstallClick}
      className="flex items-center gap-1"
      disabled={isInstalled || (!isInstallable && !deferredPrompt)}
    >
      <Download className="h-4 w-4" />
      {isInstalled ? "Установлено" : "Скачать"}
    </Button>
  )
}
