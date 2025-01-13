from flask import Flask, render_template, jsonify
from datetime import datetime
from babel.dates import format_datetime

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/time")
def get_time():
    # Obtém a data e hora atual
    now = datetime.now()

    # Formata a data no estilo brasileiro (pt-BR)
    formatted_date = format_datetime(now, "EEEE, d 'de' MMMM 'de' yyyy", locale="pt_BR")

    return jsonify({
        "time": now.strftime("%H:%M:%S"),
        "date": formatted_date
    })

if __name__ == "__main__":
    app.run(debug=True)
