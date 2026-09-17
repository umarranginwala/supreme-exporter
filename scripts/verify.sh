#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
fail=0
check() { if eval "$2"; then echo "OK  $1"; else echo "FAIL $1"; fail=1; fi; }
check "netlify.toml" "test -f netlify.toml"
check "vercel.json" "test -f vercel.json"
check "_headers" "test -f _headers"
check "config.js" "test -f js/config.js"
check "formsubmit" "grep -q formsubmit.co contact.html"
check "real email" "grep -q info@supremevalves.in js/config.js"
check "phone set" "grep -q 97732 js/config.js"
check "FAQ schema" "grep -q FAQPage faq.html"
check "IEC" "grep -q AFAFS5839J about.html"
check "export landers" "test $(ls export/*.html | wc -l | tr -d ' ') -ge 9"
check "sitemap" "test -f sitemap.xml"
check "privacy/terms" "test -f privacy.html && test -f terms.html"
exit $fail
