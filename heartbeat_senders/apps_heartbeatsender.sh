
#Usage apps_data_hearbeatsender.sh

while [ true ]
do
  sleep 10
  curl -H "Content-Type: application/json" http://152.46.20.151:8088/ws/v1/cluster/apps > apps_data.json
	curl -d @apps_data.json --header "Content-Type:application/json" 152.46.19.52:8080/appsdata
done
