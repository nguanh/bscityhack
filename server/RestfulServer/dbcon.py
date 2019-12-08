import sqlite3 as lite
import simplejson as json


class DBcon:
    def __init__(self):
        self.db_test = 'test.db'
        self.db_formData = 'formData.db'

    def getTest(self, id):
        try:
            db_connection = lite.connect(self.db_test)
            with db_connection:
                db_cursor = db_connection.cursor()
                db_cursor.execute("SELECT json from tests WHERE id='" + str(id) + "'")
                data = db_cursor.fetchone()[0]
            db_connection.close()
            #return json.dumps(data)
            return json.loads(data)
        except Exception, e:
            db_connection.close()
            print('DB: Error in getTest(id)')
            print e
            return None
            pass

    def getForm(self, id):
        try:
            db_connection = lite.connect(self.db_formData)
            with db_connection:
                db_cursor = db_connection.cursor()
                db_cursor.execute("SELECT json from formData WHERE id='" + str(id) + "'")
                data = db_cursor.fetchone()[0]
            db_connection.close()
            return json.loads(data)
        except Exception, e:
            db_connection.close()
            print('DB: Error in getForm(id)')
            print e
            return None
            pass

    def newTest(self, json):
        try:
            db_connection = lite.connect(self.db_test)
            with db_connection:
                db_cursor = db_connection.cursor()
                sqlstr = "INSERT INTO tests (json) VALUES ('" + json + "')"
                db_cursor.execute(sqlstr)
                db_connection.commit()
                rowid = db_cursor.lastrowid
            db_connection.close()
            return rowid
        except Exception, e:
            print('DB: Error in newTest(json)')
            print e
            return None
            pass

    def newForm(self, json):
        try:
            db_connection = lite.connect(self.db_formData)
            with db_connection:
                db_cursor = db_connection.cursor()
                sqlstr = "INSERT INTO formData (json) VALUES ('" + json + "')"
                db_cursor.execute(sqlstr)
                db_connection.commit()
                rowid = db_cursor.lastrowid
            db_connection.close()
            return rowid
        except Exception, e:
            print('DB: Error in newForm(json)')
            print e
            return None
            pass

    def updateForm(self, id, json):
        try:
            db_connection = lite.connect(self.db_formData)
            with db_connection:
                db_cursor = db_connection.cursor()
                sqlstr = "UPDATE formData SET json = '" + json + "' WHERE id = " + str(id)
                db_cursor.execute(sqlstr)
                db_connection.commit()
            db_connection.close()
            return 'ok'
        except Exception, e:
            print('DB: Error in updateForm(id, json)')
            print e
            return None
            pass

    def getTests(self):
        try:
            db_connection = lite.connect(self.db_test)
            with db_connection:
                db_connection.row_factory = lambda cursor, row: row[0]
                c = db_connection.cursor()
                rows = c.execute('SELECT json FROM tests').fetchall()
                data = "{\"tests\":["
                for row in rows:
                    data = data + row + ","
                data = data[:-1] + "]}"
            db_connection.close()
            return json.loads(data)
        except Exception, e:
            db_connection.close()
            print('DB: Error in getTests()')
            print e
            return None
            pass

    def getForms(self):
        try:
            db_connection = lite.connect(self.db_formData)
            with db_connection:
                db_connection.row_factory = lambda cursor, row: row[0]
                c = db_connection.cursor()
                rows = c.execute('SELECT json FROM formData').fetchall()
                data = "{\"forms\":["
                for row in rows:
                    data = data + row + ","
                data = data[:-1] + "]}"
            db_connection.close()
            return json.loads(data)
        except Exception, e:
            db_connection.close()
            print('DB: Error in getForms()')
            print e
            return None
            pass
