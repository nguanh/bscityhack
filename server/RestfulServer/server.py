#python 2.7.10
#pip install flask

from flask import Flask, request, jsonify
from dbcon import DBcon
from pdfmanager import *
#from qrreader import *

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
    else:
        return jsonify({'error': 'no content'}), 404


@app.route('/api/v1.0/formdata', methods=['GET'])
def get_forms():
    data = db.getForms()
    if data is not None:
        return data, 200
    else:
        return jsonify({'error': 'no content'}), 404


@app.route('/api/v1.0/test/<string:id>', methods=['GET'])
def get_test(id):
    data = db.getTest(id)
    if data is not None:
        return data, 200
    else:
        return jsonify({'error': 'no content'}), 404


@app.route('/api/v1.0/formdata/<string:id>', methods=['GET'])
def get_form(id):
    data = db.getForm(id)
    if data is not None:
        return data, 200
    else:
        return jsonify({'error': 'no content'}), 404


@app.route('/api/v1.0/test', methods=['POST'])
def new_test():
    data = request.data
    response = db.newTest(data)
    if response is not None:
        return jsonify({'id': response}), 201
    else:
        return jsonify({'error': 'could not create'}), 500


@app.route('/api/v1.0/formdata', methods=['POST'])
def new_form():
    data = request.data
    response = db.newForm(data)
    if response is not None:
        return jsonify({'id': response}), 201
    else:
        return jsonify({'error': 'could not create'}), 500


@app.route('/api/v1.0/formdata/<string:id>', methods=['POST'])
def update_form(id):
    data = request.data
    response = db.updateForm(id, data)
    if response is not None:
        return jsonify({'update': 'ok'}), 200
    else:
        return jsonify({'error': 'could not update'}), 500


@app.route('/api/v1.0/formdata/qr/<string:id>', methods=['POST'])
def received_qr(id):
    data = request.data
    # check incoming qr data
    # ToDo
    #readPDF()
    response = createPDF(id, data)
    if response > 0:
        return jsonify({'formular_data': 'not ok'}), 406
    else:
        return jsonify({'formular_data': 'ok'}), 200

"""
@app.route('/readqr', methods=['GET'])
def readQRcode():
    readQR()
    return jsonify({'reading_qr': 'finished'}), 200
"""

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
