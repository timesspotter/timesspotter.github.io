from flask import Flask
from flask import request
from flask import redirect

app = Flask(__name__)

@app.route("/api/subscribe", methods=["POST"])
def hello_world():
    print(f"Message received {request.form}")
    # Here to send email
    # return redirect('/static/index.html') 


    
if __name__ == "__main__":
    app.run(debug=True, port=8888)
