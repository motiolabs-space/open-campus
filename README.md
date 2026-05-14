# Campus Network (Laravel 13 AI-Native)

Welcome to the **Campus Network** project! This is an open-source initiative designed to provide a robust networking platform for campuses, built with the latest **Laravel 13**.

## 🚀 AI-Native Features

This project leverages Laravel 13's native AI capabilities:
- **Integrated AI SDK**: Unified interface for Gemini, OpenAI, and Anthropic.
- **Semantic Search**: Native vector search support via Eloquent.
- **Agent-Ready Architecture**: Designed for autonomous AI agents.

## Prerequisites

- **PHP 8.3+** (Installed in `laragon\bin\php\php83`)
- **MySQL 8.0+**
- **Laragon** (Recommended)

## Getting Started

1. **Configure Environment:**
   Ensure your `.env` has the correct database and AI provider credentials.

2. **Run Migrations:**
   ```bash
   php artisan migrate
   ```

3. **Install AI SDK:**
   ```bash
   composer require laravel/ai
   ```

## Development

This project is hosted in Laragon. To run:
1. Open Laragon.
2. Select PHP 8.3.
3. Click "Start All".
4. Access via `http://campusnetwork.test`.

## License

This project is licensed under the MIT License.
