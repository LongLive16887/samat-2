"use client"

import { useEffect, useRef } from "react"

export default function GenerateIcons() {
  const canvasRef192 = useRef<HTMLCanvasElement>(null)
  const canvasRef512 = useRef<HTMLCanvasElement>(null)
  const canvasMaskable = useRef<HTMLCanvasElement>(null)
  const canvasApple = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Функция для рисования иконки
    const drawIcon = (canvas: HTMLCanvasElement, size: number, isMaskable = false) => {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Очистка холста
      ctx.clearRect(0, 0, size, size)

      // Фон
      ctx.fillStyle = "#0f172a" // темно-синий

      if (isMaskable) {
        // Для маскируемой иконки делаем полный квадрат
        ctx.fillRect(0, 0, size, size)

        // Отступы для безопасной зоны
        const safeZone = size * 0.1
        const iconSize = size - safeZone * 2

        // Рисуем календарь
        drawCalendarIcon(ctx, safeZone, safeZone, iconSize)
      } else {
        // Для обычной иконки делаем скругленный прямоугольник
        const radius = size * 0.2
        ctx.beginPath()
        ctx.moveTo(size, radius)
        ctx.arcTo(size, 0, size - radius, 0, radius)
        ctx.lineTo(radius, 0)
        ctx.arcTo(0, 0, 0, radius, radius)
        ctx.lineTo(0, size - radius)
        ctx.arcTo(0, size, radius, size, radius)
        ctx.lineTo(size - radius, size)
        ctx.arcTo(size, size, size, size - radius, radius)
        ctx.closePath()
        ctx.fill()

        // Рисуем календарь
        drawCalendarIcon(ctx, size * 0.15, size * 0.15, size * 0.7)
      }
    }

    // Функция для рисования иконки календаря
    const drawCalendarIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      // Фон календаря
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(x, y, size, size)

      // Верхняя часть календаря
      ctx.fillStyle = "#ef4444" // красный
      ctx.fillRect(x, y, size, size * 0.25)

      // Линии календаря
      ctx.fillStyle = "#e2e8f0" // светло-серый

      // Горизонтальные линии
      for (let i = 1; i < 5; i++) {
        ctx.fillRect(x, y + size * 0.25 + i * ((size * 0.75) / 5), size, size * 0.02)
      }

      // Вертикальные линии
      for (let i = 1; i < 7; i++) {
        ctx.fillRect(x + i * (size / 7), y + size * 0.25, size * 0.01, size * 0.75)
      }

      // Текущий день (квадрат)
      ctx.fillStyle = "#3b82f6" // синий
      const daySize = size / 7 - size * 0.02
      ctx.fillRect(x + size / 2 - daySize / 2, y + size * 0.5 - daySize / 2, daySize, daySize)
    }

    // Рисуем иконки разных размеров
    if (canvasRef192.current) {
      drawIcon(canvasRef192.current, 192)

      // Сохраняем иконку как PNG
      canvasRef192.current.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.href = url
          link.download = "icon-192.png"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      })
    }

    if (canvasRef512.current) {
      drawIcon(canvasRef512.current, 512)

      // Сохраняем иконку как PNG
      canvasRef512.current.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.href = url
          link.download = "icon-512.png"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      })
    }

    if (canvasMaskable.current) {
      drawIcon(canvasMaskable.current, 512, true)

      // Сохраняем иконку как PNG
      canvasMaskable.current.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.href = url
          link.download = "maskable-icon.png"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      })
    }

    if (canvasApple.current) {
      drawIcon(canvasApple.current, 180)

      // Сохраняем иконку как PNG
      canvasApple.current.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.href = url
          link.download = "apple-touch-icon.png"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      })
    }
  }, [])

  return (
    <div className="hidden">
      <canvas ref={canvasRef192} width="192" height="192" />
      <canvas ref={canvasRef512} width="512" height="512" />
      <canvas ref={canvasMaskable} width="512" height="512" />
      <canvas ref={canvasApple} width="180" height="180" />
    </div>
  )
}
