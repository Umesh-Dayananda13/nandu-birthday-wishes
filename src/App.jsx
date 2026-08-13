import React, { useEffect, useRef, useState } from 'react';
import userPhoto from './assets/WhatsApp Image 2026-08-13 at 3.45.27 PM.jpeg';
import childhood1 from './assets/childhood1.jpeg';
import childhood2 from './assets/childhood2.jpeg';

const App = () => {
  const confettiRef = useRef(null);
    const photoRef = useRef(null);
    const contentRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageError, setImageError] = useState({});
    const [contentTopPad, setContentTopPad] = useState(null);

  // Content data
  const content = {
    intro: `Hey Nandu! 🥰\nYour birthday deserved more than just a text. So I made you this little something. 😍\nOpen this → Sit back and just go with it :)`,
    howItStarted: `One random Snapchat request. That's literally how it started. No big introduction. No idea where it would go. Just one random request that somehow turned into 600+ days of you being a part of my life. Funny how some random things end up becoming important ♡`,
    days: `600+ days of knowing you. From random conversations to completely unnecessary talks, from silly moments to serious ones. Somehow 600+ days went by without even feeling like it and tbh I'm really glad they did.`,
    littleThings: [
      "Your sense of style",
      "Your personality",
      "The way you get excited about the little things",
      "How you overthink even the simplest things",
      "The way you care without making a big deal about it",
      "Your random side",
      "The way you're completely yourself with the people you're comfortable with",
    ],
    closing: `For your birthday I hope all those little things you've been wishing for actually happen — more reasons to smile, less overthinking, more memories to hold onto, and people who make you feel truly valued. You deserve all the good things Nandu. ♡ Happiest birthdayyyyy Nandu!! ❤️🥹`,
  };

  // Fallback images
  const getFallbackImage = (emoji) => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23f9a8d4'/%3E%3Ctext x='100' y='115' font-size='80' text-anchor='middle' fill='white' font-family='Segoe UI'%3E${encodeURIComponent(emoji)}%3C/text%3E%3C/svg%3E`;
  };

  // Colorful gradient themes for each page
  const pageColors = [
    { bg: 'linear-gradient(135deg, #fbcfe8, #fce7f3, #fdf2f8)', accent: '#ec4899' },
    { bg: 'linear-gradient(135deg, #e9d5ff, #fbcfe8, #fce7f3)', accent: '#8b5cf6' },
    { bg: 'linear-gradient(135deg, #bfdbfe, #cffafe, #e0f2fe)', accent: '#3b82f6' },
    { bg: 'linear-gradient(135deg, #c7d2fe, #e9d5ff, #fbcfe8)', accent: '#6366f1' },
    { bg: 'linear-gradient(135deg, #a7f3d0, #ccfbf1, #d1fae5)', accent: '#10b981' },
    { bg: 'linear-gradient(135deg, #fde68a, #fef08a, #fed7aa)', accent: '#f59e0b' },
    { bg: 'linear-gradient(135deg, #fecdd3, #fecaca, #fce7f3)', accent: '#f43f5e' },
  ];

  // Page definitions with images
  const pages = [
    {
      id: 'intro',
      title: '✨ 01 — Intro',
      content: content.intro,
      emoji: '✨',
      isText: true,
      showPhoto: true,
      photo: userPhoto,
      fallbackEmoji: '🌸',
      photoAlt: 'Nandu'
    },
    {
      id: 'childhood1',
      title: '👶 02 — Childhood Memories',
      content: 'Look at this adorable little Nandu! From a cute kid to the amazing person you are today. Some things never change - that beautiful smile has always been there! ✨',
      emoji: '👶',
      isText: true,
      showPhoto: true,
      photo: childhood1,
      fallbackEmoji: '🧒',
      photoAlt: 'Childhood photo 1'
    },
    {
      id: 'howItStarted',
      title: '💫 03 — How it started',
      content: content.howItStarted,
      emoji: '💫',
      isText: true,
      showPhoto: false
    },
    {
      id: 'childhood2',
      title: '🌟 04 — More Childhood Magic',
      content: 'Another precious moment from the past! You\'ve always had that special sparkle. Growing up beautifully, inside and out. 🌟',
      emoji: '🌟',
      isText: true,
      showPhoto: true,
      photo: childhood2,
      fallbackEmoji: '👧',
      photoAlt: 'Childhood photo 2'
    },
    {
      id: 'days',
      title: '💕 05 — 600+ days',
      content: content.days,
      emoji: '💕',
      isText: true,
      showPhoto: false
    },
    {
      id: 'littleThings',
      title: '💝 06 — Little things',
      content: content.littleThings,
      emoji: '💝',
      isText: false,
      isList: true,
      showPhoto: false
    },
    {
      id: 'final',
      title: '🎂 07 — Final',
      content: content.closing,
      emoji: '🎂',
      isText: true,
      showPhoto: false
    }
  ];

  // Confetti effect
  useEffect(() => {
    const container = confettiRef.current;
    if (!container) return;

    const emojis = ['🎉', '🎈', '💖', '✨', '🥳', '🌸', '🎀', '💕', '🎂', '🌟', '🪅', '🌈', '⭐', '🎊'];
    const count = currentPage === pages.length - 1 ? 50 : 25;

    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      const left = Math.random() * 100;
      const delay = (Math.random() * 5).toFixed(2);
      const size = 16 + Math.floor(Math.random() * 24);
      const duration = (6 + Math.random() * 10).toFixed(2);
      const opacity = 0.5 + Math.random() * 0.5;

      el.style.left = left + '%';
      el.style.animationDelay = delay + 's';
      el.style.fontSize = size + 'px';
      el.style.animationDuration = duration + 's';
      el.style.opacity = opacity;
      el.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;

      fragment.appendChild(el);
    }

    container.appendChild(fragment);

    return () => {
      container.innerHTML = '';
    };
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const currentPageData = pages[currentPage];
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;
  const colorTheme = pageColors[currentPage % pageColors.length];

  // Handle image errors
  const handleImageError = (pageId) => {
    setImageError(prev => ({ ...prev, [pageId]: true }));
  };

  // Get image source with fallback
  const getImageSrc = (page) => {
    if (imageError[page.id] || !page.photo) {
      return getFallbackImage(page.fallbackEmoji || '🌸');
    }
    return page.photo;
  };

  const hasPhoto = currentPageData.showPhoto;

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px 16px',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 20% 30%, #fff0f5, #fce4ec 80%)',
      fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, sans-serif"
    },
    backgroundBlobs: {
      position: 'absolute',
      inset: 0,
      opacity: 0.3
    },
    blob1: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '256px',
      height: '256px',
      background: '#f9a8d4',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(72px)',
      animation: 'pulse 3s ease-in-out infinite'
    },
    blob2: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '256px',
      height: '256px',
      background: '#c084fc',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(72px)',
      animation: 'pulse 3s ease-in-out infinite 2s'
    },
    blob3: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '384px',
      height: '384px',
      background: '#93c5fd',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(72px)',
      animation: 'pulse 3s ease-in-out infinite 4s'
    },
    mainCard: {
      width: '100%',
      maxWidth: '448px',
      position: 'relative',
      zIndex: 10,
      background: 'rgba(255, 255, 255, 0.12)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '20px 24px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 25px 60px -20px rgba(219, 39, 119, 0.25), 0 10px 30px -10px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
      minHeight: '480px',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.5s ease',
      opacity: isTransitioning ? 0 : 1,
      transform: isTransitioning ? 'scale(0.95)' : 'scale(1)'
    },
    progressContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      flexShrink: 0
    },
    progressDots: {
      display: 'flex',
      gap: '6px'
    },
    progressDot: (index) => ({
      height: '8px',
      borderRadius: '9999px',
      transition: 'all 0.5s ease',
      width: index === currentPage ? '24px' : '10px',
      background: index === currentPage 
        ? 'linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6)' 
        : 'rgba(236, 72, 153, 0.2)',
      boxShadow: index === currentPage ? '0 0 10px rgba(236, 72, 153, 0.3)' : 'none'
    }),
    progressText: {
      fontSize: '10px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    photoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '28px',
      flexShrink: 0,
      animation: 'fadeIn 0.5s ease-out'
    },
    photoWrapper: {
      position: 'relative',
      width: '176px',
      height: '176px',
      zIndex: 6,
      marginTop: '0'
    },
    photoGlow: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f472b6, #8b5cf6, #3b82f6)',
      filter: 'blur(32px)',
      transform: 'scale(1.1)',
      opacity: 0.7,
      transition: 'opacity 0.5s ease'
    },
    photoBorder: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #f472b6, #8b5cf6, #3b82f6)',
      padding: '4px'
    },
    photoInner: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'white',
      padding: '2px',
      overflow: 'hidden'
    },
    photo: {
      width: '176px',
      height: '176px',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 0 0 2px rgba(255,255,255,0.5)',
      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    titleContainer: {
      textAlign: 'center',
      animation: 'fadeIn 0.5s ease-out'
    },
    mainTitle: {
      fontSize: '24px',
      fontWeight: '900',
      lineHeight: 1.2,
      background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    mainTitleHeart: {
      background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      marginLeft: '4px',
      animation: 'pulse 2s ease-in-out infinite'
    },
    subtitle: {
      fontSize: '11px',
      color: '#4b5563',
      fontWeight: '500',
      marginTop: '4px'
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      justifyContent: 'center',
      marginTop: '10px'
    },
    tag: (gradient, color) => ({
      background: gradient,
      color: color,
      fontSize: '0.6rem',
      padding: '4px 10px',
      borderRadius: '9999px',
      border: '1px solid rgba(236, 72, 153, 0.2)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }),
    contentContainer: {
      position: 'relative',
      zIndex: 20,
      flex: 1,
      overflowY: 'auto',
      padding: '8px 0'
    },
    contentWrapper: {
      animation: 'fadeIn 0.5s ease-out'
    },
    pageTitle: {
      fontSize: '20px',
      fontWeight: '700',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#be185d'
    },
    pageEmoji: {
      fontSize: '24px',
      color: '#ec4899'
    },
    pageTitleText: {
      fontSize: '16px',
      color: '#be185d'
    },
    contentText: {
      marginTop: '12px',
      color: '#374151',
      fontSize: '14px',
      lineHeight: 1.7,
      whiteSpace: 'pre-line'
    },
    contentCard: {
      position: 'relative',
      padding: '16px',
      background: 'rgba(255,255,255,0.4)',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.3)',
      backdropFilter: 'blur(8px)'
    },
    listContainer: {
      marginTop: '12px'
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      padding: '4px 0',
      color: '#374151',
      fontSize: '14px',
      cursor: 'default',
      transition: 'all 0.3s ease'
    },
    listBullet: {
      color: '#f472b6',
      fontSize: '12px',
      marginTop: '2px'
    },
    specialItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      marginTop: '12px',
      padding: '12px',
      background: 'linear-gradient(135deg, #fdf2f8, #faf5ff)',
      borderRadius: '12px',
      border: '1px solid rgba(236, 72, 153, 0.1)'
    },
    specialStar: {
      color: '#fbbf24',
      fontSize: '14px'
    },
    specialText: {
      fontWeight: '600',
      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    finalMessage: {
      marginTop: '16px',
      padding: '16px',
      background: 'linear-gradient(135deg, #fce7f3, #fecdd3, #faf5ff)',
      borderRadius: '16px',
      border: '1px solid rgba(236, 72, 153, 0.15)',
      textAlign: 'center',
      boxShadow: '0 8px 25px -8px rgba(236, 72, 153, 0.15)'
    },
    finalEmoji: {
      fontSize: '36px',
      marginBottom: '8px',
      animation: 'bounce 1s ease-in-out infinite'
    },
    finalText: {
      fontWeight: '700',
      fontSize: '16px',
      background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    finalConfetti: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '8px'
    },
    finalConfettiItem: {
      fontSize: '20px',
      animation: 'pulse 1s ease-in-out infinite'
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '12px',
      paddingTop: '12px',
      borderTop: '1px solid rgba(255,255,255,0.2)',
      flexShrink: 0
    },
    navButton: (disabled, gradient) => ({
      padding: '8px 16px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      background: disabled ? 'rgba(200,200,200,0.1)' : gradient,
      color: disabled ? '#999' : '#be185d',
      border: '1px solid rgba(244, 114, 182, 0.2)',
      minWidth: '60px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.3 : 1
    }),
    navCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    navText: {
      fontSize: '10px',
      fontWeight: '500',
      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      maxWidth: '100px'
    },
    navLine: {
      width: '32px',
      height: '2px',
      background: 'linear-gradient(135deg, #f472b6, #a78bfa)',
      borderRadius: '9999px',
      marginTop: '4px',
      animation: 'pulse 2s ease-in-out infinite'
    },
    signature: {
      marginTop: '8px',
      textAlign: 'center',
      fontSize: '9px',
      fontStyle: 'italic',
      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      flexShrink: 0,
      animation: 'pulse 2s ease-in-out infinite'
    },
    floatingDecor: {
      position: 'fixed',
      fontSize: '24px',
      opacity: 0.2
    }
  };

  // Ensure content is pushed below the photo when a photo is present (use enough space for larger heart)
  styles.contentContainer.paddingTop = contentTopPad !== null ? `${contentTopPad}px` : (hasPhoto ? '220px' : '8px');

  // Add CSS animations
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes drop {
        0% { transform: translateY(-10vh) rotate(0deg) scale(0.7); opacity: 0.9; }
        100% { transform: translateY(110vh) rotate(720deg) scale(1.3); opacity: 0.1; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.7; }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .confetti-container span {
        position: absolute;
        top: -30px;
        display: inline-block;
        animation: drop linear infinite;
        filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.05));
        will-change: transform, opacity;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      button:hover:not(:disabled) {
        transform: scale(1.05);
      }
      button:active:not(:disabled) {
        transform: scale(0.92) !important;
      }
      .photo-hover:hover {
        transform: scale(1.08) rotate(-3deg) !important;
      }
      .list-item-hover:hover {
        transform: translateX(4px);
        color: #ec4899;
      }
      .list-item-hover:hover .list-bullet {
        transform: scale(1.2);
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Measure photo and adjust content padding so text is always visible
  useEffect(() => {
    function updatePadding() {
      if (hasPhoto && photoRef.current) {
        const h = photoRef.current.offsetHeight || 176;
        // add extra buffer
        setContentTopPad(h + 56);
      } else {
        setContentTopPad(8);
      }
    }

    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, [hasPhoto, currentPage]);

  return (
    <div style={styles.container}>
      {/* Animated Background Blobs */}
      <div style={styles.backgroundBlobs}>
        <div style={styles.blob1}></div>
        <div style={styles.blob2}></div>
        <div style={styles.blob3}></div>
      </div>

      {/* Confetti Container */}
      <div 
        ref={confettiRef} 
        className="confetti-container" 
        aria-hidden="true" 
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 50
        }}
      />

      {/* Floating Decorations */}
      <div style={{ ...styles.floatingDecor, left: '16px', bottom: '32px', animation: 'bounce 3s ease-in-out infinite' }}>🌸</div>
      <div style={{ ...styles.floatingDecor, right: '16px', top: '32px', animation: 'bounce 4s ease-in-out infinite 1s' }}>🎀</div>
      <div style={{ ...styles.floatingDecor, left: '32px', top: '25%', fontSize: '20px', opacity: 0.15, animation: 'pulse 2s ease-in-out infinite' }}>✨</div>
      <div style={{ ...styles.floatingDecor, right: '32px', bottom: '25%', fontSize: '20px', opacity: 0.15, animation: 'pulse 3s ease-in-out infinite 1s' }}>⭐</div>

      {/* Main Card */}
      <main style={styles.mainCard}>
        {/* Progress indicator */}
        <div style={styles.progressContainer}>
          <div style={styles.progressDots}>
            {pages.map((_, index) => (
              <div key={index} style={styles.progressDot(index)} />
            ))}
          </div>
          <span style={styles.progressText}>
            {currentPage + 1}/{pages.length}
          </span>
        </div>

        {/* Header: Photo (if page has one) */}
        {hasPhoto && (
          <div style={styles.photoContainer}>
            <div style={styles.photoWrapper} ref={photoRef}>
              <div style={styles.photoGlow}></div>
              <div style={styles.photoBorder}>
                <div style={styles.photoInner}>
                  <img
                    src={getImageSrc(currentPageData)}
                    alt={currentPageData.photoAlt || "Nandu"}
                    style={styles.photo}
                    className="photo-hover"
                    onError={() => handleImageError(currentPageData.id)}
                  />
                </div>
              </div>
            </div>
            {isFirstPage && (
              <div style={styles.titleContainer}>
                <h1 style={styles.mainTitle}>
                  Happy Birthday <br style={{ display: 'block' }} /> Nandu
                  <span style={styles.mainTitleHeart}>♡</span>
                </h1>
                <p style={styles.subtitle}>✦ a little surprise, page by page</p>
                <div style={styles.tags}>
                  <span style={styles.tag('linear-gradient(135deg, #fce7f3, #fecdd3)', '#be185d')}>🎈 600+ days</span>
                  <span style={styles.tag('linear-gradient(135deg, #faf5ff, #fce7f3)', '#7c3aed')}>💖 special</span>
                  <span style={styles.tag('linear-gradient(135deg, #e0f2fe, #dbeafe)', '#1d4ed8')}>🌟 amazing</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Page Content */}
        <div className="scrollbar-hide" style={styles.contentContainer} ref={contentRef}>
          <div style={styles.contentWrapper}>
            {/* Title */}
            <h2 style={styles.pageTitle}>
              <span style={styles.pageEmoji}>{currentPageData.emoji}</span>
              <span style={styles.pageTitleText}>{currentPageData.title}</span>
            </h2>

            {/* Content */}
            {currentPageData.isList ? (
              <div style={styles.listContainer}>
                {currentPageData.content.map((item, index) => (
                  <div key={index} style={styles.listItem} className="list-item-hover">
                    <span style={styles.listBullet} className="list-bullet">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
                <div style={styles.specialItem}>
                  <span style={styles.specialStar}>☆</span>
                  <span style={styles.specialText}>
                    You don't have to try to be special — you just are.
                  </span>
                </div>
              </div>
            ) : (
              <div style={styles.contentCard}>
                <p style={styles.contentText}>
                  {currentPageData.content}
                </p>
                <div style={{ position: 'absolute', top: '-4px', right: '-4px', fontSize: '24px', opacity: 0.2 }}>✨</div>
              </div>
            )}

            {/* Special message on last page */}
            {isLastPage && (
              <div style={styles.finalMessage}>
                <div style={styles.finalEmoji}>🎂</div>
                <p style={styles.finalText}>
                  Happiest birthdayyyyy Nandu!! ❤️🥹
                </p>
                <div style={styles.finalConfetti}>
                  <span style={styles.finalConfettiItem}>🎉</span>
                  <span style={styles.finalConfettiItem}>🎈</span>
                  <span style={styles.finalConfettiItem}>🎊</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={styles.navigation}>
          <button
            onClick={prevPage}
            disabled={isFirstPage}
            style={styles.navButton(isFirstPage, 'linear-gradient(135deg, rgba(244, 114, 182, 0.15), rgba(139, 92, 246, 0.15))')}
            onMouseEnter={(e) => {
              if (!isFirstPage) {
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isFirstPage) {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            ← Back
          </button>

          <div style={styles.navCenter}>
            <span style={styles.navText}>
              {isLastPage ? '🎉 The End 🎉' : '💫 tap to continue →'}
            </span>
            {!isLastPage && <div style={styles.navLine}></div>}
          </div>

          <button
            onClick={nextPage}
            disabled={isLastPage}
            style={styles.navButton(isLastPage, 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(244, 114, 182, 0.15))')}
            onMouseEnter={(e) => {
              if (!isLastPage) {
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLastPage) {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            Next →
          </button>
        </div>

        {/* Signature */}
        {isFirstPage && (
          <div style={styles.signature}>
            💌 tap "Next" to begin the surprise
          </div>
        )}
      </main>
    </div>
  );
};

export default App;