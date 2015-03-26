import json
import sys

def json_parser(filename):
    with open(filename,'r') as f:
        linecount=0
        dict={}
	cpu_dict={}
	disk_dict={}
        cpu = ["%user", "%nice", "%system", "%iowait", "%steal", "%idle"]
        disk = ["device","rrqm/s","wrqm/s", "r/s", "w/s", "rkB/s", "wkB/s", "avgrq-sz", "avgqu-sz", "await", "r_await", "w_await", "svctm", "%util"]
        for line in f:

		if linecount==3:
			i=0
	    		for word in line.rstrip().lstrip().split():
				cpu_dict[cpu[i]]=word
				i=i+1
		if linecount==6:
			j=0
			for word in line.rstrip().lstrip().split():
                                disk_dict[disk[j]]=word
				j=j+1

		linecount=linecount+1


	dict['cpu']=cpu_dict
	dict['disk']=disk_dict

        jsonarray=json.dumps(dict)
        print(jsonarray)
        f.close()
    target = open(filename+"out.json", 'w')
    target.truncate()
    target.write(jsonarray)
    target.close()

json_parser(sys.argv[1])
