/**
 * v-scroll-animate directive
 *
 * Adds scroll-triggered entrance animations using IntersectionObserver.
 * Replaces direct DOM manipulation (document.querySelectorAll) with a Vue-idiomatic approach.
 *
 * Usage:
 *   <div v-scroll-animate>           — fades in on scroll
 *   <div v-scroll-animate.stagger>   — children with `.stagger-item` animate in sequence
 *   <div v-scroll-animate.hero>      — animates immediately (no scroll trigger needed)
 */

const observers = new WeakMap()

export const vScrollAnimate = {
    STAGGER_DELAY_MS: 150,
    STAGGER_HIDDEN_CLASSES: ['opacity-0', 'translate-y-4'],
    HERO_STAGGER_DELAY_MS: 100,
    HERO_INITIAL_CLASSES: ['opacity-0', 'translate-y-4'],

    prepareStaggerChildren(el) {
        const staggerChildren = el.querySelectorAll('.stagger-item')
        staggerChildren.forEach((child) => {
            if (child.classList.contains('animate-fade-in-up')) return
            child.classList.add(...vScrollAnimate.STAGGER_HIDDEN_CLASSES)
        })
    },

    animateStaggerChildren(el) {
        const staggerChildren = el.querySelectorAll('.stagger-item')
        staggerChildren.forEach((child, i) => {
            const isHidden = vScrollAnimate.STAGGER_HIDDEN_CLASSES.some((className) => child.classList.contains(className))
            if (!isHidden) return

            setTimeout(() => {
                child.classList.remove(...vScrollAnimate.STAGGER_HIDDEN_CLASSES)
                child.classList.add('animate-fade-in-up')
            }, i * vScrollAnimate.STAGGER_DELAY_MS)
        })
    },

    animateHeroChildren(el, hideBeforeAnimate = false) {
        const heroElements = el.querySelectorAll('.hero-animate')
        heroElements.forEach((child, index) => {
            if (hideBeforeAnimate) {
                child.classList.add(...vScrollAnimate.HERO_INITIAL_CLASSES)
            }

            const isHidden = vScrollAnimate.HERO_INITIAL_CLASSES.some((className) => child.classList.contains(className))
            if (!isHidden) return

            setTimeout(() => {
                child.classList.remove(...vScrollAnimate.HERO_INITIAL_CLASSES)
                child.classList.add('animate-fade-in-up')
            }, index * vScrollAnimate.HERO_STAGGER_DELAY_MS)
        })
    },

    mounted(el, binding) {
        const isHero = binding.modifiers.hero
        const hasStagger = binding.modifiers.stagger

        if (hasStagger) {
            // Directive owns hidden-state setup for stagger children.
            vScrollAnimate.prepareStaggerChildren(el)
        }

        if (isHero) {
            // Hero elements animate immediately with a small stagger
            vScrollAnimate.animateHeroChildren(el, true)
            return
        }

        // Scroll-triggered animation
        el.classList.add('opacity-0', 'translate-y-8', 'transition-none')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'transition-none')
                        entry.target.classList.add('animate-fade-in-up')

                        // Animate stagger children if modifier is set
                        if (hasStagger) {
                            vScrollAnimate.animateStaggerChildren(entry.target)
                        }

                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        )

        observer.observe(el)
        observers.set(el, observer)
    },

    updated(el, binding) {
        const isHero = binding.modifiers.hero
        const hasStagger = binding.modifiers.stagger

        if (isHero) {
            // Re-run hero animation only for newly-added hidden elements
            vScrollAnimate.animateHeroChildren(el)
            return
        }

        if (hasStagger) {
            // Keep newly-rendered stagger children hidden until revealed.
            vScrollAnimate.prepareStaggerChildren(el)
        }

        if (hasStagger && el.classList.contains('animate-fade-in-up')) {
            // Parent was already animated once; make newly-rendered hidden children visible.
            vScrollAnimate.animateStaggerChildren(el)
        }
    },

    unmounted(el) {
        const observer = observers.get(el)
        if (observer) {
            observer.disconnect()
            observers.delete(el)
        }
    },
}
