import sqlite3 as lite
import simplejson as json


class DBcon:
    def __init__(self):
        self.db_test = 'test.db'

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
