while [ true ]
do
        sleep 30
	iostat -x 1 2 > iostat_data
	python ../python_scripts/iostat_to_json.py iostat_data
        curl -d @iostat_dataout.json --header "Content-Type:application/json" 152.46.19.52:8080/iostatdata
done
