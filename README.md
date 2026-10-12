# MONVYRA

A retro Pokémon-inspired frontend with an animated character channel, agent-code visualization, and a journey dashboard.

## Preview

Open **site/index.html**, or serve locally:

    cd site
    python _serve.py

Visit http://127.0.0.1:8080.

## Features

- MONVYRA branding and custom logo, Pokémon collage background.
- Six rotating characters with greetings, manual switching, and pause controls.
- Animated example code showing the agent observation / decision / action workflow.
- Shared, time-based demo statistics on Live and Journey.
- Eight badge slots, Pokédex previews, six-member party, HP bars, and route overview.
- Responsive layouts and reduced-motion support.

**Character animation, code console, party, badges and changing demo statistics are simulated, not evidence of a running AI or on-chain activity.** Live robot data takes priority when the configured backend is available.

## Backend

The original Python bot is in bot/. Copy bot/ai.config.example.json to bot/ai.config.json, configure your vision endpoint and ROM path, install bot/requirements.txt, and run play.py from bot/.

Never commit API keys, ROMs, or emulator saves. These are excluded by .gitignore.

The frontend retains the original backend endpoint in site/live.html and site/js/monvyra-journey.js; replace both before connecting your own bot. GitHub Pages hosts only the static frontend.

## Publishing

The optional Pages workflow is triggered manually after enabling GitHub Pages with **GitHub Actions** as its source. It publishes site/. No custom domain is configured.

Docker image publishing is also manual.

## Structure

- site/: website and assets
- site/monvyra.css: branding and responsive styles
- site/pikachu-live.css: animation and console styling
- site/js/monvyra-characters.js: character rotation and interactions
- site/js/monvyra-demo.js: shared simulated progress
- site/js/monvyra-journey.js: journey rendering and live-data polling
- bot/: original autonomous-player backend

## Attribution and configuration notes

Adapted from [evermontest/Evermon](https://github.com/evermontest/Evermon), with user-supplied MONVYRA branding. Original narrative content, social links, and token contract details remain in some pages and need owner review before a public launch.

Unofficial fan project, not affiliated with Nintendo, Creatures, or GAME FREAK. Pokémon names and artwork belong to their respective rights holders. No game ROM is included.