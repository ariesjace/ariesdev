"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  role: string;
  company: string;
  year: string;
  current?: boolean;
  description?: string;
  index?: number;
}

export default function TimelineItem({
  role,
  company,
  year,
  current = false,
  description,
  index = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
      className="flex gap-3"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center pt-1">
        <div
          className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
            current
              ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100"
              : "border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900"
          }`}
        />
        <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-700 mt-1" />
      </div>

      {/* Content */}
      <div className="pb-5 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className={`text-sm font-medium ${current ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-700 dark:text-zinc-300"}`}>
              {role}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{company}</p>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 flex-shrink-0 mt-0.5">{year}</span>
        </div>
        {description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
