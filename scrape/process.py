import json
import re
import os
from pprint import pprint

from nameparser import HumanName

data = dict()

with open('raw-data.json', 'r') as f:
    data['books'] = json.load(f)


authors = set()
topics = set()
books = list()

book_whitelist = [
    'Anatomy of the State',
    'Economics in One Lesson',
    'Human Action'
]

for book in data['books']:
    if book['title'] in book_whitelist:
        new_book = book
        new_book['titlesearch'] = re.sub(r'[^\w\s]', '', book['title']).lower()

        books.append(new_book)
        authors.add(new_book['author'])
        topics.update(sorted(new_book['topics']))


authors_ordered = list()
name_format = "{title} {first} {middle} {last} {suffix}"
sort_format = "{last} {first} {middle}"

for author in authors:
    hn = HumanName(author)

    hn.string_format = name_format
    name = str(hn)

    hn.string_format = sort_format
    name_ordered = str(hn).lower()

    authors_ordered.append((name, name_ordered))


data['authors'] = [t[0] for t in sorted(authors_ordered, key=lambda t: t[1])]
data['topics'] = sorted(topics)
data['books'] = [book for book in sorted(books, key=lambda b: b['title'])]


books_path = os.path.abspath(os.path.join(os.path.pardir, 'src/data/books.json'))
with open(books_path, 'w') as f:
    json.dump(data, f)

