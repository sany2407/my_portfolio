"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Bot, CornerDownLeft, MessageSquare, RotateCcw, Send, X } from "lucide-react";
import { sendChatMessage, type ChatSource } from "@/lib/chatApi";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: ChatSource[];
  grounded?: boolean;
};

const SUGGESTIONS = [
  "What technologies does Sany work with?",
  "Tell me about the maritime port platform",
  "Which projects are AI focused?",
  "How can I contact Sany?",
];

const SESSION_KEY = "portfolio-chat-session-id";

function createSessionId(): string {
  const stored = window.sessionStorage.getItem(SESSION_KEY);
  if (stored) return stored;
  const id =
    typeof window !== "undefined" && typeof window.crypto?.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `s-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  window.sessionStorage.setItem(SESSION_KEY, id);
  return id;
}

/**
 * Minimal, injection-safe markdown renderer for assistant answers.
 * Handles bullets, **bold**, `code` and [1] citations without using
 * dangerouslySetInnerHTML.
 */
function RichText({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  let bullets: ReactNode[] = [];

  const flushBullets = () => {
    if (bullets.length > 0) {
      blocks.push(
        <ul key={`ul-${blocks.length}`} className="chat-ul">
          {bullets}
        </ul>
      );
      bullets = [];
    }
  };

  text.split("\n").forEach((rawLine, lineIndex) => {
    const line = rawLine.trimEnd();
    if (!line.trim()) return;

    const isBullet = /^\s*[-*•]\s+/.test(line);
    const body = isBullet ? line.replace(/^\s*[-*•]\s+/, "") : line;

    const inline: ReactNode[] = [];
    const pattern = /(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`]+`|\[\d+\])/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(body)) !== null) {
      if (match.index > lastIndex) {
        inline.push(body.slice(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith("**")) {
        inline.push(
          <strong key={`${lineIndex}-${match.index}`} className="chat-strong">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith("*")) {
        inline.push(
          <em key={`${lineIndex}-${match.index}`} className="chat-em">
            {token.slice(1, -1)}
          </em>
        );
      } else if (token.startsWith("`")) {
        inline.push(
          <code key={`${lineIndex}-${match.index}`} className="chat-code">
            {token.slice(1, -1)}
          </code>
        );
      } else {
        inline.push(
          <span key={`${lineIndex}-${match.index}`} className="chat-cite">
            {token}
          </span>
        );
      }
      lastIndex = match.index + token.length;
    }
    if (lastIndex < body.length) inline.push(body.slice(lastIndex));

    if (isBullet) {
      bullets.push(
        <li key={lineIndex} className="chat-li">
          {inline}
        </li>
      );
    } else {
      flushBullets();
      blocks.push(
        <p key={lineIndex} className="chat-p">
          {inline}
        </p>
      );
    }
  });

  flushBullets();

  return <>{blocks}</>;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sessionIdRef = useRef<string>("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && !sessionIdRef.current) {
      sessionIdRef.current = createSessionId();
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  useEffect(() => {
    if (open && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, pending, open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const send = useCallback(async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || pending) return;

    if (!sessionIdRef.current) sessionIdRef.current = createSessionId();

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      content: trimmed,
    };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError(null);
    setPending(true);

    try {
      const result = await sendChatMessage(trimmed, sessionIdRef.current);
      setMessages((current) => [
        ...current,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          content: result.answer,
          sources: result.sources,
          grounded: result.grounded,
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setPending(false);
    }
  }, [pending]);

  const reset = useCallback(() => {
    setMessages([]);
    setError(null);
    window.sessionStorage.removeItem(SESSION_KEY);
    sessionIdRef.current = "";
  }, []);

  const showSuggestions = messages.length === 0 && !pending;

  return (
    <>
      <button
        type="button"
        className={`chat-fab ${open ? "chat-fab-open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="portfolio-chat-panel"
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
      >
        {open ? <X size={22} /> : <MessageSquare size={22} />}
      </button>

      <aside
        id="portfolio-chat-panel"
        className={`chat-panel ${open ? "chat-panel-open" : ""}`}
        role="dialog"
        aria-label="Portfolio assistant"
        aria-hidden={!open}
      >
        <header className="chat-head">
          <div className="chat-head-left">
            <span className="chat-avatar">
              <Bot size={16} />
            </span>
            <div className="chat-head-text">
              <span className="chat-title">SANY_AI</span>
              <span className="chat-status">
                <span className="chat-dot" /> grounded assistant
              </span>
            </div>
          </div>
          <div className="chat-head-actions">
            <button
              type="button"
              className="chat-icon-btn"
              onClick={reset}
              aria-label="Start a new conversation"
              title="New conversation"
              disabled={messages.length === 0}
            >
              <RotateCcw size={15} />
            </button>
            <button
              type="button"
              className="chat-icon-btn"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
        </header>

        <div className="chat-body" ref={bodyRef} aria-live="polite">
          {messages.length === 0 && (
            <div className="chat-intro">
              <p className="chat-intro-title">$ ask_about --sany</p>
              <p className="chat-intro-text">
                I answer questions using Sany&apos;s documented portfolio knowledge. Every
                reply is grounded in the retrieved evidence and cited.
              </p>
            </div>
          )}

          {showSuggestions && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="chat-chip"
                  onClick={() => send(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`chat-msg chat-msg-${message.role}`}
            >
              {message.role === "assistant" && (
                <span className="chat-msg-label">SANY_AI</span>
              )}
              <div className="chat-bubble">
                <RichText text={message.content} />
              </div>
              {message.role === "assistant" && message.sources && message.sources.length > 0 && (
                <div className="chat-sources">
                  {message.sources.map((source, index) => (
                    <span
                      key={`${source.source}-${index}`}
                      className="chat-source"
                      title={source.excerpt}
                    >
                      [{index + 1}] {source.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {pending && (
            <div className="chat-msg chat-msg-assistant">
              <span className="chat-msg-label">SANY_AI</span>
              <div className="chat-bubble chat-typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          {error && (
            <div className="chat-error" role="alert">
              {error}
            </div>
          )}
        </div>

        <form
          className="chat-input-row"
          onSubmit={(event) => {
            event.preventDefault();
            send(input);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Ask about skills, projects, experience..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            maxLength={2000}
            aria-label="Message the portfolio assistant"
            disabled={!open}
          />
          <button
            type="submit"
            className="chat-send"
            aria-label="Send message"
            disabled={pending || input.trim().length === 0}
          >
            {pending ? <CornerDownLeft size={16} /> : <Send size={16} />}
          </button>
        </form>
      </aside>
    </>
  );
}
