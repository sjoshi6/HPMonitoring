import json
import sys

def json_parser(filename):
    with open(filename,'r') as f:
        count=0
        dict={}
        cpu = ["%user", "%nice", "%system", "%iowait", "%steal", "%idle"]
        disk = ["rrqm/s","wrqm/s", "r/s", "w/s", "rkB/s", "wkB/s", "avgrq-sz", "avgqu-sz", "await", "r_await", "w_await", "svctm", "%util"]
        next(f)
        lines = filter(None, (line.rstrip() for line in f))
        for line in lines:
            for word in line.split():
                count += 1
                if(count>7 and count<14):
                    dict[cpu[count-8]]=word
                if(count>28 and count<42):
                    dict[disk[count-29]]=word
        jsonarray=json.dumps(dict)
        print(jsonarray)
        f.close()
    target = open(filename+"out.json", 'w')
    target.truncate()
    target.write(jsonarray)
    target.close()

json_parser(sys.argv[1])
