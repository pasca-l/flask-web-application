from flask import *
app = Flask(__name__, template_folder='html/templates', static_folder='html/static')

@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template("index.html")

@app.route("/confirm", methods=['POST', 'GET'])
def confirm():
    if request.method == 'POST':
        result = request.form["name"]
        return render_template("confirm.html", result=result)

if __name__ == '__main__':
    app.run(debug=True)
