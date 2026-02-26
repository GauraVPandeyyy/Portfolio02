// src/components/ScrollStack.jsx
import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

// FIX 1: Added a static wrapper to prevent transform feedback loops
export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className="scroll-stack-wrapper relative w-full h-[550px] md:h-[500px] my-8">
    <div
      className={`scroll-stack-card absolute inset-0 w-full h-full p-0 rounded-[2.5rem] shadow-2xl box-border origin-top will-change-transform ${itemClassName}`.trim()}
      style={{
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        WebkitFontSmoothing: 'antialiased',
        transform: 'translate3d(0, 0, 0)' 
      }}
    >
      {children}
    </div>
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.05,
  itemStackDistance = 40,
  stackPosition = '15%',
  scaleEndPosition = '5%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0, 
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  
  const cardsRef = useRef([]);
  const wrappersRef = useRef([]); // Track wrappers
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  // FIX 2: Sync directly with Lenis smooth scroll value for perfect precision
  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: lenisRef.current ? lenisRef.current.scroll : window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: lenisRef.current ? lenisRef.current.scroll : scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  // FIX 3: Use recursive offsetTop instead of getBoundingClientRect to avoid layout thrashing
  const getElementOffset = useCallback(
    element => {
      if (!element) return 0;
      if (useWindowScroll) {
        let top = 0;
        let current = element;
        while (current) {
          top += current.offsetTop || 0;
          current = current.offsetParent;
        }
        return top;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      // Calculate position based on the STATIC wrapper, not the moving card
      const wrapper = wrappersRef.current[i] || card;
      const cardTop = getElementOffset(wrapper);
      
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < wrappersRef.current.length; j++) {
          const jWrapper = wrappersRef.current[j] || cardsRef.current[j];
          const jCardTop = getElementOffset(jWrapper);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: translateY,
        scale: scale,
        rotation: rotation,
        blur: blur
      };

      const lastTransform = lastTransformsRef.current.get(i);
      
      // FIX 4: Lowered threshold from 0.05 to 0.001 to prevent staircase/lag effect on slow scroll
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.001 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.0001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.001 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.001;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        if (filter) card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const commonConfig = {
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    };

    if (useWindowScroll) {
      const lenis = new Lenis(commonConfig);
      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        ...commonConfig,
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );
    
    const wrappers = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-wrapper')
        : scroller.querySelectorAll('.scroll-stack-wrapper')
    );

    cardsRef.current = cards;
    wrappersRef.current = wrappers.length ? wrappers : cards;

    const transformsCache = lastTransformsRef.current;
    const activeWrappers = wrappersRef.current;

    // Apply distance margins to the static wrappers instead of moving cards
    activeWrappers.forEach((wrapper, i) => {
      if (i < activeWrappers.length - 1) {
        wrapper.style.marginBottom = `${itemDistance}px`;
      }
    });

    cards.forEach((card) => {
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translate3d(0, 0, 0)';
      card.style.webkitTransform = 'translate3d(0, 0, 0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      wrappersRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms
  ]);

  const containerStyles = useWindowScroll
    ? {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'translate3d(0,0,0)',
        transform: 'translate3d(0,0,0)'
      }
    : {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        WebkitTransform: 'translate3d(0,0,0)',
        transform: 'translate3d(0,0,0)',
        willChange: 'scroll-position'
      };

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-stack-inner pt-[8vh]  pb-[20rem] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;