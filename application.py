from flask import *
app = Flask(__name__, template_folder='html/templates', static_folder='html/static')

@app.route("/", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        log = request.get_json()
        print(str(log))
        with open("log.json", 'w') as logfile:
            logfile.write(str(log))
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
