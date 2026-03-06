"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import {
  ArrowLeft,
  Upload,
  X,
  FileText,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type UploadFile = File & { preview?: string };
type Status = "idle" | "sending" | "success" | "error";

const BUDGETS = [
  "< $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Let's discuss",
];
const TIMELINES = [
  "ASAP",
  "1 – 2 weeks",
  "1 month",
  "2 – 3 months",
  "3+ months",
  "Flexible",
];

const FIELD =
  "w-full h-9 px-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-ring/60 focus:ring-2 focus:ring-ring/10 font-[inherit]";
const LBL = "block text-xs font-medium text-muted-foreground mb-1.5";

function fmtSize(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1048576).toFixed(1)} MB`;
}

function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(value === o ? "" : o)}
          className={cn(
            "h-[30px] px-3 rounded-lg border text-[0.78rem] font-medium transition-all",
            value === o
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-muted-foreground bg-background hover:border-foreground/40 hover:text-foreground",
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function InquirePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [desc, setDesc] = useState("");
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const onDrop = useCallback((accepted: File[]) => {
    const mapped = accepted.map((f) =>
      Object.assign(f, {
        preview: f.type.startsWith("image/")
          ? URL.createObjectURL(f)
          : undefined,
      }),
    ) as UploadFile[];
    setFiles((prev) => [...prev, ...mapped].slice(0, 10));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
      "application/pdf": [".pdf"],
    },
    maxSize: 10 * 1024 * 1024,
    multiple: true,
  });

  const removeFile = (i: number) => {
    setFiles((prev) => {
      const next = [...prev];
      if (next[i].preview) URL.revokeObjectURL(next[i].preview!);
      next.splice(i, 1);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrMsg("");
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("subject", subject);
      fd.append("budget", budget);
      fd.append("timeline", timeline);
      fd.append("description", desc);
      files.forEach((f) => fd.append("files", f));
      const res = await fetch("/api/inquire", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <PageContainer>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 mb-6 text-muted-foreground"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Back
          </Link>
        </Button>
        <div className="max-w-md mx-auto pt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="rounded-[14px] border-transparent shadow-sm text-center py-14 px-8">
              <CardContent className="p-0 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight mb-2">
                    Message sent!
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                    Thanks{name ? `, ${name}` : ""}. I'll get back to you at{" "}
                    <span className="font-medium text-foreground">{email}</span>{" "}
                    as soon as possible.
                  </p>
                </div>
                <Button variant="outline" size="sm" className="mt-1" asChild>
                  <Link href="/">Back to portfolio</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <footer className="mt-14 pt-5 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 Aries Jace Balgos. All rights reserved.
        </footer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 mb-5 text-muted-foreground"
        asChild
      >
        <Link href="/">
          <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          Back
        </Link>
      </Button>

      <div className="max-w-[640px]">
        <h1 className="text-2xl font-semibold tracking-tight mb-1">
          Inquire a Project
        </h1>
        <p className="text-sm text-muted-foreground mb-7">
          Tell me about what you're building. I'll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={LBL} htmlFor="f-name">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                id="f-name"
                className={FIELD}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className={LBL} htmlFor="f-email">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                id="f-email"
                type="email"
                className={FIELD}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className={LBL} htmlFor="f-subject">
              Subject
            </label>
            <input
              id="f-subject"
              className={FIELD}
              placeholder="e.g. E-Commerce Website, AI Dashboard..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div>
            <p className={LBL}>Budget Range</p>
            <ChipGroup options={BUDGETS} value={budget} onChange={setBudget} />
          </div>

          <div>
            <p className={LBL}>Timeline</p>
            <ChipGroup
              options={TIMELINES}
              value={timeline}
              onChange={setTimeline}
            />
          </div>

          <div>
            <label className={LBL} htmlFor="f-desc">
              Project Description <span className="text-red-400">*</span>
            </label>
            <textarea
              id="f-desc"
              rows={5}
              className={cn(FIELD, "h-auto py-2.5 resize-none leading-relaxed")}
              placeholder="Describe your project — goals, features, stack preferences, references..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>

          <div>
            <p className={LBL}>
              Attachments{" "}
              <span className="font-normal text-muted-foreground/60">
                (images, PDFs · max 10 MB each)
              </span>
            </p>
            <div
              {...getRootProps()}
              className={cn(
                "border-2 border-dashed rounded-[14px] p-7 text-center cursor-pointer select-none transition-all duration-200",
                isDragActive
                  ? "border-foreground/40 bg-secondary"
                  : "border-border hover:border-foreground/30 hover:bg-muted/30",
              )}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center gap-2.5 pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <Upload className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {isDragActive
                      ? "Drop files here"
                      : "Drag & drop files here"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    or{" "}
                    <span className="text-foreground underline underline-offset-2">
                      click to browse
                    </span>{" "}
                    · PNG, JPG, GIF, WEBP, PDF
                  </p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {files.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2.5 space-y-2 overflow-hidden"
                >
                  {files.map((f, i) => (
                    <motion.div
                      key={`${f.name}-${i}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] border border-border bg-background"
                    >
                      <div className="w-9 h-9 rounded-md border border-border overflow-hidden flex-shrink-0 flex items-center justify-center bg-muted">
                        {f.preview ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={f.preview}
                            alt={f.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <FileText className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">
                          {f.name}
                        </p>
                        <p className="text-[0.68rem] text-muted-foreground">
                          {fmtSize(f.size)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors flex-shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-start gap-2.5 px-4 py-3 rounded-[10px] bg-red-50 border border-red-200 text-sm text-red-700"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {errMsg}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3 pt-1">
            <Button
              type="submit"
              disabled={status === "sending"}
              className="min-w-[130px]"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Inquiry"
              )}
            </Button>
            <p className="text-xs text-muted-foreground">
              I typically respond within 24 hours.
            </p>
          </div>
        </form>
      </div>

      <footer className="mt-14 pt-5 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Aries Jace Balgos. All rights reserved.
      </footer>
    </PageContainer>
  );
}
