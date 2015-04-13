while [ true ]
do
    sleep 30
  	hadoop dfsadmin -report > dfsreport
  	python ../python_scripts/dfsreport_to_json.py dfsreport
    curl -d @dfsreportout.json --header "Content-Type:application/json" 152.46.19.52:8080/iostatdata
done
