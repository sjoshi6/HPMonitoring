import json
import sys

def dfs_to_json(filename):
    dfs_file = open(filename,'r')
    lines = dfs_file.readlines()
    dfs_file.close()

    main_dict ={}

    holder = ["Name","HostName","DecommissionStatus","ConfigCapacity","DFSUsed","NonDFSUsed","DFSRemaining","DFSUsePercent","DFSRemainPercent","ConfigCacheCapacity","CacheUsed","CacheRemain","CacheUsedPercent","CacheRemainPercent","Xceivers"]
    for i in range(len(lines)):

        line = lines[i]

        if line.find("Name") != -1:

            j = i
            temp_reader = 0
            node_dict ={}
            while i <= j+14:
                line = lines[i]
                line_parts= line.split(":")
                node_dict[holder[temp_reader]] = line_parts[1].lstrip().rstrip()
                temp_reader = temp_reader+1
                i=i+1

            configcap = node_dict["ConfigCapacity"].split(" ")
            node_dict["Total_MB"] = configcap[0]

            nondfscap = node_dict["NonDFSUsed"].split(" ")
            node_dict["NonDFS_MB"] = nondfscap[0]

            dfsunusedcap = node_dict["DFSRemaining"].split(" ")
            node_dict["DFSRemaining_MB"] = dfsunusedcap[0]

            dfs_usedcap = node_dict["DFSUsed"].split(" ")
            node_dict["DFSUsed_MB"] = dfs_usedcap[0]

            main_dict[node_dict["Name"]] = node_dict



    jsonarray=json.dumps(main_dict)

    print(jsonarray)

    target = open(filename+"out.json", 'w')
    target.truncate()
    target.write(jsonarray)
    target.close()



dfs_to_json(sys.argv[1])
