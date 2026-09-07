# Dreamy Invitation

An interactive digital invitation built with React, TypeScript, Vite, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

The production build can be checked with `npm run build`, then previewed with `npm run preview`.

## Optional music

Place an original audio file named `music.mp3` in the `public/` directory. The music control is opt-in and never autoplayed.

## Structure

- `src/components/`: opening screen, invitation card, event details, countdown, RSVP, navigation, and decorative UI.
- `src/hooks/`: typed countdown and audio controls.
- `src/pages/Invitation.tsx`: the composed invitation experience.
- `src/types/invitation.ts`: guest, event, and RSVP types.
