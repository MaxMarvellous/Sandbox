import re

quotes = """The Scandal of education is that every time 
you teach something, you deprive a student of the pleasure 
and benefit of discovery.
(Seymour Papert, born February 29, 1928 died July 31 2016)

If debugging is the process of removing bugs, then programming 
must be the process of putting them in.
(Edsger W. Dijkstra)
"""
quotes = re.sub(r'\W', ' ', quotes)
words = quotes.split(' ')
print('There are {} words in this text'.format(len(words)))

maxChars = ''
for i in range(0, len(words)):
    if len(words[i]) > len(maxChars):
        maxChars = words[i]

print('The longest word in the text is : {}'.format(maxChars))
