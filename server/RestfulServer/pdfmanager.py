import os
import pdfrw
import ast
#import pypdftk

ANNOT_KEY = '/Annots'
ANNOT_FIELD_KEY = '/T'
SUBTYPE_KEY = '/Subtype'
WIDGET_SUBTYPE_KEY = '/Widget'

def createPDF(id, data):
    try:
        file_in = '/Users/danyel/Workspace/bscityhack/server/RestfulServer/forms/' + str(id) + '.pdf'
        file_out = '/Users/danyel/Workspace/bscityhack/server/RestfulServer/forms/' + str(id) + '_print.pdf'
        dict = ast.literal_eval(data)
        if not os.path.isfile(file_in):
            print ("File does not exist")
            return 1
        pdf = pdfrw.PdfReader(file_in)
        annotations = pdf.pages[0][ANNOT_KEY]
        for annotation in annotations:
            if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
                if annotation[ANNOT_FIELD_KEY]:
                    #print annotation
                    key = annotation[ANNOT_FIELD_KEY][1:-1]
                    #vkey = annotation['/AP']['/N']['/stream']
                    #print vkey
                    if key in dict.keys():
                        annotation.update(
                            pdfrw.PdfDict(V='{}'.format(dict[key]))
                        )
        pdfrw.PdfWriter().write(file_out, pdf)
        # dirty hack
        # https://github.com/pmaupin/pdfrw/issues/84#issuecomment-463493521
        pdf = pdfrw.PdfReader(file_out)
        pdf.Root.AcroForm.update(pdfrw.PdfDict(NeedAppearances=pdfrw.PdfObject('true')))
        # https://github.com/pmaupin/pdfrw/issues/84#issuecomment-385275811
        #annotations = pdf.pages[0]['/Annots']
        #for annotation in annotations:
            # ... validate / update fields here
            #annotation.update(pdfrw.PdfDict(AP=''))

        pdfrw.PdfWriter(file_out, pdf)
        return 0
    except Exception, e:
        print 'PDF: Error creating pdf'
        print e
        return 2


TEST_IN = '/Users/danyel/Workspace/bscityhack/server/RestfulServer/forms/yuckfou.pdf'
TEST_OUT = '/Users/danyel/Workspace/bscityhack/server/RestfulServer/forms/print.pdf'

data_dict = {
'gemeindeschluessel': '124Haha',
'einzugstag': 'Not today',
'adresseNeu': 'Musterstrasse',
'plzNeu': '123456',
'adresseWeitere': 'Here s',
'plzWeitere': '',
'zugezogen': 'Yes',
'zugezogenAddress': '',
'zugezogenPlz': '',
'wohnung': 'Yes', #oder Off
'wohnung_allein': 'Off',
'wohnung_haupt': 'Yes',
'wohnung_neben': 'Off'
}

"""
def readPDF():
    print 'start writing pdf now'
    #pdf = pypdftk.dump_data_fields(TEST_IN)
    #print pdf
    pdf = pypdftk.fill_form(TEST_IN, data_dict)
    print 'form filled'
    out_pdf = pypdftk.concat([TEST_OUT, pdf])
    print 'finished'
    return
"""

def readPDF():
    if not os.path.isfile(TEST_IN):
        print ("File does not exist")
        return
    pdf = pdfrw.PdfReader(TEST_IN)
    annotations = pdf.pages[0][ANNOT_KEY]
    for annotation in annotations:
        #print annotation
        if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
            #value = None
            #if annotation['/V'][1:-1]:
                #value = annotation['/V'][1:-1]
            #print annotation
            if annotation[ANNOT_FIELD_KEY]:
                key = annotation[ANNOT_FIELD_KEY][1:-1]
                #print "'"+key+"': '',"
                #if value is not None:
                    #print 'key: ' + str(key) + ', value: ' + str(value)
                if key in data_dict.keys():
                    annotation.update(
                        pdfrw.PdfDict(V='{}'.format(data_dict[key]))
                    )
    pdfrw.PdfWriter().write(TEST_OUT, pdf)