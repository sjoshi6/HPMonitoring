#Usage cluster_info_hearbeatsender.sh

while [ true ]
do
  sleep 10
  curl -H "Content-Type: application/json" http://152.46.20.151:8088/ws/v1/cluster/info > cluster_info.json
	curl -d @cluster_info.json --header "Content-Type:application/json" 152.46.19.52:8080/clusterinfodata
done
