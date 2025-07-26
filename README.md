# 📰 Adaptive News Scraper

A scalable and customizable Python-based web scraper capable of extracting articles and blog posts from a wide range of news websites. Designed with modularity and extensibility in mind, it currently supports scraping from over 15 popular financial and news platforms — and can be adapted to thousands more with minimal configuration.

---

## 🚀 Features

- 🔄 **Supports multiple domains** (ET, Reuters, Business Standard, Moneycontrol, etc.)
- ⚙️ **Modular architecture** – easy to add site-specific scrapers or generic fallbacks.
- 🧠 **Fallback parsing logic** for sites with irregular HTML structures.
- 📄 **Outputs clean `.txt` files** for use in NLP or sentiment analysis.
- 📚 Built for **large-scale data collection** (tested for 2500+ articles).
- ⏱️ Integrated **timeouts and logging** to handle delays or dead links.
- 🌐 Optional **Playwright support** for JavaScript-heavy pages.

---

## 🛠 Installation

```bash
git clone https://github.com/yourusername/adaptive-news-scraper.git
cd adaptive-news-scraper
pip install -r requirements.txt
