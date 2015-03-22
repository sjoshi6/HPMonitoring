__author__ = 'saurabh'
import time
import os
import sys

# this code needs command line parameters of log and temp file
def file_parse_helper(CL_Arr):
    file_handler= open(CL_Arr[0],'r')
    file_read_helper=file_handler.tell()
    while True:
        if file_read_helper != os.fstat(file_handler.fileno()).st_size:
            file_handler.seek(file_read_helper)
            data=file_handler.read()
            temp=open(CL_Arr[1],'w')
            temp.write(data)
            temp.close()
            file_read_helper=file_handler.tell()
            time.sleep(5)

file_parse_helper(sys.argv[1:])
