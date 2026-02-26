// src/components/ApiSandboxSection.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Database,
  Code2,
  Copy,
  Check,
  AlertCircle,
  Activity,
  Download,
  Trash2,
  Server,
} from "lucide-react";

// Helper: Syntax Highlighter
const syntaxHighlight = (json) => {
  if (typeof json != "string") {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = "text-blue-400";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "text-orange-300";
          match = match.replace(/"/g, "");
        } else {
          cls = "text-green-400";
        }
      } else if (/true|false/.test(match)) {
        cls = "text-purple-400";
      } else if (/null/.test(match)) {
        cls = "text-neutral-500";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    },
  );
};

const endpoints = [
  {
    id: "profile",
    method: "GET",
    path: "/api/v1/gaurav/profile",
    description: "Fetch developer profile and core metadata.",
    hasBody: false,
    defaultResponse: {
      status: 200,
      data: {
        name: "Gaurav Pandey",
        role: "Full Stack Developer",
        education: "BCA",
        stack: ["Node.js", "Express", "React", "MongoDB"],
        status: "Open for Full-Time Opportunities",
        location: "India",
        contact: {
          email: "gauravp9118@gmail.com",
          phone: "+91-9118357637",
        },

        github: "https://github.com/gauravpandeyyy",
      },
    },
  },
  {
    id: "hire",
    method: "POST",
    path: "/api/v1/gaurav/offer",
    description: "Send a mock job offer. (Editable Payload)",
    hasBody: true,
    defaultBody: `{\n  "company": "Google",\n  "role": "SDE-1",\n  "offered_LPA": 10\n}`,
    generateResponse: (parsedBody) => {
      const company = parsedBody?.company || "Unknown Company";
      const lpa = parsedBody?.offered_LPA || 0;

      let message = `Offer received from ${company}.`;
      let status = "Evaluating...";

      if (lpa >= 10) {
        status = "ACCEPTED - Let's build together!";
        message = `Fantastic offer of ${lpa} LPA from ${company}. Ready to deploy.`;
      } else if (lpa > 0) {
        status = "NEGOTIATING";
        message = `Thanks ${company}! I'm targeting 10+ LPA based on my MERN capabilities.`;
      }

      return {
        status: 201,
        success: true,
        message: message,
        system_action: status,
        timestamp: new Date().toISOString(),
      };
    },
  },
];

// Simulated Response Headers
const responseHeaders = {
  server: "nginx/1.18.0",
  "content-type": "application/json; charset=utf-8",
  "x-powered-by": "Express",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache, no-store, must-revalidate",
  connection: "keep-alive",
};

export default function ApiSandboxSection() {
  const [activeEndpoint, setActiveEndpoint] = useState(endpoints[0]);
  const [reqBody, setReqBody] = useState("");
  const [jsonError, setJsonError] = useState("");

  const [terminalState, setTerminalState] = useState("IDLE"); // IDLE, FETCHING, SUCCESS
  const [terminalOutput, setTerminalOutput] = useState(null);
  const [metrics, setMetrics] = useState({ ms: 0, size: 0, status: 200 });
  const [copied, setCopied] = useState(false);
  const [consoleTab, setConsoleTab] = useState("body"); // 'body' or 'headers'

  useEffect(() => {
    if (activeEndpoint.hasBody) setReqBody(activeEndpoint.defaultBody);
    else setReqBody("");
    setJsonError("");
  }, [activeEndpoint]);

  const handleBodyChange = (e) => {
    setReqBody(e.target.value);
    setJsonError("");
    try {
      JSON.parse(e.target.value);
    } catch (err) {
      setJsonError("Invalid JSON format");
    }
  };

  const handleSendRequest = () => {
    if (activeEndpoint.hasBody && jsonError) return;

    setTerminalState("FETCHING");
    setTerminalOutput(null);
    setConsoleTab("body"); // Auto-switch to body on new request

    const startTime = performance.now();

    setTimeout(() => {
      let finalResponse;
      if (activeEndpoint.method === "POST") {
        try {
          const parsed = JSON.parse(reqBody);
          finalResponse = activeEndpoint.generateResponse(parsed);
        } catch (e) {
          finalResponse = { error: "Bad Request" };
        }
      } else {
        finalResponse = activeEndpoint.defaultResponse;
      }

      const endTime = performance.now();
      setMetrics({
        ms: Math.round(endTime - startTime),
        size: new Blob([JSON.stringify(finalResponse)]).size,
        status: finalResponse.status || 200,
      });
      setTerminalOutput(finalResponse);
      setTerminalState("SUCCESS");
    }, 1200); // 1.2s delay for dramatic terminal effect
  };

  const clearConsole = () => {
    setTerminalState("IDLE");
    setTerminalOutput(null);
  };

  const downloadJson = () => {
    if (!terminalOutput) return;
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(terminalOutput, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "response.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const copyToClipboard = () => {
    if (terminalOutput) {
      navigator.clipboard.writeText(JSON.stringify(terminalOutput, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Generate line numbers based on output string length
  const outputString = terminalOutput
    ? JSON.stringify(terminalOutput, null, 2)
    : "";
  const lineCount = outputString.split("\n").length;

  return (
    <section
      id="sandbox"
      className="py-24 relative  overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6"
          >
            <Activity className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">
              Interactive Console
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
            Simulate My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Backend.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Request Configuration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="flex gap-2 bg-neutral-900/50 p-2 rounded-2xl border border-white/5">
              {endpoints.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => setActiveEndpoint(ep)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeEndpoint.id === ep.id
                      ? "bg-neutral-800 text-white shadow-lg border border-white/10"
                      : "text-neutral-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className={
                      ep.method === "GET" ? "text-blue-400" : "text-green-400"
                    }
                  >
                    {ep.method}
                  </span>
                  {ep.path.split("/").pop()}
                </button>
              ))}
            </div>

            <div className="flex-1 bg-black border border-white/10 rounded-[2rem] p-6 flex flex-col shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`px-2.5 py-1 rounded text-[10px] font-black tracking-widest ${activeEndpoint.method === "GET" ? "bg-blue-500/10 text-blue-400" : "bg-green-500/10 text-green-400"}`}
                >
                  {activeEndpoint.method}
                </span>
                <span className="font-mono text-sm text-neutral-300 break-all">
                  {activeEndpoint.path}
                </span>
              </div>

              {activeEndpoint.hasBody && (
                <div className="flex-1 flex flex-col mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                      req.body
                    </span>
                    {jsonError && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {jsonError}
                      </span>
                    )}
                  </div>
                  <textarea
                    value={reqBody}
                    onChange={handleBodyChange}
                    spellCheck="false"
                    className={`flex-1 w-full bg-[#0A0A0A] border rounded-xl p-4 font-mono text-sm text-neutral-300 focus:outline-none resize-none transition-colors ${jsonError ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-orange-500/50"}`}
                    rows={6}
                  />
                </div>
              )}

              <button
                onClick={handleSendRequest}
                disabled={terminalState === "FETCHING" || !!jsonError}
                className="mt-auto w-full group relative inline-flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-bold text-md hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-300 ease-out group-hover:w-full z-0" />
                <span className="relative z-10 flex items-center gap-2">
                  {terminalState === "FETCHING"
                    ? "Processing..."
                    : "Send Request"}
                  {!jsonError && terminalState !== "FETCHING" && (
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT: ADVANCED RESPONSE CONSOLE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#080808] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-full min-h-[500px]"
          >
            {/* Header / Tools */}
            <div className="bg-[#0A0A0A] border-b border-white/5">
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors" />
                  <span className="ml-4 text-xs font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    DevTools Console
                  </span>
                </div>

                {/* Action Buttons */}
                {terminalState === "SUCCESS" && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={downloadJson}
                      className="p-1.5 text-neutral-500 hover:text-white hover:bg-white/10 rounded-md transition-all"
                      title="Download JSON"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="p-1.5 text-neutral-500 hover:text-white hover:bg-white/10 rounded-md transition-all"
                      title="Copy Output"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <div className="w-px h-4 bg-white/10 mx-1" />
                    <button
                      onClick={clearConsole}
                      className="p-1.5 text-neutral-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-all"
                      title="Clear Console"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* TABS & METRICS (Only show if success) */}
              <AnimatePresence>
                {terminalState === "SUCCESS" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-wrap items-center justify-between px-4 py-2 bg-neutral-900/30 overflow-hidden"
                  >
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setConsoleTab("body")}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${consoleTab === "body" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-neutral-300"}`}
                      >
                        Response Body
                      </button>
                      <button
                        onClick={() => setConsoleTab("headers")}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${consoleTab === "headers" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-neutral-300"}`}
                      >
                        Headers (6)
                      </button>
                    </div>

                    <div className="flex items-center gap-4 px-2">
                      <span className="text-xs font-mono flex items-center gap-1.5 text-neutral-300">
                        <span
                          className={`w-2 h-2 rounded-full ${metrics.status === 200 || metrics.status === 201 ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" : "bg-yellow-500"}`}
                        />
                        {metrics.status}{" "}
                        {metrics.status === 201 ? "Created" : "OK"}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        {metrics.ms}ms
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        {metrics.size} B
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 relative bg-[#050505] overflow-y-auto">
              {/* Subtle Scanning Laser Line */}
              {terminalState === "SUCCESS" && (
                <motion.div
                  animate={{ y: ["0%", "500%", "0%"] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 right-0 h-[1px] bg-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.5)] pointer-events-none z-20"
                />
              )}

              <div className="p-4 md:p-6 font-mono text-sm leading-relaxed min-h-full">
                <AnimatePresence mode="wait">
                  {terminalState === "IDLE" && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 flex items-center h-[300px] justify-center italic"
                    >
                      [ Console Ready. Awaiting Input. ]
                    </motion.div>
                  )}

                  {terminalState === "FETCHING" && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-2 text-neutral-400"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >{`> Resolving DNS for api.gauravpandey.com...`}</motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >{`> Establishing TLS Handshake...`}</motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >{`> Connected. Sending ${activeEndpoint.method} payload...`}</motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-orange-400"
                      >{`> Awaiting TTFB (Time to First Byte)...`}</motion.p>
                      <div className="flex items-center gap-2 mt-4 text-white">
                        <Code2 className="w-4 h-4 animate-spin text-orange-500" />
                        <span className="animate-pulse">Processing...</span>
                      </div>
                    </motion.div>
                  )}

                  {terminalState === "SUCCESS" && consoleTab === "body" && (
                    <motion.div
                      key="body"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex"
                    >
                      {/* Line Numbers */}
                      <div className="flex flex-col text-neutral-700 pr-4 select-none text-right border-r border-white/5 mr-4 font-mono text-xs pt-1">
                        {Array.from({ length: lineCount }).map((_, i) => (
                          <span key={i}>{i + 1}</span>
                        ))}
                      </div>

                      {/* JSON Content */}
                      <motion.div
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex-1 overflow-x-auto"
                      >
                        <pre
                          className="whitespace-pre-wrap outline-none"
                          dangerouslySetInnerHTML={{
                            __html: syntaxHighlight(terminalOutput),
                          }}
                        />
                        <div className="mt-4 flex items-center">
                          <span className="text-green-500">{`~ `}</span>
                          <motion.div
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2.5 h-4 bg-orange-500 ml-2 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {terminalState === "SUCCESS" && consoleTab === "headers" && (
                    <motion.div
                      key="headers"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm"
                    >
                      <table className="w-full text-left border-collapse">
                        <tbody>
                          {Object.entries(responseHeaders).map(
                            ([key, value]) => (
                              <tr
                                key={key}
                                className="border-b border-white/5 hover:bg-white/[0.02]"
                              >
                                <td className="py-2 pr-4 text-orange-300 font-bold w-1/3">
                                  {key}:
                                </td>
                                <td className="py-2 text-green-400 break-all">
                                  {value}
                                </td>
                              </tr>
                            ),
                          )}
                        </tbody>
                      </table>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
