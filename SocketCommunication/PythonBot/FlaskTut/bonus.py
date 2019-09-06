from flask import Flask
from OpenSSL import SSL

app = Flask(__name__)

@app.route('/')
def bonus1():
    return 'hello world'

if __name__ == "__main__":
    app.run(port='1337', debug=True)
