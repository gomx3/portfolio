import { useGSAP } from '@gsap/react'
import { HERO } from '../constants'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/all'
import { GradientName } from './GradientName'

const colors = [
    ['#8BB81B', '#BEE950'],
    ['#3A97DF', '#46DDFF'],
    ['#E3648C', '#F98080'],
    ['#EDAB1D', '#FFBE78'],
]

gsap.registerPlugin(Draggable)

export const TitlePlayground = () => {
    const [theme, setTheme] = useState(colors[0][0])

    const container = useRef(null)

    useEffect(() => {
        document.documentElement.style.setProperty('--theme-color', colors[0][0])
    }, [])

    useGSAP(
        () => {
            const logo = document.querySelectorAll('.logo')
            const items = document.querySelectorAll('.img-group img')

            items.forEach((item, i) => {
                const itemColor = colors[i]

                Draggable.create(item, {
                    onPress: () => {
                        // bring the item forward on press
                        gsap.to(item, { duration: 0.1, scale: 1.2, rotate: 'random(-9,9)', zIndex: 100 })
                        gsap.to(items, { duration: 0.1, opacity: (i, t) => (t == item ? 1 : 0.3) })
                    },

                    onRelease: () => {
                        // return the item on release
                        gsap.to(item, { duration: 0.4, x: 0, y: 0, rotate: 0, scale: 1, ease: 'elastic.out(.45)' })
                        gsap.to(items, { duration: 0.2, opacity: 1, zIndex: 0 })
                    },

                    onDrag: () => {
                        if (!gsap.isTweening(logo)) {
                            // prevent overlapping color changes
                            if (Draggable.hitTest(item, logo, 12)) {
                                // check if item is over the logo
                                gsap.to('.logo #gradient stop', {
                                    // if so, change stop element's stop-color attribute
                                    attr: { 'stop-color': (n) => itemColor[n] },
                                })

                                document.documentElement.style.setProperty('--theme-color', itemColor[0])
                                setTheme(itemColor[1])
                            }
                        }
                    },
                })
            })
        },
        { scope: container }
    )

    return (
        <div ref={container} className="flex flex-col gap-10" style={{ '--theme-color': theme } as React.CSSProperties}>
            <h1 className="flex flex-col gap-4 tablet:gap-6 items-center text-2xl tablet:text-5xl font-bold tracking-tight text-neutral-800 whitespace-pre-line">
                {HERO.TITLE_PRE}
                <span className="sr-only">{HERO.NAME}</span>
                <GradientName />
            </h1>
            <p className="text-md tablet:text-xl text-neutral-600 whitespace-pre-line">{HERO.P}</p>

            <div className="img-group">
                <p className="text-center text-neutral-400 mb-6">( 물감을 이름에 드래그하면 색을 바꿀 수 있습니다 )</p>
                <div className="flex flex-row gap-3 tablet:gap-6 justify-center">
                    <img alt="" data-speed="1.25" src="/assets/item_k.png" className='w-[4.325rem] h-[4.325rem] tablet:w-auto tablet:h-auto' />
                    <img alt="" data-speed="0.8" src="/assets/item_i.png" className='w-[1.813rem] h-[4.325rem] tablet:w-auto tablet:h-auto' />
                    <img alt="" data-speed="1" src="/assets/item_w.png" className='w-24 h-[4.325rem] tablet:w-auto tablet:h-auto' />
                    <img alt="" data-speed="1.2" src="/assets/item_e.png" className='w-14 h-[4.325rem] tablet:w-auto tablet:h-auto' />
                </div>
            </div>
        </div>
    )
}
