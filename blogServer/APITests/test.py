import requests

url = 'http://localhost:3000/'
myobj = {'id': '15',
         'title' : 'This is a test request',
         'date' : '2023-06-09',
         'text' : 'I find writing python scripts very funny and interesting random filler text among chicken egg.'}

x = requests.post(url, json = myobj)

print(x.text)