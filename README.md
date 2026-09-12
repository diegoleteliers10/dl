# dl - Diego Letelier

Personal portfolio. Terminal-inspired, bilingual EN/ES, built with Astro.

## Stack

- Astro 7 + Tailwind CSS 4
- Geist Mono / Geist Sans
- No client framework: vanilla TS islands

## Commands

| Command         | Action                       |
| --------------- | ---------------------------- |
| `bun install`   | Install dependencies         |
| `bun run dev`   | Start dev server             |
| `bun run build` | Build production to `dist/`  |
| `bunx astro check` | Type-check `.astro` files |

## Structure

```
src/
  components/   Page sections (Nav, Hero, About, Projects, Experience, Contact)
  i18n/ui.ts    EN/ES copy
  layouts/      Base HTML shell
  pages/        index.astro (EN) + es/index.astro (ES)
  styles/       Tailwind theme tokens + motion styles
```

The hero terminal accepts commands: try `help`, `projects`, `sudo hire-me`.

Contact: dleteliersr@gmail.com
