                                        JOURNAL

TAGS=[SCRAPER,AUTOMATION,LOADER,API,REACT]


SCRAPER FLOWCHART
    A[Start: Run Scraper] --> B[Load websites.json]
    B --> C[Initialize Selenium WebDriver]
    C --> D[For each Website]
    D --> E[Check robots.txt (robot.py)]
    E --> F{Allowed to Scrape?}
    F -- No --> G[Skip Website]
    F -- Yes --> H[Scrape with Scroller (link_extract.py)]
    H --> I[Extract all <a href> links]
    I --> J[Select Good domains]
    J --> K[Save to scraped_articles.json]
    K --> L[End]


LOADER FLOWCHART
    A[Start: Run Loader] --> B[Load scraped_articles.json]
    B --> C[For each Link]
    C --> D[Try newspaper3k + Selenium (selenium_newspaper.py)]
    D --> E{Content Extracted?}
    E -- Yes --> F[Sanitize & Save as .txt File]
    E -- No --> G[Try Playwright Parser (playwright_extract.py)]
    G --> H{Success?}
    H -- Yes --> F
    H -- No --> I[Log Failure]
    F --> I[Next Link]
    I --> J[End]


___________________________

Default Model [SCRAPER]

The default model used a beautiful soup model, that initially looked for keywords in queries ,as in searched the links itself for the certain keywords , which didnt work, then switched to google rss to get certain articles or links but since google rss only showed a limited amount of articles we switched from that as well

___________________________

Iteration 1 [SCRAPER]

We swtiched the scraper to instead of checking google rss or we accessed certain economic sites link and searched for the keywords within these site links , which narrowed down the articles it has to parse through and get more results 

__________________________

Iteration 2[SCRAPER]

Beautiful soup only returned the static pages urls and links ,so the links it could acquire were limited since most sites nowadays used script for these links , to access these dynamic pages , we switched from beautiful soup to selenium which can scroll or move through these sites and access all the links present 

__________________________

Iteration 3 [SCRAPER]

Fully utilizing Selenium now , instead of checking individual tags for certain keywords or links to articles , since BERT is a model that benefits from having "junk" fed to it , we instead removed all select loops and just grabbed every href link on all the pages , this returned around 1200 articles ,from economic times and livemint, moneycontrol had an antibot software "akami" that prevented us from scraping it , and since overcoming that obstacle would question the legality and ethics , i opted not to 

__________________________

Iteration 4[SCRAPER,AUTOMATION]

Since BERT requires a large volume of data , i decided to add more sites to scrape for the model , initially i decided to do this manually ,just adding links to url and then building the for loop myself , i realised it would take alot of time , so instead decided to automate the process ,uttilizing two arrays , one for the website links and one for the saved articles, i also added a bert scroller to this t access more links that might not have been previously accessible just through loading javascript using selenium

__________________________

Iteration 5 [SCRAPER,AUTOMATION]

Added a blacklist array which indicates the sites to not scrape, this was done so that bert does not scrape or access junk sites , also added alot of try exception blocks so that program dosent crash when a single site dosent load

This iteration worked , added a few exception blocks here and there, added functions to check browser health , and make the system more redundant

___________________________

Iteration 6[SCRAPER]

So modularized the code and split it into smaller chunks

link_extract contains the main functions which extracts links from the sites 

robot contains the function that parses through robot.txt of sites

utils contains the supporting function that are not integral but are general purpose 

Scrape_run contains the main run program

___________________________
___________________________

Default Model [LOADER]

The default model followed a similar architecture to that of the scraper since they both had a similar function , but this one used newpapery3k to parse through the articles whose links and titles were collected and stored in a json file , the loader is built to extract all the content in main articles and store it in a seperate folder as txt files with their respective title names 

__________________________

Iteration 1 [LOADER]

Since newspapery3k class article was constantly reloaded on every scroll but the contents were not stored to a file or array,we lost all the data except the content that was present on the html doc on the last iteration or the last scroll , to fix this we implemented a string that is constantly concatenated on every loop of the scroll ,as in article writes its content into this string before new scroll is executed 

__________________________

Iteration 2[LOADER]

Sinces articles load the same url constantly even after scrolling the page that is loaded is the initial page ,so scrolling becomes irrelevant ,to prevent this we needed to store the links in an array and after every scroll append the new link to this list and have the article url be called afterwards , so that the url can be skipped and article skips all url that came beforehand ,which are the ones present in array 

Scroll-->Click-->Article loaded-->Content parsed-->content stored-->Scroll again
                                |
                                |
                                |
Scroll-->Click-->Url Stored-->Url check runs-->Article loads-->Content parsed-->Content stored-->Scroll again

___________________________

Iteartion 3 [LOADER]

Build an advanced get function which creats a link with the site and receives logs from there , thus allowing more advanced debugging, added debugging into every single layer of the program and found the core issues which was a pathing issue , where new spaces caused error in the windows file naming system , updated the sanitizer of filenames  

___________________________

Iteration 4 [LOADER]

Ran into issues where some sites where parsed properly and some werent ,this was caused by the issue that most sites dont use proper tags and instead just use " " and strong tags inside html for paragraphs , which breaks most libraries used for parsing , created a seperate function for dealing with such raw html tags by utilizing xpath 

___________________________

Iteration 5 [LOADER]

Abandoned the xpath function and instead decided to use a new library playwright , which is capable of rendering and parsing even the most js heavy and complicated and with a few tweaks , it was capable of parsing through the most broken html sites , but since it was somewhat slow it is used alongside selenium-newspaper,as in certain links are fed into playwright and rest are fed into newspaper
___________________________

Iteration 6 [LOADER]

So playwright began working for me , but certain articles became stuck on parsing for extremely long times ,so added a timeout function for playwright , also split everything into modules and its own seperate programs, there was a tiny issue with the loader where if the link of the site wasnt explicitly named then it would automatically go to selenium-newspaper which could cause issues , so instead of checking site name at loader , every link is sent to selenium , and if it fails then its sent to playwright

                                            Sucess
            LOADER---->SELENIUM-NEWSPAPER------------>FILE SAVED
                            |
                            | Fail
                            |
                        PLAYWRIGHT----->FILE SAVED
___________________________

Iteration 7 [LOADER]

So i modularized the code , and split it into smaller chunks 

Utils file containing general functions that are not integral to code and act as supporting code

Selenium_newspaper contains the newspaper-selenium function that is used to load the content that can be extracted from non js heavy sites 

Playwright_extract contains the code to extract content from JS-heavy sites  

Content_Extract contains the main function that goes through site after site

Extract_Run Contains the main run program

___________________________________
___________________________________

Default Model [API]

Created new json files where one stores goodlist and other stores websites , this was done so that api can directly interact with these lists which were previously inside .py files which could not be accessed 

Created save and fetch function for both of these json files so that they can be updated and viewed 

___________________________________
___________________________________

Default Model[REACT]



