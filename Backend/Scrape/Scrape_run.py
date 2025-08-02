from Backend.Scrape.link_extract import scrape_multiple_sites
from utils import websites,logging,goodlist


if __name__ == "__main__":
    print(websites)
    print(goodlist)
    cleaned_articles = scrape_multiple_sites(websites, max_scrolls=15)
    logging.info(f"Total articles scraped: {len(cleaned_articles)}") #Returns no of articles that are available after cleaning