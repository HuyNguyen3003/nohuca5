# Design System & Figma MCP Integration

> Bộ quy ước xây dựng **Design System** + tích hợp **Figma MCP Server** để biến thiết kế Figma thành code Next.js thống nhất, tái sử dụng **tokens**, **components**, và **patterns** hiện có.

---

## 0. Repo Discovery (chạy 1 lần khi mở dự án)

> Mục tiêu: Tự động tìm vị trí **tokens**, **components**, **global styles**, và các thiết lập build để tích hợp Figma.
> _Có thể bỏ qua nếu repo đã có cấu trúc chuẩn._

```bash
# 0.1 Tokens & Styles
rg -n "tokens|design-tokens|:root|--color-|--radius-|--space-|--font-" --glob "**/*.{ts,tsx,js,jsx,css,scss,json,md}" || true

# 0.2 UI Components
rg -n "components/ui|shadcn|cn\(|cva|variants" src || true

# 0.3 Storybook / Docs
rg -n "\.storybook|stories\.(ts|tsx|mdx)" || true

# 0.4 Assets & Config
rg -n "next\.config\.(js|ts)|images\:|remotePatterns|public/|/assets/" || true

# 0.5 Icons
rg -n "lucide-react|@heroicons|react-icons|/icons/" || true
```

Khi đã xác định được các path, cập nhật các field `Paths → …` trong từng mục bên dưới.

## 1. Design System

### 1.1 Tokens

**Paths →**

- CSS variables: `src/styles/theme.css` hoặc `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- JSON tokens (tuỳ chọn): `src/styles/tokens.json`

**Nguyên tắc:**

- Không hard-code màu/spacing trực tiếp trong component.
- Ưu tiên CSS Variables (`:root`) + alias cho light/dark theme.
- Nếu cần, dùng `tokens.json` làm nguồn chuẩn, build ra CSS/Tailwind.

```css
:root {
  --color-bg: 255 255 255;
  --color-fg: 17 24 39;
  --color-primary: 99 102 241;
  --radius-base: 1rem;
  --space-1: 0.25rem;
  --font-sans: ui-sans-serif, system-ui, "Inter", sans-serif;
}
```

### 1.2 Components

**Paths →**

- `src/components/ui/*` (ví dụ shadcn/ui)
- `src/components/*` (app-level)
- Docs/Storybook: `.storybook/*`, `stories.mdx`

**Do/Don't:**

- ✅ `<Button variant="outline" size="sm" />`
- ❌ Không copy CSS inline từ Figma.

### 1.3 Frameworks & Libraries

- Next.js 15 (App Router, TS)
- Tailwind CSS + tokens (CSS variables)
- shadcn/ui + radix-ui
- lucide-react (icons)
- Prisma + PostgreSQL (DB chuẩn, dễ maintain)
- (Optional) framer-motion, @react-three/fiber

### 1.4 Assets & Icons

- **Assets** → `public/assets/`
  - Quy ước: `public/assets/<category>/<name>.<ext>`
  - `next/image` với `remotePatterns` trong `next.config.ts`
- **Icons** → `src/components/icons/*`
  - Dùng `lucide-react`, export tại `icons/index.ts`.

### 1.5 Styling

- Utility-first với Tailwind + CVA.
- Global styles chỉ dành cho tokens, resets, fonts.
- Responsive: `sm/md/lg/xl/2xl`.
- Motion: `framer-motion` (nhẹ), `three.js` (optional).

### 1.6 Project Structure

```txt
.
├─ src/
│  ├─ app/               # App Router
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ (marketing)/
│  │     └─ components/
│  └─ components/
│     ├─ ui/             # shadcn/ui
│     ├─ three/          # react-three-fiber helpers
│     └─ common/         # primitives chung
├─ lib/
│  ├─ db.ts              # Prisma client
│  ├─ cn.ts              # classnames util
│  └─ figma-map.ts       # Figma → components
├─ prisma/
│  └─ schema.prisma
├─ public/assets/
├─ styles/
│  └─ tokens.json (optional)
├─ tests/                # Unit/E2E tests
├─ scripts/              # build/sync
├─ src/app/globals.css
├─ tailwind.config.ts
└─ next.config.ts
```

## 2. Figma → Code (MCP)

### 2.1 MCP Config

```jsonc
{
  "mcpServers": {
    "figma": {
      "command": "node",
      "args": ["/path/to/mcp-server-figma/index.js"],
      "env": { "FIGMA_TOKEN": "${env:FIGMA_TOKEN}" }
    }
  }
}
```

Lấy `FIGMA_TOKEN` trong Figma → Settings → Personal Access Tokens.

### 2.2 Mapping Rules

**Nguyên tắc chung (3 bước):**

1. Map sang **tokens** trước (màu, spacing, font).
2. Nếu không có → map sang **component** (shadcn/ui).
3. Nếu không match → log warning và thêm alias.

**Ví dụ:**

- Màu: `fills/solid` → `bg-primary`, `text-fg`
- Text: map font size/weight → `text-lg font-semibold`
- Spacing: snap về `--space-*`

## 3. API + Database

- DB khuyến nghị: **PostgreSQL + Prisma**
- API chuẩn JSON `{ data, error }`

```ts
return NextResponse.json({ data: msg, error: null });
```

## 4. Onboarding

### Core libs

```bash
pnpm add next tailwindcss postcss autoprefixer class-variance-authority lucide-react prisma @prisma/client
```

### Optional (motion, 3D)

```bash
pnpm add framer-motion @react-three/fiber @react-three/drei
```

### Prisma

```bash
pnpm prisma init
pnpm prisma migrate dev --name init
```

### Run

```bash
pnpm dev
```

## 5. Review Checklist

- [ ] Reuse tokens & components
- [ ] Không hard-code màu/spacing
- [ ] Responsive tốt (≥ sm)
- [ ] Dark mode OK
- [ ] A11y (alt text, roles)

## 6. Notes

- Nếu repo đã có tokens/storybook → cập nhật lại `Paths → …` ở trên.
- MCP sinh code chưa chuẩn variant? → thêm mapping trong `lib/figma-map.ts`.
- Ảnh từ Figma: export vào `public/assets/...` và dùng `next/image`.

## 7. Tham chiếu

- **Figma file**: App-Hu-Ca-5-DEV ( https://www.figma.com/design/S2mir453A9r2Xfk8sHh5IJ/App-Hu-Ca-5-DEV?node-id=0-1&m=dev)
- **DB** (local MongoDB demo): `mongodb://admin:password@localhost:27017/?retryWrites=true&authSource=admin`
