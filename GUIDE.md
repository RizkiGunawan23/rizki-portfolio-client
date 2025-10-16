src/
├─ app/ → folder routing Next.js (App Router)
├─ components/ → hasil generate shadcn (global UI components)
│ └─ ui/
│ ├─ button.tsx
│ ├─ input.tsx
│ ├─ dialog.tsx
│ └─ ...
├─ features/ → fitur modular
│ ├─ auth/
│ │ ├─ components/ → komponen khusus fitur auth
│ │ ├─ hooks/
│ │ ├─ services/
│ │ ├─ types.ts
│ │ └─ index.ts
│ ├─ dashboard/
│ ├─ user/
│ └─ ...
├─ shared/ → util/fungsi/komponen yg bisa dipakai banyak fitur
│ ├─ components/
│ ├─ hooks/
│ ├─ types/
├─ lib/ → helper global (axios instance, queryClient, utils)
├─ types/ → tipe global (misal User, ApiResponse)
├─ styles/ → tailwind config, global css
└─ config/ → env, constants, key map, dll (opsional)
