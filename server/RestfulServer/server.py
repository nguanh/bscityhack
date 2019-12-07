#python 2.7.10
#pip install flask

from flask import Flask, jsonify
from dbcon import DBcon

# Init
app = Flask(__name__)
db = DBcon()


@app.route('/')
def index():
    return "Hello, World!"


@app.route('/api/v1.0/test', methods=['GET'])
def get_tests():
    data = db.getTests()
    if data is not None:
        return data, 200
        #return jsonify(data), 200
    else:
        return jsonify({'error': 'no content'}), 404


@app.route('/api/v1.0/test/<string:id>', methods=['GET'])
def get_test(id):
    data = db.getTest(id)
    if data is not None:
        return data, 200
    else:
        return jsonify({'error': 'no content'}), 404


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
