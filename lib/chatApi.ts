/**
 * Client for the portfolio RAG backend.
 *
 * The backend URL is injected at build time via NEXT_PUBLIC_CHAT_API_URL.
 * Defaults to the local FastAPI server on port 8000.
 */

export type ChatSource = {
  title: string;
  source: string;
  excerpt: string;
};

export type ChatResponse = {
  answer: string;
  session_id: string;
  sources: ChatSource[];
  grounded: boolean;
};

const API_BASE = (process.env.NEXT_PUBLIC_CHAT_API_URL ?? "http://localhost:8000").replace(
  /\/+$/,
  ""
);

export const CHAT_API_URL = API_BASE;

// The backend can take ~20-30s (retrieval + a thinking model). Cap the wait so
// the UI never hangs forever.
const REQUEST_TIMEOUT_MS = 90_000;

export async function sendChatMessage(
  question: string,
  sessionId: string
): Promise<ChatResponse> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;

  try {
    response = await fetch(`${API_BASE}/api/v1/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, session_id: sessionId }),
      signal: controller.signal,
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error("The assistant took too long to respond. Please try again.");
    }
    throw new Error(
      `Could not reach the assistant API at ${API_BASE}. Is the backend running?`
    );
  } finally {
    clearTimeout(timer);
  }

  if (!response.ok) {
    let detail = "";
    try {
      const payload = await response.json();
      detail = typeof payload?.detail === "string" ? payload.detail : "";
    } catch {
      detail = "";
    }
    throw new Error(detail || `The assistant is unavailable (HTTP ${response.status}).`);
  }

  return (await response.json()) as ChatResponse;
}
