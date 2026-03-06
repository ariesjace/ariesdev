"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeaderSection() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col sm:flex-row gap-5 items-start mb-6"
    >
      {/* Avatar */}
      <div className="flex-shrink-0 w-[108px] h-[108px] rounded-[14px] overflow-hidden border border-transparent shadow-sm hover:border-border hover:shadow-md transition-all duration-200 bg-muted">
        <Image
          src="/images/avatar.jpg"
          alt="Aries Jace Balgos"
          width={108}
          height={108}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name / role */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-[7px] mb-0.5">
          <h1 className="text-xl font-semibold tracking-tight leading-tight">
            Aries Jace Balgos
          </h1>
          {/* Facebook-style verified badge */}
          <span
            title="Verified"
            aria-label="Verified"
            className="flex-shrink-0 w-5 h-5"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#1877F2" />
              <path
                d="M7 12.5l3.5 3.5 6.5-7"
                stroke="white"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-0.5">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          Philippines
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Software Developer / AI Developer
        </p>
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" asChild>
            <Link href="/inquire">Inquire Project</Link>
          </Button>

          <Button size="sm" variant="outline" asChild>
            <a href="mailto:ariesjace.mail@gmail.com">Send me an Email</a>
          </Button>
        </div>
      </div>

      {/* Right: status + socials */}
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-transparent bg-card shadow-sm hover:border-border hover:shadow-md transition-all duration-200 text-sm text-foreground w-fit whitespace-nowrap">
          <span className="w-[7px] h-[7px] rounded-full bg-green-500 flex-shrink-0" />
          Now accepting Q1 2026 projects
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-foreground">Social Links</p>
          <div className="flex gap-[7px]">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/arrzenn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-[10px] bg-card border border-transparent shadow-sm text-muted-foreground flex items-center justify-center hover:border-border hover:shadow-md hover:text-foreground transition-all duration-200"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/a.jaceu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-[10px] bg-card border border-transparent shadow-sm text-muted-foreground flex items-center justify-center hover:border-border hover:shadow-md hover:text-foreground transition-all duration-200"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/ariesjace"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-[10px] bg-card border border-transparent shadow-sm text-muted-foreground flex items-center justify-center hover:border-border hover:shadow-md hover:text-foreground transition-all duration-200"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aries-jace-balgos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-[10px] bg-card border border-transparent shadow-sm text-muted-foreground flex items-center justify-center hover:border-border hover:shadow-md hover:text-foreground transition-all duration-200"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
