from flask import Flask, url_for, request, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/login", methods=['POST', 'GET'])
def login():
    name = ""
    if request.method == 'POST':
        name = request.form['name']
    else:
        name = request.args.get('name')
    return "Hello " + name + "!"


if __name__ == "__main__":
    app.run(port=1337, debug=True)
