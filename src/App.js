import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import logo from "./assests/logo.png";

/* ═══════════════════════════════════════════════════════
   GLOBAL STYLES INJECTED INTO HEAD
═══════════════════════════════════════════════════════ */
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
      :root{
        --c1:#7c3aed;--c1l:#a78bfa;--c1ll:#ddd6fe;
        --c2:#06b6d4;--c2l:#67e8f9;
        --c3:#f59e0b;--c3l:#fcd34d;
        --c4:#ec4899;--c4l:#f9a8d4;
        --bg:#05050f;--bg2:#08081a;--bg3:#0f0f25;
        --card:rgba(255,255,255,0.025);
        --border:rgba(255,255,255,0.07);
        --text:#e8e6f3;--muted:rgba(232,230,243,0.62);
        --muted2:rgba(232,230,243,0.45);
      }
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      html{
        scroll-behavior:smooth;
        overflow-x:hidden;
        /* Keep anchor targets visible below fixed navbar */
        scroll-padding-top:84px;
      }
      body{
        background:var(--bg);color:var(--text);
        font-family:'Outfit',sans-serif;
        overflow-x:hidden;
        max-width:100vw;
      }
      ::-webkit-scrollbar{width:5px}
      ::-webkit-scrollbar-track{background:var(--bg2)}
      ::-webkit-scrollbar-thumb{background:linear-gradient(to bottom,var(--c1),var(--c2));border-radius:999px}
      ::selection{background:rgba(124,58,237,0.35);color:#fff}
      a{color:inherit;text-decoration:none}
      button{cursor:pointer;border:none;background:none;font-family:'Outfit',sans-serif}
      a,button,input,textarea,select{font:inherit}
      :focus-visible{outline:2px solid rgba(167,139,250,0.85);outline-offset:3px;border-radius:10px}
      img{max-width:100%;display:block}
      #root{
        overflow-x:hidden;
      }
      section[id]{scroll-margin-top:84px}

      @media (prefers-reduced-motion: reduce){
        html{scroll-behavior:auto}
        *,*::before,*::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}
      }

      @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
      @keyframes floatSlow{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-20px) rotate(3deg)}}
      @keyframes glow{0%,100%{box-shadow:0 0 20px rgba(124,58,237,0.4),0 0 40px rgba(6,182,212,0.2)}50%{box-shadow:0 0 50px rgba(124,58,237,0.7),0 0 90px rgba(6,182,212,0.35),0 0 130px rgba(124,58,237,0.15)}}
      @keyframes glowCyan{0%,100%{box-shadow:0 0 15px rgba(6,182,212,0.4)}50%{box-shadow:0 0 40px rgba(6,182,212,0.8),0 0 80px rgba(6,182,212,0.3)}}
      @keyframes auroraShift{
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
      }
      @keyframes borderRun{
        0%{background-position:0% 50%}
        100%{background-position:400% 50%}
      }
      @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      @keyframes slideUp{from{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}
      @keyframes slideLeft{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}
      @keyframes scaleIn{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}}
      @keyframes spin{to{transform:rotate(360deg)}}
      @keyframes spinReverse{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}
      @keyframes morphBg{
        0%{border-radius:60% 40% 70% 30%/50% 60% 40% 70%}
        50%{border-radius:40% 60% 30% 70%/60% 40% 70% 30%}
        100%{border-radius:60% 40% 70% 30%/50% 60% 40% 70%}
      }
      @keyframes shimmer{
        from{background-position:-200% center}
        to{background-position:200% center}
      }
      @keyframes shimmerText{
        0%{background-position:0% 50%}
        100%{background-position:200% 50%}
      }
      @keyframes ripple{to{transform:scale(4.5);opacity:0}}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      @keyframes pulseRing{
        0%{transform:scale(1);opacity:0.8}
        100%{transform:scale(2.2);opacity:0}
      }
      @keyframes aurораBlob{
        0%,100%{transform:translate(0,0) scale(1)}
        33%{transform:translate(40px,-30px) scale(1.1)}
        66%{transform:translate(-30px,20px) scale(0.95)}
      }
      @keyframes dash{to{stroke-dashoffset:0}}
      @keyframes letterDrop{
        0%{opacity:0;transform:translateY(-40px) rotateX(-90deg) scale(0.5);filter:blur(8px)}
        60%{opacity:1;transform:translateY(4px) rotateX(6deg) scale(1.04);filter:blur(0)}
        100%{opacity:1;transform:translateY(0) rotateX(0) scale(1);filter:blur(0)}
      }
      @keyframes letterGlow{
        0%,100%{text-shadow:0 0 20px rgba(124,58,237,0.6),0 0 40px rgba(6,182,212,0.3)}
        50%{text-shadow:0 0 40px rgba(167,139,250,1),0 0 80px rgba(6,182,212,0.6),0 0 120px rgba(124,58,237,0.4)}
      }
      @keyframes haloPulse{
        0%{transform:scale(1);opacity:0.7;box-shadow:0 0 0 0 rgba(124,58,237,0.6)}
        50%{transform:scale(1.018);opacity:1;box-shadow:0 0 40px 12px rgba(124,58,237,0.25),0 0 80px 24px rgba(6,182,212,0.12)}
        100%{transform:scale(1);opacity:0.7;box-shadow:0 0 0 0 rgba(124,58,237,0.6)}
      }
      @keyframes scanLight{
        0%{background-position:-200% center}
        100%{background-position:300% center}
      }
      @keyframes orbitPing{
        0%{transform:scale(1);opacity:1}
        100%{transform:scale(2.6);opacity:0}
      }
      @keyframes glitch{
        0%{clip-path:inset(40% 0 61% 0);transform:translate(-3px,0)}
        20%{clip-path:inset(92% 0 1% 0);transform:translate(3px,0)}
        40%{clip-path:inset(43% 0 1% 0);transform:translate(-3px,0)}
        60%{clip-path:inset(25% 0 58% 0);transform:translate(3px,0)}
        80%{clip-path:inset(54% 0 7% 0);transform:translate(-3px,0)}
        100%{clip-path:inset(58% 0 43% 0);transform:translate(0)}
      }
      @keyframes neonPulse{
        0%,100%{text-shadow:0 0 10px rgba(124,58,237,0.8),0 0 30px rgba(124,58,237,0.5),0 0 60px rgba(124,58,237,0.3)}
        50%{text-shadow:0 0 20px rgba(167,139,250,1),0 0 50px rgba(124,58,237,0.8),0 0 100px rgba(6,182,212,0.4)}
      }
      @keyframes scanline{
        0%{transform:translateY(-100%)}
        100%{transform:translateY(100vh)}
      }
      @keyframes gradientBorder{
        0%,100%{border-color:rgba(124,58,237,0.6)}
        50%{border-color:rgba(6,182,212,0.6)}
      }

      .reveal{opacity:0;transform:translateY(35px);transition:opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)}
      .reveal.visible{opacity:1;transform:translateY(0)}
      .reveal-left{opacity:0;transform:translateX(-40px);transition:opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)}
      .reveal-left.visible{opacity:1;transform:translateX(0)}
      .reveal-right{opacity:0;transform:translateX(40px);transition:opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)}
      .reveal-right.visible{opacity:1;transform:translateX(0)}
      .reveal-scale{opacity:0;transform:scale(0.9);transition:opacity 0.7s cubic-bezier(0.16,1,0.3,1),transform 0.7s cubic-bezier(0.16,1,0.3,1)}
      .reveal-scale.visible{opacity:1;transform:scale(1)}
      .hide-desktop{display:none!important}

      .glass-card{
        background:rgba(13,13,37,0.6);
        backdrop-filter:blur(20px) saturate(180%);
        -webkit-backdrop-filter:blur(20px) saturate(180%);
        border:1px solid rgba(124,58,237,0.15);
        box-shadow:0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.05);
      }
      .aurora-text{
        background:linear-gradient(135deg,#a78bfa,#67e8f9,#fcd34d,#f9a8d4,#a78bfa);
        background-size:300% 300%;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        animation:auroraShift 6s ease infinite;
      }

      @media(max-width:768px){
        .hide-mobile{display:none!important}
        .hide-desktop{display:flex!important}
        html{scroll-padding-top:112px}
        section[id]{scroll-margin-top:112px}
        .nav-main{height:auto!important;min-height:64px!important;padding:0.35rem 0!important}
        .nav-shell{padding:0 0.9rem!important;row-gap:0.45rem!important}
        .nav-logo{font-size:1.35rem!important}
        .nav-links{width:100%!important;justify-content:center!important;gap:0.15rem!important}
        .nav-link-item{padding:0.3rem 0.5rem!important;font-size:0.78rem!important}
        .stack-mobile{flex-direction:column!important;align-items:stretch!important}
        .grid-1-mobile{grid-template-columns:1fr!important;gap:3rem!important;}
        .hero-grid{display:flex!important;flex-direction:column-reverse!important;text-align:center;gap:2.5rem!important;padding-top:2.5rem!important;}
        .hero-content{align-items:center!important; display:flex; flex-direction:column;}
        .hero-btns{justify-content:center!important;}
        .hero-tech-container{justify-content:center!important;}
        .modal-content{padding:1.5rem!important;max-height:85vh!important;}
        .nav-container{padding-left:1.25rem!important;padding-right:1.25rem!important;}
        .avatar-container{width:200px!important;height:200px!important;margin:0 auto!important;}
        .facts-grid{grid-template-columns:1fr!important;}
        .stats-grid{grid-template-columns:1fr!important;gap:1.25rem!important;}
        .footer-container{flex-direction:column!important;gap:1.25rem!important;text-align:center;}
        .footer-links{justify-content:center!important;width:100%!important;flex-wrap:wrap!important;}
        #hero{padding-top:90px!important;}
      }

      @media(max-width:480px){
        html{scroll-padding-top:10px}
        section[id]{scroll-margin-top:10px}
        .nav-shell{padding:0 0.65rem!important}
        .nav-logo{font-size:1.18rem!important}
        .nav-link-item{padding:0.26rem 0.42rem!important;font-size:0.72rem!important}
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

/* ═══════════════════════════════════════════════════════
   TEXT SCRAMBLE HOOK
═══════════════════════════════════════════════════════ */
const useScramble = (text, trigger = true) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*<>?/\\|{}[]~ABCDEFabcdef0123456789";
  useEffect(() => {
    if (!trigger) return;
    let iter = 0; const total = text.length * 3;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((c, i) => {
        if (c === " ") return " ";
        if (i < iter / 3) return c;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      iter++;
      if (iter > total) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text, trigger]);
  return display;
};

/* ═══════════════════════════════════════════════════════
   TYPEWRITER
═══════════════════════════════════════════════════════ */
const Typewriter = ({ phrases }) => {
  const [text, setText] = useState("");
  const [phIdx, setPhIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const phrase = phrases[phIdx];
    const delay = deleting ? 50 : charIdx === phrase.length ? 1800 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < phrase.length) { setText(phrase.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }
        else setDeleting(true);
      } else {
        if (charIdx > 0) { setText(phrase.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }
        else { setDeleting(false); setPhIdx(i => (i + 1) % phrases.length); }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, charIdx, phIdx, phrases]);

  return (
    <span style={{
      background: "linear-gradient(90deg,#a78bfa,#67e8f9,#a78bfa)",
      backgroundSize: "200% 100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "shimmerText 3s linear infinite",
    }}>
      {text}
      <span style={{
        animation: "blink 1s infinite", display: "inline-block", marginLeft: 2,
        background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>|</span>
    </span>
  );
};

/* ═══════════════════════════════════════════════════════
   MAGNETIC BUTTON
═══════════════════════════════════════════════════════ */
const MagButton = ({ children, style = {}, onClick, href, primary }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };
  const onMouseLeave = () => { setPos({ x: 0, y: 0 }); setHovered(false); };
  const onMouseEnter = () => setHovered(true);
  const handleClick = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const id = Date.now();
    setRipples(r => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 600);
    if (onClick) onClick(e);
  };

  const baseStyle = {
    position: "relative", overflow: "hidden", display: "inline-flex", alignItems: "center", gap: "0.5rem",
    padding: "0.75rem 1.75rem", borderRadius: "10px", fontFamily: "'Outfit',sans-serif",
    fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.03em", cursor: "pointer",
    transform: `translate(${pos.x}px,${pos.y}px)`,
    transition: `transform 0.25s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.35s ease`,
    ...(primary ? {
      background: hovered
        ? "linear-gradient(135deg,#8b5cf6,#06b6d4)"
        : "linear-gradient(135deg,#7c3aed,#0891b2)",
      color: "#fff",
      boxShadow: hovered
        ? "0 0 35px rgba(124,58,237,0.6),0 0 70px rgba(6,182,212,0.25),0 8px 24px rgba(0,0,0,0.4)"
        : "0 0 20px rgba(124,58,237,0.3),0 4px 16px rgba(0,0,0,0.3)",
      border: "1px solid rgba(167,139,250,0.3)",
    } : {
      background: hovered ? "rgba(124,58,237,0.1)" : "transparent",
      color: hovered ? "#a78bfa" : "#e2e0f0",
      border: `1.5px solid ${hovered ? "rgba(124,58,237,0.6)" : "rgba(255,255,255,0.12)"}`,
      boxShadow: hovered ? "0 0 24px rgba(124,58,237,0.15) inset,0 0 24px rgba(124,58,237,0.08)" : "none",
    }),
    ...style,
  };

  const Tag = href ? "a" : "button";
  return (
    <Tag ref={ref} href={href} style={baseStyle}
      onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter} onClick={handleClick}
    >
      {ripples.map(r => (
        <span key={r.id} style={{
          position: "absolute", left: r.x, top: r.y, width: 10, height: 10,
          background: "rgba(167,139,250,0.5)", borderRadius: "50%",
          animation: "ripple 0.6s ease-out forwards",
          transform: "translate(-50%,-50%)", pointerEvents: "none",
        }} />
      ))}
      {children}
    </Tag>
  );
};

/* ═══════════════════════════════════════════════════════
   3D TILT CARD
═══════════════════════════════════════════════════════ */
const TiltCard = ({ children, style = {} }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * 18, y: (x - 0.5) * -18 });
    setGlow({ x: x * 100, y: y * 100 });
  };

  return (
    <div ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.04 : 1})`,
        transition: "transform 0.08s ease,box-shadow 0.4s ease",
        position: "relative",
        boxShadow: hovered
          ? "0 30px 70px rgba(0,0,0,0.6),0 0 40px rgba(124,58,237,0.12)"
          : "0 8px 32px rgba(0,0,0,0.35)",
        ...style,
      }}
    >
      {hovered && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: "inherit",
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%,rgba(124,58,237,0.12),rgba(6,182,212,0.06) 40%,transparent 65%)`,
          pointerEvents: "none", zIndex: 1,
        }} />
      )}
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════════════ */
const Counter = ({ to, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * to));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ═══════════════════════════════════════════════════════
   ANIMATED SKILL BAR
═══════════════════════════════════════════════════════ */
const SkillBar = ({ name, pct, color = "#0ff4c6", delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setWidth(pct), delay);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct, delay]);

  return (
    <div ref={ref} style={{ marginBottom: "1.1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem", fontSize: "0.88rem" }}>
        <span style={{ fontWeight: 600, color: "#e2e0f0" }}>{name}</span>
        <span style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: "0.78rem",
          color: color, opacity: 0.9,
        }}>{pct}%</span>
      </div>
      <div style={{ height: 7, background: "rgba(255,255,255,0.05)", borderRadius: 999, overflow: "hidden", position: "relative" }}>
        <div style={{
          height: "100%", borderRadius: 999,
          background: `linear-gradient(90deg,${color}cc,${color})`,
          width: `${width}%`, transition: "width 1.5s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: `0 0 16px ${color}88,0 0 4px ${color}`,
          position: "relative",
        }}>
          {/* Shimmer */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 999,
            background: "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.25) 50%,transparent 100%)",
            backgroundSize: "200% 100%",
            animation: width > 0 ? "shimmer 2s infinite" : "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: "50%", transform: "translate(50%,-50%)",
            width: 13, height: 13, borderRadius: "50%", background: color,
            boxShadow: `0 0 10px ${color},0 0 20px ${color}66`,
            opacity: width > 0 ? 1 : 0, transition: "opacity 0.3s",
          }} />
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   SECTION TITLE (with scramble)
═══════════════════════════════════════════════════════ */
const SectionTitle = ({ label, title, desc }) => {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);
  const scrambled = useScramble(title, vis);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.6rem",
        fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        marginBottom: "0.85rem",
      }}>
        <span style={{
          display: "inline-block", width: 28, height: 1.5,
          background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
          borderRadius: 999,
        }} />
        {label}
        <span style={{
          display: "inline-block", width: 28, height: 1.5,
          background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
          borderRadius: 999,
        }} />
      </div>
      <h2 style={{
        fontFamily: "'Bebas Neue',cursive", fontSize: "clamp(2.5rem,5vw,4.2rem)",
        letterSpacing: "0.04em", lineHeight: 1, marginBottom: "1rem",
        background: "linear-gradient(135deg,#ffffff 30%,#a78bfa 65%,#67e8f9)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        opacity: vis ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}>
        {scrambled}
      </h2>
      {desc && <p style={{ color: "rgba(226,224,240,0.5)", maxWidth: 540, fontSize: "1.05rem", lineHeight: 1.75 }}>{desc}</p>}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════ */
const Modal = ({ data, onClose }) => {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div onClick={(e) => e.target === e.currentTarget && onClose()} style={{
      position: "fixed", inset: 0, zIndex: 500,
      background: "rgba(3,3,15,0.9)", backdropFilter: "blur(16px) saturate(150%)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem",
      animation: "fadeIn 0.25s ease",
    }}>
      <div className="modal-content" style={{
        background: "linear-gradient(135deg,rgba(13,13,35,0.98),rgba(8,8,28,0.98))",
        border: "1px solid rgba(124,58,237,0.25)",
        borderRadius: 20, maxWidth: 700, width: "100%", maxHeight: "90vh",
        overflowY: "auto", padding: "2.5rem", position: "relative",
        animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8),0 0 60px rgba(124,58,237,0.1),inset 0 1px 0 rgba(255,255,255,0.05)",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: "1.25rem", right: "1.25rem",
          width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.1)", color: "var(--muted2)", fontSize: "1rem", cursor: "pointer",
          transition: "all 0.25s", background: "rgba(255,255,255,0.03)",
        }}
          onMouseEnter={e => { e.target.style.borderColor = "#a78bfa"; e.target.style.color = "#a78bfa"; e.target.style.background = "rgba(124,58,237,0.1)"; e.target.style.boxShadow = "0 0 16px rgba(124,58,237,0.3)"; }}
          onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.color = "var(--muted2)"; e.target.style.background = "rgba(255,255,255,0.03)"; e.target.style.boxShadow = "none"; }}
        >✕</button>

        <div style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem",
          background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem",
        }}>
          {data.stack}
        </div>
        <h2 style={{
          fontFamily: "'Bebas Neue',cursive", fontSize: "2.5rem", letterSpacing: "0.04em", marginBottom: "0.3rem",
          background: "linear-gradient(135deg,#fff 40%,#a78bfa)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>{data.title}</h2>
        <p style={{ color: "rgba(226,224,240,0.4)", fontSize: "0.9rem", marginBottom: "1.75rem" }}>{data.subtitle}</p>

        {data.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: "1.4rem" }}>
            <h3 style={{
              fontFamily: "'Outfit',sans-serif", fontSize: "0.95rem", fontWeight: 700,
              background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              marginBottom: "0.5rem", letterSpacing: "0.03em",
            }}>{s.heading}</h3>
            {s.code ? (
              <pre style={{
                background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.18)",
                borderRadius: 10, padding: "1rem", fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.8rem", color: "#a78bfa", overflowX: "auto", lineHeight: 1.6,
              }}>{s.content}</pre>
            ) : (
              <p style={{ color: "rgba(226,224,240,0.6)", fontSize: "0.92rem", lineHeight: 1.75 }}>{s.content}</p>
            )}
          </div>
        ))}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
          {data.demo && <MagButton primary href={data.demo}>↗ Live Demo</MagButton>}
          <MagButton href={data.github}>⌥ Source Code</MagButton>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════ */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];
  return (
    <>
      <nav
  className="nav-main"
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    height: scrolled ? 58 : 70,
    background: scrolled ? "rgba(3,3,15,0.88)" : "transparent",
    backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
    borderBottom: scrolled
      ? "1px solid rgba(124,58,237,0.12)"
      : "1px solid transparent",
    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
    display: "flex",
    alignItems: "center",
    boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
  }}
>
  <div
    className="nav-shell"
    style={{
      width: "min(1200px,100%)",
      marginInline: "auto",
      padding: "0 clamp(1rem,4vw,2rem)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      rowGap: "6px",
    }}
  >
    
    {/* LOGO */}
    <a
      className="nav-logo"
      href="#hero"
      style={{
        fontFamily: "'Bebas Neue',cursive",
        fontSize: "1.7rem",
        letterSpacing: "0.08em",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      Portfolio
      <span
        style={{
          background: "linear-gradient(135deg,#a78bfa,#67e8f9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "2rem",
          lineHeight: 1,
        }}
      >
        .
      </span>
    </a>

    {/* NAV LINKS */}
    <div
      className="nav-links"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.2rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {links.map((l) => (
        <a
          className="nav-link-item"
          key={l}
          href={`#${l.toLowerCase()}`}
          style={{
            padding: "0.35rem 0.7rem",
            borderRadius: 8,
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "rgba(226,224,240,0.55)",
            transition: "all 0.25s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#fff";
            e.target.style.background = "rgba(124,58,237,0.1)";
            e.target.style.boxShadow =
              "inset 0 0 0 1px rgba(124,58,237,0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "rgba(226,224,240,0.55)";
            e.target.style.background = "transparent";
            e.target.style.boxShadow = "none";
          }}
        >
          {l}
        </a>
      ))}
    </div>
  </div>
</nav>
    </>
  );
};

/* ═══════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════ */
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const techStack = [
    { name: "C", color: "#5c9bd6" },
    { name: "Java", color: "#f89820" }, { name: "Python", color: "#3776ab" },
    { name: "HTML", color: "#e34f26" }, { name: "CSS", color: "#1572b6" },
    { name: "JavaScript", color: "#f7df1e" }, { name: "Git", color: "#f05032" },
    { name: "React", color: "#61dafb" }, { name: "Node.js", color: "#339933" },
  ];

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "70px" }}>
      {/* Aurora ambient orbs */}
      <div style={{ position: "absolute", top: "-5%", left: "55%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.1),rgba(6,182,212,0.04) 40%,transparent 70%)", pointerEvents: "none", animation: "float 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "60%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle,rgba(236,72,153,0.07),rgba(124,58,237,0.04) 40%,transparent 70%)", pointerEvents: "none", animation: "float 10s ease-in-out infinite 2s" }} />
      <div style={{ position: "absolute", top: "40%", left: "30%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.05),transparent 70%)", pointerEvents: "none", animation: "float 7s ease-in-out infinite 1s" }} />

      <div className="hero-grid" style={{ position: "relative", zIndex: 1, width: "min(1200px,100%)", marginInline: "auto", padding: "0 clamp(1.25rem,4vw,3rem)", display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
        <div className="hero-content">
          {/* Badge
          <div style={{
            display:"inline-flex",alignItems:"center",gap:"0.5rem",
            padding:"0.3rem 0.9rem",borderRadius:999,marginBottom:"1.75rem",
            border:"1px solid rgba(15,244,198,0.25)",background:"rgba(15,244,198,0.06)",
            fontFamily:"'JetBrains Mono',monospace",fontSize:"0.72rem",fontWeight:600,
            color:"#0ff4c6",letterSpacing:"0.08em",textTransform:"uppercase",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(10px)",
            transition:"all 0.5s ease 0.1s",
          }}>
            <span style={{ width:6,height:6,borderRadius:"50%",background:"#0ff4c6",animation:"glow 2s ease infinite" }}/>
            Available for Internships · 2025
          </div> */}

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Bebas Neue',cursive", fontSize: "clamp(3rem,8vw,6.5rem)",
            letterSpacing: "0.03em", lineHeight: 1, marginBottom: "0.5rem",
          }}>
            {/* 'Hi, I'm' fades in */}
            <span style={{
              display: "block",
              background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.7))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}>Hi, I'm</span>

            <span style={{
              display: "block",
              background: "linear-gradient(135deg,#ffffff 20%,#c7b8ff 55%,#8fe9ff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(18px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s",
              filter: "drop-shadow(0 14px 35px rgba(0,0,0,0.55))",
            }}>
              Yash Mali
            </span>
          </h1>

          {/* Typewriter sub */}
          <p style={{
            fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 300, marginBottom: "0.75rem",
            opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 0.45s",
          }}>
            <Typewriter phrases={["Aspiring Software Engineer", "Backend Systems Builder", "Full-Stack Developer", "Open Source Contributor"]} />
          </p>
          <p style={{
            color: "rgba(226,224,240,0.48)", fontSize: "1rem", maxWidth: 500, lineHeight: 1.75, marginBottom: "2.5rem",
            opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.55s",
          }}>
            Building reliable software and elegant interfaces. Obsessed with performance, clean code, and shipping things that matter.
          </p>

          {/* CTAs */}
          <div className="hero-btns" style={{
            display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem",
            opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 0.65s",
          }}>
            <MagButton primary href="#projects">View Projects →</MagButton>
            {/* <MagButton href="#contact">Download Resume ↓</MagButton> */}
          </div>

          {/* Tech stack */}
          <div className="hero-tech" style={{
            opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 0.75s",
          }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "rgba(167,139,250,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Tech Stack</p>
            <div className="hero-tech-container" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {techStack.map((t, i) => (
                <div key={t.name} style={{
                  display: "flex", alignItems: "center", gap: "0.35rem",
                  padding: "0.3rem 0.7rem", borderRadius: 8,
                  background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
                  fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", fontWeight: 500,
                  color: "var(--muted2)", cursor: "default",
                  transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.color = t.color; e.currentTarget.style.background = `${t.color}15`; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 4px 20px ${t.color}30`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(226,224,240,0.55)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.color, flexShrink: 0, boxShadow: `0 0 6px ${t.color}` }} />
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "none" : "scale(0.75) translateY(30px)",
          transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.6s",
          flexShrink: 0, display: "flex", justifyContent: "center", width: "100%"
        }}>
          <div className="avatar-container" style={{ position: "relative",top:"-50px", width: 300, height: 300 }}>

            {/* Expanding ping rings on load */}
            {[0, 0.4, 0.8].map((delay, i) => (
              <div key={i} style={{
                position: "absolute", inset: -20 - i * 12,
                borderRadius: "50%",
                border: `1px solid rgba(124,58,237,${0.35 - i * 0.1})`,
                animation: `orbitPing 2.4s cubic-bezier(0.2,0.8,0.4,1) ${delay + 0.7}s both`,
                pointerEvents: "none",
              }} />
            ))}

            {/* Outer rotating ring */}
            <svg style={{ position: "absolute", inset: -24, width: "calc(100% + 48px)", height: "calc(100% + 48px)", animation: "spin 18s linear infinite" }} viewBox="0 0 288 288">
              <circle cx="144" cy="144" r="134" fill="none" stroke="url(#ringGrad1)" strokeWidth="1.5" strokeDasharray="8 12" />
              <defs>
                <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                  <stop offset="40%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
            {/* Inner counter-rotating ring */}
            <svg style={{ position: "absolute", inset: -8, width: "calc(100% + 16px)", height: "calc(100% + 16px)", animation: "spinReverse 12s linear infinite" }} viewBox="0 0 256 256">
              <circle cx="128" cy="128" r="122" fill="none" stroke="url(#ringGrad2)" strokeWidth="1" strokeDasharray="3 18"
               />
              <defs>
                <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Photo with haloPulse + scan-light effect */}
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden",
              border: "2px solid rgba(124,58,237,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <img src={logo} alt="Yash Mali"
                style={{
                  width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              />
              {/* Scan-light shimmer overlay */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                backgroundSize: "200% 100%",
                pointerEvents: "none",
              }} />
            </div>

            {/* Status dot
            <div style={{
              position: "absolute", bottom: "18px", right: "10px",
              width: 17, height: 17, borderRadius: "50%", background: "#22c55e",
              border: "2.5px solid #03030f",
              boxShadow: "0 0 14px #22c55e, 0 0 30px rgba(34,197,94,0.3)",
              animation: "pulseRing 2s ease-out infinite",
            }} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════ */
const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const facts = [
    { icon: "🎓", label: "Education", value: "B.E. Computer Science" },
    { icon: "📍", label: "Location", value: "India" },
    { icon: "⚡", label: "Status", value: "Open to Opportunities" },
    { icon: "🌐", label: "Languages", value: "English, Hindi, Marathi,Sanskrit" },
  ];
  return (
    <section id="about" style={{ padding: "clamp(4rem,8vw,7rem) 0", position: "relative", overflow: "hidden" }}>
      {/* Aurora glow */}
      <div style={{
        position: "absolute", left: -120, top: "40%", transform: "translateY(-50%)",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(124,58,237,0.07),rgba(6,182,212,0.03) 50%,transparent 70%)",
        pointerEvents: "none", filter: "blur(20px)",
      }} />
      <div style={{
        position: "absolute", right: -80, top: "30%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(236,72,153,0.05),transparent 70%)",
        pointerEvents: "none", filter: "blur(15px)",
      }} />
      <div style={{ width: "min(1200px,100%)", marginInline: "auto", padding: "0 clamp(1.25rem,4vw,3rem)" }}>
        <div className="grid-1-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,6rem)", alignItems: "start" }}>
          <div className="reveal-left">
            <SectionTitle label="About Me" title="Designing Systems That Matter" />
            <p style={{ color: "rgba(232,228,220,0.6)", marginBottom: "1rem", lineHeight: 1.8, fontSize: "1.02rem" }}>
              I am Yash Mali, a motivated and enthusiastic undergraduate student who strives to learn something new every day. I have a strong interest in startups and business development, along with skills in social media management and content creation. I work well in team environments and have actively participated in hackathons, technical clubs, and college event coordination. I am eager to build practical systems that solve real-world problems and have a deep interest in mythology and cultural studies.            </p>
            {/* <MagButton onClick={() => setModalOpen(true)}>Read Full Story →</MagButton> */}
          </div>
          <div className="reveal-right">
            <div className="facts-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
              {facts.map((f, i) => (
                <TiltCard key={f.label} style={{ borderRadius: 14 }}>
                  <div style={{
                    padding: "1.4rem", borderRadius: 14,
                    background: "rgba(13,13,35,0.7)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(124,58,237,0.12)",
                    transition: "border-color 0.35s,box-shadow 0.35s", cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(124,58,237,0.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{f.icon}</div>
                    <div style={{ fontSize: "0.68rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(167,139,250,0.5)", marginBottom: "0.3rem" }}>{f.label}</div>
                    <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#e2e0f0" }}>{f.value}</div>
                  </div>
                </TiltCard>
              ))}
            </div>
            {/* Quick stats */}
            <div className="stats-grid" style={{
              marginTop: "1rem", padding: "1.4rem", borderRadius: 14,
              background: "linear-gradient(135deg,rgba(124,58,237,0.08),rgba(6,182,212,0.04))",
              border: "1px solid rgba(124,58,237,0.18)",
              display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem", textAlign: "center",
              boxShadow: "0 0 40px rgba(124,58,237,0.06),inset 0 1px 0 rgba(255,255,255,0.04)",
            }}>
              {[{ n: 4, s: "+ Projects", l: "Shipped" }, { n: 7, s: ".8 CGPA", l: "Academic" }, { n: 50, s: "+ Repositories", l: "GitHub" }].map(s => (
                <div key={s.l}>
                  <div style={{
                    fontFamily: "'Bebas Neue',cursive", fontSize: "2rem", lineHeight: 1,
                    background: "linear-gradient(135deg,#a78bfa,#67e8f9)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    <Counter to={s.n} />{s.s}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(167,139,250,0.45)", fontFamily: "'JetBrains Mono',monospace", marginTop: "0.3rem" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} data={{
          title: "My Story", subtitle: "Software Engineering Student · India", stack: "Background / Goals",
          demo: "#", github: "#",
          sections: [
            { heading: "How It Started", content: "Growing up, I was always fascinated by how things work under the hood. That curiosity led me to Computer Science — and the moment I wrote my first program in C and saw it run, I was hooked." },
            { heading: "What I Build", content: "Over the past four years, I've built everything from command-line tools in C++ to full-stack web applications with React and Node.js. My sweet spot is backend systems: designing APIs that are fast, clean, and scalable." },
            { heading: "My Experience", content: "I've interned at a tech startup building REST APIs, contributed to open-source projects, and led my college's technical club — organizing hackathons that gave hundreds of students their first taste of building real things under pressure." },
            { heading: "What's Next", content: "I'm actively seeking junior roles where I can work with talented teams building impactful products. I thrive in environments that value good engineering practices and continuous learning." },
          ],
        }} />
      )}
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════ */
const Skills = () => {
  const langs = [
    { name: "C", pct: 85, color: "#5c9bd6" }, { name: "React", pct: 80, color: "#00599c" },
    { name: "Java", pct: 78, color: "#f89820" }, { name: "Python", pct: 82, color: "#3776ab" },
    { name: "JavaScript", pct: 75, color: "#f7df1e" }, { name: "HTML/CSS", pct: 88, color: "#e34f26" },
  ];
  const tools = ["Git", "Github", "Docker", "React", "Node.js", "MongoDB", "VS Code",];
  // const comps = ["Data Structures & Algorithms"];

  return (
    <section id="skills" style={{ padding: "clamp(4rem,8vw,7rem) 0", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ width: "min(1200px,100%)", marginInline: "auto", padding: "0 clamp(1.25rem,4vw,3rem)" }}>
        <div className="reveal">
          <SectionTitle label="Skills & Tools" title="What I Work With." desc="Proficient in a range of languages, frameworks, and tools — always learning what's next." />
        </div>
        <div className="grid-1-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)" }}>
          <div className="reveal-left">
            <h3 style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.12em",
              background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              textTransform: "uppercase", marginBottom: "1.5rem",
            }}>— Programming Languages</h3>
            {langs.map((l, i) => <SkillBar key={l.name} {...l} delay={i * 120} />)}
          </div>
          <div>
            <div className="reveal-right" style={{ marginBottom: "2rem" }}>
              <h3 style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.12em",
                background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                textTransform: "uppercase", marginBottom: "1.25rem",
              }}>— Tools & Frameworks</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {tools.map((t, i) => (
                  <div key={t} style={{
                    padding: "0.38rem 0.9rem", borderRadius: 8, cursor: "default",
                    border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.04)",
                    fontFamily: "'JetBrains Mono',monospace", fontSize: "0.78rem", fontWeight: 500,
                    color: "rgba(226,224,240,0.55)", transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "#a78bfa";
                      e.currentTarget.style.color = "#a78bfa";
                      e.currentTarget.style.background = "rgba(124,58,237,0.12)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,58,237,0.2)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
                      e.currentTarget.style.color = "rgba(226,224,240,0.55)";
                      e.currentTarget.style.background = "rgba(124,58,237,0.04)";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >{t}</div>
                ))}
              </div>
            </div>
            <div className="reveal">
              {/* <h3 style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem", letterSpacing: "0.1em", color: "#0ff4c6", textTransform: "uppercase", marginBottom: "1.25rem" }}>— Competencies</h3> */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {/* {comps.map((c, i) => (
                  <div key={c} style={{
                    display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.65rem 0.9rem",
                    borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)",
                    fontSize: "0.88rem", color: "rgba(232,228,220,0.7)", transition: "all 0.2s", cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(15,244,198,0.2)"; e.currentTarget.style.transform = "translateX(5px)"; e.currentTarget.style.color = "#e8e4dc"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.color = "rgba(232,228,220,0.7)"; }}
                  >
                    <span style={{ color: "#0ff4c6", fontWeight: 700, fontSize: "0.75rem" }}>✓</span>{c}
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════ */
const projects = [
  {
    title: "Snake Game", subtitle: "Snake Game", emoji: "🐍", badge: "Game",
    stack: "Java · SQL ",
    // demo: "#", 
    github: "https://github.com/yashpatilmali/snake-game/tree/master",
    desc: "The Snake Game is a desktop-based game application developed using Java for game logic and GUI, and SQL for storing player data and scores. The game allows the player to control a snake that moves around the screen, eats food, grows in length, and avoids colliding with walls or itself. The player’s score increases as the snake eats more food.",
    chips: ["Java", "SQL"],
    sections: [
      { heading: "Description", content: "The Snake Game is a classic arcade game where the player controls a snake that grows longer each time it eats food. The game ends if the snake collides with the walls or itself. The objective is to achieve the highest score possible by eating as much food as possible while avoiding obstacles." },
      // { heading: "Key Technical Decision", content: "Implemented server-side pagination and indexed MongoDB queries on ISBN, author, and category fields.", code: true },
      // { heading: "Architecture", content: "React SPA → Express REST API → MongoDB Atlas. JWT tokens for role-based access: Admin, Librarian, Student. Nodemailer for due-date reminders." },
      // { heading: "Results", content: "Deployed to 1,200+ students. Reduced librarian manual work by ~4hrs/day. Zero lending conflicts since launch." },
    ],
  },
  {
    title: "CSESA", subtitle: "Committe Website for Computer Science and Engineering Students Association", emoji: "👥", badge: "Website",
    stack: "JavaScript · HTML · CSS",
    demo: "https://ssgmce.ac.in/csesa/index.html", github: "https://github.com/yashpatilmali/CSESA",
    desc: "The CSESA Website is a responsive web application developed using HTML, CSS, and JavaScript. It provides information about events, announcements, members, and contact details of the Computer Science & Engineering Students Association, serving as a digital platform to connect and update students.",
    chips: ["JavaScript", "HTML", "CSS"],
    sections: [
      { heading: "Description", content: "The CSESA Website is a responsive and interactive web application developed using HTML, CSS, and JavaScript. This website is designed to provide information about the Computer Science & Engineering Students Association (CSESA), including events, announcements, members, gallery, and contact details." },
      // { heading: "A* Heuristic", content: "h(n) = |n.x - goal.x| + |n.y - goal.y|  // Manhattan distance\nf(n) = g(n) + h(n)  // Total cost function", code: true },
      // { heading: "Performance Challenge", content: "Rendering 60fps animations on Canvas required careful use of requestAnimationFrame and minimizing state updates." },
    ],
  },
  {
    title: "Portfolio Website", subtitle: "Portfolio Website", emoji: "⚡", badge: "Website",
    stack: "HTML · CSS",
    demo: "https://yashpatilmali.github.io/portfolio/", github: "https://github.com/yashpatilmali/portfolio",
    desc: "Created a responsive personal portfolio using HTML and CSS to showcase projects and technical skills with a clean and professional design. Implemented structured layout, custom styling, and responsive design principles to ensure compatibility across different devices and screen resolutions effectively.",
    chips: ["HTML", "CSS"],
    sections: [
      { heading: "Description", content: "The Portfolio Website is a responsive and interactive web application developed using HTML, CSS, and JavaScript. This website is designed to provide information about the Computer Science & Engineering Students Association (CSESA), including events, announcements, members, gallery, and contact details." },
      // { heading: "Key Metrics", content: "500+ req/s sustained in load testing · Cache hit rate ~78% · Avg response: 45ms cached vs 320ms cold." },
    ],
  },
  // {
  //   title: "SwiftChat", subtitle: "Real-time Messaging Application", emoji: "💬", badge: "WebSocket",
  //   stack: "React · Socket.io · Node.js · MongoDB",
  //   demo: "#", github: "#",
  //   desc: "WebSocket-powered chat with rooms, typing indicators, and persistent history. Implemented optimistic updates for lag-free UX and cursor-based infinite scroll.",
  //   chips: ["React", "Socket.io", "Node.js", "MongoDB"],
  //   sections: [
  //     { heading: "Optimistic Updates", content: "Messages appear instantly on send, confirmed server-side via UUID reconciliation. Eliminates perceived latency completely." },
  //     { heading: "Race Condition Fix", content: "Assigned client-side UUIDs to messages. Server acknowledges by returning the same UUID, allowing precise state reconciliation without duplicates." },
  //   ],
  // },
];

const Projects = () => {
  const [modal, setModal] = useState(null);
  return (
    <section id="projects" style={{ padding: "clamp(4rem,8vw,7rem) 0" }}>
      <div style={{ width: "min(1200px,100%)", marginInline: "auto", padding: "0 clamp(1.25rem,4vw,3rem)" }}>
        <div className="reveal">
          <SectionTitle label="Featured Work" title="Projects I'm Proud Of." desc="A selection showcasing full-stack development, algorithms, and systems thinking." />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem", alignItems: "stretch" }}>
          {projects.map((p, i) => (
            <TiltCard key={p.title} style={{ borderRadius: 14, animationDelay: `${i * 0.1}s`, height: "100%" }}>
              <div className="reveal reveal-scale" onClick={() => setModal(p)}
                style={{
                  background: "rgba(13,13,35,0.75)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(124,58,237,0.13)",
                  borderRadius: 14, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column",
                  transition: "border-color 0.35s,box-shadow 0.35s", height: "100%",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.45)"; e.currentTarget.style.boxShadow = "0 0 50px rgba(124,58,237,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.13)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Thumb */}
                <div style={{
                  height: 185, display: "flex", alignItems: "center", justifyContent: "center",
                  background: `linear-gradient(135deg,rgba(124,58,237,0.08),rgba(6,182,212,0.05))`,
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(circle at 50% 50%,rgba(124,58,237,0.1),rgba(6,182,212,0.05) 40%,transparent 65%)`,
                  }} />
                  <span style={{ fontSize: "3.5rem", filter: "drop-shadow(0 0 25px rgba(124,58,237,0.5))", animation: "float 4s ease-in-out infinite", position: "relative", zIndex: 1 }}>{p.emoji}</span>
                  <div style={{
                    position: "absolute", top: "0.75rem", right: "0.75rem",
                    padding: "0.22rem 0.6rem", borderRadius: 6,
                    background: "linear-gradient(90deg,rgba(124,58,237,0.25),rgba(6,182,212,0.15))",
                    border: "1px solid rgba(124,58,237,0.4)",
                    fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", fontWeight: 700,
                    color: "#a78bfa", letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>{p.badge}</div>
                </div>

                {/* Body */}
                <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "1.5rem", letterSpacing: "0.04em", marginBottom: "0.2rem" }}>{p.title}</h3>
                  <p style={{ color: "rgba(232,228,220,0.4)", fontSize: "0.82rem", marginBottom: "0.85rem", fontFamily: "'JetBrains Mono',monospace" }}>{p.subtitle}</p>
                  <p style={{ color: "rgba(232,228,220,0.55)", fontSize: "0.88rem", lineHeight: 1.65, flex: 1, marginBottom: "1rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.1rem" }}>
                    {p.chips.map(c => (
                      <span key={c} style={{
                        padding: "0.2rem 0.58rem", borderRadius: 6,
                        background: "rgba(124,58,237,0.12)", color: "#a78bfa",
                        fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", fontWeight: 600,
                        border: "1px solid rgba(124,58,237,0.25)",
                      }}>{c}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0.6rem" }} onClick={e => e.stopPropagation()}>
                    {p.demo && (
                      <MagButton primary href={p.demo} style={{ flex: 1, justifyContent: "center", fontSize: "0.82rem", padding: "0.5rem 1rem" }}>↗ Demo</MagButton>
                    )}
                    <MagButton href={p.github} style={{ flex: 1, justifyContent: "center", fontSize: "0.82rem", padding: "0.5rem 1rem" }}>⌥ Code</MagButton>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
      {modal && <Modal data={modal} onClose={() => setModal(null)} />}
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════════════════ */
const Experience = () => {
  const exp = [
    { role: "Full-Stack Developer Intern", org: "TruScholar", dates: "Jan 2026–Present", bullets: ["Collaborating with the team on full-stack web development projects", "Contributing to modern web architectures and delivering feature enhancements"] },
    { role: "President & Event Manager", org: "CSESA_SSGMCE", dates: "Aug 2024–Present", bullets: ["Acting as President (Sep 2025–Present) and formerly Event Manager (Aug 2024–Sep 2025)", "Leading the student association and organizing impactful technical events and workshops"] },
    { role: "Intern", org: "Webstack Academy - WSA", dates: "Sep 2025–Nov 2025", bullets: ["Completed hands-on internship focused on modern web development stacks", "Developed scalable web applications utilizing industry best practices"] },
    { role: "Technical Team Member", org: "E-Cell, SSGMCE", dates: "Sep 2024–Sep 2025", bullets: ["Contributed to technical initiatives supporting the entrepreneurship cell", "Assisted in the execution of tech-driven events and hackathons"] },
    { role: "Volunteer", org: "National Service Scheme (NSS_SSGMCE)", dates: "Jan 2025–Jan 2026", bullets: ["Took part in NSS camps from Jan 14–20, 2025 and Jan 19–24, 2026", "Developed leadership and community service skills through cleanliness campaigns, tree planting, rural community interactions, health awareness, and cultural events"] },
  ];
  const edu = [
    { degree: "B.E. — Computer Science", school: "Shri Sant Gajanan Maharaj College of Engineering, Shegaon", dates: "2023–2027 · CGPA 7.8/10" },
    { degree: "Higher Secondary — PCM", school: "Shri Samartha Junior College, Amravati", dates: "2021–2023 · 94.58%" },
  ];
  return (
    <section id="experience" style={{ padding: "clamp(4rem,8vw,7rem) 0", background: "rgba(124,58,237,0.015)", borderTop: "1px solid rgba(124,58,237,0.08)" }}>
      <div style={{ width: "min(1200px,100%)", marginInline: "auto", padding: "0 clamp(1.25rem,4vw,3rem)" }}>
        <div className="reveal"><SectionTitle label="Journey" title="The Story So Far." /></div>
        <div className="grid-1-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)" }}>
          <div className="reveal-left">
            <h3 style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.12em",
              background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              textTransform: "uppercase", marginBottom: "2rem",
            }}>— Experience</h3>
            <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
              <div style={{
                position: "absolute", left: 6, top: 6, bottom: 0, width: 1.5,
                background: "linear-gradient(to bottom,rgba(124,58,237,0.4),rgba(6,182,212,0.1))",
              }} />
              {exp.map((e, i) => (
                <div key={i} style={{ position: "relative", marginBottom: "2rem" }}>
                  <div style={{
                    position: "absolute", left: "-1.6rem", top: 5, width: 13, height: 13, borderRadius: "50%",
                    background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                    border: "2.5px solid #03030f",
                    boxShadow: "0 0 0 2px rgba(124,58,237,0.4),0 0 15px rgba(124,58,237,0.5)",
                  }} />
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.15rem", color: "#e2e0f0" }}>{e.role}</div>
                  <div style={{
                    fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.2rem",
                    background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>{e.org}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "rgba(167,139,250,0.4)", marginBottom: "0.65rem" }}>{e.dates}</div>
                  {e.bullets.map((b, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "rgba(226,224,240,0.5)", marginBottom: "0.3rem" }}>
                      <span style={{ background: "linear-gradient(90deg,#a78bfa,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", flexShrink: 0, fontWeight: 700 }}>→</span>{b}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <h3 style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.12em",
              background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              textTransform: "uppercase", marginBottom: "2rem",
            }}>— Education</h3>
            {edu.map((e, i) => (
              <TiltCard key={i} style={{ borderRadius: 14, marginBottom: "1rem" }}>
                <div style={{
                  padding: "1.4rem", borderRadius: 14,
                  background: "rgba(13,13,35,0.7)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(124,58,237,0.12)",
                  transition: "border-color 0.35s,box-shadow 0.35s", cursor: "default",
                }}
                  onMouseEnter={el => { el.currentTarget.style.borderColor = "rgba(124,58,237,0.4)"; el.currentTarget.style.boxShadow = "0 0 30px rgba(124,58,237,0.1)"; }}
                  onMouseLeave={el => { el.currentTarget.style.borderColor = "rgba(124,58,237,0.12)"; el.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontWeight: 700, fontSize: "0.98rem", marginBottom: "0.25rem", color: "#e2e0f0" }}>{e.degree}</div>
                  <div style={{
                    fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.2rem",
                    background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>{e.school}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "rgba(167,139,250,0.4)", marginBottom: e.detail ? "0.65rem" : 0 }}>{e.dates}</div>
                  {e.detail && <div style={{ fontSize: "0.82rem", color: "rgba(226,224,240,0.4)", lineHeight: 1.6 }}>{e.detail}</div>}
                </div>
              </TiltCard>
            ))}
            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.12em",
                background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>— Certifications, Achievements & Workshops</h3>
              {["\ud83c\udfc6 Google AI Essentials and Google Cybersecurity Certificate", "\ud83c\udfaf Coursera - Gen AI Study Jams (Google): several tracks finished", "\u26a1 Workshop: ISTE SSGMCE (hands-on custom GPTs): Mastering AI with custom GPTs", "\ud83c\udf93 Participation in several guest lectures: IIT Bombay E-Summit", "\ud83d\udcc8 Data Structures and Algorithms using Java \u2013 NPTEL", "\ud83e\udd47 Winner of Internal Hackathon 25 - 26", "\ud83d\udcbb Participated in Hackathons: Sipna College of Engineering, PR Pote College of Engineering"].map(c => (
                <div key={c} style={{
                  padding: "0.8rem 1rem", borderRadius: 10, marginBottom: "0.5rem",
                  background: "rgba(124,58,237,0.04)", border: "1px solid rgba(124,58,237,0.12)",
                  fontSize: "0.85rem", color: "rgba(226,224,240,0.65)", transition: "all 0.25s", cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)"; e.currentTarget.style.transform = "translateX(5px)"; e.currentTarget.style.background = "rgba(124,58,237,0.08)"; e.currentTarget.style.color = "#e2e0f0"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.12)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "rgba(124,58,237,0.04)"; e.currentTarget.style.color = "rgba(226,224,240,0.65)"; }}
                >{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// /* ═══════════════════════════════════════════════════════
//    TESTIMONIALS
// ═══════════════════════════════════════════════════════ */
// const Testimonials = () => {
//   const quotes = [
//     { text: "One of the most driven students I've mentored. Their ability to grasp complex system design concepts quickly and apply them practically is exceptional.", name: "Prof. Rajan Mehta", role: "HOD, CS Dept", avatar: "👨‍🏫" },
//     { text: "Delivered clean, well-documented code from day one. Their initiative in improving API performance was notable — they took ownership without being asked.", name: "Priya Sharma", role: "Engineering Lead · TechStartup", avatar: "👩‍💼" },
//     { text: "Great team player and communicator. Consistently helped teammates when blocked and contributed thoughtful ideas during design reviews.", name: "Arjun Kumar", role: "Senior Dev · Open Source", avatar: "🧑‍💻" },
//   ];
//   return (
//     <section style={{ padding: "clamp(4rem,8vw,7rem) 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
//       <div style={{ width: "min(1200px,100%)", marginInline: "auto", padding: "0 clamp(1.25rem,4vw,3rem)" }}>
//         <div className="reveal"><SectionTitle label="Recommendations" title="What People Say." /></div>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
//           {quotes.map((q, i) => (
//             <TiltCard key={q.name} style={{ borderRadius: 14 }}>
//               <div className="reveal reveal-scale" style={{
//                 padding: "1.75rem", borderRadius: 14,
//                 background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
//                 transition: "border-color 0.3s", cursor: "default", height: "100%",
//               }}
//                 onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(15,244,198,0.2)"}
//                 onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
//               >
//                 <div style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "4rem", lineHeight: 0.9, color: "#0ff4c6", opacity: 0.2, marginBottom: "0.75rem" }}>"</div>
//                 <p style={{ color: "rgba(232,228,220,0.6)", fontSize: "0.92rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: "1.5rem" }}>{q.text}</p>
//                 <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
//                   <div style={{
//                     width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
//                     background: "rgba(15,244,198,0.08)", border: "1.5px solid rgba(15,244,198,0.2)", fontSize: "1.2rem",
//                   }}>{q.avatar}</div>
//                   <div>
//                     <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>{q.name}</div>
//                     <div style={{ fontSize: "0.75rem", color: "#555", fontFamily: "'JetBrains Mono',monospace" }}>{q.role}</div>
//                   </div>
//                 </div>
//               </div>
//             </TiltCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

/* ═══════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════ */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const fd = new FormData(e.currentTarget);
    const honey = String(fd.get("_honey") || "").trim();
    if (honey) {
      // Bot submission: pretend it succeeded.
      setSent(true);
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("Contact form email is not configured yet.");
      return;
    }

    try {
      setSending(true);
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,
        subject: `Contact Us: ${form.name}`,
        message: form.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSent(true);
    } catch (err) {
      setSubmitError(err?.message || "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle = (field) => ({
    width: "100%", padding: "0.85rem 1rem", borderRadius: 8,
    background: "rgba(255,255,255,0.03)", fontFamily: "'Outfit',sans-serif",
    border: `1.5px solid ${errors[field] ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}`,
    color: "#e8e4dc", fontSize: "0.95rem", outline: "none",
    transition: "border-color 0.2s,box-shadow 0.2s",
  });

  return (
    <section id="contact" style={{ padding: "clamp(4rem,8vw,7rem) 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ width: "min(1200px,100%)", marginInline: "auto", padding: "0 clamp(1.25rem,4vw,3rem)" }}>
        <div className="reveal"><SectionTitle label="Get In Touch" title="Let's Work Together." desc="Whether you have an opportunity, project idea, or just want to connect — my inbox is open." /></div>
        <div className="grid-1-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,6rem)", alignItems: "start" }}>
          <div className="reveal-left">
            <p style={{ color: "rgba(232,228,220,0.55)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem" }}>
              I'm currently available for junior roles. If you're building something interesting, I'd love to hear about it.
            </p>
            {[
              { icon: "📧", label: "Email", val: "yashsmali91@gmail.com", href: "mailto:yashsmali91@gmail.com" },
              { icon: "📞", label: "Phone", val: "+91-8830651820", href: "tel:+918830651820" },
              { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/yashpatilmali", href: "https://linkedin.com/in/yashpatilmali" },
              { icon: "⌥", label: "GitHub", val: "github.com/yashpatilmali", href: "https://github.com/yashpatilmali" },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.15rem",
                borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)", marginBottom: "0.75rem", cursor: "pointer",
                transition: "all 0.25s", color: "inherit",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(15,244,198,0.25)"; e.currentTarget.style.transform = "translateX(5px)"; e.currentTarget.style.background = "rgba(15,244,198,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(15,244,198,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{l.icon}</div>
                <div>
                  <div style={{ fontSize: "0.72rem", fontFamily: "'JetBrains Mono',monospace", color: "var(--muted2)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.15rem" }}>{l.label}</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{l.val}</div>
                </div>
              </a>
            ))}
            <p style={{ fontSize: "0.75rem", color: "var(--muted2)", marginTop: "1.5rem", fontFamily: "'JetBrains Mono',monospace" }}>
              Contact details are used only to respond — never sold or shared.
            </p>
          </div>

          <div className="reveal-right">
            {!sent ? (
              <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", display: "block", marginBottom: "0.4rem", color: "rgba(232,228,220,0.7)" }}>Your Name *</label>
                  <input name="name" autoComplete="name" style={inputStyle("name")} placeholder="Ravi Patel" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = "#0ff4c6"}
                    onBlur={e => e.target.style.borderColor = errors.name ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}
                  />
                  {errors.name && <p style={{ color: "rgba(239,68,68,0.8)", fontSize: "0.75rem", marginTop: "0.3rem" }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", display: "block", marginBottom: "0.4rem", color: "rgba(232,228,220,0.7)" }}>Email Address *</label>
                  <input name="email" autoComplete="email" style={inputStyle("email")} type="email" placeholder="ravi@company.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = "#0ff4c6"}
                    onBlur={e => e.target.style.borderColor = errors.email ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}
                  />
                  {errors.email && <p style={{ color: "rgba(239,68,68,0.8)", fontSize: "0.75rem", marginTop: "0.3rem" }}>{errors.email}</p>}
                </div>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", display: "block", marginBottom: "0.4rem", color: "rgba(232,228,220,0.7)" }}>Message *</label>
                  <textarea name="message" style={{ ...inputStyle("message"), resize: "vertical", minHeight: 130 }} placeholder="Hi, I'd love to discuss an internship opportunity..." value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = "#0ff4c6"}
                    onBlur={e => e.target.style.borderColor = errors.message ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}
                  />
                  {errors.message && <p style={{ color: "rgba(239,68,68,0.8)", fontSize: "0.75rem", marginTop: "0.3rem" }}>{errors.message}</p>}
                </div>
                {submitError && (
                  <p style={{ color: "rgba(239,68,68,0.85)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                    {submitError}
                  </p>
                )}
                <div style={{ opacity: sending ? 0.75 : 1, pointerEvents: sending ? "none" : "auto" }}>
                  <MagButton primary style={{ width: "100%", justifyContent: "center", padding: "0.9rem 1.75rem", fontSize: "1rem" }}>
                    {sending ? "Sending…" : "Send Message →"}
                  </MagButton>
                </div>
              </form>
            ) : (
              <div style={{
                textAlign: "center", padding: "3rem 2rem", borderRadius: 14,
                background: "rgba(15,244,198,0.05)", border: "1px solid rgba(15,244,198,0.2)",
                animation: "scaleIn 0.4s ease",
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                <h3 style={{ fontFamily: "'Bebas Neue',cursive", fontSize: "1.8rem", letterSpacing: "0.04em", color: "#0ff4c6", marginBottom: "0.5rem" }}>Message Received!</h3>
                <p style={{ color: "rgba(232,228,220,0.5)", fontSize: "0.95rem" }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════ */
const Footer = () => (
  <footer style={{ padding: "2rem 0", borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)" }}>
    <div className="footer-container" style={{ width: "min(1200px,100%)", marginInline: "auto", padding: "0 clamp(1.25rem,4vw,3rem)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.78rem", color: "var(--muted2)" }}>© 2026 Yash Mali </div>
      <div className="footer-links" style={{ display: "flex", gap: "1.5rem" }}>
        {["About", "Skills", "Projects", "Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: "0.82rem", color: "var(--muted2)", transition: "color 0.2s", cursor: "pointer" }}
            onMouseEnter={e => e.target.style.color = "#0ff4c6"}
            onMouseLeave={e => e.target.style.color = "var(--muted2)"}
          >{l}</a>
        ))}
      </div>
    </div>
  </footer>
);

/* ═══════════════════════════════════════════════════════
   SCROLL REVEAL SETUP
═══════════════════════════════════════════════════════ */
const useScrollReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    const els = document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale");
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
};

const OPENING_QUOTES = [
  "Discipline is choosing between what you want now and what you want most.",
  "Small daily improvements become stunning results over time.",
  "Build things that solve real problems, then improve them relentlessly.",
  "Consistency beats intensity when the goal is mastery.",
  "Great software starts with empathy for the user.",
  "Your future is created by what you do today, not tomorrow.",
  "Clarity in code reflects clarity in thinking.",
  "Progress is progress, even when it feels slow.",
  "Stay curious; curiosity is the engine of innovation.",
  "The best way to learn is to build and ship.",
  "Dream big, start small, execute daily.",
  "Quality is never an accident; it is always a choice.",
  "A calm mind writes the cleanest code.",
  "Turn pressure into purpose and purpose into action.",
  "Every expert was once a beginner who kept going.",
  "Your habits decide your trajectory.",
  "Focus on value, and growth follows naturally.",
];

/* ═══════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════ */
export default function App() {
  useScrollReveal();
  const [showOpeningQuote, setShowOpeningQuote] = useState(false);
  const [openingQuote, setOpeningQuote] = useState(OPENING_QUOTES[0]);

  useEffect(() => {
    const sessionKey = "portfolio_opening_quote_shown";
    if (sessionStorage.getItem(sessionKey) === "1") {
      return;
    }

    sessionStorage.setItem(sessionKey, "1");
    let quoteIndex = Math.floor(Math.random() * OPENING_QUOTES.length);

    try {
      const seenKey = "portfolio_seen_opening_quotes";
      const stored = JSON.parse(localStorage.getItem(seenKey) || "[]");
      const seen = Array.isArray(stored)
        ? stored.filter((i) => Number.isInteger(i) && i >= 0 && i < OPENING_QUOTES.length)
        : [];

      let unseen = OPENING_QUOTES.map((_, i) => i).filter((i) => !seen.includes(i));
      if (unseen.length === 0) {
        unseen = OPENING_QUOTES.map((_, i) => i);
      }

      quoteIndex = unseen[Math.floor(Math.random() * unseen.length)];
      const nextSeen = [...seen.filter((i) => i !== quoteIndex), quoteIndex];
      localStorage.setItem(seenKey, JSON.stringify(nextSeen));
    } catch {
      quoteIndex = Math.floor(Math.random() * OPENING_QUOTES.length);
    }

    setOpeningQuote(OPENING_QUOTES[quoteIndex]);
    setShowOpeningQuote(true);
  }, []);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div style={{
        filter: showOpeningQuote ? "blur(10px)" : "none",
        transition: "filter 0.35s ease",
        pointerEvents: showOpeningQuote ? "none" : "auto",
        userSelect: showOpeningQuote ? "none" : "auto",
      }}>
        <GlobalStyles />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

      {showOpeningQuote && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          background: "rgba(3,3,15,0.5)",
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.3s ease",
        }}>
          <div style={{
            width: "min(760px,95%)",
            borderRadius: 18,
            padding: "clamp(1.25rem,3vw,2rem)",
            textAlign: "center",
            background: "linear-gradient(135deg,rgba(13,13,35,0.98),rgba(8,8,28,0.98))",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 35px 80px rgba(0,0,0,0.65),0 0 40px rgba(124,58,237,0.12)",
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.95rem",
              background: "linear-gradient(90deg,#a78bfa,#67e8f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Quote of the Visit</p>
            <p style={{
              fontSize: "clamp(1.08rem,2.7vw,1.55rem)",
              lineHeight: 1.7,
              color: "#eceaf7",
              fontWeight: 700,
              letterSpacing: "0.01em",
              animation: "slideUp 0.8s cubic-bezier(0.16,1,0.3,1), neonPulse 2.8s ease-in-out infinite",
            }}>“{openingQuote}”</p>
            <button
              onClick={() => setShowOpeningQuote(false)}
              style={{
                marginTop: "1.25rem",
                padding: "0.7rem 1.25rem",
                borderRadius: 10,
                border: "1px solid rgba(124,58,237,0.45)",
                background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                color: "#fff",
                fontFamily: "'Outfit',sans-serif",
                fontSize: "0.92rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                cursor: "pointer",
                boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
              }}
            >
              View Portfolio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}