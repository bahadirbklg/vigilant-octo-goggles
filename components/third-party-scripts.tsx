"use client"

import Script from "next/script"

export function ThirdPartyScripts() {
  return (
    <>
      {/* Example of a non-critical third-party script - use lazyOnload */}
      <Script
        src="https://example.com/widget.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Script loaded correctly")}
      />

      {/* For critical third-party scripts that should load early but not block */}
      <Script src="https://example.com/critical-but-async.js" strategy="afterInteractive" />
    </>
  )
}
