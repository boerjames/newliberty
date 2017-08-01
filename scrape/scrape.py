from bs4 import BeautifulSoup
import requests
import time
import json

books = list()
base_url = 'https://mises.org'
url = 'https://mises.org/library/books?book_type=All&title=All&author=All&topic=All&austrian_school=All&level=All&sort_by=title&page='
NOT_FOUND = 'NOT_FOUND'


def process_book(book):
    tag_dict = dict()

    title = book.select('h2.teaser-title > a')
    tag_dict['title'] = title[0].text if title else NOT_FOUND

    tag_dict['topics'] = [topic.text for topic in book.select('p.tags > span')]

    date = book.select('span.date')
    tag_dict['date'] = date[0].text if date else NOT_FOUND

    author = book.select('span.author > span > a')
    tag_dict['author'] = author[0].text if author else NOT_FOUND

    description = book.select('div.body-content')
    tag_dict['description'] = description[0].text if description else NOT_FOUND

    tag_dict['links'] = dict()
    links = book.select('div.book-formats > div.format-item > div.file > div.content > span.file > a')
    for link in links:
        tag_dict['links'][link.text.lower()] = base_url + link['href']

    bookstore = book.select('div.book-formats > div.format-item > a.external-link')
    if bookstore:
        tag_dict['links'][bookstore[0].text.lower()] = bookstore[0]['href']

    books.append(tag_dict)


for page in range(66):
    print('Processing page {}'.format(page))

    page_url = url + str(page)
    html = requests.get(page_url)
    soup = BeautifulSoup(html.content, 'lxml')

    for book in soup.select('div.view-content > div.views-row > div.row > div.panel-body > div.group-right'):
        process_book(book)

    time.sleep(1)


with open('raw-data.json', 'w') as f:
    json.dump(books, f)