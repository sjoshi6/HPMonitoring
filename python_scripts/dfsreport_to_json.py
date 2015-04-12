import json
import sys

def dfs_to_json(filename):
    dfs_file = open(filename,'r')
    lines = dfs_file.readlines()
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
                node_dict[holder[temp_reader]] = line_parts[1]
                temp_reader = temp_reader+1
                i=i+1

            main_dict[node_dict["Name"]] = node_dict


    print(main_dict)


dfs_to_json(sys.argv[1])
