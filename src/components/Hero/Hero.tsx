import * as React from 'react'
import { Dispatch, FC, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import './Hero.css'
import Phone from '../../assets/img/phone.png'
import Keyboard from '../../assets/img/keyboard.png'
import Vape from '../../assets/img/vape.png'

export const Hero: FC = () => {
  const tags = ['3D', 'VFX', 'GCI']
  const contentRef = useRef<HTMLDivElement>(null)
  let lastAddedTime = 0

  const handleMouseMove = (e: React.MouseEvent) => {
    const currentTime = Date.now()
    if (currentTime - lastAddedTime < 150) return
    lastAddedTime = currentTime

    const content = contentRef.current
    if (!content) return

    const rect = content.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const target = e.target as HTMLElement
    if (target.tagName === 'H1' || target.closest('h1')) return

    if (x < rect.width * 0.2) return

    const block = document.createElement('div')
    block.style.backgroundImage = `url(${getRandomImage()})`
    block.style.backgroundSize = '240px'
    block.className = 'color-block'
    block.style.left = `${x}px`
    block.style.top = `${y}px`


    content.appendChild(block)

    setTimeout(() => {
      block.remove()
    }, 3000)
  }

  const getRandomImage = () => {
    const images = [Phone, Keyboard, Vape]
    return images[Math.floor(Math.random() * images.length)]
  }

  const text1Ref = useRef('')
  const text2Ref = useRef('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const animationStarted = useRef(false)

  const fullText1 = 'Создаем визуальные решения,'
  const fullText2 = 'которые говорят за вас'
  const typingSpeed = 75

  const typeText = (
    fullText: string,
    setText: Dispatch<SetStateAction<string>>,
    textRef: MutableRefObject<string>,
    callback?: () => void
  ) => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        textRef.current += fullText[index]
        setText(textRef.current)
        index++
      } else {
        clearInterval(interval)
        if (callback) callback()
      }
    }, typingSpeed)
  }

  useEffect(() => {
    if (animationStarted.current) return
    animationStarted.current = true

    typeText(fullText1, setText1, text1Ref, () => {
      typeText(fullText2, setText2, text2Ref)
    })
  }, [])


  return <div className={'hero'}>
    <div className={'header'}>
      <p className={'logo'}>holapix</p>
      <p className={'insta'}>@holapix</p>
    </div>
    <div className="content" ref={contentRef} onMouseMove={handleMouseMove}>
      <h1 className="title">
        <span id="line1">{text1}</span>
        <span id="line2">{text2}</span>
      </h1>
      <div className="tags">
        {tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>
    </div>

    <h2 className={'logoBig'}>HOLAPIX</h2>
  </div>
}