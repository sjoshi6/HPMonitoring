import json
import sys

def json_parser(filename):
    with open(filename,'r') as f:
        linecount=0
        dict={'id':sys.argv[2]}
	cpu_dict={'id':sys.argv[2]}
	disk_dict={'id':sys.argv[2]}
        cpu = ["user", "nice", "system", "iowait", "steal", "idle"]
        disk = ["device","rrqm_s","wrqm_s", "r_s", "w_s", "rkB_s", "wkB_s", "avgrq_sz", "avgqu_sz", "await", "r_await", "w_await", "svctm", "util"]
        for line in f:

		if linecount==11:
			i=0
	    		for word in line.rstrip().lstrip().split():
				cpu_dict[cpu[i]]=word
				i=i+1
		if linecount==14:
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
