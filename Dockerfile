# Evermon bot — the autonomous Pokémon Red player.
# The ROM is NOT baked in (copyright): mount your own .gbc and ai.config.json at runtime.
#
#   docker run --rm -p 8899:8899 \
#     -v "$PWD/ai.config.json:/app/ai.config.json" \
#     -v "$PWD/pokered.gbc:/app/pokered.gbc" \
#     ghcr.io/evermontest/evermon:latest
FROM python:3.12-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends libsdl2-2.0-0 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY bot/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY bot/ /app/

EXPOSE 8899
CMD ["python", "play.py"]
