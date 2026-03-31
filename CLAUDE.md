@AGENTS.md

# UCI Free Stuff — Project Rules

## Project context
A directory of free and discounted perks for UCI students. Next.js + Supabase + Tailwind + shadcn/ui.

## Priorities
1. Ship a working MVP fast
2. Keep code readable and easy to extend
3. Don't over-build — this is a simple data display app

## File structure rules
- Pages go in `app/`
- Reusable components go in `components/`
- Supabase query functions go in `lib/supabase.ts`
- Keep it flat — don't create deep nested folders

## Component rules
- One component per file
- Props should be obvious — if you need to document a prop, simplify it
- No component should be doing data fetching AND rendering — separate concerns

## Database rules
- All Supabase queries go through `lib/supabase.ts` — no inline queries in components
- Never expose service role key on the client side
- Use Supabase RLS (Row Level Security) for anything user-facing

## What NOT to build yet
- User auth (not in MVP)
- Favorites or upvotes (stretch feature)
- Email digest (stretch feature)
- Complex animations or transitions

## Reminder
This is a content site. The complexity is in the data, not the code. Keep the code boring.
